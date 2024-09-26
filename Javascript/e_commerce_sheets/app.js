let cardContainer = document.querySelector(".cardContainer");
let apiKey = "AIzaSyAIxEqW5gFeiCTKEYO9ITdAXaFdLlQbJG8";
let sheetId = `1OOv3VELEKLIj-5jerSJ7YmLezNOldqEjlDMdW7GZ1FY`;
let api = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A2:C5?key=${apiKey}`;
fetch(api).then((res) => {
  res.json().then((res) => {
    console.log(res);
    let data = res.values;
    console.log(data);
    for (let d = 0; d < data.length; d++) {
      console.log(data[d]);
    }
  });
});
