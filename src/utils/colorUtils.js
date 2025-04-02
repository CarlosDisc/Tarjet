// utils.js

export const getTextColorForBackground = (bg) => {
    // Convertir el color hexadecimal a RGB
    const hex = bg.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // Calcular el brillo del color (luminancia)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Si el color es oscuro (brillo < 128), el texto será blanco; si es claro, el texto será negro
    if (brightness < 128) {
      return "#ffffff"; // Blanco para fondos oscuros
    } else {
      return "#000000"; // Negro para fondos claros
    }
  };
  