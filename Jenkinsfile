pipeline {
    agent any

    environment {
        APP_NAME = 'job-prep-portal-nodejs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling latest code from GitHub...'
                checkout scm
            }
        }

        stage('Verify Node Environment & Files') {
            steps {
                echo 'Verifying Node.js and project integrity...'
                script {
                    if (isUnix()) {
                        sh '''
                            echo "Checking node version..."
                            node -v || true
                            test -f server.js || exit 1
                            test -f package.json || exit 1
                            test -f views/index.ejs || exit 1
                            test -f views/jobs.ejs || exit 1
                            test -f public/css/styles.css || exit 1
                            test -f public/js/app.js || exit 1
                            echo "All core Node.js files verified!"
                        '''
                    } else {
                        bat '''
                            echo Checking node version...
                            node -v
                            if not exist server.js exit /b 1
                            if not exist package.json exit /b 1
                            if not exist views\\index.ejs exit /b 1
                            if not exist views\\jobs.ejs exit /b 1
                            if not exist public\\css\\styles.css exit /b 1
                            if not exist public\\js\\app.js exit /b 1
                            echo All core Node.js files verified!
                        '''
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                script {
                    if (isUnix()) {
                        sh 'npm install --production'
                    } else {
                        bat 'npm install --production'
                    }
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving application files for build history...'
                archiveArtifacts artifacts: 'server.js, package.json, views/**, public/**, data/**', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Application ready for deployment (Docker, PM2, or Cloud)...'
                // Example for PM2 process manager:
                // sh 'pm2 restart server.js || pm2 start server.js --name "job-portal"'
            }
        }
    }

    post {
        always {
            echo "Build #${env.BUILD_NUMBER} completed with status: ${currentBuild.currentResult}"
        }
        success {
            echo '✅ Node.js Job Portal Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed! Please check console output.'
        }
    }
}
