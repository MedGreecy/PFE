pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'mghr/frontendpfe'
        BACKEND_IMAGE = 'mghr/backendpfe'
        DOCKER_REGISTRY = 'docker.io'
    }

    stages {
        stage('Préparation') {
            steps {
                cleanWs()
            }
        }

        // Only checkout master ONCE (contains all folders)
        stage('Checkout du dépôt') {
            steps {
                git branch: 'master',
                    url: 'https://gitlab.com/MedGreecy/pfe.git',
                    credentialsId: 'Med'
            }
        }
      

        stage('Build des images Docker') {
            steps {
                script {
                    bat 'docker-compose -f docker-compose.yaml down --volumes --remove-orphans'
                    bat 'docker-compose up -d --build --force-recreate'
                }
            }
        }
          stage('tag image') {
            steps{
                script{
                    bat 'docker tag mghr/frontendpfe:latest mghr/frontendpfe:version1.0'
                    bat 'docker tag mghr/backendpfe:latest mghr/backendpfe:version1.0'
                }
            }
        }

        stage('Login Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'Med',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    script {
                        bat "docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD% ${env.DOCKER_REGISTRY}"
                    }
                }
            }
        }

        stage('Push des images') {
            steps {
                script {
                    bat "docker push ${env.FRONTEND_IMAGE}"
                    bat "docker push ${env.BACKEND_IMAGE}"
                }
            }
        }

        stage('Déploiement avec Docker Compose') {
            steps {
                script {
                    bat 'docker-compose down --volumes --remove-orphans || echo "Aucun container à arrêter"'
                    bat 'docker-compose up -d --build --force-recreate'
                }
            }
        }
    }

    post {
       
        success {
            echo 'Déploiement réussi!'
        }
        failure {
            echo 'Échec du déploiement'
        }
    }
}