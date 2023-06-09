import { ReactNode } from "react";

interface IPropsSubcontainer {
  children: ReactNode;
  classname: string;
}

export const Subcontainer = ({ children, classname }: IPropsSubcontainer) => {
  return (
    <section className={`flex flex-col  p-10 gap-6  ${classname}`}>
      {children}
    </section>
  );
};
