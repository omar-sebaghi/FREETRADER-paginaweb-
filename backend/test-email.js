const nodemailer = require('nodemailer');

// Configuración del transporte de Nodemailer (Usando tu cuenta de Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'omarforexxx@gmail.com', // Tu correo de Gmail
    pass: 'hlkl nvft uhvb duym', // Contraseña de aplicación (asegúrate de haberla generado en la configuración de Google)
  },
});

// Configuración del correo a enviar
const mailOptions = {
  from: 'omarforexxx@gmail.com',  // Tu correo
  to: 'omarseba@outlook.es',  // Cambia esto a un correo donde quieras recibir la prueba
  subject: 'Prueba de Nodemailer',  // Asunto del correo
  text: 'Este es un correo de prueba desde Nodemailer',  // Contenido del correo en texto plano
};

// Enviar el correo
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error al enviar correo:', error);  // Si hay un error, lo muestra
  } else {
    console.log('Correo enviado: ' + info.response);  // Si todo va bien, muestra la respuesta del servidor
  }
});
