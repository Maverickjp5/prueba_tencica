#  Prueba Técnica - Frontend y Backend

Este repositorio contiene el desarrollo de una prueba técnica dividida en dos partes principales:

- **Frontend**: Desarrollado con React.js (carpeta `frontend/`)
- **Backend**: Planificado con Laravel (carpeta `backend/`)

---

##  Justificación Técnica (Backend)

Durante la instalación de dependencias del backend mediante Composer, surgió un errorores.
Se intentaron las siguientes soluciones:
- Definir `openssl.cafile` en el `php.ini`
- Descargar `cacert.pem` de cURL y referenciarlo
- Ejecutar `composer self-update` y `composer diagnose`
- Reinstalar Composer
- Ejecutar comandos con `--disable-tls` (no funcional en producción)

## Estructura esperada
- Laravel 8+
- MySQL
- API RESTful para el frontend en React
## Contenido del Backend

Aunque no fue posible ejecutar Laravel completamente, se dejó preparado:

- `
- `app/Http/Controllers/UserController.php`: controlador CRUD de ejemplo
- `.env.example`: configuración de conexión a base de datos MySQL
- Estructura típica de proyecto Laravel lista para instalar dependencias

---

## Pruebas y Limitaciones

Debido al error SSL mencionado, no fue posible ejecutar comandos como `composer install` o `php artisan`.  
Sin embargo, se realizo lo que se podia desarrollar sin el laravel instalado, ya que no pudo realizar una prueba correspondiente del backend

---

## Frontend

El proyecto React fue completado y está funcional. Incluye:

- Componentes estructurados y responsivos
- Conexión planeada con backend mediante llamadas HTTP
- Proyecto ubicado en `/frontend`, listo para ejecución con:

```bash
npm install
npm start
```

---
