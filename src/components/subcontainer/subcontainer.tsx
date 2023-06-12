import { ReactNode } from "react";

interface IPropsSubcontainer {
  children: ReactNode;
  classname: string;
}

export const Subcontainer = ({ children, classname }: IPropsSubcontainer) => {
  return (
    <section className={`flex flex-col gap-6 p-2  ${classname}`}>
      {children}
    </section>
  );
};
