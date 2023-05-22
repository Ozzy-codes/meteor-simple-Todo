import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import './newUserForm.html';

Template.newUser.events({
    'submit .newUser-form'(e, instance) {
        e.preventDefault();

        const target = e.target;

        const username = target.username.value;
        const password = target.password.value;

        Accounts.createUser(username, password);
        instance.state.set(Show_User_form, false);
    }
});