import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const copy = {
  pt: {
    tagline: "Ferramentas úteis. Sem complicações. Sempre gratuitas.",
    search: "Pesquisar ferramentas...",
    popular: "Ferramentas populares",
    all: "Todas as ferramentas",
    free: "Gratuito · Online",
    categories: "Categorias",
    tools: {
      words: ["Contador de palavras", "Texto", "Conta palavras, caracteres e tempo estimado de leitura."],
      percent: ["Calculadora de percentagens", "Calculadoras", "Calcula percentagens de forma rápida."],
      units: ["Conversor de unidades", "Conversores", "Converte quilómetros, milhas, Celsius e Fahrenheit."],
      password: ["Gerador de palavras-passe", "Produtividade", "Gera uma palavra-passe aleatória no teu dispositivo."]
    },
    empty: "Não foram encontradas ferramentas.",
    open: "Abrir ferramenta",
    back: "← Voltar às ferramentas",
    placeholder: "Escreve ou cola o teu texto aqui...",
    chars: "Caracteres",
    charsNoSpaces: "Caracteres (sem espaços)",
    wordsCount: "Palavras",
    reading: "Leitura estimada",
    seconds: "segundos",
    minutes: "minutos",
    value: "Valor",
    percent: "Percentagem (%)",
    result: "Resultado",
    calculate: "Calcular",
    from: "Converter de",
    to: "Converter para",
    convert: "Converter",
    km: "Quilómetros",
    miles: "Milhas",
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    length: "Comprimento",
    temperature: "Temperatura",
    passwordLength: "Comprimento",
    generate: "Gerar palavra-passe",
    copy: "Copiar",
    copied: "Copiado!",
    footer: "Feito para ser simples. As ferramentas funcionam no teu navegador."
  },
  en: {
    tagline: "Useful tools. No fuss. Always free.",
    search: "Search tools...",
    popular: "Popular tools",
    all: "All tools",
    free: "Free · Online",
    categories: "Categories",
    tools: {
      words: ["Word counter", "Text", "Count words, characters and estimated reading time."],
      percent: ["Percentage calculator", "Calculators", "Calculate percentages quickly."],
      units: ["Unit converter", "Converters", "Convert kilometres, miles, Celsius and Fahrenheit."],
      password: ["Password generator", "Productivity", "Generate a random password on your device."]
    },
    empty: "No tools found.",
    open: "Open tool",
    back: "← Back to tools",
    placeholder: "Type or paste your text here...",
    chars: "Characters",
    charsNoSpaces: "Characters (no spaces)",
    wordsCount: "Words",
    reading: "Estimated reading time",
    seconds: "seconds",
    minutes: "minutes",
    value: "Value",
    percent: "Percentage (%)",
    result: "Result",
    calculate: "Calculate",
    from: "Convert from",
    to: "Convert to",
    convert: "Convert",
    km: "Kilometres",
    miles: "Miles",
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    length: "Length",
    temperature: "Temperature",
    passwordLength: "Length",
    generate: "Generate password",
    copy: "Copy",
    copied: "Copied!",
    footer: "Built to be simple. Tools run in your browser."
  },
  es: {
    tagline: "Herramientas útiles. Sin complicaciones. Siempre gratis.",
    search: "Buscar herramientas...",
    popular: "Herramientas populares",
    all: "Todas las herramientas",
    free: "Gratis · Online",
    categories: "Categorías",
    tools: {
      words: ["Contador de palabras", "Texto", "Cuenta palabras, caracteres y tiempo estimado de lectura."],
      percent: ["Calculadora de porcentajes", "Calculadoras", "Calcula porcentajes rápidamente."],
      units: ["Conversor de unidades", "Conversores", "Convierte kilómetros, millas, Celsius y Fahrenheit."],
      password: ["Generador de contraseñas", "Productividad", "Genera una contraseña aleatoria en tu dispositivo."]
    },
    empty: "No se encontraron herramientas.",
    open: "Abrir herramienta",
    back: "← Volver a las herramientas",
    placeholder: "Escribe o pega tu texto aquí...",
    chars: "Caracteres",
    charsNoSpaces: "Caracteres (sin espacios)",
    wordsCount: "Palabras",
    reading: "Tiempo de lectura estimado",
    seconds: "segundos",
    minutes: "minutos",
    value: "Valor",
    percent: "Porcentaje (%)",
    result: "Resultado",
    calculate: "Calcular",
    from: "Convertir de",
    to: "Convertir a",
    convert: "Convertir",
    km: "Kilómetros",
    miles: "Millas",
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    length: "Longitud",
    temperature: "Temperatura",
    passwordLength: "Longitud",
    generate: "Generar contraseña",
    copy: "Copiar",
    copied: "¡Copiado!",
    footer: "Hecho para ser sencillo. Las herramientas funcionan en tu navegador."
  }
};

