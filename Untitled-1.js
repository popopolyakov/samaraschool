let data = {
  LastName: "Моисеева",
  FirstName: "Мария",
  MiddleName: "Вадимовна",
  ApplBirthdate: "27.09.1987",
  applicantType: "object:5",
  relType: "object:9",
  Series: "3611",
  Number: "468811",
  Issued:
    "отделом УФМС России по Самарской области в Советском районе гор. Самары",
  AppDocDate: "30.09.2011",
    UnitCode: "630-002",
    childLastName: 'Моисеев',
    childFirstName: 'Савелий',
    childMiddleName: 'Александрович',
    ChildBirthdate: '14.07.2013',
    childBirthPlace: 'г. Самара',
    ChildDocumentType: 'object:32',
    ChildDocSeries: 'II-ЕР',
    ChildDocNumber: '849938',
    ChildDocNumberIssued: 'отдел ЗАГС Советского района городского округа Самара управления ЗАГС Самарской области',
    ChildDocDate: '23.07.2013',
    ['ChildActEntry ']: '1601',
    regRegion: 'Самарская область',
    regCity: 'Самара ',
    regStreet: 'Больничная',
    regHouse: '20а',
    regFlat: '67',
    resiRegion: 'Самарская область',
    resiCity: 'Самара ',
    resiStreet: 'Больничная',
    resiHouse: '20а',
    resiFlat: '67',
    sms: '+79276959180',
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
