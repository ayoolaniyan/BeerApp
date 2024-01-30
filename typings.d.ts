declare module '*.module.css';
declare namespace NodeJS {
    interface ProcessEnv {
        ENVIRONMENT?: string;
    }
}
