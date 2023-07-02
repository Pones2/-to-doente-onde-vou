import React from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
	const [address, setAddress] = React.useState(null);
	const [answers, setAnswers] = React.useState({
		0: [],
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
		9: [],
		10: [],
	});

	return (
		<Context.Provider
			value={{
				address,
				setAddress,
				answers,
				setAnswers,
			}}
		>
			{children}
		</Context.Provider>
	);
};
