import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { readConfig } from './readConfigData';

const app = express();
const config = readConfig();
const port: number = config.serverPort | 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.use(express.static(path.join(__dirname, '..', '..', 'src', 'frontend')));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'src', 'frontend', 'html', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
