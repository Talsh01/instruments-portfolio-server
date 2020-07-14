import mysql from 'mysql';
import config from 'config';
import { Instrument } from '../models/instrument.model';

export class DbService {

    connectionPool: mysql.Pool;

    constructor() {
        try {
            this.connectionPool = mysql.createPool({
                connectionLimit: config.get("dbConfig.connectionLimit"),
                host: config.get("dbConfig.host"),
                port: config.get("dbConfig.port"),
                user: config.get("dbConfig.user"),
                password: config.get("dbConfig.password"),
                database: config.get("dbConfig.database")
            });
        } catch (e) { 
            throw new Error(e.message);
        }
    }

    public async getAll() {
        return new Promise(function (this: any, resolve: any, reject: any){
            const query = 'SELECT * FROM instrument';
            this.connectionPool.query(query, function (error: any, results: Array<any>) {
                if (error) {
                    reject(error);
                } else {
                    results = results.map(x=> new Instrument(x));
                    resolve(results);
                }
            })
        }.bind(this));
    }

    public async addInstrument(instrumentId: number, name: string, symbol: string, type: string) {
        return new Promise(function (this: any, resolve: any, reject: any){
            const query = `INSERT INTO instrument(instrumentId,name,symbol,instrumentType) VALUES('${instrumentId}', '${name}', '${symbol}', '${type}')`;
            this.connectionPool.query(query, function (error: any, results: any) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }.bind(this));
    }

    public async delete(instrumentId: number) {
        return new Promise(function (this: any, resolve: any, reject: any){
            const query = `DELETE FROM instrument WHERE (instrumentId = '${instrumentId}')`;
            this.connectionPool.query(query, function (error: any, results: any) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        }.bind(this));
    }
}