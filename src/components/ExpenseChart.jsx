import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';


function ExpenseChart() {

	const { transactions } = useGlobalState();
	

	const totalIncomes = transactions
		.filter((transaction) => transaction.amount > 0)
		.reduce((acc, transaction) => (acc += transaction.amount), 0);

	const totalExpenses = transactions
		.filter((transaction) => transaction.amount < 0)
		.reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

	// console.log({
	// 	totalIncomes,
	// 	totalExpenses,
	// });

	const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
	const incomesPercentage = 100 - (expensesPercentage);
	


	return (
		<VictoryPie
			colorScale={["#e74c3c", "#2ecc71"]}
			data={[
				{ x: "Expenses", y: totalExpenses },
				{ x: "Incomes", y: totalIncomes },
			]}
			animate={{ duration: 2000 }}
			labels={({ datum }) => datum.y}
			labelComponent={<VictoryLabel
				angle={45}
				style={{ fill: "white" }} />}
		/>
	)
}

export default ExpenseChart