"use client"

import { useState, type CSSProperties } from "react"
import { ThreeDNotebook } from "../components/3d-notebook"
import { PRODUCTS } from "../components/notebook-data"

const WHATSAPP_URL = "https://wa.me/5511994952210"

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null)

  return (
    <main>
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#livro" aria-label="Foco Soluções Educacionais - início">
            <img src="/assets/logo-foco.webp" alt="" />
            <span>
              <strong>FOCO</strong>
              <small>coleção Mundo Lyra</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#produtos">Produtos</a>
            <a href="#metodologia">Metodologia</a>
            <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar com consultor</a>
          </nav>
        </header>

        <div id="livro">
          <ThreeDNotebook onSectionChange={setActiveProduct} />
        </div>
      </div>

      <section id="produtos" className="products-section">
        <div className="section-intro">
          <span>produtos em comercialização</span>
          <h2>Ambientes completos.<br />Prontos para transformar a rotina.</h2>
          <p>
            Cada solução Mundo Lyra combina mobiliário, recursos sensoriais e organização pedagógica em um projeto integrado.
          </p>
        </div>

        <div className="products-list">
          {PRODUCTS.map((product, productIndex) => (
            <article
              id={product.id}
              key={product.id}
              className={`product-section ${activeProduct === productIndex ? "is-book-active" : ""}`}
              style={{ "--product": product.color, "--product-soft": product.softColor } as CSSProperties}
            >
              <div className="product-visual">
                <img src={product.image} alt={`Visualização da ${product.label}`} />
                <div className="product-visual-caption">
                  <span>{product.chapter}</span>
                  <p>Projeto de referência<br />Mundo Lyra</p>
                </div>
              </div>

              <div className="product-copy">
                <span className="product-eyebrow">{product.eyebrow}</span>
                <h3>{product.label}</h3>
                <p className="product-lead">{product.sensoryNote}</p>

                <div className="product-highlights">
                  {product.highlights.map((highlight, index) => (
                    <div key={highlight.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h4>{highlight.title}</h4>
                        <p>{highlight.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="product-actions">
                  <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Solicitar orçamento <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button-secondary" href={product.catalog} target="_blank" rel="noreferrer">
                    Baixar catálogo <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              <div className="included-grid">
                <header>
                  <span>composição</span>
                  <h4>O que integra este ambiente</h4>
                </header>
                <ol>
                  {product.items.map((item, index) => (
                    <li key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="metodologia" className="methodology-section">
        <div className="methodology-brand">
          <img src="/assets/logo-mundo-lyra.webp" alt="Mundo Lyra" />
          <div>
            <span>metodologia própria</span>
            <h2>Espaço, experiência<br />e desenvolvimento.</h2>
          </div>
        </div>
        <div className="methodology-grid">
          {[
            ["Base científica", "Neurociência aplicada à educação."],
            ["Desenvolvimento socioemocional", "Formação de valores, empatia e autorregulação."],
            ["Aprendizagem significativa", "Experiências que conectam, engajam e transformam."],
            ["Inovação e propriedade", "Metodologia autoral e registrada."],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <span>vamos criar um espaço que acolhe?</span>
          <h2>Converse com a equipe Foco.</h2>
        </div>
        <div className="footer-contact">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">+55 11 99495-2210</a>
          <a href="mailto:comercial@focosolucoeseducacionais.com.br">comercial@focosolucoeseducacionais.com.br</a>
          <p>Vargem Grande Paulista - SP</p>
        </div>
      </footer>
    </main>
  )
}
