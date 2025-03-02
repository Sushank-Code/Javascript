
// create a class with name user which have name & email of studen  and show the data

class user {
    constructor() {
        console.log("Data Of student");
    }
    userdetail(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Name : ${this.name}`);
        console.log(`Email : ${this.email}`);
    }
};

// create a admin to edit the data

class admin extends user {

    editData(name, email) {
        console.log(`Name : ${name}`);
        console.log(`Email : ${email}`);

    }
};

let student = new user();
let edit = new admin();

try {
    student.userdetail("sushank", "su@gmail.com");
} catch (error) {
    console.log(error);
}
// student.userdetail("sushank", "su@gmail.com");
student.viewData();

edit.editData("Lamsal", "su@gamil.com");