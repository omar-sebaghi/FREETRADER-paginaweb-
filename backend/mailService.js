const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // servicio de correo
  auth: {
    user: 'omarforexxx@gmail.com', // correo de Gmail
    pass: 'hlkl nvft uhvb duym', // contraseña de aplicación generada
  },
});

async function enviarCorreo(email) {
  console.log(`Preparando para enviar correo a: ${email}`);

  const mailOptions = {
    from: 'omarforexxx@gmail.com',
    to: email,
    subject: '¡Gracias por inscribirte en Free Trader!',
    text: `¡Hola! Gracias por inscribirte en Free Trader. A continuación te dejamos los enlaces importantes para comenzar: \n\n`
      + `1. Regístrate en el broker: [Enlace al Broker] \n`
      + `2. Únete a nuestra cuenta de copytrading: [Enlace al Copytrading] \n\n`
      + `Si tienes alguna pregunta o duda, no dudes en contactarnos. ¡Nos pondremos en contacto contigo en breve!`,
    html: `<p>¡Hola!</p><p>Gracias por inscribirte en <strong>Free Trader</strong>.</p>`
      + `<p>A continuación te dejamos los enlaces importantes para comenzar:</p>`
      + `<ul>`
      + `<li><strong>1.</strong> Regístrate en el broker: <a href="[Enlace al Broker]">[Enlace al Broker]</a></li>`
      + `<li><strong>2.</strong> Únete a nuestra cuenta de copytrading: <a href="[Enlace al Copytrading]">[Enlace al Copytrading]</a></li>`
      + `</ul>`
      + `<p>Si tienes alguna pregunta o duda, no dudes en contactarnos. ¡Nos pondremos en contacto contigo en breve!</p>`,
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
