const instagramUser = {}
const metaUser = new Object() //this is also an object

instagramUser.id = "im_omii"
instagramUser.name = "Om"
instagramUser.isLoggedIn = false
//console.log(instagramUser);

const regularUser = {
    email: "omii@gmail.com",
    fullName: {
        user: {
            firstName: "Omkar", //you can nested like this
            lastName: "Patil"
        }
    }
}
//console.log(regularUser.fullName.user);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //spread operator
//console.log(obj3)

//----------objects inside array--------------//
const users = [
    {
        //some code
    },
    {
        //some code
    },
    {
        //some code
    }
]

console.log(Object.keys(instagramUser)); //we get all the keys in array format so we can perform all the operations on it

//console.log(Object.values(instagramUser));
//console.log(Object.entries(instagramUser));

