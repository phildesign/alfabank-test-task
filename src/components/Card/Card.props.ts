import { CardItemWithLike } from './../../interfaces/card.interface';

export interface CardProps {
	data: CardItemWithLike;
	handleUpdateLike: (id: number) => void;
	handleDeleteCard: (id: number) => void;
}
