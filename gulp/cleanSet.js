/* gulp/clean.js */
import del from 'del' ; // 옮겨온 코드
import DIR , { PATH } from '../Dir' ; // 복사한 코드. 폴더 깊이가 한단계 더 들어왔기때문에 Dir.js 경로를 변경합니다.

let cleanSet = () => { // 옮겨온 코드
  console.log( 'cleanSet in' ) ; 
  return new Promise( resolve => {
    del.sync( PATH.DIR.DEST ) ; 
    resolve() ; 
  }) ; 
}

export default cleanSet ; // 다른 파일에서 import 할 수 있도록 export 하여줍니다.