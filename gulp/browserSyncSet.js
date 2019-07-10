import browserSync from 'browser-sync' ; 
import DIR , { PATH } from '../Dir' ; 

let browserSyncSet = () => {
  console.log( 'in browserSyncSet' ) ; 
  return new Promise( ( resolve , reject ) => {
    browserSync.init( null , {
      proxy : `http://localhost:${ PATH.DIR.PORT }` , 
      port : PATH.DIR.PORT + 1
    }) ;  

    resolve () ; 
  }) ;  
} ; 

export default browserSyncSet ; 