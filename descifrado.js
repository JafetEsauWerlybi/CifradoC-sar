
function cifrarTexto() {
    const mensajeOriginal = document.getElementById("mensajeOriginal").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    let mensajeCifrado = "";

    for (let i = 0; i < mensajeOriginal.length; i++) {
        const char = mensajeOriginal[i];

        if (char.match(/[a-zA-ZÑñáéíóúÁÉÍÓÚüÜ]/)) {
            let code = mensajeOriginal.charCodeAt(i);

            if (char === "ñ" || char === "Ñ") {
                mensajeCifrado += "1";
                continue;
            }else if (char === "á" || char === "Á") {
              mensajeCifrado += "2";
              continue;
            } else if (char === "é" || char === "É") {
              mensajeCifrado += "3";
              continue;
            } else if (char === "í" || char === "Í") {
              mensajeCifrado += "4";
              continue;
            } else if (char === "ó" || char === "Ó") {
              mensajeCifrado += "5";
              continue;
            } else if (char === "ú" || char === "Ú") {
              mensajeCifrado += "6";
              continue;
            } else if (char === "ü" || char === "Ü") {
              mensajeCifrado += "7";
              continue;
            }
            if (char >= "A" && char <= "Z") {
              code = ((code - 65 + desplazamiento) % 26) + 65;
            } else if (char >= "a" && char <= "z") {
              code = ((code - 97 + desplazamiento) % 26) + 97;
            }
          
            mensajeCifrado += String.fromCharCode(code);
          } else {
            mensajeCifrado += char;
          }
    }

    document.getElementById("mensajeCifrado").textContent = mensajeCifrado;
}
function descifrarTexto() {
    const mensajeCifrado = document.getElementById("mensajeCifrado").textContent;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    let mensajeDescifrado = "";
  
    for (let i = 0; i < mensajeCifrado.length; i++) {
      const char = mensajeCifrado[i];
        
      if (char.match(/[1-7]/)) {
        switch (char) {
          case "1":
            mensajeDescifrado += "ñ";
            break;
          case "2":
            mensajeDescifrado += "á";
            break;
          case "3":
            mensajeDescifrado += "é";
            break;
          case "4":
            mensajeDescifrado += "í";
            break;
          case "5":
            mensajeDescifrado += "ó";
            break;
          case "6":
            mensajeDescifrado += "ú";
            break;
          case "7":
            mensajeDescifrado += "ü";
            break;
        }
      } else if (char.match(/[a-zA-ZÑñáéíóúÁÉÍÓÚüÜ]/)) {
        let code = mensajeCifrado.charCodeAt(i);
          if (char >= "A" && char <= "Z") {
            code = ((code - 65 - desplazamiento + 26) % 26) + 65;
          } else if (char >= "a" && char <= "z") {
            code = ((code - 97 - desplazamiento + 26) % 26) + 97;
          }
          mensajeDescifrado += String.fromCharCode(code);
    
      } else {
        mensajeDescifrado += char;
      }
    }
  
    document.getElementById("mensajeDescifrado").textContent = mensajeDescifrado;
}
