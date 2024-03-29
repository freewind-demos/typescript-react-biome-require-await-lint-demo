import React, { useMemo, useState } from "react";
import type { FC } from "react";

import "./Hello.pcss";

type Props = {};

export const Hello: FC<Props> = ({}) => {
	let [a, setA] =  useState(0);

	const bbb = useMemo(() => {
		return a + 1;
	}, []);

	return (
		<div           className={"Hello"}>
			   <h1>Hello React {a}</h1>
		   </div>
	);
};
