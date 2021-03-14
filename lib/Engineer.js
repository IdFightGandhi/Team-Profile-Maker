const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email) {
        super (name, id, email, github)
        this.GitHubUser = github;

    }

    getRole() {
        return Engineer;
    }

    getGitHub(){
        return this.github;
    }

};

module.exports = Engineer;