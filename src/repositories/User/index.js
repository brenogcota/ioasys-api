const db = require('../../infra/database');

const getAll = () => {
    const user = {
        name: ''
    }

    const userRepository = db.getRepository("User");
    userRepository.save(user)
        .then(function(data) {
            console.log("Post has been saved: ", data);
            console.log("Now lets load all posts: ");

            return userRepository.find();
        })
        .then(function(rows) {
            console.log("All posts: ", rows);
        });
}

module.exports = {
    getAll
}
