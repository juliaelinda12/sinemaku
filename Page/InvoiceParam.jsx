import { useParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function InvoiceParam() {
    let params = useParams();
    let invoices = getInvoices(parseInt(params.invoiceId, 10));
return (
    <div>
    <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoices.amount}</h2>
    <p>
    {invoices.name}: {invoices.number}
    </p>
    <p>Due Date: {invoices.due}</p>
</main>
</div>
);
}
