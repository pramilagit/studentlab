pipeline {
    agent any

    stages {

        stage('Checkout Complete') {
            steps {
                echo 'Repository downloaded successfully.'
            }
        }

        stage('Verify Files') {
            steps {
                sh '''
                pwd
                ls -la
                '''
            }
        }
    }
}