const Accounts = require('./auth/accounts')
const Session = require('./auth/session')
const AdminGroup = require('./auth/adminGroup')
const AccountPolicy = require('./auth/accountPolicy')
const { NormalDashboard, InoutDashboard } = require('./dashboard')
const Logs = require('./logs')

module.exports = {
  accounts: new Accounts(),
  session: new Session(),
  adminGroup: new AdminGroup(),
  accountPolicy: new AccountPolicy(),
  normalDashboard: new NormalDashboard(),
  inoutDashboard: new InoutDashboard(),
  logs: new Logs(),
}
