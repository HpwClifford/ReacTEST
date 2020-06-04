import React from "react";

export default function Banana({ bananaNum }) {
  return (
    <div>
      Here are some bananas. They are not called ananas. Ananas are pineapples.
      Is there a real banana here?
      {bananaNum}
      {/* <MiniBanana delicious={delicious} bananaNum={bananaNum} /> */}
    </div>
  );
}
