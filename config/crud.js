const { Broker, Investment, Transaction, BalanceUpdate } = require('./models');

const test = async () => {
  // create broker
  const broker = await Broker.create({ name: 'Fooinvest' });
  // create investment
  const investment = await Investment.create({
    name: 'Tesouro Foo',
    BrokerId: broker.get('id')
  });
  // create transaction
  await Transaction.create({
    amount: 500,
    date: '2018-03-10',
    InvestmentId: investment.get('id')
  });
  // create balance update
  await BalanceUpdate.create({
    amount: 501,
    date: '2018-03-12',
    InvestmentId: investment.get('id')
  });
  // select all
  const brokerWithDetails = await Broker.findOne({
    include: [
      {
        model: Investment,
        include: [{ model: Transaction }, { model: BalanceUpdate }]
      }
    ]
  });
  console.log(JSON.stringify(brokerWithDetails));
};


//sequelize.authenticate().then(() => {
//    console.log('connected to database   ');
//}); 
