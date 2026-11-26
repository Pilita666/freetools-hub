
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const translations = {
  pt: {
    subtitle: "Ferramentas gratuitas para simplificar o teu dia.",
    search: "Pesquisar ferramentas...",
    all: "Todas",
    text: "Texto",
    math: "Matemática",
    conversion: "Conversão",
    security: "Segurança",
    words: "Contador de palavras",
    wordsDesc: "Conta palavras, caracteres e frases.",
    percent: "Calculadora de percentagens",
    percentDesc: "Calcula percentagens facilmente.",
    units: "Conversor de unidades",
    unitsDesc: "Converte quilómetros, metros e centímetros.",
    password: "Gerador de palavras-passe",
    passwordDesc: "Gera palavras-passe aleatórias.",
    enterText: "Escreve ou cola o teu texto aqui...",
    characters: "Caracteres",
    wordsLabel: "Palavras",
    sentences: "Frases",
    number: "Número",
    percentage: "Percentagem",
    calculate: "Calcular",
    result: "Resultado",
    value: "Valor",
    from: "De",
    to: "Para",
    generate: "Gerar palavra-passe",
    copy: "Copiar",
    copied: "Copiado!",
    length: "Comprimento",
    footer: "Ferramentas simples. Resultados rápidos."
  },
  en: {
    subtitle: "Free tools to make your day easier.",
    search: "Search tools...",
    all: "All",
    text: "Text",
    math: "Math",
    conversion: "Conversion",
    security: "Security",
    words: "Word counter",
    wordsDesc: "Count words, characters and sentences.",
    percent: "Percentage calculator",
    percentDesc: "Calculate percentages easily.",
    units: "Unit converter",
    unitsDesc: "Convert kilometres, metres and centimetres.",
    password: "Password generator",
    passwordDesc: "Generate random passwords.",
    enterText: "Write or paste your text here...",
    characters: "Characters",
    wordsLabel: "Words",
    sentences: "Sentences",
    number: "Number",
    percentage: "Percentage",
    calculate: "Calculate",
    result: "Result",
    value: "Value",
    from: "From",
    to: "To",
    generate: "Generate password",
    copy: "Copy",
    copied: "Copied!",
    length: "Length",
    footer: "Simple tools. Fast results."
  },
  es: {
    subtitle: "Herramientas gratuitas para simplificar tu día.",
    search: "Buscar herramientas...",
    all: "Todas",
    text: "Texto",
    math: "Matemáticas",
    conversion: "Conversión",
    security: "Seguridad",
    words: "Contador de palabras",
    wordsDesc: "Cuenta palabras, caracteres y frases.",
    percent: "Calculadora de porcentajes",
    percentDesc: "Calcula porcentajes fácilmente.",
    units: "Conversor de unidades",
    unitsDesc: "Convierte kilómetros, metros y centímetros.",
    password: "Generador de contraseñas",
    passwordDesc: "Genera contraseñas aleatorias.",
    enterText: "Escribe o pega tu texto aquí...",
    characters: "Caracteres",
    wordsLabel: "Palabras",
    sentences: "Frases",
    number: "Número",
    percentage: "Porcentaje",
    calculate: "Calcular",
    result: "Resultado",
    value: "Valor",
    from: "De",
    to: "A",
    generate: "Generar contraseña",
    copy: "Copiar",
    copied: "¡Copiado!",
    length: "Longitud",
    footer: "Herramientas simples. Resultados rápidos."
  }
};

const tools = [
  { id: "words", category: "text", icon: "📝" },
  { id: "percent", category: "math", icon: "％" },
  { id: "units", category: "conversion", icon: "📏" },
  { id: "password", category: "security", icon: "🔐" }
];

