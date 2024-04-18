import { Reorder } from "framer-motion";
import { useState } from "react";
import { ListItem } from "./ListItem";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

// Source : https://codesandbox.io/s/framer-motion-5-drag-to-reorder-lists-uonye
export function List() {
	const [items, setItems] = useState(initialItems);

	return (
		<Reorder.Group
			axis="y"
			onReorder={setItems}
			values={items}
			className="relative !list-none"
		>
			{items.map((item) => (
				<ListItem key={item} item={item} />
			))}
		</Reorder.Group>
	);
}
