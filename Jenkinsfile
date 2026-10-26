pipeline {
    agent any

    environment {
        APP_NAME = 'job-prep-portal'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling latest code from GitHub...'
                checkout scm
            }
        }

        stage('Code Validation & Lint') {
            steps {
                echo 'Verifying core project files...'
                script {
                    if (isUnix()) {
                        sh '''
                            echo "Checking required files..."
                            test -f index.html || exit 1
                            test -f jobs.html || exit 1
                            test -f preparation.html || exit 1
                            test -f companies.html || exit 1
                            test -f dsa-sheet.html || exit 1
                            test -f styles.css || exit 1
                            test -f app.js || exit 1
                            echo "All files verified!"
                        '''
                    } else {
                        bat '''
                            echo Checking required files...
                            if not exist index.html exit /b 1
                            if not exist jobs.html exit /b 1
                            if not exist preparation.html exit /b 1
                            if not exist companies.html exit /b 1
                            if not exist dsa-sheet.html exit /b 1
                            if not exist styles.css exit /b 1
                            if not exist app.js exit /b 1
                            echo All files verified!
                        '''
                    }
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving web assets for build history...'
                archiveArtifacts artifacts: '*.html, *.css, *.js, *.json, *.md', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Job Portal application...'
                // If deploying to an Nginx / Apache server, uncomment:
                // sh 'cp -r *.html *.css *.js /var/www/html/'
            }
        }
    }

    post {
        always {
            echo "Build #${env.BUILD_NUMBER} completed with status: ${currentBuild.currentResult}"
        }
        success {
            echo '✅ Pipeline executed successfully!'
        }
        failure {
            echo '❌ Pipeline failed! Check console output for details.'
        }
    }
}
