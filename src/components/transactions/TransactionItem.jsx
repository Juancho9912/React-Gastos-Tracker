import { useGlobalState } from "../../context/GlobalState"

export function TransactionItem({ transaction }) {

	const { deleteTransaction } = useGlobalState()

	return (
		<li className="bg-zinc-600 text-white px-3py1
		rounded-lg mb-2 w-full flex justify-between items-center" >
			<p className="text-sm">{transaction.description} </p>
			<div>
				<span>${transaction.amount}</span>
				<button onClick={() => {
					deleteTransaction(transaction.id)
				}}
				className=" bg-red-500 hover:bg-red-700 text-black m-1 rounded ">
				{/* class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" */}
					X
				</button>
			</div>
		</li>
	)
}

export default TransactionItem