import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { Like } from 'typeorm';
import { BuscarDto } from './dto/buscar.dto';
import { Casa } from './casa.entity';
import { CrearEditarBaseDTO } from './dto/crear-editar.base.dto';
@Controller('api/casa')
export class CasaController {
    constructor(
        private readonly casaService: CasaService
    ) {

    }

    @Get()
    obtener(
        @Query() parametrosConsulta: BuscarDto,
    ) {
        const objetoBusqueda: FindManyOptions<Casa> = {};
        if (parametrosConsulta.nombre) {
            objetoBusqueda.where = {
                nombre:
                    Like("%" + parametrosConsulta.nombre + "%"),
            }
        }
        return this.casaService.obtenerTodos(objetoBusqueda);
    }
    @Post()
    crearUno(
        @Body() parametrosCuerpo: CrearEditarBaseDTO
    ) {
        parametrosCuerpo.nombre,
            parametrosCuerpo.valor,
            parametrosCuerpo.imageUrl
    }


}