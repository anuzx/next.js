//this layout will be applied only to signin and signout page

import { ReactNode } from "react";

export default function authLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>HEADER</div>
      {children}
      <div>FOOTER</div>
    </div>
  );
}
