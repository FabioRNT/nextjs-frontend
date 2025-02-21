import { Asset, OrderType } from "@/models";
import { Button, Label, TextInput } from "flowbite-react";

export function OrderForm(props: {
  asset: Asset;
  walletId: string;
  type: OrderType;
}) {
  const color = props.type === OrderType.BUY ? "text-blue-700" : "text-red-700";
  const translatedType = props.type === OrderType.BUY ? "Buy" : "Sell";

  return (
    <form>
      <input type="hidden" name="assetId" value={props.asset._id} />
      <input type="hidden" name="wallet_id" value={props.walletId} />
      <input type="hidden" name="type" value={props.type} />
      <div className="mb-2">
        <Label htmlFor="shares" value="Quantity" className={color} />
        <TextInput
          id="shares"
          name="shares"
          required
          type="number"
          min={1}
          step={1}
          defaultValue={1}
          color={props.type === OrderType.BUY ? "info" : "failure"}
        />
      </div>
      <br />
      <div className="mb-2">
        <Label htmlFor="price" value="Price $" className={color} />
        <TextInput
          id="price"
          name="price"
          required
          type="number"
          min={1}
          step={1}
          defaultValue={1}
          color={props.type === OrderType.BUY ? "info" : "failure"}
        />
      </div>
      <br />
      <Button
        type="submit"
        color={props.type === OrderType.BUY ? "blue" : "failure"}
      >
        {translatedType}
      </Button>
    </form>
  );
}
