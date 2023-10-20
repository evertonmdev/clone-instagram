import React, { useContext } from "react";

import NormalProfile from "./NormalProfile";
import { Context } from "../Context";

const SugestionContainer = () => {
  const { users, isLoaded } = useContext(Context);

  return (
    <section className="w-full flex flex-col gap-3">
      <div className="flex justify-between items-center w-full my-3">
        <h2 className="text-sm font-bold text-primary/85">
          Sugestões para você
        </h2>
        <span className="cursor-pointer text-xs text-primary/80 hover:text-primary/60">
          Mostrar mais
        </span>
      </div>

      {isLoaded ? (
        users
          .slice(0, 5)
          .map((e, index) => (
            <NormalProfile
              key={index}
              image={e.profileImage}
              name={e.nome}
              actionText={"seguir"}
            />
          ))
      ) : (
        <h3 className="text-center w-full animate-pulse">Carregando...</h3>
      )}
    </section>
  );
};

export default SugestionContainer;
