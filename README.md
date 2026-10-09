# CTRA RD

Web institucional del Colegio de Técnicos de Refrigeración y Aire Acondicionado de la República Dominicana. Sitio estático adaptable a móviles, con menú accesible, servicios oficiales, inscripción, preguntas frecuentes, contacto y descarga de documentos oficiales.

## Desarrollo

Ejecutar `npm run dev` y abrir http://127.0.0.1:5173. No requiere instalar dependencias para la vista local. `npm run check` comprueba la sintaxis.

## Publicación en Cloudflare

`npm install` instala Wrangler. `npx wrangler login` autentica en Cloudflare; `npm run deploy` publica el Worker `ctrard`. El subdominio workers.dev depende de la cuenta utilizada; para `ctrard.alphaeverd.workers.dev`, debe ser la cuenta con subdominio `alphaeverd`.

La acción `.github/workflows/deploy.yml` publica cada push a `main` una vez configurado el secreto de GitHub `CLOUDFLARE_API_TOKEN` (permiso de edición de Workers para la cuenta correspondiente). La cuenta ya está configurada. Agregar el secreto en https://github.com/MesiasArt/CTRARD/settings/secrets/actions y volver a ejecutar la acción fallida.

Sitio publicado: https://ctrard.alphaeverd.workers.dev.

## Información institucional

Contenido actualizado a partir de los documentos facilitados:

- `dist/documentos/brochure-ctra-rd.pdf`: identidad, misión, visión, valores, servicios, presidencia y fotografías institucionales.
- `dist/documentos/requisitos-inscripcion-ctra-rd.pdf`: requisitos del 5 de septiembre de 2026, cuotas, contactos y canal de entrega por WhatsApp.
- `dist/documentos/solicitud-inscripcion-ctra-rd.pdf`: formulario oficial rellenable, código 001, versión 1, desde el 30 de abril de 2025. Se publica el original sin modificar sus campos.

La inscripción indicada es de RD$2,800 (membresía anual RD$2,400 + inscripción y carnet RD$400). El documento no contiene una cuenta bancaria utilizable: la web remite a la secretaría para confirmarla antes de realizar el depósito.

Se prioriza el contacto del documento de requisitos ante diferencias con el brochure: Instagram `@ctrardominicana`, correo `ctradominicana@gmail.com` y WhatsApp de inscripción `809-913-7921`. No se publica una URL de Facebook sin confirmar; se muestra el nombre `CTRA RD`.

El sitio no recibe ni almacena los datos de inscripción. El visitante descarga y completa el PDF, reúne los documentos y los entrega directamente a la secretaría por el canal indicado. Los enlaces de WhatsApp abren la conversación sin enviar automáticamente mensajes ni adjuntos.

Las fotografías se extraen sin modificaciones del brochure facilitado. La imagen de refrigeración de portada es la incluida en ese documento; no se afirma que represente instalaciones propias. Las tipografías se cargan desde Google Fonts con fuentes de sistema como respaldo.

## Contenido pendiente

Confirmar los datos bancarios con el colegio y añadir las próximas actividades cuando se conozcan sus fechas y condiciones. No se inventan cuentas de pago ni convocatorias.
