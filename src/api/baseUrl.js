let baseUrl ="";

switch (process.env.NODE_ENV) {
    //开发环境的后端api接口地址
    case 'dev':
        baseUrl = "http://localhost:8080/mystu"  ;
        break;
    //生产环境的后端api接口地址
    case 'pro':
        baseUrl = "http://localhost:8080/mystu";
        break;

}