pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source downloaded'
            }
        }

        stage('Verify') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                scp -r * root@<Docker-Host-IP>:/var/lib/docker/volumes/apachevol/_data/
                '''
            }
        }
    }
}