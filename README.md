# aws-games

[https://aws.amazon.com/blogs/opensource/deploy-aws-cloudformation-stacks-with-github-actions/](Setting up CloudFormation GitHub actions)

Create Administrator user (Console access)
Switch to Administrator user
Create Games user (CLI access)
Add Games user tokens to github secrets
Add Games user to group with:
- arn:aws:iam::aws:policy/AWSCloudFormationFullAccess
- arn:aws:iam::aws:policy/AmazonS3FullAccess

```bash
docker build -t minecraft .\containers\minecraft\ ; docker run -t -p 127.0.0.1:25565:25565 --name mc-test -d minecraft
```