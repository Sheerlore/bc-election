module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "172.20.160.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // develop: {
    //   port: 8545
    // }
  }
};
