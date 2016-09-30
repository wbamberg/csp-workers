function evalCode(message) {
  eval(message.data.code);
}

self.addEventListener("message", evalCode);
