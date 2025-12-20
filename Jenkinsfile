pipeline {
    agent {
  docker {
    image 'node:22.21.1-alpine3.23'
    args '-e DOCKER_HOST=tcp://172.19.0.3:2375'
    }
        }
    tools {
        nodejs 'node-20'
    }

    environment {
        APP_NAME = "react-app"
        IMAGE_NAME = "react-app-image"
        CONTAINER_NAME = "react-app-container"
        PORT = "3000"
        DOCKER_TLS_VERIFY = "0"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-org/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                        docker build -t ${IMAGE_NAME}:latest .
                    """
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    sh """
                        docker rm -f ${CONTAINER_NAME} || true
                    """
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh """
                        docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${PORT}:3000 \
                        ${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        success {
            echo "🚀 React app deployed successfully!"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}
