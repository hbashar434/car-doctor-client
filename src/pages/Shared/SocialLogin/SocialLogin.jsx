import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn}>
          <FcGoogle size={40}></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
