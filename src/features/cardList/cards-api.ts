import {instance} from "../../api/api-instance";

export type GetCardsQueryParams = {
	cardsPack_id: string | undefined
	cardAnswer?: string
	cardQuestion?: string
	min?: number
	max?: number
	sortCards?: string
	page?: number
	pageCount?: number
	packName?: string
};

export type CardType = {
	_id: string
	cardsPack_id: string
	user_id: string
	question: string
	answer: string
	grade: number
	shots: number
	comments?: string
	type?: string
	rating?: number
	more_id?: string
	created: string
	updated: string
	__v?: number
	answerImg?: string
	answerVideo?: string
	questionImg?: string
	questionVideo?: string
	name:string
	cardsCount:number
}

export type NewCardDataType = {
	cardsPack_id: string
	question?: string
	answer?: string
	grade?: number
	shots?: number
	answerImg?: string
	questionImg?: string
	questionVideo?: string
	answerVideo?: string
};

export type UpdateCardModelType = {_id: string} & Partial<Omit<CardType, "_id">>;

export type GetCardsResponseDataType = {
	cards: Array<CardType>
	packUserId: string
	cardsTotalCount: number
	maxGrade: number
	minGrade: number
	page: number
	pageCount: number
};

export type UpdatedGradeType = {
	_id: string
	cardsPack_id: string
	card_id: string
	user_id: string
	grade: number
	shots: number
}

export const cardsAPI = {
	getCards(params: GetCardsQueryParams) {
		return instance.get<GetCardsResponseDataType>("cards/card", {params})
			.then(response => response.data);
	},
	createCard(newCard: NewCardDataType) {
		return instance.post("cards/card", {card: newCard})
			.then(response => response.data);
	},
	deleteCard(id: string) {
		return instance.delete("cards/card", {params: {id}})
			.then(response => response.data);
	},
	updateCard(cardModel: UpdateCardModelType) {
		return instance.put("cards/card", {card: cardModel})
			.then(response => response.data);
	},
	updateGrade(card_id: string, grade: number) {
		return instance.put("cards/grade", { card_id,grade})
			.then(response => response.data);
	},
};
