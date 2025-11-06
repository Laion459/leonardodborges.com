# Guia de Implementação — Portfólio Leonardo Dario Borges

> Objetivo: reproduzir, para um contexto de desenvolvedor de software, a mesma experiência imersiva e cinematográfica do site [landonorris.com](https://landonorris.com/), mantendo narrativa, animações e fidelidade visual no nível máximo possível.

## 1. Princípios Gerais

- **Direção de arte:** brutalista, minimalista, tipografia XXL, contraste preto/branco com acento `#00FFFF` (ajustável). Larguras generosas, grids assimétricos, blocos sobrepostos e texturas animadas.
- **Perfomance & UX:** tudo fluido a 60 fps; evitar travamentos com otimização de assets, lazy loading e GSAP bem orquestrado.
- **Responsividade:** experiência desktop prioritária com adaptação mobile fiel; telas menores usam scroll vertical com alternativos animados.
- **Narrativa:** jornada contínua; hero → profundidade vertical → linha do tempo horizontal → seções estáticas intercaladas → galeria dinâmica → CTA/store/footer rico.

## 2. Roadmap Macro

1. **Fundação técnica:** revisar stack (Next 14, Tailwind, GSAP + ScrollTrigger, Locomotive Scroll, SplitType/Lenis se necessário). Avaliar inclusão de WebGL/Canvas para efeitos (por exemplo,lava lamp com fragment shader ou pseudo via CSS/JS).
2. **Hero imersivo:**
   - Fundo orgânico animado (lava lamp / ruído) com máscara.
   - Retrato principal (Leonardo) e elemento “capacete” (pode ser laptop/icone dev) com interplay mouse/touch.
   - Efeito “tap to lock / vertical drive”: inicialmente o scroll é bloqueado, pedindo interação; ao iniciar, aplicar timeline GSAP com parallax profundo.
3. **Seção Assinatura:** transição vertical onde conteúdo “afunda” e surge assinatura (logo LDB estilizada) com textura metálica e animação luminosa.
4. **Seção Manifesto:** blocos com texto manifesto (“Redefinindo limites…”) sobre fundo organico animado; aplicar tipografia duplicada, highlight colorido e movimento de luz.
5. **Linha do tempo horizontal:**
   - Implementar container horizontal que libera scroll só aqui.
   - Cards de tamanhos variados, posicionamento assimétrico, imagens, datas, badges (`On Track`/`Off Track`).
   - Conteúdo: conquistas, projetos, eventos profissionais e pessoais.
   - Animações: entrada individual, hover com zoom/tilt, tooltips.
6. **Seção “On/Off Track” (Serviços/Experiências):**
   - layout split com duas colunas, imagens encarando, tipografia duplicada.
   - Textos adaptados para “Tecnologia / Vida” (ex.: Projetos comerciais x Comunidade).
   - Ao scroll, fixar seção com parallax fino.
7. **Galeria “Capacetes” → “Highlights” dos projetos:**
   - Grid customizado com cards grandes, transições em cascata.
   - Filtragem por ano/stack, carrossel com swipe e scroll snapping.
   - Possibilidade de modal com vídeo/demo.
8. **CTA Store/Parcerias:**
   - Reinterpretar como “Serviços / Parcerias / Mentorias”.
   - Cards com logos (empresas, certificações), lacunas para futuras integrações.
9. **Footer cinematográfico:**
   - Layout em blocos altos, tipografia girando, links redes sociais com ícones animados.
   - Formulário de contato com microinterações.
10. **Mobile parity:**
    - Reimaginar cada animação para touch (use gestures, accent overflow). Ajustes com Lenis ou Smooth Scroll.
11. **Refinamentos finais:** load performance, testes cross-browser, acessibilidade (foco, prefere reduzir motion), SEO.

## 3. Componentização e Arquitetura

- **app/(site)** com page-level containers; considerar layout específico para páginas internas (sobre/projetos/contato) integradas à narrativa principal ou rotas standalone.
- **components/**
  - `HeroScene` (WebGL ou canvas + layers GSAP).
  - `ScrollLockController` (coordena estados “tap to drive”).
  - `SignatureReveal`.
  - `ManifestoSection`.
  - `TimelineHorizontal` com `TimelineCard` (dinâmicos via JSON).
  - `SplitSection` (On/Off track) com props para conteúdo.
  - `HighlightsGrid` / `HelmetGallery` (cards interativos).
  - `PartnersShowcase`, `CTAStore`, `FooterImmersive`.
  - `Cursor`, `Preloader`, `PageTransition` evoluídos.
- **lib/**
  - `animations/` com timelines reutilizáveis.
  - `hooks/` (ex.: `useScrollLock`, `useLenis`, `usePrefersReducedMotion`).
  - `data/` com conteúdo estruturado (timeline, projetos, parceiros, tecnologias) para fácil edição.
- **styles/** se precisarmos de CSS adicional (gradientes complexos, maskings).

## 4. Conteúdo e Assets Necessários

- **Fotografias:**
  - Retrato principal (alta resolução, fundo neutro para recortes).
  - Versões com/sem elementos (ex.: você com notebook, close em rosto).
  - Lifestyle (coworking, palestras, eventos) para timeline.
- **Elementos substituindo o capacete:**
  - Pode ser um laptop futurista, holograma de código, cubo luminoso, etc. Precisamos de renderizações ou fotos estilizadas.
- **Assinatura digital “LDB”:** criar vetor estilizado (SVG) com textura metálica ou glow.
- **Background textures:**
  - Vídeos curtos ou renders de lava lamp / partículas.
  - Alternativa: gerar via shader (pode exigir Three.js + custom fragment shader ou canvas procedural).
- **Ícones animações:** redes sociais, setas, logos de parceiros.
- **Mockups de projetos:** screenshots estilizadas (desktop/mobile) em perspectiva.
- **Tipografia:** garantir licenças (Space Grotesk, Inter, ou buscar fontes mais próximas ao site original).

## 5. Planos de Implementação por Fases

### Fase 1 — Pré-produção
- Reunir/produzir assets (fotos, assinaturas, texturas).
- Definir fontes, ajustar Tailwind tokens (cores, spacing, typescale).
- Criar data structures (timeline, highlights, parceiros, redes).
- Especificar requisitos técnicos (GSAP, Locomotive, event listeners, fallback mobile).

### Fase 2 — Hero + Seção Assinatura
- Implementar preloader multiestágio (logo → retrato → CTA).
- Criar hero com layers animados (fundo, retrato, “capacete”/objeto).
- Implementar “tap to drive” e transição vertical controlada.
- Construir seção assinatura com efeito parallax e glow.

### Fase 3 — Manifesto + Scroll Timeline
- Criar bloco manifesto com texto duplicado e background animado.
- Montar sistema horizontal com Locomotive/GSAP integrados.
- Construir cards timeline (componentização e animações).
- Responsividade: fallback vertical com Snap sections.

### Fase 4 — Seções Estáticas (On/Off, Highlights)
- Desenvolver layout fixo com split imagens confrontando.
- Implementar grid de highlights com filtros/abas.
- Integrar modais/overlays com vídeos/detalhes se houver.

### Fase 5 — CTA Store/Partners + Footer
- Construir blocos CTA com tipografia animada.
- Apresentar parceiros, selos, CTA para contato.
- Finalizar footer cinematográfico.

### Fase 6 — Polimento e QA
- Revisar transições, tempos e easing.
- Performance tuning (GSAP lag smoothing, throttling, imagens otimizadas).
- Acessibilidade: preferências de movimento, foco, descrições.
- Testes multi-device/browsers.
- Preparar scripts de build/deploy, preview Vercel.

## 6. Backlog de Tarefas (Pré-implementação)

- [ ] Definir conjunto final de assets necessários (lista detalhada para o Leonardo produzir ou coletar).
- [ ] Aprovar wireframes/flows para hero, timeline e galerias (pode ser no Figma ou Miro).
- [ ] Pesquisar/selecionar técnica para efeito “lava lamp” (shader x vídeo x canvas).
- [ ] Planejar datasets (JSON/MD) para timeline e highlights.
- [ ] Ajustar tokens Tailwind (typescale, letter spacing, breakpoints).
- [ ] Configurar ferramentas auxiliares (SplitType, Lenis, barba.js se útil).
- [ ] Definir fallback interaction para mobile (ex.: “drag to explore timeline”).

## 7. Próximos Passos Imediatos

1. Validar/ajustar este guia com você.
2. Levantar assets pendentes: fotos adicionais, assinatura, vídeos/texturas.
3. Criar wireframe rápido (mesmo que em papel) para alinharmos proporções/posições.
4. Iniciar implementação da Fase 2 (hero) enquanto assets são preparados.

Com esse blueprint alinhado, conseguimos trabalhar em sprints curtos e iterativos até atingir a fidelidade desejada. Sempre que precisar de algo (imagens, renders, ajustes conceituais), só sinalizar que integramos ao plano.

