# 🧬 Dicionário de Divisões Celulares

Uma aplicação web interativa para estudar os termos essenciais das divisões celulares (mitose e meiose). Desenvolvida como material educativo para estudantes de Biologia.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Termos Incluídos](#termos-incluídos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Este projeto consiste em um dicionário digital ilustrado que aborda os principais conceitos relacionados às divisões celulares. A aplicação foi desenvolvida para auxiliar estudantes na compreensão dos processos de mitose e meiose, apresentando definições claras, características e ilustrações de cada termo.

### Objetivos Educacionais

- Facilitar o aprendizado dos conceitos de divisões celulares
- Fornecer definições precisas e acessíveis
- Criar uma experiência interativa de estudo
- Servir como material de referência para consultas

## ⚡ Funcionalidades

- **Navegação Intuitiva**: Interface limpa e organizada
- **Conteúdo Detalhado**: Definições completas com características principais
- **Busca por Termos**: Acesso direto a cada conceito
- **Design Responsivo**: Adaptável a diferentes dispositivos
- **Material de Referência**: Dicionário completo para download

## 🛠️ Tecnologias

- **Frontend**: React.js
- **Roteamento**: React Router DOM
- **Estilização**: CSS3 / Styled Components
- **Build**: Create React App / Vite
- **Deploy**: Netlify / Vercel

## 📁 Estrutura do Projeto

```
divisoes-celulares/
├── public/
│   ├── images/
│   │   ├── mitose.png
│   │   ├── meiose.png
│   │   └── ...
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Main.jsx
│   │   ├── Item.jsx
│   │   └── Navigation.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── components.css
│   ├── data/
│   │   └── termos.js
│   ├── App.jsx
│   └── index.js
├── docs/
│   └── dicionario-completo.md
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/divisoes-celulares.git
cd divisoes-celulares
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto:
```bash
npm start
# ou
yarn start
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

## 📚 Termos Incluídos

A aplicação aborda os seguintes conceitos essenciais:

### Processos de Divisão
- **Mitose** - Divisão celular para crescimento e reparação
- **Meiose** - Divisão reducional para formação de gametas

### Estruturas Celulares
- **Carioteca** - Membrana nuclear
- **Cromatina** - DNA descondensado no núcleo
- **Cromossomo** - DNA condensado durante a divisão
- **Cromossomos Homólogos** - Pares de cromossomos similares
- **Cromátide** - Estrutura que compõe o cromossomo
- **Cromátides Irmãs** - Cromátides idênticas unidas pelo centrômero

### Estruturas da Divisão
- **Centrômero** - Região de constrição do cromossomo
- **Centrossomo** - Organizador de microtúbulos
- **Fuso Mitótico/Meiótico** - Estrutura que move cromossomos

### Fases da Divisão
- **Prófase** - Condensação cromossômica
- **Metáfase** - Alinhamento dos cromossomos
- **Anáfase** - Separação dos cromossomos
- **Telófase** - Reconstituição nuclear
- **Citocinese** - Divisão do citoplasma

## 🗺️ Rotas da Aplicação

```jsx
/                           # Página inicial
/mitose                     # Mitose
/meiose                     # Meiose
/carioteca                  # Carioteca
/cromatina                  # Cromatina
/cromossomo                 # Cromossomo
/cromossomos-homologos      # Cromossomos Homólogos
/cromatide                  # Cromátide
/cromatides-irmas           # Cromátides Irmãs
/centromero                 # Centrômero
/centrossomo                # Centrossomo
/fuso-mitotico-meiotico     # Fuso Mitótico ou Meiótico
/profase                    # Prófase
/metafase                   # Metáfase
/anafase                    # Anáfase
/telofase                   # Telófase
/citocinese                 # Citocinese
```

## 📖 Uso Educacional

### Para Estudantes
- Consulte os termos durante o estudo
- Use como material de revisão antes de provas
- Acesse definições rápidas durante aulas

### Para Professores
- Material complementar para aulas
- Referência para elaboração de atividades
- Recurso visual para explicações

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Tipos de Contribuição

- 🐛 Correção de bugs
- ✨ Novas funcionalidades
- 📝 Melhorias na documentação
- 🎨 Melhorias de design
- 🔧 Otimizações de performance

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Professores de Biologia pela orientação educacional
- Comunidade open source pelas ferramentas utilizadas
- Colegas de estudo pelas sugestões e feedback

## 📞 Contato

- **Email**: seu.email@exemplo.com
- **LinkedIn**: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

---

**Feito com ❤️ para a educação em Biologia**

> "A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela