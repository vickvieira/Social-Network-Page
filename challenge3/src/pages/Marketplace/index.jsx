import { useParams } from "react-router-dom";


function Marketplace() {
    const params = useParams();
    return (
        <div>
            <h1>Marketplace</h1>
            <p>User ID:{params.userId}</p>
        </div>
    );
}

export default Marketplace;