const ids = ["words", "percent", "units", "password"];
const icon = { words: "Aa", percent: "%", units: "↔", password: "✳" };

function App() {
  const [lang, setLang] = useState("pt");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);
  const t = copy[lang];

  const visible = useMemo(() => ids.filter(id => {
    const [name, category, desc] = t.tools[id];
    return `${name} ${category} ${desc}`.toLowerCase().includes(query.toLowerCase());
  }), [query, t]);

  return <div className="app">
    <header className="topbar">
      <button className="brand" onClick={() => setActive(null)} aria-label="FreeTools Hub home">
        <span className="brand-mark">F</span><span>FreeTools <b>Hub</b></span>
      </button>
      <nav className="nav">
        <span className="nav-label">FREE ONLINE TOOLS</span>
        <select value={lang} onChange={e => {setLang(e.target.value); setActive(null);}} aria-label="Language">
          <option value="pt">🇵🇹 PT</option><option value="en">🇬🇧 EN</option><option value="es">🇪🇸 ES</option>
        </select>
      </nav>
    </header>

    <main>
      <section className="hero">
        <div className="eyebrow"><span className="pulse"></span> FREE TOOLS FOR EVERYDAY</div>
        <h1>{lang === "pt" ? <>Tudo o que precisas.<br/><em>Sem pagar nada.</em></> : lang === "en" ? <>Everything you need.<br/><em>Nothing to pay.</em></> : <>Todo lo que necesitas.<br/><em>Sin pagar nada.</em></>}</h1>
        <p>{t.tagline}</p>
        <div className="search-wrap">
          <span>⌕</span><input value={query} onChange={e => {setQuery(e.target.value); setActive(null);}} placeholder={t.search}/>
          <kbd>⌘ K</kbd>
        </div>
        <div className="hero-meta"><span>✓ {lang === "pt" ? "100% gratuito" : lang === "en" ? "100% free" : "100% gratis"}</span><span>✓ {lang === "pt" ? "Sem instalação" : lang === "en" ? "No installation" : "Sin instalación"}</span><span>✓ {lang === "pt" ? "Privacidade primeiro" : lang === "en" ? "Privacy first" : "Privacidad primero"}</span></div>
      </section>

      <section className="content">
        {active ? <ToolView id={active} t={t} lang={lang} onBack={() => setActive(null)}/> : <>
          <div className="section-heading"><div><div className="eyebrow muted">{t.categories}</div><h2>{query ? t.all : t.popular}</h2></div><span className="count">{visible.length.toString().padStart(2,"0")} TOOLS</span></div>
          <div className="tool-grid">
            {visible.map(id => <button className="tool-card" key={id} onClick={() => setActive(id)}>
              <span className="tool-icon">{icon[id]}</span><span className="tool-category">{t.tools[id][1]}</span>
              <strong>{t.tools[id][0]}</strong><span className="tool-desc">{t.tools[id][2]}</span>
              <span className="card-bottom"><span>{t.free}</span><b>↗</b></span>
            </button>)}
          </div>
          {visible.length === 0 && <div className="empty">{t.empty}</div>}
          <div className="ad-slot"><span>ADVERTISEMENT</span><p>{lang === "pt" ? "Espaço reservado para publicidade" : lang === "en" ? "Advertising space" : "Espacio reservado para publicidad"}</p><small>{lang === "pt" ? "A publicidade será ativada apenas após aprovação no Google AdSense." : lang === "en" ? "Ads will be enabled only after Google AdSense approval." : "La publicidad se activará solo después de la aprobación de Google AdSense."}</small></div>
        </>}
      </section>
    </main>

    <footer><div className="footer-brand"><span className="brand-mark small">F</span> FreeTools Hub</div><span>{t.footer}</span><span>© {new Date().getFullYear()} FreeTools Hub</span></footer>
  </div>;
}

