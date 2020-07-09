import React from 'react';

const Me = ({me}) => {
  if (!me)
    return <div>Who am I?</div>
 return <div>{me.name}</div>
}

class NexmoClientWidget extends React.Component {
  constructor(){
    super();
    this.state = {
      me: null,
      nexmoApp: null
    }
  }

  componentDidMount() {
    const isServer = typeof window === 'undefined'
    const NexmoClient = !isServer ? require('nexmo-client') : null
    if(NexmoClient){
      const nexmoClient = new NexmoClient({ debug: false })
      nexmoClient
        .login(this.props.token)
        .then(nexmoApp => {
          console.log(`app: `, nexmoApp)
          window.nexmoApp = nexmoApp;
          this.setState((state, props) => {
            return {
              ...this.state,
              me: {
                name: nexmoApp.me.name,
                id: nexmoApp.me.id
              },
              nexmoApp: nexmoApp
            }
          })
          nexmoApp.on('*', (event, evt) => {
            console.log("event: ", event, evt)
            console.log('nexmoApp.activeStreams.length ', nexmoApp.activeStreams.length)
          })
        })
    }
  }

  render() {
    const {nexmoApp} = this.state
    return (
      <div>
        <Me me={this.state.me} />
      </div>
    );

  }
}

export default NexmoClientWidget