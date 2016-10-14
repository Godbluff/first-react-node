const axios = require('axios');
const React = require('react');
const ReactDOM = require('react-dom');

const AddChat = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
    /*

      1. Use proptypes to make sure that
      we require a prop 'url' that should
      be a string

     */
  },

  addChatMessage() {
    const chatValue = this.refs.newChatInput.value;
    const nameValue = this.refs.newNameInput.value;
    console.log(chatValue);
    axios.post('https://react-workshop-chat.herokuapp.com/chat', {
      name: nameValue,
      text: chatValue
    })
        .catch(function (error) {
          console.log(error);
        });
    /*

      2. Use ReactDOM.findDOMNode to get
      the input field and the value

      3. Use a HTTP request library like
      super-agent, axios, fetch or jQuery.ajax
      to do a POST-request to the url supplied.
      The API accepts data of the form:

      {
        text: 'My new chat message!'
        name: 'Anonymous'
      }

      4. Reset the input field

     */
  },

  handleSubmit(e) {
    if (e.key === 'Enter') {
      console.log('Submitting to addChatMessage...');
      this.addChatMessage();
    }
    /*

      5. Handle when the user presses
      the ENTER key in the input field

     */
  },

  render(){
    return (
      <div className="form-group">

        {/*

          6. Attach an onKeyDown listener
          to the input field that calls
          you handleSubmit function

        */}

        <input
            type="text"
            placeholder="Your Name Here"
            ref="newNameInput"
            className="form-control"

        />
        <input
            type="text"
            placeholder="Compose Message"
            ref="newChatInput"
            className="form-control"
            onKeyDown={this.handleSubmit}
        />

        {/*

          7. Add an additional input field
          so that you can supply a nickname/name as well

        */}
      </div>
    );
  }
});

module.exports = AddChat;
