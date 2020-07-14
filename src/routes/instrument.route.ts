import { Router } from 'express';
import { check } from 'express-validator';
import { InstrumentController } from '../controllers/instrument.controller';

export class InstrumentRouter {
    public router: Router;
    public instrumentController: InstrumentController;

    constructor() {
        this.instrumentController = new InstrumentController();
        this.router = Router();
        this.router.get('/get', this.instrumentController.get.bind(this.instrumentController));
        this.router.post('/add', 
                        [check('name', 'No instrument name was provided').exists(),
                        check('symbol', 'No symbol was provided').exists(),
                        check('type', 'No instrument type was provided').exists()],
                        this.instrumentController.add.bind(this.instrumentController));
        this.router.post('/delete',
                        [check('instrumentId', 'No instrument id was provided').exists()],
                        this.instrumentController.delete.bind(this.instrumentController));
    }
}