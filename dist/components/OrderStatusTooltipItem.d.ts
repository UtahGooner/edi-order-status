import React from 'react';
interface OrderStatusTooltipItemProps {
    color: 'light' | 'info' | 'success' | 'warning' | 'danger';
    value: number;
    text: string;
    onClick: (val: number) => void;
}
declare const OrderStatusTooltipItem: React.FC<OrderStatusTooltipItemProps>;
export default OrderStatusTooltipItem;
