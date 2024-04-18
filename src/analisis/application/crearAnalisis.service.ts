import { AnalisisRepository } from "../domain/repository/analisis.repository";
import { Analisis } from "../domain/entities/index.entities";

export class CrearAnalisisService {
    constructor(private readonly analisisRepository: AnalisisRepository) { }
    async run(analisis: Analisis): Promise<undefined> {
        const { mensaje } : any = analisis;
        const { codigo, datos } = JSON.parse(mensaje);
        const fixedAnalisis:any = {
            id_unico:codigo,
            arreglo_datos: JSON.stringify(datos)
        };
        console.log("creando analisis: ", fixedAnalisis);
        await this.analisisRepository.saveAnalisis(fixedAnalisis);
        return;
    }
}
