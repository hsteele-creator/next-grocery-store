import Image from "next/image";

export default function Services() {
  return (
    <div className="grid grid-cols-3 gap-3 border-b-[0.5px] pb-10">
      <div className="flex items-center gap-2">
        <Image
          width={30}
          height={30}
          src="/images/moneybagicon.svg"
          alt="moneybag"
        />
        <div>
          <h3 className="text-sm font-medium">Best Prices and Deals</h3>
          <p className="text-[11px] text-gray-500 my-1">
            Don’t miss our daily amazing deals and prices
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Image
          width={30}
          height={30}
          src="/images/refundicon.svg"
          alt="moneybag"
        />
        <div>
          <h3 className="text-sm font-medium">Refundable</h3>
          <p className="text-[11px] text-gray-500 my-1">
            If your items have damage we agree to refund it
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image
          width={30}
          height={30}
          src="/images/deliveryicon.svg"
          alt="moneybag"
        />
        <div>
          <h3 className="text-sm font-medium">Free Delivery</h3>
          <p className="text-[11px] text-gray-500 my-1">
            Do purchase over $50 and get free delivery anywhere
          </p>
        </div>
      </div>
    </div>
  );
}
