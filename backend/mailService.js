const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // servicio de correo
  auth: {
    user: 'omarforexxx@gmail.com', // correo de Gmail
    pass: 'hlkl nvft uhvb duym', // contraseña de aplicación generada
  },
});

async function enviarCorreo(email, cursoId) {
  console.log(`Preparando para enviar correo a: ${email} para el curso ID: ${cursoId}`);
  console.log('cursoId recibido en mailService:', cursoId);
  console.log('Tipo de cursoId:', typeof cursoId);

  let cursoNombre = '';
  let videoUrl = '';

  // Aquí defines el nombre del curso y el enlace al video
  cursoId = parseInt(cursoId);
  if (cursoId === 1) {
    cursoNombre = 'REACT';
    videoUrl = 'http://localhost:3001/videos/programacion.mp4'; // Enlace al video 1
  } else if (cursoId === 2) {
    cursoNombre = 'JAVASCRIPT';
    videoUrl = 'http://localhost:3001/videos/diseno-web.mp4'; // Enlace al video 2
  }

  const mailOptions = {
    from: 'omarforexxx@gmail.com',
    to: email,
    subject: `¡Gracias por inscribirte al curso de ${cursoNombre}!`,
    text: `¡Hola! Gracias por comprar el curso de ${cursoNombre}. Puedes acceder al video aquí: ${videoUrl}`,
    html: `<p>¡Hola!</p><p>Gracias por inscribirte al curso de <strong>${cursoNombre}</strong>.</p><p>Puedes acceder al video aquí: <a href="${videoUrl}">${videoUrl}</a></p>`,
  };

  try {
    console.log('Enviando correo...');
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado a:', email); // Log cuando el correo se envíe correctamente
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
}

module.exports = { enviarCorreo };
