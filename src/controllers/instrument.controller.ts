import { Request, Response, NextFunction, response } from 'express';
import { InstrumentService } from '../services/instrument.service';
import { validationResult } from 'express-validator';

export class InstrumentController {

    public instrumentService: InstrumentService;

    constructor() {
        this.instrumentService = new InstrumentService();
    }
    
    public async get(req: Request, res: Response, next: NextFunction) {
        this.validate(req, res, next);

        try {
            res.status(200).json(await this.instrumentService.get());
        } catch (e) {
            console.log(`Error: ${e}`);
            res.status(400).json({ errors: [e] });
        }
    }

    public async add(req: Request, res: Response, next: NextFunction) {
        this.validate(req, res, next);

        try {
            res.status(200).json(await this.instrumentService.addInstrument
                (req.body['name'],
                req.body['symbol'],
                req.body['type']));
        } catch (e) {
            console.log(`Error: ${e}`);
            res.status(400).json({error: e});
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction) {
        this.validate(req, res, next);

        try {
            res.status(200).json(await this.instrumentService.delete(req.body['instrumentId']));
        } catch (e) {
            console.log(`Error: ${e}`);
            res.status(400).json({ errors: [e] });
        }
    }

    private validate(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ "errors": errors });
            next();
        }

        return;
    }
}