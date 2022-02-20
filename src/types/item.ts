export interface ItemProps {
  id?: string;
  name: string;
  note: string;
  price: number;
  quantity: number;
  createdAt: Date | string | null;
  updatedAt: Date | string | null;
  payedAt: Date | string | null;
  takedAt: Date | string | null;
}
export interface GetUntakedItemsProps {
  callback: (data: ItemProps[]) => void;
}

export interface ItemComponentProps {
  name: string;
  note: string;
  quantity: number;
  onPress: () => void;
}
