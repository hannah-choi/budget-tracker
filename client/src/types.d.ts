declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_TRANSACTION_API_URL: string;
        }
    }
}
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
