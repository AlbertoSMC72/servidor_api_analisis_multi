import { Router } from "express";
import { crearAnalisisController } from "./dependencies.analisis";

const analisisRouter = Router();

analisisRouter.post('/', crearAnalisisController.crearAnalisis.bind(crearAnalisisController));

export { analisisRouter };