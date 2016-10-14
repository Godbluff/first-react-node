const request = /* ???? */;
const React = require('react');
const SetIntervalMixin = require('../mixins/set-interval-mixin');

const ChatList = React.createClass({
  /*

    1. Use proptypes to make sure that
    we require a prop 'url' that should
    be a string

    2. Make sure you add any appropriate
    mixins that you need to use in your
    application

   */

  getInitialState() {
    return {
      chats: []
    };
  },

  getChats() {
    /*

      3. Create a method that uses an HTTP request
      library like super-agent, axios, fetch or jQuery.ajax
      to fetch chat messages from the API URL

      The API returns a response in the form:

      [
        { text: 'A chat message' },
        { text: 'Another chat message' },
        ...
      ]

      Use this data to update the state
      of your application

     */
  },

  componentDidMount() {
    /*

      4. Use the SetIntervalMixin to
      regularly call the getChats method
      to update the chat messages of
      you application

     */
  },

  render() {
    let list = this.state.chats.map((item, index) => {
      return (
        /*

          5. The chat message items also supply a name (item.name).
          Show that together with the message to see who wrote it.

         */

        <li className="list-group-item" key={item._id} >
          {item.text}
        </li>
      );
    });

    return (
      <ul className="list-group">
        {list}
      </ul>
    );
  }
});

module.exports = ChatList;