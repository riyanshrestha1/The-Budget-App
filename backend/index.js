const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Server is alive');
});

const transactions = [
	{ id: 1, description: 'Groceries', amount: 54.20, type: 'expenses'},
	{ id: 2, description: 'Paycheck', amount: 1500, type: 'income'},
];

app.get('/api/transactions', (req, res) =>{
	res.json(transactions);
});

app.post('/api/transactions', (req, res) => {
	const newTransaction = {
		id: transactions.length + 1,
		description: req.body.description,
		amount: req.body.amount,
		type: req.body.type,
	};
	transactions.push(newTransaction);
	res.status(201).json(newTransaction);
})

app.listen(4000, () => {
	console.log ('Listen on http://localhost:4000');
});
