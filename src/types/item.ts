import { PanGestureHandlerProps } from 'react-native-gesture-handler';

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
export interface GetTakedItems {
  callback: (data: ItemProps[]) => void;
}

export type ItemModalPriceProps = {
  id: string;
  price: string;
};

export interface ItemComponentProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  name: string;
  quantity: number;
  priorityLevel: number;
  itemColor: string;
  price: number;
  id: string;
  onDelete: (id: string) => void;
  onTake?: (id: string) => void;
  onGoBack?: (id: string) => void;
  handleOpenModalPrice: (props: ItemModalPriceProps) => void;
}

export interface ModalItemProps {
  name: string;
  quantity?: number;
  price?: number;
}
