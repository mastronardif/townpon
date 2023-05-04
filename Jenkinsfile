
pipeline  {
agent any
stages {
stage("build") {
   steps {
      echo 'building the application... BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
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
