import { DbService } from './db.service';
import config from 'config';
import random from 'random-int';

export class InstrumentService {

    dbService: DbService;

    constructor() {
        this.dbService = new DbService();
    }

    public async get() {
        return await this.dbService.getAll();
    }

    public async addInstrument(name: string, symbol: string, type: string) {
        const id = random(config.get("idMaxDigits"));
        return await this.dbService.addInstrument(id, name, symbol, type);
    }

    public async delete(instrumentId: number) {
        return await this.dbService.delete(instrumentId);
    }
}