function ToolView({id, t, lang, onBack}) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("150");
  const [percent, setPercent] = useState("20");
  const [calc, setCalc] = useState(null);
  const [unitFrom, setUnitFrom] = useState("km");
  const [unitTo, setUnitTo] = useState("mi");
  const [unitValue, setUnitValue] = useState("10");
  const [converted, setConverted] = useState(null);
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingSeconds = Math.ceil(words / 3.5);
  const reading = readingSeconds < 60 ? `${readingSeconds} ${t.seconds}` : `${Math.ceil(readingSeconds/60)} ${t.minutes}`;

  function convert() {
    const n = Number(unitValue);
    if (!Number.isFinite(n)) return setConverted(null);
    let result = n;
    if (unitFrom === "km" && unitTo === "mi") result = n * 0.621371;
    if (unitFrom === "mi" && unitTo === "km") result = n / 0.621371;
    if (unitFrom === "c" && unitTo === "f") result = n * 9/5 + 32;
    if (unitFrom === "f" && unitTo === "c") result = (n - 32) * 5/9;
    setConverted(result.toLocaleString(lang === "pt" ? "pt-PT" : lang === "es" ? "es-ES" : "en-US", {maximumFractionDigits: 4}));
  }
  function makePassword() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";
    const bytes = new Uint32Array(length);
    crypto.getRandomValues(bytes);
    setPassword(Array.from(bytes, n => chars[n % chars.length]).join(""));
    setCopied(false);
  }
  async function copyPassword() {
    try { await navigator.clipboard.writeText(password); setCopied(true); }
    catch { setCopied(false); }
  }

  return <div className="tool-panel">
    <button className="back" onClick={onBack}>{t.back}</button>
    <div className="tool-panel-head"><span className="tool-icon large">{icon[id]}</span><div><div className="eyebrow muted">{t.tools[id][1]}</div><h2>{t.tools[id][0]}</h2><p>{t.tools[id][2]}</p></div></div>

    {id === "words" && <div className="work-area">
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder={t.placeholder}/>
      <div className="stats">
        <Stat label={t.wordsCount} value={words}/><Stat label={t.chars} value={text.length}/><Stat label={t.charsNoSpaces} value={text.replace(/\s/g,"").length}/><Stat label={t.reading} value={reading}/>
      </div>
    </div>}

    {id === "percent" && <div className="work-area narrow">
      <label>{t.value}<input type="number" value={value} onChange={e => setValue(e.target.value)}/></label>
      <label>{t.percent}<input type="number" value={percent} onChange={e => setPercent(e.target.value}/></label>
      <button className="primary" onClick={() => setCalc(Number(value) * Number(percent) / 100)}>{t.calculate}</button>
      {calc !== null && <div className="result"><span>{t.result}</span><strong>{calc.toLocaleString(lang === "pt" ? "pt-PT" : lang === "es" ? "es-ES" : "en-US")}</strong></div>}
    </div>}

    {id === "units" && <div className="work-area narrow">
      <label>{t.value}<input type="number" value={unitValue} onChange={e => setUnitValue(e.target.value)}/></label>
      <div className="unit-row"><label>{t.from}<select value={unitFrom} onChange={e => {setUnitFrom(e.target.value);setConverted(null);}}><option value="km">{t.km}</option><option value="mi">{t.miles}</option><option value="c">{t.celsius}</option><option value="f">{t.fahrenheit}</option></select></label><label>{t.to}<select value={unitTo} onChange={e => {setUnitTo(e.target.value);setConverted(null);}}><option value="mi">{t.miles}</option><option value="km">{t.km}</option><option value="f">{t.fahrenheit}</option><option value="c">{t.celsius}</option></select></label></div>
      <button className="primary" onClick={convert}>{t.convert}</button>
      {converted !== null && <div className="result"><span>{t.result}</span><strong>{converted}</strong></div>}
      <p className="hint">{lang === "pt" ? "Nota: escolhe unidades da mesma categoria (comprimento ou temperatura)." : lang === "en" ? "Note: choose units from the same category (length or temperature)." : "Nota: elige unidades de la misma categoría (longitud o temperatura)."}</p>
    </div>}

    {id === "password" && <div className="work-area narrow">
      <label>{t.passwordLength}: <b>{length}</b><input type="range" min="8" max="32" value={length} onChange={e => setLength(Number(e.target.value))}/></label>
      <button className="primary" onClick={makePassword}>{t.generate}</button>
      {password && <div className="password-result"><code>{password}</code><button onClick={copyPassword}>{copied ? t.copied : t.copy}</button></div>}
      <p className="hint">{lang === "pt" ? "A palavra-passe é gerada localmente e não é enviada para um servidor." : lang === "en" ? "The password is generated locally and is not sent to a server." : "La contraseña se genera localmente y no se envía a ningún servidor."}</p>
    </div>}
  </div>;
}

function Stat({label, value}) { return <div className="stat"><span>{label}</span><strong>{value}</strong></div>; }

createRoot(document.getElementById("root")).render(<App/>);
