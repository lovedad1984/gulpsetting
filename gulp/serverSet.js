import gulp from 'gulp' ; 
import babel from 'gulp-babel' ; 
import nodemon from 'gulp-nodemon' ; 
import DIR , { PATH } from '../Dir' ; 

gulp.task( 'start:babel' , () => {
  console.log( 'in babel')
  return new Promise( ( resolve , reject ) => {
  gulp.src( PATH.SRC.SERVER )
    // 바벨을 컴파일 방법이 또다른 방법론이 있다는 것을 설명하기위해 
    // webpack 이 아닌 gulp-babel 을 이용하여 
    // babel 플러그인들과 프리셋을 적용하였습니다. 
    .pipe( babel({
      "presets" : ['es2015', 'es2017', 'stage-3', 'react'],
      "plugins" : [
        'transform-decorators-legacy', 
        'transform-class-properties' ,
        'transform-async-to-generator' , 
        'transform-object-assign' , 
        'transform-regenerator' , 
        ["transform-runtime", {
          "helpers": false, // defaults to true 
          "polyfill": false, // defaults to true 
          "regenerator": true, // defaults to true 
          "moduleName": "babel-runtime" // defaults to "babel-runtime" 
        }]
      ],
    }))
    // 컴파일이 끝난 파일을 지정한 폴더로 이동되도록 dest 함수를 사용합니다. 
    .pipe( gulp.dest( PATH.DEST.SERVER ) ) ; 
    console.log(  PATH ) ; 
console.log(  PATH.SRC.SERVER  ) ;   
console.log(  PATH.DEST.SERVER  ) ;   
    resolve () ; 
  }) ;
}) ; 

gulp.task( 'start:nodemon' , () => {
  return new Promise( ( resolve , reject ) => {
    console.log( 'in nodemon')
    nodemon({
      script : `${ PATH.DEST.APP }/app.js` , 
      watch : PATH.DEST.SERVER 
    }) ; 

    resolve () ; 
  }) ;
}) ; 

let serverSet = gulp.series( 'start:babel' , 'start:nodemon' ) ; 

export default serverSet ; 
