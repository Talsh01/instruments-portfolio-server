export class Instrument {
    id: number;
    name: String;
    symbol: String;
    type: string;

    constructor(dbRecord: any) {
        this.id = dbRecord.instrumentId;
        this.name = dbRecord.name;
        this.symbol = dbRecord.symbol;
        this.type = dbRecord.instrumentType;
    }
}