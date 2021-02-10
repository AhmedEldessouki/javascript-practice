if ("serverWorker" in navigator) {
  navigator.serverWorker
    .register("sw.js")
    .then((registeration) => {
      console.log("SW");
      console.log(registeration);
    })
    .catch((e) => console.log(e));
}
