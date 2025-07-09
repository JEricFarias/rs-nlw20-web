# NLW Agents

NLW Agents é um projeto web desenvolvido durante o evento Next Level Week (NLW) da Rocketseat, utilizando tecnologias modernas de desenvolvimento web. 🚀

## Tecnologias e Bibliotecas Principais 📚

- **React:** Uma biblioteca central para construir a interface do usuário com uma arquitetura baseada em componentes. ⚛️
- **TypeScript:** Fornece tipagem estática ao código JavaScript, melhorando a confiabilidade do código e a experiência do desenvolvedor. ✅
- **Vite:** Uma ferramenta de build rápida que acelera significativamente o desenvolvimento e fornece builds otimizados. 🛠️
- **React Router:** Permite a navegação e o roteamento dentro do aplicativo, permitindo que os usuários se movam entre diferentes telas. 🗺️
- **@tanstack/react-query:** Gerencia o estado do servidor, incluindo busca de dados, caching e atualização, para lidar eficientemente com dados de APIs. 📦
- **Tailwind CSS:** Um framework CSS utility-first para estilizar o aplicativo com uma abordagem altamente personalizável e eficiente. 🎨
- **clsx e tailwind-merge:** Utilitários para construir nomes de classes dinamicamente e lidar com conflitos de classes do Tailwind CSS. ✨
- **lucide-react:** Oferece uma biblioteca de ícones para uso na interface do usuário, aprimorando os elementos visuais. 🖼️
- **Biome:** Uma ferramenta para formatação de código e linting, garantindo consistência do código e identificando problemas potenciais precocemente. 🧹
- **pnpm:** O gerenciador de pacotes para gerenciar as dependências do projeto, conhecido por sua velocidade e eficiência. 🚀

## Configuração e Execução ⚙️

Para executar o projeto localmente, siga estes passos:

1.  **Clone the repository:**

```bash
git clone git@github.com:JEricFarias/rs-nlw20-web.git web
cd web
```

2.  **Install dependencies:**

```bash
pnpm install
```

3.  **Start the development server:**

```bash
pnpm dev
```

The application should now be accessible in your browser at `http://localhost:5173`.

## Linting and Formatting

To maintain code quality and consistency, the project uses Biome for linting and formatting. Use these commands:

- **Linting:** `pnpm biome lint` (identifies potential code issues)
- **Formatting:** `pnpm biome format --write` (automatically formats code to adhere to project style)
