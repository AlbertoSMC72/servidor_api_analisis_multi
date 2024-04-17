import z from 'zod';
import { Analisis } from '../entities/index.entities';

const analisisSchema = z.object({
    id_unico: z.string({
        required_error: 'El ID único es requerido',
        invalid_type_error: 'El ID único debe ser de tipo string'
    }),
    arreglo_datos: z.string({
        required_error: 'El arreglo de datos es requerido',
        invalid_type_error: 'El arreglo de datos debe ser de tipo string'
    })
});

export const validateAnalisis = (analisis:Analisis) => {
    return analisisSchema.safeParse(analisis);
};
