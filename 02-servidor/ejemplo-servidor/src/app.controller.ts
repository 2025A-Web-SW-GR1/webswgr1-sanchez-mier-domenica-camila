import { Controller, Get, Param, Query, Headers, Post, Body, HttpCode, NotFoundException, HttpException, Res } from '@nestjs/common';
import { AppService } from './app.service';
/*
type Casa = { 
  id:number;
  nombre:string;
};
*/
interface Casa {
  id: number;
  nombre: string;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200)
  ejemplo(
    @Param('id') id, // Parametro de Ruta llamado 'id'
    @Query('hola') hola, // Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Cabecera con nombre 'escuela'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto
  }

  /**
   * Examen Final - Ejemplo de Servicio REST: Obtener casas
   * 
   * Método: GET /casa
   * 
   * - Si no se envía ningún parámetro, devuelve todas las casas:
   *   Código 200
   *   Respuesta: [{ id: 1, nombre: "Casa 1" }, { id: 2, nombre: "Casa 2" }]
   * 
   * - Si se envía el parámetro ?idCasa=:
   *   - Si el ID existe (1 o 2), devuelve solo esa casa:
   *     Código 200
   *     Respuesta: [{ id: X, nombre: "Casa X" }]
   *   - Si el ID no existe (por ejemplo, 3), devuelve:
   *     Código 404
   *     Respuesta: "No se encuentra"
   *   - Si el parámetro es inválido, devuelve:
   *     Código 400
   *     Respuesta: "Parámetro idCasa inválido"
   * 
   * Ejemplos:
   * - /casa?idCasa=1 → Casa 1
   * - /casa?idCasa=2 → Casa 2
   * - /casa?idCasa=3 → 404 No se encuentra
   */
  /*
    @Get('/casa')
    @HttpCode(200)
    ejemploCasa(@Query('idCasa') idCasa) {
  
      if (!idCasa) {
        return {
          statusCode: 200,
          data: [
            { id: 1, nombre: 'Casa 1' },
            { id: 2, nombre: 'Casa 2' }
          ]
        };
      }
  
      if (idCasa === '1') {
        return {
          statusCode: 200,
          data: [{ id: 1, nombre: 'Casa 1' }]
        };
      } else if (idCasa === '2') {
        return {
          statusCode: 200,
          data: [{ id: 1, nombre: 'Casa 2' }]
        };
      } else if (idCasa === '3') {
        throw new NotFoundException(
          {
            statusCode: 404,
            message: 'No se encuentra'
          },
        );
      } else {
        throw new HttpException(
          {
            statusCode: 400,
            message: 'Parámetro idCasa inválido'
          },
          400
        );
      }
    }
  */

  // CORRECCIÓN DEL EJEMPLO DE SERVICIO REST

  public datos: Casa[] = [{ id: 1, nombre: "Casa 1" }, { id: 2, nombre: "Casa 2" }, { id: 3, nombre: "Casa 3" }];

  @Get('casa')
  obtenerCasas(
    @Query('idCasa') idCasa: string,
  ): Casa[] {
    const idCasaNumber = Number(idCasa);
    if (!idCasa) return this.datos;
    const resultado = this.datos.filter(a => a.id === idCasaNumber);
    if (resultado.length > 0) {
      return resultado;
    } else {
      throw new NotFoundException('No se encuentra')
    }
  }


}
