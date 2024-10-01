let cardContainer = document.querySelector(".cardContainer");
let apiKey = "AIzaSyAIxEqW5gFeiCTKEYO9ITdAXaFdLlQbJG8";
let sheetId = `1OOv3VELEKLIj-5jerSJ7YmLezNOldqEjlDMdW7GZ1FY`;
let api = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A2:C5?key=${apiKey}`;
fetch(api).then((res) => {
  res.json().then((res) => {
    // console.log(res);
    let data = res.values;
    console.log(data, "data");
    // for (let d = 0; d < data.length; d++) {
    // }
    // data.forEach((element) => {
    //   element.forEach((d) => {
    //     cardContainer.innerHTML += `
    //     <div class="border border-black rounded-md">
    //         <img src="${d}"/>
    //         <h1>${d}</h1>
    //         <p>${d}</p

    //     </div>
    //     `;
    //   });
    // });
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      //   for (let j = 0; j < array.length; j++) {}
      let one = data[i];
      cardContainer.innerHTML += `
     <div class="border border-black rounded-md ">
         <img src="${one[2]}"/>
         <h1>${one[0]}</h1>
         <p>${one[1]}</p

     </div>
     `;
    }
  });
});
