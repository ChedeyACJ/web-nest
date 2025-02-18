pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'del pnpm-lock.yaml'
                bat 'pnpm install'
            }
        }
        stage('Build') {
            steps {
                bat 'pnpm run build'
            }
        }
        
        stage('Copying'){
          steps {
            bat "xcopy dist C:\\web\\front /y /e"
            }
        }
    }
}