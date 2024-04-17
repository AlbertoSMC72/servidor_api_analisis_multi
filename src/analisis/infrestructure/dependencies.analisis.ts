import { CrearAnalisisService } from "../application/crearAnalisis.service";
import { AnalisisMysqlRepository } from "./DB/mysql.repository";
import { CrearAnalisisController } from "./controller/crearAnalisi.controller";

const analisisMysqlRepository  = new AnalisisMysqlRepository();

const crearAnalisisService = new CrearAnalisisService(analisisMysqlRepository);

export const crearAnalisisController = new CrearAnalisisController(crearAnalisisService);