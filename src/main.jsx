
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [language, setLanguage] = useState("pt");
  const [tool, setTool] = useState("home");
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [password, setPassword] = useState("");

  const translations = {
    pt: {
      title: "FreeTools Hub",
      subtitle: "Ferramentas gratuitas para o teu dia a dia",
      home: "Início",
      counter: "Contador de palavras",
      percentage: "Calculadora de percentagens",
      converter: "Conversor de unidades",
      password: "Gerador de palavras-passe",
      enterText: "Escreve ou cola o teu texto",
      words: "Palavras",
      characters: "Caracteres",
      number: "Número",
      percent: "Percentagem",
      calculate: "Calcular",
      length: "Comprimento",
      generate: "Gerar palavra-passe",
      copy: "Copiar",
      welcome: "Bem-vindo ao FreeTools Hub",
      description: "Escolhe uma ferramenta gratuita para começar.",
      from: "De",
      to: "Para",
      footer: "FreeTools Hub — Ferramentas gratuitas"
    },
    en: {
      title: "FreeTools Hub",
      subtitle: "Free tools for your everyday life",
      home: "Home",
      counter: "Word Counter",
      percentage: "Percentage Calculator",
      converter: "Unit Converter",
      password: "Password Generator",
      enterText: "Write or paste your text",
      words: "Words",
      characters: "Characters",
      number: "Number",
      percent: "Percentage",
      calculate: "Calculate",
      length: "Length",
      generate: "Generate password",
      copy: "Copy",
      welcome: "Welcome to FreeTools Hub",
      description: "Choose a free tool to get started.",
      from: "From",
      to: "To",
      footer: "FreeTools Hub — Free tools"
    },
    es: {
      title: "FreeTools Hub",
      subtitle: "Herramientas gratuitas para tu día a día",
      home: "Inicio",
      counter: "Contador de palabras",
      percentage: "Calculadora de porcentajes",
      converter: "Conversor de unidades",
      password: "Generador de contraseñas",
      enterText: "Escribe o pega tu texto",
      words: "Palabras",
      characters: "Caracteres",
      number: "Número",
      percent: "Porcentaje",
      calculate: "Calcular",
      length: "Longitud",
      generate: "Generar contraseña",
      copy: "Copiar",
      welcome: "Bienvenido a FreeTools Hub",
      description: "Elige una herramienta gratuita para comenzar.",
      from: "De",
      to: "A",
      footer: "FreeTools Hub — Herramientas gratuitas"
    }
  };

  const t = translations[language];

  function calculatePercentage() {
    const n = Number(value);
    const p = Number(percent);
    if (value === "" || percent === "" || !Number.isFinite(n) || !Number.isFinite(p)) {
      setResult("Valores inválidos");
      return;
    }
    setResult(String((n * p) / 100));
  }

  function convertUnits() {
    const n = Number(value);
    if (value === "" || !Number.isFinite(n)) {
      setResult("Valor inválido");
      return;
    }
    const units = {
      km: 1000,
      m: 1,
      cm: 0.01
    };
    const converted = (n * units[fromUnit]) / units[toUnit];
    setResult(String(Number(converted.toFixed(6))));
  }

  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");

  function generatePassword() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";
    let generated = "";
    for (let i = 0; i < passwordLength; i++) {
      generated += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(generated);
  }

  function reset() {
    setValue("");
    setPercent("");
    setResult("");
    setText("");
    setPassword("");
  }

  const tools = [
    { id: "counter", name: t.counter, icon: "📝" },
    { id: "percentage", name: t.percentage, icon: "％" },
    { id: "converter", name: t.converter, icon: "📏" },
    { id: "password", name: t.password, icon: "🔐" }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="brand" onClick={() => { setTool("home"); reset(); }}>
          <span className="logo">FT</span>
          <div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </div>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </header>

      <main>
        <nav className="navigation">
          <button onClick={() => { setTool("home"); reset(); }}>
            {t.home}
          </button>
          {tools.map(item => (
            <button key={item.id} onClick={() => { setTool(item.id); reset(); }}>
              {item.icon} {item.name}
            </button>
          ))}
        </nav>

        {tool === "home" && (
          <section className="welcome">
            <span className="hero-icon">⚡</span>
            <h2>{t.welcome}</h2>
            <p>{t.description}</p>
            <div className="tool-grid">
              {tools.map(item => (
                <button className="tool-card" key={item.id}
                  onClick={() => { setTool(item.id); reset(); }}>
                  <span>{item.icon}</span>
                  <strong>{item.name}</strong>
                  <small>Utilizar ferramenta →</small>
                </button>
              ))}
            </div>
          </section>
        )}

        {tool === "counter" && (
          <section className="tool-panel">
            <h2>📝 {t.counter}</h2>
            <textarea
              placeholder={t.enterText}
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <div className="stats">
              <div><strong>{text.trim() ? text.trim().split(/\s+/).length : 0}</strong><span>{t.words}</span></div>
              <div><strong>{text.length}</strong><span>{t.characters}</span></div>
            </div>
          </section>
        )}

        {tool === "percentage" && (
          <section className="tool-panel">
            <h2>％ {t.percentage}</h2>
            <label>{t.number}
              <input type="number" value={value}
                onChange={e => { setValue(e.target.value); setResult(""); }} />
            </label>
            <label>{t.percent}
              <input type="number" value={percent}
                onChange={e => { setPercent(e.target.value); setResult(""); }} />
            </label>
            <button className="primary" onClick={calculatePercentage}>{t.calculate}</button>
            {result !== "" && <div className="result">{result}</div>}
          </section>
        )}

        {tool === "converter" && (
          <section className="tool-panel">
            <h2>📏 {t.converter}</h2>
            <label>{t.number}
              <input type="number" value={value}
                onChange={e => { setValue(e.target.value); setResult(""); }} />
            </label>
            <div className="unit-row">
              <label>{t.from}
                <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
                  <option value="km">Quilómetros</option>
                  <option value="m">Metros</option>
                  <option value="cm">Centímetros</option>
                </select>
              </label>
              <label>{t.to}
                <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
                  <option value="km">Quilómetros</option>
                  <option value="m">Metros</option>
                  <option value="cm">Centímetros</option>
                </select>
              </label>
            </div>
            <button className="primary" onClick={convertUnits}>{t.calculate}</button>
            {result !== "" && <div className="result">{result}</div>}
          </section>
        )}

        {tool === "password" && (
          <section className="tool-panel">
            <h2>🔐 {t.password}</h2>
            <label>{t.length}: {passwordLength}
              <input type="range" min="8" max="40"
                value={passwordLength}
                onChange={e => setPasswordLength(Number(e.target.value))} />
            </label>
            <button className="primary" onClick={generatePassword}>{t.generate}</button>
            {password && (
              <div className="password-result">
                <code>{password}</code>
                <button onClick={() => navigator.clipboard?.writeText(password)}>{t.copy}</button>
              </div>
            )}
          </section>
        )}
      </main>

      <footer>{t.footer} © {new Date().getFullYear()}</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
