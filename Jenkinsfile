
pipeline  {
agent any

  tools {
    // Install Node.js and npm using the Jenkins Global Tool Configuration
    nodejs 'NodeJS16'

    // Install the zip package on the agent
    //zip 'zip'
  }

stages {
stage("build") {
   steps {
      echo 'building the application... 5/14/23 753 PM last modified'
        sh 'npm install'
        sh 'npm run build --prod'
        sh 'pwd'
   }
}

stage('Create Archive') {
      steps {
        echo 'Create Archive... 5/14/23 754 PM last modified'
        //sh 'zip -r myarchive.zip *'
        sh 'tar -czf myarchive.tar.gz *'
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
