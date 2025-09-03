import fs from "fs";
import path from "path";

export const readConfig = () => {
    try {
        const configPath = path.join(__dirname, '..', '..', 'config.json');
        const configData = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(configData);
    } catch (error) {
        console.error('Error reading config file:', error);
    }
};