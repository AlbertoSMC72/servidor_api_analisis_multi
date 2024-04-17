import { Analisis } from "../entities/analisis.objet";

export interface AnalisisRepository {
    saveAnalisis(analisis: Analisis): Promise<void>;
}