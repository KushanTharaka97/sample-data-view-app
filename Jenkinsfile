pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KushanTharaka97/sample-data-view-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                // sh 'docker-compose build'
                  sh '/usr/local/bin/docker-compose build'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag client sasithdinu/kushan_client:latest'
                    sh 'docker tag server sasithdinu/kushan_server:latest'
                    sh 'docker push client sasithdinu/kushan_client:latest'
                    sh 'docker push server sasithdinu/kushan_server:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
