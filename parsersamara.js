let data = {
  LastName: "***",
  FirstName: "***",
  MiddleName: "***",
  ApplBirthdate: "**.**.****",
  applicantType: "object:5",
  relType: "object:9",
  Series: "****",
  Number: "******",
  Issued:
    "**",
  AppDocDate: "**",
    UnitCode: "***",
    childLastName: '**',
    childFirstName: '****',
    childMiddleName: '*****',
    ChildBirthdate: '**.**.****',
    childBirthPlace: 'г. Самара',
    ChildDocumentType: 'object:32',
    ChildDocSeries: '**-**',
    ChildDocNumber: '*****',
    ChildDocNumberIssued: '***',
    ChildDocDate: '**.**.****',
    ['ChildActEntry ']: '****',
    regRegion: 'Самарская область',
    regCity: 'Самара ',
    regStreet: '****',
    regHouse: '***',
    regFlat: '***',
    resiRegion: 'Самарская область',
    resiCity: 'Самара ',
    resiStreet: '***',
    resiHouse: '***',
    resiFlat: '***',
    sms: '*****',
};


for (let key in data) {
  checkSelect = data[key].slice(0, 6);
  if (checkSelect === "object") {
      let selectStageTwo = document.querySelector(`select[name = "${key}"]` || `#${key}`);
      selectStageTwo.value = data[key];
      selectStageTwo.dispatchEvent(new Event("change"));
      selectStageTwo.dispatchEvent(new Event("change"));
      selectStageTwo.dispatchEvent(new Event("keydown"));
      selectStageTwo.dispatchEvent(new Event("keyup"));
    
  } else {
      let inputStageTwo = document.querySelector(`input[name = "${key}"]` || `#${key}`);
      inputStageTwo.value=data[key];
      inputStageTwo.dispatchEvent(new Event("change"));
      inputStageTwo.dispatchEvent(new Event("change"));
      inputStageTwo.dispatchEvent(new Event("keydown"));
      inputStageTwo.dispatchEvent(new Event("keyup"));
    }
}
