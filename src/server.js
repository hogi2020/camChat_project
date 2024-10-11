/* 서버를 위한 준비 작업 */
import express from 'express';

const app = express();

const handleListen = () => console.log("Listening on http://localhost:3000");
app.listen(3000, handleListen);

console.log("Hello world");