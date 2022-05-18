function attachEventsListeners() {
  const inputDistanceValue = document.getElementById("inputDistance");

  const outputDistance = document.getElementById("outputDistance");

  document.getElementById("convert").addEventListener("click", converter);

  function converter(event) {
    const inputUnits = document.getElementById("inputUnits");
    const outputUnits = document.getElementById("outputUnits");

    let input = Number(inputDistanceValue.value);

    const objMeters = {
      m: input * 1,
      km: input * 1000,
      cm: input * 0.01,
      mm: input * 0.001,
      mi: input * 1609.34,
      yrd: input * 0.9144,
      ft: input * 0.3048,
      in: input * 0.0254,
    };

    const objOutput = {
      m: objMeters[inputUnits.value],
      km: objMeters[inputUnits.value] / 1000,
      cm: objMeters[inputUnits.value] / 0.01,
      mm: objMeters[inputUnits.value] / 0.001,
      mi: objMeters[inputUnits.value] / 1609.34,
      yrd: objMeters[inputUnits.value] / 0.9144,
      ft: objMeters[inputUnits.value] / 0.3048,
      in: objMeters[inputUnits.value] / 0.0254,
    };

    outputDistance.value = objOutput[outputUnits.value];
  }
}
