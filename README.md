# CTRA RD

Web institucional del Colegio de Técnicos de Refrigeración y Aire Acondicionado de la República Dominicana. Sitio estático adaptable a móviles, con menú accesible, preguntas frecuentes y descarga local de solicitudes de información.

## Desarrollo

Ejecutar `npm run dev` y abrir http://127.0.0.1:5173. No requiere instalar dependencias para la vista local. `npm run check` comprueba la sintaxis.

## Publicación en Cloudflare

`npm install` instala Wrangler. `npx wrangler login` autentica en Cloudflare; `npm run deploy` publica el Worker `ctrard`. El subdominio workers.dev depende de la cuenta utilizada; para `ctrard.alphaeverd.workers.dev`, debe ser la cuenta con subdominio `alphaeverd`.

La acción `.github/workflows/deploy.yml` publica automáticamente cada push a `main`. Configurar los secretos de GitHub `CLOUDFLARE_API_TOKEN` (permiso de edición de Workers para la cuenta correspondiente) y `CLOUDFLARE_ACCOUNT_ID`.

## Contenido pendiente de confirmación

Antes de usar la web como canal oficial, incorporar teléfono, correo, dirección, canales de afiliación, requisitos, cuotas y actividades confirmadas. El formulario descarga un archivo de texto en el dispositivo: no transmite ni almacena datos, ni confirma inscripciones. Los beneficios se describen según el comunicado proporcionado, sin prometer acuerdos activos.

La misión, visión y el logo proceden del material facilitado. La fotografía de climatización es ilustrativa y no representa instalaciones ni miembros del colegio. Las tipografías se cargan desde Google Fonts con fuentes de sistema como respaldo.
