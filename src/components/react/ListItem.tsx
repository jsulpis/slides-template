import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./useRaisedShadow";

interface Props {
	item: string;
}

export const ListItem = ({ item }: Props) => {
	const y = useMotionValue(0);
	const boxShadow = useRaisedShadow(y);

	return (
		<Reorder.Item
			value={item}
			id={item}
			style={{ boxShadow, y }}
			className="bg-white text-black relative py-4 px-8 mb-4 rounded text-2xl cursor-grab hover:bg-gray-200 transition-colors"
		>
			<span>{item}</span>
		</Reorder.Item>
	);
};
