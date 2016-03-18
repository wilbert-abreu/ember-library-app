import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isEmpty: Ember.computed.lt('message.length', 1),

  isDisabled: Ember.computed.and('isValid', 'isEmpty'),



  actions: {

    sendMessage() {
      //alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you ${this.get('emailAddress')}! Your message, "${this.get('message')}", has been sent! `);
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }
});
