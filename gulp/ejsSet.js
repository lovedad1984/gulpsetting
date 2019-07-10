import gulp from 'gulp' ; 
import DIR , { PATH } from '../Dir' ; 

let ejsSet = () => {
  console.log( 'ejsSet in' ) ; 
  return new Promise( resolve => {
    gulp.src( PATH.SRC.EJS )
      .pipe( gulp.dest( PATH.DEST.EJS ) ) ; 

    resolve() ; 
  }) ; 
}

export default ejsSet ; 