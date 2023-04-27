import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItem from "../../data/Item.json";
import { formatCurrency } from "../../utilities/formatcurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItem.find((product) => product.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center mb-3"
    >
      <img
        src={item.imgUrl}
        style={{
          height: "75px",
          width: "125px",
          objectFit: "cover",
          marginBottom: "2px",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              ×{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>
        <p>
          {formatCurrency(item.price * quantity)}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            &times;
          </Button>
        </p>
      </div>
    </Stack>
  );
};

export default CartItem;
