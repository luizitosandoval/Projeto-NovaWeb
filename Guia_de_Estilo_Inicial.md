# 1. Paleta de Cores (Regra 60-30-10)
A regra 60-30-10 distribui as cores em três papéis: uma cor dominante que ocupa a maior parte da interface (fundos, áreas amplas), uma cor secundária que equilibra e apoia elementos estruturais (cards, navegação, blocos de conteúdo) e uma cor de destaque usada com moderação para chamar atenção (botões CTA, links, ícones importantes).

| Papel | Porcentagem | Cor | HEX | Justificativa |
|---|---|---|---|---|
| Dominante | 60% | Azul Noite Profundo | `#0F172A` | Transmite profissionalismo, seriedade e confiança — valores esperados de um estúdio de desenvolvimento. Atua como cor de fundo principal, oferecendo alto contraste com textos claros e dando à interface um aspecto moderno e "tech". |
| Secundária | 30% | Cinza Claro Neutro | `#F1F5F9` | Cor suave e arejada que equilibra a dominante escura, usada em cards, seções alternadas e áreas de leitura. Reduz a fadiga visual e mantém o layout leve sem competir com o destaque. |
| Destaque | 10% | Ciano Elétrico | `#06B6D4` | Cor vibrante e tecnológica (lembra neon/código), reservada para CTAs, links ativos, ícones de ação e microinterações. Cria pontos de foco visuais sem poluir a interface, reforçando a identidade "dev". |

# Combinações recomendadas
- Texto sobre fundo dominante (`#0F172A`): branco `#FFFFFF` ou cinza claro `#F1F5F9`.
- Texto sobre fundo secundário (`#F1F5F9`): azul noite `#0F172A` ou cinza médio `#475569`.
- Botões/links de destaque: fundo `#06B6D4` com texto `#FFFFFF`.
- Hover em elementos de destaque: escurecer para `#0891B2`.

# 2. Tipografia (Google Fonts)
A combinação de uma fonte serifada moderna para títulos e uma sans-serif geométrica para corpo cria hierarquia clara: os títulos ganham personalidade e autoridade (ideal para um estúdio que se posiciona como "criativo + técnico"), enquanto o corpo mantém legibilidade em blocos longos de texto.

| Uso | Fonte | Peso principal | Justificativa |
|---|---|---|---|
| Títulos (headings) | Playfair Display | 700 (Bold) | Serifada contemporânea com alto contraste entre traços finos e grossos, transmite sofisticação e criatividade. Ideal para títulos de seções, hero e headings principais — diferencia o estúdio de competidores que usam apenas sans-serif. |
| Corpo de texto (body) | Inter | 400 (Regular) e 500 (Medium) | Sans-serif desenhada especificamente para telas, com excelente legibilidade em vários tamanhos. Amplamente usada em produtos digitais, possui ótima renderização em resoluções variadas e suporta bem textos longos em parágrafos, botões e navegação. |

# Escala tipográfica sugerida

| Nível | Tamanho | Fonte | Uso |
|---|---|---|---|
| H1 (Hero) | 48px / 3rem | Playfair Display 700 | Título principal da página |
| H2 | 36px / 2.25rem | Playfair Display 700 | Títulos de seção |
| H3 | 24px / 1.5rem | Playfair Display 700 | Subtítulos |
| Body grande | 18px / 1.125rem | Inter 400 | Parágrafos de destaque |
| Body padrão | 16px / 1rem | Inter 400 | Texto corrido |
| Body pequeno | 14px / 0.875rem | Inter 400 | Legendas, metadados |
| Botão/Link | 16px / 1rem | Inter 500 | CTAs e navegação |

# Como importar no HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

# Exemplo de uso no CSS

```css
:root {
  --color-dominante: #0F172A;
  --color-secundaria: #F1F5F9;
  --color-destaque: #06B6D4;
  --color-destaque-hover: #0891B2;

  --font-titulo: 'Playfair Display', Georgia, serif;
  --font-corpo: 'Inter', system-ui, -apple-system, sans-serif;
}

h1, h2, h3 {
  font-family: var(--font-titulo);
  font-weight: 700;
  color: var(--color-dominante);
}

body {
  font-family: var(--font-corpo);
  font-weight: 400;
  background-color: var(--color-secundaria);
  color: var(--color-dominante);
  line-height: 1.6;
}
```

# 3. Estrutura de Pastas do Projeto

```
novaweb-projeto-inicial/
├── assets/
│   ├── images/      # Fotos, ilustrações, mockups, banners
│   └── icons/       # Ícones SVG, sprites, favicons
├── css/             # Folhas de estilo (ex.: style.css, reset.css)
├── js/              # Scripts (ex.: main.js, modules/)
├── Guia_de_Estilo_Inicial.md
├── NOTAS_ESTUDO.md
└── README.md
```

### Descrição de cada pasta

- `/assets/images/` — Armazena todas as imagens estáticas do projeto: fotos, ilustrações, mockups de telas, banners de hero, imagens de blog. Manter isolado em `/assets` facilita o versionamento e a organização por tipo.
- `/assets/icons/` — Ícones vetoriais (SVG), sprites de ícones e favicons. Separar dos images evita misturar bitmaps com vetores e simplifica pipelines de otimização.
- `/css/` — Folhas de estilo do projeto. Convenção sugerida: `style.css` (principal), `reset.css` (normalização), e arquivos modulares por componente ou seção (`header.css`, `footer.css`).
- `/js/` — Scripts JavaScript do projeto. Convenção sugerida: `main.js` (entry point) e pasta `modules/` para componentes isolados.

Próximos passos sugeridos: definir logotipo oficial, criar arquivo CSS base aplicando as variáveis deste guia, e produzir um conjunto inicial de componentes (botão, card, navbar) seguindo as combinações de cor aqui documentadas.
