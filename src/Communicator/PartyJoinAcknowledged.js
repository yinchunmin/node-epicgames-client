const User = require('../User');

class PartyJoinAcknowledged {

  constructor(communicator, data) {
    
    this.communicator = communicator;

    this.sender = new User(this.communicator.getClient(), data);

    this.partyId = data.partyId;
    
    this.time = data.time;
    
  }

  send(to) {

    return this.communicator.sendRequest({

      to,

      body: JSON.stringify({

        type: 'com.epicgames.party.joinacknowledged',

        payload: {
          partyId: this.partyId,
        },

        timestamp: new Date(),

      }),

    });

  }

}

module.exports = PartyJoinAcknowledged;
