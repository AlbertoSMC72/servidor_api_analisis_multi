import { Request, Response } from "express";
import { CrearAnalisisService } from "../../application/crearAnalisis.service";

export class CrearAnalisisController {
    constructor(private readonly crearAnalisisService: CrearAnalisisService) { }
    async crearAnalisis(req: Request, res: Response) {
        try {
            await this.crearAnalisisService.run(req.body);
            res.status(201).send();
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
}