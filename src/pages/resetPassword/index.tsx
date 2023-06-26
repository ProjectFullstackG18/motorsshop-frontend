import SendEmailForm from "../../components/forms/sendEmailRecovery";
import { NextPage } from "next";
import { Footer } from "@/components/footer/footer";

const sendEmailResetPassword: NextPage = () => {
  return (
    <main>
      <SendEmailForm />
    </main>
  );
};

export default sendEmailResetPassword;
