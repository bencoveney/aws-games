#!/usr/bin/env nodejs

function log(message) {
    console.log(`${__filename} ${message}`);
}

log(`__dirname: ${__dirname}`);

const path = require('path');
const fs = require('fs');

fs.readdirSync(__dirname).forEach(file => {
    log(file);
});

const wrap = require('minecraft-wrap');

// https://launchermeta.mojang.com/mc/game/version_manifest.json
const version = "1.16.5";
const jarFile = path.resolve(`server.jar`);
const serverDir = path.resolve("./serverDir");

function copyFile(from, to) {
    from = path.resolve(from);
    to = path.resolve(to);
    return new Promise((resolve, reject) => {
        log(`Copying ${from} to ${to}`)
        fs.copyFile(from, to, (err) => {
            if (err) {
                reject(err);
            } else resolve();
        });
    })
}

function download() {
    return new Promise((resolve, reject) => {
        log(`Downloading ${version} to ${jarFile}`)
        wrap.downloadServer(version, jarFile, err => {
            if (err) {
                log(err);
                reject();
                process.exit(1);
            }
            log('Download complete')
            resolve()
        });
    });
}

function run() {
    return new Promise((resolve, reject) => {
        log(`Starting ${jarFile} in ${serverDir}`)

        const vServer = new wrap.WrapServer(jarFile, serverDir, {noOverride: true});

        console.log("noOverride", vServer.OPTIONS.noOverride);
        
        vServer.on('line', line => console.log(`${jarFile} ${line}`));
        
        vServer.startServer({}, function (err) {
            if (err) {
                reject(err)
            } else {
                log('Server started')
            }
        })

        function stopServer() {
            log('Stopping')
            vServer.stopServer(() => {
                log("Stopped")
                resolve()
            });
        }
        
        process.on('SIGTERM', stopServer);
        process.on('SIGINT', stopServer);
    });
}

// copyFile("/server.properties", "server.properties")
//     .then(() => copyFile("/eula.txt", "eula.txt"))
//     .then(download)
download()
    .then(run)
    .catch((err) => {
        console.log(err);
        process.exitCode = 1;
    });
