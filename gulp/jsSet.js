import gulp from 'gulp' ; 
import fs from 'fs' ; 
import webpack from 'gulp-webpack' ; 
import DIR , { PATH } from '../Dir' ; 

function webpackFunc ( evt ) {
  // console.log( '---- evt : ' , evt ) ; 
  let path = evt.path ; 
  let jsName = path.substr( path.lastIndexOf( '\\' ) + 1 , path.length ) ; 

  webpack({
    entry : {
      entryName : `${ PATH.appRoot }/html/js/${ jsName }` // Dir.js 에서 추가한 appRoot경로를 적용하여줍니다.
    } , 
    output : {
      filename : jsName
    } , 
    module : {
      loaders : [
        {
          test : /\.js$/ , 
          loader : 'babel-loader' , 
          exclude : '/node_modules/' , 
          query : {
            cacheDirectory : true , 
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
          }
        }
      ]   
    } 
  }).pipe( gulp.dest( PATH.DEST.JS ) ) ; 
}

let jsSet = () => {
  console.log( 'jsSet in' ) ; 
  return new Promise( resolve => {
    fs.readdir( `${ PATH.DIR.SRC }/js/` , ( err , files ) => {
      files.forEach( file => {
        let evt = { path : `${ PATH.appRoot }\\${ PATH.DIR.SRC }\\js\\${ file }` } ; // appRoot 가 적용되었습니다.

        webpackFunc( evt ) ; 
      }) ; 
    }) ; 
    resolve() ; 
  }) ; 
}

export default jsSet ; 