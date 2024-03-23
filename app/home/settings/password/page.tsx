import Header from "@/app/components/header/Header";
import Modal from "@/app/components/modal/Modal";
import { loginIsRequiredServer } from "@/utils/auth";


export default async function Password() {
  await loginIsRequiredServer();


  return (
    <>
        <Header />
      <div>
        <h2 style={{textAlign:"center", marginTop: 20}}>Dashboard/Settings/Password Page</h2>
      </div>
      <div style={{textAlign: "center", marginTop: "2rem"}}>
        <Modal text="This modal is opened from Password page"/>
      </div>
    </>
  );
}