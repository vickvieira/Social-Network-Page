import { useParams } from "react-router-dom";

function Profile() {
    const params = useParams();
    return (
    <div>
        <h1>Profile</h1>
        <p>User ID: {params.userId}</p>
    </div>
    );
}

export default Profile;