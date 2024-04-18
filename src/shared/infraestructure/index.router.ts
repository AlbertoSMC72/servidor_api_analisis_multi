import { Router, Request, Response } from "express";
import { analisisRouter } from "../../analisis/infrestructure/analsis.router";

const prefijo = "/api";
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

indexRouter.use(`${prefijo}/analisis`, analisisRouter);


export default indexRouter;