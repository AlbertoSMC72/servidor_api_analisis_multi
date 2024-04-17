import { validateAnalisis } from "../domain/validations/analisis.validations";
import { AnalisisRepository } from "../domain/repository/analisis.repository";
import { Analisis } from "../domain/entities/index.entities";

export class CrearAnalisisService {
    constructor(private readonly analisisRepository: AnalisisRepository) { }
    async run(analisis: Analisis): Promise<undefined> {
        const analisisValidado = validateAnalisis(analisis);
        if (analisisValidado.success) {
            await this.analisisRepository.saveAnalisis(analisis);
            return;
        }
        throw new Error(analisisValidado.error.errors[0].message);
    }
}
