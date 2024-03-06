import { useNavigate } from "react-router-dom";

export default function Pembayaran() {
    let navigate = useNavigate();
    function handleClick() {
        navigate(-1);
}
    return (
    <div>
        <main style={{ padding: "1rem 0" }}>
            <h2>Pembayaran</h2>
        </main>
        <button onClick={handleClick}>go home</button>
</div>
);
}