function App() {
  const [lang, setLang] = useState("pt");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [activeTool, setActiveTool] = useState(null);

  const [text, setText] = useState("");
  const [value, setValue] = useState("100");
  const [percent, setPercent] = useState("20");
  const [calc, setCalc] = useState(null);

  const [unitValue, setUnitValue] = useState("1");
  const [unitFrom, setUnitFrom] = useState("km");
  const [unitTo, setUnitTo] = useState("m");

  const [passwordLength, setPasswordLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const t = translations[lang];

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const title = t[tool.id].toLowerCase();
      const matchesSearch = title.includes(search.toLowerCase());
      const matchesCategory =
        category === "all" || tool.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, t]);

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const sentenceCount = text.trim()
    ? text.split(/[.!?]+/).filter((item) => item.trim()).length
    : 0;

  const units = {
    km: 1000,
    m: 1,
    cm: 0.01
  };

  const convertedValue =
    Number(unitValue) * units[unitFrom] / units[unitTo];

  function openTool(id) {
    setActiveTool(id);
    setText("");
    setPassword("");
    setCalc(null);
  }

  function closeTool() {
    setActiveTool(null);
  }

  function generatePassword() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

    const randomValues = new Uint32Array(passwordLength);
    window.crypto.getRandomValues(randomValues);

    const result = Array.from(randomValues)
      .map((number) => chars[number % chars.length])
      .join("");

    setPassword(result);
    setCopied(false);
  }

  async function copyPassword() {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function formatNumber(number) {
    return Number(number).toLocaleString(
      lang === "pt" ? "pt-PT" :
      lang === "es" ? "es-ES" : "en-US",
      { maximumFractionDigits: 6 }
    );
  }

  const active = tools.find((tool) => tool.id === activeTool);

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#" onClick={closeTool}>
          <span className="brand-icon">F</span>
          <span>FreeTools <strong>Hub</strong></span>
        </a>

        <select
          className="language-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          aria-label="Language"
        >
          <option value="pt">🇵🇹 PT</option>
          <option value="en">🇬🇧 EN</option>
          <option value="es">🇪🇸 ES</option>
        </select>
      </header>

      <main>
        {!activeTool ? (
          <>
            <section className="hero">
              <div className="hero-badge">✦ FREE ONLINE TOOLS</div>

              <h1>
                {lang === "pt" ? "Tudo o que precisas." :
                 lang === "es" ? "Todo lo que necesitas." :
                 "Everything you need."}
                <br />
                <span>
                  {lang === "pt" ? "Num só lugar." :
                   lang === "es" ? "En un solo lugar." :
                   "In one place."}
                </span>
              </h1>

              <p>{t.subtitle}</p>

              <div className="search-box">
                <span>⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.search}
                />
              </div>
            </section>

            <section className="tools-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">EXPLORE</span>
                  <h2>Ferramentas</h2>
                </div>

                <span className="tool-count">
                  {filteredTools.length} ferramentas
                </span>
              </div>

              <div className="categories">
                {[
                  ["all", t.all],
                  ["text", t.text],
                  ["math", t.math],
                  ["conversion", t.conversion],
                  ["security", t.security]
                ].map(([id, label]) => (
                  <button
                    key={id}
                    className={
                      category === id
                        ? "category active"
                        : "category"
                    }
                    onClick={() => setCategory(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="tools-grid">
                {filteredTools.map((tool) => (
                  <button
                    className="tool-card"
                    key={tool.id}
                    onClick={() => openTool(tool.id)}
                  >
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="tool-card-title">
                      {t[tool.id]}
                    </span>
                    <span className="tool-card-description">
                      {t[tool.id + "Desc"]}
                    </span>
                    <span className="tool-arrow">↗</span>
                  </button>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <p className="empty-state">
                  Não foram encontradas ferramentas.
                </p>
              )}
            </section>

            <section className="ad-placeholder">
              <span>ADVERTISEMENT</span>
              <p>Espaço reservado para publicidade</p>
            </section>
          </>
        ) : (
          <section className="tool-page">
            <button className="back-button" onClick={closeTool}>
              ← Voltar às ferramentas
            </button>

            <div className="tool-panel">
              <div className="tool-panel-icon">
                {active?.icon}
              </div>

              <h1>{t[activeTool]}</h1>
              <p>{t[activeTool + "Desc"]}</p>

              {activeTool === "words" && (
                <div className="work-area">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={t.enterText}
                    rows="8"
                  />

                  <div className="statistics">
                    <div>
                      <strong>{wordCount}</strong>
                      <span>{t.wordsLabel}</span>
                    </div>

                    <div>
                      <strong>{text.length}</strong>
                      <span>{t.characters}</span>
                    </div>

                    <div>
                      <strong>{sentenceCount}</strong>
                      <span>{t.sentences}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === "percent" && (
                <div className="work-area narrow">
                  <label>
                    {t.value}
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                        setCalc(null);
                      }}
                    />
                  </label>

                  <label>
                    {t.percentage}
                    <input
                      type="number"
                      value={percent}
                      onChange={(e) => {
                        setPercent(e.target.value);
                        setCalc(null);
                      }}
                    />
                  </label>

                  <button
                    className="primary"
                    onClick={() =>
                      setCalc(
                        Number(value) * Number(percent) / 100
                      )
                    }
                  >
                    {t.calculate}
                  </button>

                  {calc !== null && (
                    <div className="result">
                      <span>{t.result}</span>
                      <strong>{formatNumber(calc)}</strong>
                    </div>
                  )}
                </div>
              )}

              {activeTool === "units" && (
                <div className="work-area narrow">
                  <label>
                    {t.value}
                    <input
                      type="number"
                      value={unitValue}
                      onChange={(e) => setUnitValue(e.target.value)}
                    />
                  </label>

                  <div className="unit-selectors">
                    <label>
                      {t.from}
                      <select
                        value={unitFrom}
                        onChange={(e) => setUnitFrom(e.target.value)}
                      >
                        <option value="km">Quilómetros (km)</option>
                        <option value="m">Metros (m)</option>
                        <option value="cm">Centímetros (cm)</option>
                      </select>
                    </label>

                    <label>
                      {t.to}
                      <select
                        value={unitTo}
                        onChange={(e) => setUnitTo(e.target.value)}
                      >
                        <option value="km">Quilómetros (km)</option>
                        <option value="m">Metros (m)</option>
                        <option value="cm">Centímetros (cm)</option>
                      </select>
                    </label>
                  </div>

                  <div className="result">
                    <span>{t.result}</span>
                    <strong>{formatNumber(convertedValue)}</strong>
                  </div>
                </div>
              )}

              {activeTool === "password" && (
                <div className="work-area narrow">
                  <label>
                    {t.length}: {passwordLength}
                    <input
                      type="range"
                      min="8"
                      max="40"
                      value={passwordLength}
                      onChange={(e) =>
                        setPasswordLength(Number(e.target.value))
                      }
                    />
                  </label>

                  <button
                    className="primary"
                    onClick={generatePassword}
                  >
                    {t.generate}
                  </button>

                  {password && (
                    <div className="password-result">
                      <code>{password}</code>
                      <button
                        className="secondary"
                        onClick={copyPassword}
                      >
                        {copied ? t.copied : t.copy}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} FreeTools Hub</p>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
