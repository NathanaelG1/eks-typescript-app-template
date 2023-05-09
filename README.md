Example app to be deployed on an EKS cluster

# Before deployment

Provision an EKS cluster, following instructions in this repo: https://github.com/NathanaelG1/eks_cluster_template

Recommended just to deploy to edge to be able to test things out. 
This template depends on resources defined in the eks_cluster_template in order to deploy correctly. 

# Configure ECR

Once the cluster is deployed, the repository for our image is existing already in AWS all we need to do 
is tag the image and deploy to ECR

Go into the github/workflow files and change the image path for ECR to your own for each environment

# Add AWS credentials

Add AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY to this repository with adequate permissions for ECR

# Deploy 

Recommended to start with edge, make a change to the edge branch and push to the forked repository
this will trigger the pipeline to push the image to ECR and deploy to the EKS cluster. 


# Adjust tests after deploy

Once deployed and you have your endpoint, adjust the postman_collection.json to include your URL
to enable integration tests.
