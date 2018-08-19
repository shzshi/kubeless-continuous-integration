pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION="us-east-1"
    }

    stages {
        
        stage ('Init') {

            steps {
                    sh "npm install"
            }
        }

        stage ('Unit Test') {

            steps {
                    sh "npm test"
            }
        }

        stage ('Deploy') {
             
             steps {
                sh "serverless deploy -v"
             }
        }

        stage ('Deploy to SIT') {

            steps {
               sh "serverless invoke --function kubelesshello -l"
            }
        }
    }
}