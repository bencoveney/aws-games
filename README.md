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
docker build -t minecraft .\minecraft\ ; docker run -t -p 127.0.0.1:25565:25565 --name mc-test -d minecraft
```

https://github.com/1Strategy/fargate-cloudformation-example/blob/master/fargate.yaml
https://github.com/vatertime/minecraft-spot-pricing

https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_ECS.html
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html
https://raw.githubusercontent.com/awslabs/amazon-ecs-amazon-efs/master/amazon-efs-ecs.json

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html
https://github.com/aws-samples/aws-cloudformation-starter-workflow-for-github-actions/blob/master/.github/workflows/deploy.yml
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html
https://docs.aws.amazon.com/codebuild/latest/userguide/cloudformation-vpc-template.html
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html