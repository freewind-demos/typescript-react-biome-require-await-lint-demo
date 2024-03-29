import type { FC } from "react";
import React, { useEffect } from "react";

async function asyncHello(name: string): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Hello ${name}`);
		}, 1000);
	});
}
export const Hello: FC = () => {

	useEffect(() => {
		const value = asyncHello("React");
		console.log(value);
	}, []);

	return (
		<div className={"Hello"}>
			<h1>Hello Roime</h1>
		</div>
	);
};
