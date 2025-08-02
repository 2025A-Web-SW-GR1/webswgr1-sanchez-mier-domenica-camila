import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Res, Session } from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { Like } from 'typeorm';
import { BuscarDto } from './dto/buscar.dto';
import { Casa } from './casa.entity';
import { CrearEditarBaseDTO } from './dto/crear-editar.base.dto';
import { CasaEditarDto } from './dto/casa-editar.dto';

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

    @Put(':id')
    actualizarUnoPorId(
        @Body() parametrosCuerpo: CasaEditarDto,
        @Param('id') id: string
    ) {
        try {
            return this.casaService.actualizarUnoPorId(
                parametrosCuerpo,
                +id,
            );
        } catch (e) {
            throw new NotFoundException('Registro no encontrado, o error del servidor')
        }
    }
    @Delete(':id')
    async eliminarUnoPorId(
        @Param('id') id: string,
    ) {
        const response = await this.casaService.eliminarUnoPorId(+id);
        if (response.affected === 1) {
            return {
                mensaje: 'Eliminado correctamente',
            };
        }
        throw new BadRequestException('No se encontro el registro');
    }

}