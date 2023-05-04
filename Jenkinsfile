
pipeline  {
agent any

  tools {
    // Install Node.js and npm using the Jenkins Global Tool Configuration
    nodejs 'NodeJS16'
  }

stages {
stage("build") {
   steps {
      echo 'building the application... 5/4/23 637 PM last modified'
        sh 'npm install'
        sh 'npm run build --prod'
   }
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
