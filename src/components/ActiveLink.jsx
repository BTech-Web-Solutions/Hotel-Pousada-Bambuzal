import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(router.pathname === href);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  React.useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router.pathname, href]);

  return (
    <a href={href} onClick={handleClick} className={isActive ? 'active' : null}>
      {children}
    </a>
  );
};

export default ActiveLink;

// Este componente usa o hook useRouter do Next.js para obter a rota atual
//e o hook useState do React para gerenciar o estado de "ativo" ou "inativo"
//do link. Ele também usa o efeito useEffect para atualizar o estado quando a
//rota muda. Quando o link é clicado, ele usa o método router.push para 
//navegar para a nova rota e adiciona a classe "ativa" ao elemento a.