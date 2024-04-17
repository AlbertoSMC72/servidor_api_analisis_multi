import { db } from "../../../shared/application/mysqlConnection";
import { AnalisisRepository } from "../../domain/repository/analisis.repository";
import { Analisis } from "../../domain/entities/analisis.objet";

export class AnalisisMysqlRepository implements AnalisisRepository {
    async saveAnalisis(analisis: Analisis): Promise<void> {
        await db.query('INSERT INTO analisis SET ?', analisis);
        return;
    }
}