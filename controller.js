// Sample Data
const users = [
    {
      "id": 1,
      "first_name": "Raul",
      "last_name": "Wynter",
      "email": "rwynter0@google.com"
    },
    {
      "id": 2,
      "first_name": "Demetri",
      "last_name": "Dakin",
      "email": "ddakin1@google.com"
    },
    {
      "id": 3,
      "first_name": "Lira",
      "last_name": "Collishaw",
      "email": "lcollishaw2@google.com"
    },
    {
      "id": 4,
      "first_name": "Jennette",
      "last_name": "O'Brollachain",
      "email": "jobrollachain3@msn.com"
    },
    {
      "id": 5,
      "first_name": "Annaliese",
      "last_name": "Marishenko",
      "email": "amarishenko4@msn.com"
    },
    {
      "id": 6,
      "first_name": "Delano",
      "last_name": "Millins",
      "email": "dmillins5@yahoo.com"
    },
    {
      "id": 7,
      "first_name": "Allister",
      "last_name": "Rizzetti",
      "email": "arizzetti6@yahoo.com"
    },
    {
      "id": 8,
      "first_name": "Yul",
      "last_name": "Slite",
      "email": "yslite7@yahoo.com"
    },
    {
      "id": 9,
      "first_name": "Stu",
      "last_name": "Liveing",
      "email": "sliveing8@devmountain.com"
    },
    {
      "id": 10,
      "first_name": "Carla",
      "last_name": "Gisbye",
      "email": "cgisbye9@devmountain.com"
    }
  ];


// Get Controller
const sendUsers = (req, res) => {
    res.status(200).send(users);
};

// Post Controller
const addUser = (req, res) => {
    // get user obj from body
    const {user} = req.body;
    // add user to the array
    users = users.push(user);
    // send new users array
    res.status(200).send(user);
}

// Put Controller
const updateUser = (req, res) => {
    // take id from params
    const {id} = req.params;
    // find the user and update it
    for(let i = 0; i < users.length; i++){
        if(users[i].id === +id){
            users[i].first_name = 'New Name'
        }
    };
    // send users back
    res.status(200).send(users);
};

// Delete Controller
const deleteUser = (req, res) => {
    // take id from query
    const {id} = req.query;
    // find user and delete it
    const updatedUsers = users.filter(user => user.id !== +id);
    // return updated users
    return updatedUsers;
}

// Export The Controller Functions
module.exports = {
    sendUsers,
    addUser,
    updateUser,
    deleteUser
};