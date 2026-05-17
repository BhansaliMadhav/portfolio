pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-app"
        CONTAINER_NAME = "portfolio-container"
        APP_PORT = "3000"
    }

    stages {
        stage('Check Docker') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p $APP_PORT:$APP_PORT \
                $IMAGE_NAME:latest
                '''
            }
        }

        stage('Check Running Container') {
            steps {
                sh 'docker ps'
            }
        }
    }
}