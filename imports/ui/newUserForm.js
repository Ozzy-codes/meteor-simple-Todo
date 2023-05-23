import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import './newUserForm.html';

Template.newUser.events({
    'submit .newUser-form'(event) {
        event.preventDefault();

        const target = event.target;

        const username = target.username.value;
        const password = target.password.value;

        Accounts.createUser({ username: username, password: password }, (error) => {
            if (error) {
                console.log(error)
            }
            console.log('New User Created!')
        });
    },
});