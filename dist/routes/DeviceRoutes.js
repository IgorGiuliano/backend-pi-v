"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceRouter = void 0;
const express_1 = require("express");
const CreateController_1 = require("../controllers/devices/CreateController");
const DeleteController_1 = require("../controllers/devices/DeleteController");
const GetLastMeasurementController_1 = require("../controllers/devices/GetLastMeasurementController");
const GetLastDayMeasurementController_1 = require("../controllers/devices/GetLastDayMeasurementController");
const GetLastSevenRowsMeasurementController_1 = require("../controllers/devices/GetLastSevenRowsMeasurementController");
const GetLastMonthMeasurementController_1 = require("../controllers/devices/GetLastMonthMeasurementController");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const deviceRouter = (0, express_1.Router)();
exports.deviceRouter = deviceRouter;
deviceRouter.post('/create-device', ensureAuthenticated_1.ensureAuthenticated, new CreateController_1.CreateController().handle);
deviceRouter.post('/delete-device', ensureAuthenticated_1.ensureAuthenticated, new DeleteController_1.DeleteController().handle);
deviceRouter.post('/last-message', ensureAuthenticated_1.ensureAuthenticated, new GetLastMeasurementController_1.GetLastMeasurementController().handle);
deviceRouter.get('/last-day-message', ensureAuthenticated_1.ensureAuthenticated, new GetLastDayMeasurementController_1.GetLastDayMeasurementController().handle);
deviceRouter.get('/last-week-message', new GetLastSevenRowsMeasurementController_1.GetLastSevenRowsMeasurementController().handle);
deviceRouter.get('/last-month-message', ensureAuthenticated_1.ensureAuthenticated, new GetLastMonthMeasurementController_1.GetLastMonthMeasurementController().handle);
