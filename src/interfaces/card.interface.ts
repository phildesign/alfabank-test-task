export interface CardModel {
	loading: boolean;
	hasErrors: boolean;
	data: CardItemWithLike[];
}

export interface CardItem {
	name: string;
	latin_name: string;
	animal_type: string;
	active_time: string;
	length_min: string;
	length_max: string;
	weight_min: string;
	weight_max: string;
	lifespan: string;
	habitat: string;
	diet: string;
	geo_range: string;
	image_link: string;
	id: number;
}

export interface CardItemWithLike {
	card: CardItem;
	like: boolean;
}
