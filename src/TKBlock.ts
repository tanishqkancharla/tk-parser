export interface TKBlockMap {}
type TKBlockType = keyof TKBlockMap;

export type TKBlock<Types extends TKBlockType = TKBlockType> = {
	[Type in Types]: {
		type: Type;
	} & TKBlockMap[Type];
}[Types];
