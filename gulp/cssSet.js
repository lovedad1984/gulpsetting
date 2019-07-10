import gulp from 'gulp' ; 
import Cache from 'gulp-file-cache' ; 
import sass from 'gulp-sass' ; 
import cleanCSS from 'gulp-clean-css' ; 
import DIR , { PATH } from '../Dir' ; 

const cache = new Cache() ; 

gulp.task( 'css:sass' , () => {
  console.log( 'sass in' ) ; 
  return new Promise( resolve => {
    gulp.src( `${ PATH.DIR.SRC }/scss/*.scss` )
      .pipe( cache.filter() )
      .pipe( sass() )
      .pipe( cache.cache() )
      .pipe( gulp.dest( `${ PATH.DIR.SRC }/css` ) ) ; 

    resolve() ; 
  }) ; 
}) ; 

gulp.task( 'css:css' , () => {
  console.log( 'css in' ) ; 
  return new Promise( resolve => {
    gulp.src( `${ PATH.SRC.CSS }` )
      .pipe( cache.filter() )
      .pipe( cleanCSS({ compatibility : 'ie8' }))
      .pipe( cache.cache() )
      .pipe( gulp.dest( `${ PATH.DEST.CSS }` ) ) ; 
      
    resolve() ; 
  }) ; 
}) ; 

const cssSet = gulp.series( 'css:sass' , 'css:css' ) ; 

export default cssSet ; 