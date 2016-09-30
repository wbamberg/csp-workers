function evalInMain(e) {
  eval("console.log('eval in main');");
}

const evalInMainButton = document.querySelector("#eval-in-main");
evalInMainButton.addEventListener("click", evalInMain);

/**************************************/

function evalInWorker(e) {
  const worker = new Worker("js/worker.js");
  worker.postMessage({
    "code": "console.log('eval in worker');"
  });
}

const evalInWorkerButton = document.querySelector("#eval-in-worker");
evalInWorkerButton.addEventListener("click", evalInWorker);
