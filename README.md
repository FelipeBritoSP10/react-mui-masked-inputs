# 🚀 React MUI Masked Inputs

## 📌 Introdução

Este projeto fornece campos de entrada personalizados com máscaras utilizando React, Material UI e IMask. Ele permite a formatação e validação de dados, como CPF, CNPJ, CEP, telefone e data. Isso torna a experiência do usuário mais intuitiva, evita erros de digitação e garante que os dados sejam inseridos corretamente, facilitando o processamento posterior.

---

## 🚀 Instalação e Configuração

### 📌 Pré-requisitos

- 🖥️ Node.js instalado
- 📦 Gerenciador de pacotes npm ou yarn

### 📥 Passos para instalação

```bash
# Clone o repositório
git clone https://github.com/FelipeBritoSP10/react-mui-masked-inputs.git

# Acesse o diretório do projeto
cd react-mui-masked-inputs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## 🛠 Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca para criação de interfaces dinâmicas e reutilizáveis
- 🎨 **Material UI** - Framework de componentes estilizados para React, garantindo design moderno e acessível
- 🔢 **IMask** - Biblioteca para formatação de entrada de dados, essencial para garantir a padronização e evitar erros
- ⚡ **Vite** - Ferramenta para desenvolvimento rápido, otimizando a performance do projeto

---

## 🎯 Benefícios do Uso de Máscaras nos Campos de Entrada

O uso de máscaras melhora significativamente a experiência do usuário, trazendo vantagens como:

- ✅ **Prevenção de erros**: Reduz a chance de inserir dados inválidos.
- 👀 **Facilidade de leitura**: Os formatos padronizados tornam as informações mais compreensíveis.
- 🕵️ **Validação em tempo real**: O usuário sabe imediatamente se a entrada está correta.
- ⚡ **Melhora na usabilidade**: Simplifica o preenchimento de formulários, tornando o processo mais ágil.
- 🔄 **Maior compatibilidade**: Dados formatados corretamente são mais fáceis de integrar com APIs e bancos de dados.

## 💡 Casos de Uso

Esses campos podem ser usados em diversas aplicações, como:

- 📋 **Sistemas de cadastro**: Para garantir que CPF, CNPJ, telefone e CEP sejam inseridos corretamente.
- 🛒 **E-commerces**: Melhorando o preenchimento automático de endereços e evitando erros nos contatos.
- 💳 **Aplicações financeiras**: Para garantir que os dados de identificação do usuário estejam formatados corretamente.

---

## 📖 Guia de Uso

### 🔍 Campos Implementados e sua Utilidade

- **CPFInput**: Formata o CPF no padrão `000.000.000-00`, evitando erros na digitação e garantindo que o dado seja válido
- **CNPJInput**: Formata o CNPJ no padrão `00.000.000/0000-00`, essencial para cadastros empresariais
- **CEPInput**: Formata o CEP no padrão `00000-000`, facilitando buscas e preenchimentos automáticos de endereços
- **PhoneInput**: Formata telefones no padrão `(00) 00000-0000`, permitindo uma melhor organização e padronização dos números
- **DateInput**: Permite a entrada de datas no formato `DD/MM/YYYY`, garantindo conformidade e evitando ambiguidades
- **PisInput**: Formata o PIS no padrão `000.00000.00-0`, garantindo que o número seja preenchido corretamente e no formato exigido pela legislação.
- **RGInput**: Formata o RG no padrão `00.000.000-0`, garantindo que o número seja preenchido corretamente.

---

## 📝 Exemplo de Uso

```jsx
import React, { useState } from "react";
import CPFInput from "./Components/CPFInput";

const App = () => {
  const [cpf, setCpf] = useState("");

  return (
    <div>
      <h1>Formulário</h1>
      <CPFInput value={cpf} onChange={setCpf} />
    </div>
  );
};

export default App;
```

---

## 📂 Estrutura de Pastas

```plaintext
react-mui-masked-inputs/
│-- src/
│   │-- Components/
│   │   │-- CPFInput.jsx
│   │   │-- CNPJInput.jsx
│   │   │-- CEPInput.jsx
│   │   │-- PhoneInput.jsx
│   │   │-- DateInput.jsx
│   │   │-- PisInput.jsx
│   │   │-- RGInput.jsx
│   │-- Layout/
│   │   │-- Navbar.jsx
│   │-- App.jsx
│   │-- main.jsx
│-- package.json
│-- vite.config.js
│-- README.md
```

---


## 🏗️ Navbar no Projeto

A Navbar foi adicionada como uma edição para deixar a aplicação mais chamativa, 
trazendo um design moderno e melhorando a experiência do usuário.
Ela contribui para a identidade visual do projeto, tornando a navegação mais intuitiva e organizada. 🚀


---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

```bash
# Fork o projeto
git fork

# Crie uma nova branch
git checkout -b minha-feature

# Faça suas alterações e commit
git commit -m 'Minha nova feature'

# Envie para o repositório
git push origin minha-feature
```

Depois, basta abrir um Pull Request 🚀

---

## 📜 Licença

Este projeto está sob a licença MIT.
