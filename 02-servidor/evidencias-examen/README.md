# Examen Primer Bimestre - Servicio REST: Casas
**Estudiante:** Doménica Sánchez 

Este proyecto es un ejemplo de servicio REST utilizando 
**NestJS**. Permite obtener información de casas mediante una solicitud HTTP `GET`, con soporte para consultas específicas por ID o para obtener el listado completo.

## 📁 Ruta del Proyecto
El código fuente se encuentra en:  `02-servidor/ejemplo-servidor `

## ▶️ Cómo Ejecutar el Servidor
1. **Ir al directorio del proyecto:**
```bash
cd 02-servidor/ejemplo-servidor
```

2. **Instalar las dependencias:**
```bash
npm install
```

2. **Instalar las dependencias:**
```bash
npm run start
```

El servidor estará disponible en:  `http://localhost:3000 `

## 🌐 Endpoint disponible
###  `GET /casa `
Es una consulta sin parámetros que permite consultar casas a través de una solicitud HTTP. 

El comportamiento varía según el uso (o no) del parámetro idCasa.

---
#### 🔹Sin Parámetros 
Consulta todas las casas disponibles: `GET http://localhost:3000/casa `

Respuesta esperada:
 ``` bash
 {
  "statusCode": 200,
  "data": [
    { "id": 1, "nombre": "Casa 1" },
    { "id": 2, "nombre": "Casa 2" }
  ]
}
 ```
---
#### 🔹Con Parámetros  `idcasa` 
Consulta una casa específica por su ID: 
- `GET http://localhost:3000/casa?idCasa=1 `
- `GET http://localhost:3000/casa?idCasa=2 `

Respuestas Esperadas:
 ``` bash
{
  "statusCode": 200,
  "data": [{ "id": 1, "nombre": "Casa 1" }]
}
 ```

  ``` bash
{
  "statusCode": 200,
  "data": [{ "id": 2, "nombre": "Casa 2" }]
}
 ```
---
#### 🔹Con ID No Existente
Si se consulta un ID que no existe  `idCasa=3 `: 
- `GET http://localhost:3000/casa?idCasa=3 `

Respuesta esperada:
 ``` bash
{
  "statusCode": 404,
  "message": "No se encuentra"
}
 ```