export interface ItemBase {
  id: number;
  title: string;
  parent_id: number;
}

export interface Item extends ItemBase {
  children: Item[];
}
