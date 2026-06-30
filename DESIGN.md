---
version: alpha
name: Prof. Luiz Felipe
description: Landing page dark-tech para professor de informatica para concursos, com fundo deep-space, acentos cyan/blue/tertiary, tipografia Oswald e componentes glass moderados.
colors:
  deep-space: "#0E0524"
  cyan-glow: "#13BFD3"
  tech-blue: "#246BFE"
  tertiary: "#ffb86b"
  on-tertiary: "#492900"
  binary-purple: "#2D006B"
  on-surface: "#e1e2e9"
  on-surface-variant: "#cbc3d4"
  surface-container-lowest: "#0b0e13"
  surface-container: "#1d2025"
typography:
  display-lg:
    fontFamily: Oswald, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Oswald, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
  headline-xl:
    fontFamily: Oswald, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 56px
  headline-lg:
    fontFamily: Oswald, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
  headline-md:
    fontFamily: Oswald, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
  body-lg:
    fontFamily: Oswald, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Oswald, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  label-caps:
    fontFamily: Oswald, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
  2xl: 18px
  3xl: 22px
  full: 9999px
spacing:
  element-gap: 16px
  gutter: 24px
  card-padding: 32px
  section-gap-mobile: 64px
  section-gap-desktop: 120px
  container-max: 1280px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.lg}"
    padding: 16px 32px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.cyan-glow}"
    rounded: "{rounded.lg}"
    padding: 16px 32px
  glass-panel:
    backgroundColor: "rgba(45, 0, 107, 0.4)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card-padding}"
  nav:
    backgroundColor: "rgba(14, 5, 36, 0.9)"
    textColor: "{colors.on-surface}"
    height: 72px
---

# Prof. Luiz Felipe

## Overview

A interface deve continuar com linguagem dark-tech, direta e confiante. A identidade atual vem do contraste entre deep-space, cyan-glow, tech-blue e tertiary, combinada com Oswald como fonte principal. As melhorias devem preservar essa assinatura e atuar em composição, respiro, hierarquia, estados interativos e responsividade.

## Colors

- **Deep Space:** base escura dominante da página.
- **Cyan Glow:** acento de tecnologia, usado em destaque visual e interação secundária.
- **Tech Blue:** acento de apoio para variedade dentro da mesma família digital.
- **Tertiary:** chamada principal de conversão, usada nos CTAs mais importantes.
- **Surface Container:** camada de cards e painéis sobre o fundo.

## Typography

A tipografia atual foi atualizada para Oswald como fonte principal em títulos, corpo, navegação e labels.

## Layout

Use containers travados em 1280px com gutters de 24px. As seções devem alternar famílias de layout: split assimétrico, grid editorial, chips responsivos, painel de CTA e formulário lateral. Evite repetir três cards idênticos em sequência.

## Elevation & Depth

Profundidade vem de glass panels, bordas translúcidas, blur sutil e sombras tintadas pelo fundo. Não usar sombras pretas pesadas como recurso principal.

## Shapes

A linguagem usa cantos arredondados moderados: botões em `rounded-lg`, cards e painéis entre `rounded-2xl` e `rounded-3xl`, chips em `rounded-xl` ou `rounded-full` quando a função pede.

## Components

- **Primary CTA:** fundo tertiary, texto on-tertiary, estado hover com leve elevação e active com press feedback.
- **Secondary CTA:** borda cyan-glow, fundo translúcido no hover.
- **Glass card:** fundo binary-purple translúcido, borda cyan suave e blur.
- **Course cards:** devem variar largura ou posição em desktop para evitar grid genérico.
- **FAQ/Form:** campos com foco cyan visível e botões de largura estável.

## Do's and Don'ts

- Do manter Oswald como fonte principal e preservar a paleta existente.
- Do melhorar ritmo, alinhamento, responsividade e estados.
- Do preservar IDs de seção e navegação principal.
- Don't trocar identidade visual, cores, fontes, logo textual ou voz da copy.
- Don't criar seções claras isoladas no meio da página.
- Don't usar CTA sem destino quando houver seção correspondente.
