import Form from "../component/form/Form"
import InvoiceCard from "../component/InvoiceCard";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-2  md:p-8   gap-8 ">
      <Form />
      <div className=" printable-area">
        <InvoiceCard />
      </div>
    </div>
  );
}
