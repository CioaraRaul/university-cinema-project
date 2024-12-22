import { useState } from "react";

function EyePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <button onClick={tooglePassword}>Click</button>
    </div>
  );
}

export default EyePassword;
