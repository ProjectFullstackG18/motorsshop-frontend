import { NextPage } from "next";
import RecoveryPasswordForm from "../../components/forms/recoveryPassword";
import { useRouter } from "next/router";
import { Footer } from "@/components/footer/footer";

const ResetPassword: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;
  return (
    <main>
      <RecoveryPasswordForm token={token as string} />
    </main>
  );
};

export default ResetPassword;
