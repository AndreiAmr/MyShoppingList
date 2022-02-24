export interface ItemProps {
  id?: string;
  name: string;
  price: number;
  quantity: number;
  priorityLevel: number;
  itemColor: string;
  createdAt: Date | string | null;
  updatedAt: Date | string | null;
  payedAt: Date | string | null;
  takedAt: Date | string | null;
}

export type ItemColors = 'purple' | 'blue' | 'green' | 'yellow' | 'orange';

export interface GetUntakedItemsProps {
  callback: (data: ItemProps[]) => void;
}

export interface ItemComponentProps {
  name: string;
  note: string;
  quantity: number;
  onPress: () => void;
}

export interface ModalItemProps {
  name: string;
  quantity?: number;
  price?: number;
  note: string;
}
