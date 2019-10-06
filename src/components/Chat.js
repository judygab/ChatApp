import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

class Chat extends React.Component {
  state = {
    messages: []
  },
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={() => {
          //send message to backend
        }}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

//good practice to set default props in case props are not passed
Chat.defaultProps = {
  name: 'Your name',
};

//set Prop Types meaning you accept value with only that Types
Chat.propTypes = {
  name: React.propTypes.string,
};

export default Chat;
