// https://www.w3schools.com/howto/howto_js_typewriter.asp
export function typeWriter(elementId: string, txt: string, speed: number) {
    let i = 0;
    if (i < txt.length) {
      (document.getElementById(elementId) as HTMLElement).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }