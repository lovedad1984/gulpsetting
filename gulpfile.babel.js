import gulp from 'gulp' ; 
import 'babel-polyfill'; // ES6,7 코드 작성시에 생기는 에러를 처리하기위해 추가합니다.
 

/*사용자정의 모듈*/
import cleanSet from './gulp/cleanSet' ; 
import cssSet from './gulp/cssSet' ; 
import jsSet from './gulp/jsSet' ; 
import ejsSet from './gulp/ejsSet' ; 
import serverSet from './gulp/serverSet' ; 
import browserSyncSet from './gulp/browserSyncSet' ; 
 

 
gulp.task( 'default' , gulp.series( cleanSet , cssSet , jsSet , ejsSet , serverSet ,  browserSyncSet )) ; 