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
                scp -r * root@172.16.36.131:/var/lib/docker/volumes/apachevol/_data/
                '''
            }
        }
    }
}