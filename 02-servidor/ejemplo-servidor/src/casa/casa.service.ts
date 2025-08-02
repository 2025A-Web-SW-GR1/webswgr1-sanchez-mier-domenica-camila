import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CrearEditarBaseDTO } from './dto/crear-editar.base.dto';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private casaRepository: Repository<Casa>,
    ) { }

    obtenerTodos(
        options?: FindManyOptions<Casa> | undefined
    ) {
        return this.casaRepository.find(options);
    }

    crearUno(nombre: string, valor: number, imagenUrl: string) {
        const nuevaInstancia = this.casaRepository.create();
        nuevaInstancia.nombre = nombre;
        nuevaInstancia.valor = valor;
        nuevaInstancia.imagenURL = imagenUrl;
        return this.casaRepository.save(nuevaInstancia);
    }

    obtenerUnoPorId(id: number) {
        return this.casaRepository.findOneBy({ id });
    }

    async actualizarUnoPorId(
        valoresAActualizar: CrearEditarBaseDTO,
        id: number
    ) {
        const recordExist = await this.casaRepository.findOneByOrFail({ id });
        let nuevaInstancia = this.casaRepository.create();
        nuevaInstancia = {
            ...recordExist,
            ...valoresAActualizar,
        }
        return this.casaRepository.save(nuevaInstancia);
    }

    async actualizarArchivoPorId(
        valoresAActualizar: {
            fileContentType: string;
            filename: string;
            fileID: string;
        },
        id: number
    ) {
        const recordExist = await this.casaRepository.findOneByOrFail({ id });
        let registroActualizar = this.casaRepository.create();
        registroActualizar = {
            ...registroActualizar,
            ...valoresAActualizar
        }
        registroActualizar.id = recordExist.id;
        return this.casaRepository.save(registroActualizar);
    }

    eliminarUnoPorId(
        id: number
    ) {
        return this.casaRepository.delete(id);
    }

    buscarUnoPorUsername(
        username: string
    ) {
        return this.casaRepository.findOneByOrFail({ username });
    }


}