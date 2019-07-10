// app.js 
import express from 'express' ; // express 모듈을불러옵니다. 
const app = express() ; // app.js 에서 사용할 변수 app을 생성합니다.

// view로 활용될 폴더 경로를 설정합니다.
app.set( 'views' , `${ __dirname }/../${ PATH.DIR.DEST }/` ) ; 
// view 엔진을 ejs 로 설정합니다.
app.set( 'view engine' , 'ejs' ) ; 
// ejs 팀플릿 엔진을 html 파일에 매핑합니다. 
app.engine( 'html' , require( 'ejs').renderFile ) ; 
// 웹사이트의 location 의 루트경로를 설정합니다. 

app.use( '/' , express.static( `${ __dirname }/../${ PATH.DIR.DEST }/` )) ; 

// get을 활용하여 window.location 경로를 설정합니다.
// 최상위 경로 '/' 를 설정합니다. 
app.get( '/' , ( req , res ) => {
    // get 으로 전달받은 res 를 활용하여 rendering 할 파일명을 작성하여 줍니다. 
    // 위에서 use 를 사용하여 html_build 폴더를 최상위로 잡아놨기에 
    // html_build 폴더 바로 아래에 있는 index.ejs 파일에 접근이 가능해집니다. 
    // 또한 ejs 를 사용하기로 engine을 사용하여 세팅해두었기에 확장자 ejs 는 삭제합니다.
  
    // 두번째 인자 {} 는 사용자가원하는 정보를 페이지내에 전달 할 수 있습니다.
    // 하지만 현재는 보낼게 없기에 빈값으로 넘겨두었습니다.
    res.render( 'index' , {}) ; 
  }) ; 

app.listen( PATH.DIR.PORT , () => {
    console.log( 'Express listening on port : ' +  server.address().port ) ;
  }) ;

// Dir.js 에서 설정한 port 번호로 서버를 띄울 준비를 합니다.
const server = app.listen( PATH.DIR.PORT , () => {
  console.log( 'Express listening on port : ' +  server.address().port ) ;
}) ;