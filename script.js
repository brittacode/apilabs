fetch("https://grandcircusco.github.io/demo-apis/donuts/1.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.name);
    console.log(data.extras);
    console.log(data.photo);
  });

for (let i = 1; i < data.features.length; i++) {
  //console.log(data.properties.features[i].description.title);

  //console.log(`${data.properties.periods[i].temperature}`);

  console.log(data);
}

fetch("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.properties.periods.length; i++) {
      console.log(`${data.properties.periods[i].name}`);
      console.log(`${data.properties.periods[i].temperature}`);
    }
  });
