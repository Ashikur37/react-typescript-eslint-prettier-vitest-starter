import { createContext } from 'react';
import { InventoryType } from '../../types/product';

export default createContext<InventoryType | undefined>(undefined);
