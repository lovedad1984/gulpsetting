let DIR = {
    SRC : 'html', // 작업을 진행할 폴더
    DEST : 'html_build', // 작업된 파일들이 컴파일 되는 경로 
    SERVER : 'server' , // 서버에서 사용되는 파일들을 정리해두는 폴더 
    APP : 'app' , // 서버 파일을 배포용으로 만들어 담아두는 폴더
    PORT : 8005, // 서버가 실행될 포트 번호 
};


// 이 파일에서 외부로 내보낼 정보를 Object 로 만들어준다
module.exports = {
    PATH : {
        appRoot : __dirname , // appRoot 라는 키값으로 현재 경로를 추가해둡니다. 
        DIR : DIR,
        SRC : {
            JS : `${DIR.SRC}/js/*.js`,
            CSS : `${DIR.SRC}/css/*.css`,
            SCSS : `${DIR.SRC}/scss/*.scss`,
            EJS : `${DIR.SRC}/**/*.ejs`,
            SERVER : `${ DIR.SERVER }/**/*.js` ,  
        },
        DEST : {
            JS : `${DIR.DEST}/js`,
            CSS : `${DIR.DEST}/css`,
            EJS : `${DIR.DEST}/`,
            SERVER : `${ DIR.APP }` , 
        }
    }
};