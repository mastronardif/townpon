
pipeline  {
agent any

  tools {
    // Install Node.js and npm using the Jenkins Global Tool Configuration
    nodejs 'NodeJS16'

    // Install the zip package on the agent
    zip 'zip'
  }

stages {
stage("build") {
   steps {
      echo 'building the application... 5/5/23 737 PM last modified'
        sh 'npm install'
        sh 'npm run build --prod'
   }
}

stage('Create Archive') {
      steps {
        echo 'Create Archive... 5/6/23 543 PM last modified'
        sh 'zip -r myarchive.zip *'
      }
   //zip -r myarchive.zip target/*.jar
}


stage("test") {
   steps {
      echo 'testing the application...'
   }
}

stage("deploy") {
   steps {
      echo 'deploying the application...'
   }
}

}
}
