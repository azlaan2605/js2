// Objects
var student={       //declaring an object
    name:'Azlaan',
    age:'21',
    number:82999983,
    address: {                         //Nested object
    state: 'jharkhand',
    city: 'Jsr',
}
}
console.log(student);

console.log(student.age);                    //Access the values
console.log(student.address.city);
console.log(student['address']['state'])



//Function within an object
var student2 ={
    name:'Ahmed',
    age: 22,
    number:7632838938,
    about : function () {
        console.log('I am a student at GCE');
    },
}
console.log(student2.about());