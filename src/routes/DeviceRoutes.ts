import { Router } from 'express';
import { CreateController } from '../controllers/devices/CreateController';
import { DeleteController } from '../controllers/devices/DeleteController';
import { GetLastMeasurementController } from '../controllers/devices/GetLastMeasurementController';
import { GetLastDayMeasurementController } from '../controllers/devices/GetLastDayMeasurementController';
import { GetLastWeekMeasurementController } from '../controllers/devices/GetLastWeekMeasurementController';
import { GetLastMonthMeasurementController } from '../controllers/devices/GetLastMonthMeasurementController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const deviceRouter = Router();

deviceRouter.post('/create-device', ensureAuthenticated, new CreateController().handle);
deviceRouter.post('/delete-device', ensureAuthenticated, new DeleteController().handle);
deviceRouter.get('/last-message', ensureAuthenticated, new GetLastMeasurementController().handle);
deviceRouter.get('/last-day-message', ensureAuthenticated, new GetLastDayMeasurementController().handle);
deviceRouter.get('/last-week-message', ensureAuthenticated, new GetLastWeekMeasurementController().handle);
deviceRouter.get('/last-month-message', ensureAuthenticated, new GetLastMonthMeasurementController().handle);

export { deviceRouter };
