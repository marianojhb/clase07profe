import { useAuth } from "../context/AuthContext";

function AccountButton() {
  const { user } = useAuth();

  return (
    <>
      {user ? `Hola, ${user.name}` : "Mi cuenta"}
    
    </>
  );
}

export default AccountButton;