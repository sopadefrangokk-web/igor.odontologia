/**
 * Landing Page - Dr. Igor Mont'Alverne | Cirurgiao-Dentista
 * Arquivo unico .js que injeta HTML, CSS e funcionalidade na pagina.
 */

(function () {
  'use strict';

  // ICONES SVG (azul metalico, minimalista)
  const ICON = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    link: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-.71-7.07l-1.72-1.71 3-3a5 5 0 0 0-7.07-.71l-1.71 1.71 3 3a5 5 0 0 0 .54 7.54"/></svg>`,
    tooth: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M12 22s-4-9-4-7 0-5 4-5 4 5 4 5-4 7-4 7z"/></svg>`,
    sparkle: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M12 22s6-4 6-10V5"/><path d="M5 14.29v4.42a2 2 0 0 0 4 0v-4.42"/><line x1="10" y1="2" x2="12" y2="6"/><line x1="4.93" y1="9.34" x2="7.86" y2="8.33"/><line x1="14" y1="2" x2="12" y2="6"/><line x1="19.07" y1="9.34" x2="16.14" y2="8.33"/></svg>`,
    align: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M21 4H4l3 16 16-3z"/><path d="M14 2l6 6M6 22l6-6"/></svg>`,
    medical: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="3"/></svg>`,
    smile: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M1 9c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5"/><path d="M5 9v5c0 2.8 2.2 5 5 5h2c2.8 0 5-2.2 5-5V9"/></svg>`,
    child: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M16 21V14a6 6 0 0 0-12 0v7"/><circle cx="9" cy="7" r="4"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><polyline points="20 6 9 17 4 12"/></svg>`,
    chat: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    robot: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><rect x="7" y="3" width="10" height="12" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><path d="M12 17h0"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>"
  };

  const css = `
    :root {
      --azul: #1e3a8a;
      --azul-claro: #3b82f6;
      --prata: #94a3b8;
      --prata-claro: #cbd5e1;
      --branco: #ffffff;
      --fundo: #fdfdfd;
      --cinza-escuro: #111827;
      --cinza-medio: #4b5563;
      --cinza-claro: #f3f4f6;
      --sombra: 0 10px 30px -10px rgba(30, 58, 138, 0.08);
      --transicao: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--fundo);
      color: var(--cinza-escuro);
      line-height: 1.7;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; font-weight: 700; }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }
    img { max-width: 100%; display: block; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }

    .icon { color: var(--azul-claro); display: inline-block; vertical-align: middle; }
    .icon svg { color: inherit; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s ease-out; }
    .reveal.active { opacity: 1; transform: translateY(0); }

    header {
      position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
      transition: var(--transicao);
      background: rgba(253, 253, 253, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(30, 58, 138, 0.06);
    }
    .nav-container { display: flex; justify-content: space-between; align-items: center; height: 80px; }
    .logo { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: var(--azul); letter-spacing: -0.5px; }
    .logo span { color: var(--azul-claro); }
    nav ul { display: flex; gap: 32px; }
    nav a { font-size: 0.95rem; font-weight: 500; color: var(--cinza-medio); transition: var(--transicao); position: relative; }
    nav a::after { content: ''; position: absolute; bottom: -6px; left: 0; width: 0; height: 2px; background: var(--azul-claro); transition: var(--transicao); }
    nav a:hover { color: var(--azul); }
    nav a:hover::after { width: 100%; }
    .btn-header { background: var(--azul); color: var(--branco); padding: 10px 22px; border-radius: 50px; font-size: 0.9rem; font-weight: 600; transition: var(--transicao); box-shadow: 0 4px 14px rgba(30, 58, 138, 0.25); }
    .btn-header:hover { background: var(--azul-claro); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(30, 58, 138, 0.35); }
    .mobile-menu { display: none; font-size: 1.5rem; color: var(--cinza-escuro); cursor: pointer; }

    .hero { position: relative; height: 100vh; min-height: 700px; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden; }
    .hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; filter: brightness(0.55); }
    .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%); z-index: -1; }
    .hero-content { max-width: 900px; padding: 0 20px; animation: fadeUp 1s ease-out; }
    .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); color: var(--branco); line-height: 1.15; margin-bottom: 20px; font-weight: 700; }
    .hero h1 span { color: var(--azul-claro); }
    .hero p { font-size: clamp(1rem, 2vw, 1.25rem); color: rgba(255,255,255,0.9); margin-bottom: 32px; font-weight: 300; }
    .cta-group { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .btn { display: inline-block; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 0.95rem; transition: var(--transicao); cursor: pointer; border: none; }
    .btn-primary { background: var(--azul); color: var(--branco); box-shadow: 0 4px 14px rgba(30, 58, 138, 0.3); }
    .btn-primary:hover { background: var(--azul-claro); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(30, 58, 138, 0.4); }
    .btn-outline { background: transparent; color: var(--branco); border: 2px solid rgba(255,255,255,0.5); }
    .btn-outline:hover { border-color: var(--branco); background: rgba(255,255,255,0.1); transform: translateY(-3px); }

    section { padding: 100px 0; }
    .section-title { text-align: center; margin-bottom: 60px; }
    .section-title h2 { font-size: clamp(2rem, 4vw, 3rem); color: var(--azul); margin-bottom: 16px; letter-spacing: -1px; }
    .section-title p { color: var(--cinza-medio); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }
    .divider { width: 60px; height: 3px; background: var(--azul-claro); margin: 12px auto 0; border-radius: 2px; }

    .sobre { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .sobre-texto h3 { font-size: 2rem; color: var(--azul); margin-bottom: 20px; }
    .sobre-texto p { color: var(--cinza-medio); font-size: 1.05rem; margin-bottom: 20px; }
    .sobre-destaques { margin-top: 30px; }
    .sobre-destaques li { display: flex; align-items: center; gap: 12px; color: var(--cinza-medio); font-size: 0.95rem; margin-bottom: 10px; }
    .sobre-destaques li .icon { color: var(--azul-claro); flex-shrink: 0; }
    .sobre-foto { position: relative; }
    .foto-placeholder { width: 100%; height: 500px; background: var(--cinza-claro); border-radius: 24px; overflow: hidden; position: relative; display: flex; align-items: center; justify-content: center; color: var(--cinza-medio); font-size: 1rem; border: 1px solid rgba(30, 58, 138, 0.1); }
    .foto-badge { position: absolute; bottom: 20px; left: 20px; background: var(--branco); padding: 12px 20px; border-radius: 12px; font-size: 0.85rem; font-weight: 600; color: var(--azul); box-shadow: var(--sombra); border: 1px solid var(--prata-claro); }

    .trabalho-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .trabalho-item { position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 1; cursor: pointer; background: var(--cinza-claro); }
    .trabalho-item img { width: 100%; height: 100%; object-fit: cover; transition: var(--transicao); }
    .trabalho-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(30, 58, 138, 0.85), transparent); opacity: 0; transition: var(--transicao); display: flex; align-items: flex-end; padding: 30px; }
    .trabalho-item:hover .trabalho-overlay { opacity: 1; }
    .trabalho-item:hover img { transform: scale(1.05); }
    .trabalho-overlay span { color: var(--branco); font-family: 'Playfair Display', serif; font-size: 1.2rem; }

    .servicos-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; }
    .servico-card { background: var(--branco); padding: 40px 30px; border-radius: 24px; border: 1px solid rgba(30, 58, 138, 0.08); transition: var(--transicao); position: relative; overflow: hidden; }
    .servico-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--azul), var(--azul-claro)); transform: scaleX(0); transition: var(--transicao); transform-origin: left; }
    .servico-card:hover { transform: translateY(-8px); box-shadow: var(--sombra); border-color: var(--azul-claro); }
    .servico-card:hover::before { transform: scaleX(1); }
    .servico-icon { width: 64px; height: 64px; background: var(--cinza-claro); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--prata); transition: var(--transicao); }
    .servico-card:hover .servico-icon { background: var(--azul-claro); color: var(--branco); transform: rotate(5deg) scale(1.1); }
    .servico-card h3 { font-size: 1.3rem; color: var(--cinza-escuro); margin-bottom: 12px; }
    .servico-card p { color: var(--cinza-medio); font-size: 0.95rem; line-height: 1.6; }

    .contato { background: var(--branco); }
    .contato-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .contato-info h3 { font-size: 2rem; color: var(--azul); margin-bottom: 20px; }
    .contato-info p { color: var(--cinza-medio); margin-bottom: 30px; line-height: 1.8; }
    .contato-item { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
    .contato-item .icon { flex-shrink: 0; margin-top: 4px; }
    .contato-item h4 { font-size: 1.05rem; color: var(--cinza-escuro); margin-bottom: 4px; }
    .contato-item p { color: var(--cinza-medio); font-size: 0.95rem; margin: 0; }
    .contato-form { background: var(--fundo); padding: 40px; border-radius: 24px; border: 1px solid rgba(30, 58, 138, 0.06); }
    .contato-form h3 { font-size: 1.5rem; color: var(--cinza-escuro); margin-bottom: 30px; }
    .form-group { margin-bottom: 24px; }
    .form-group label { display: block; font-size: 0.9rem; font-weight: 600; color: var(--cinza-medio); margin-bottom: 10px; }
    .form-group input, .form-group textarea { width: 100%; padding: 14px 18px; border: 1px solid #d1d5db; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 1rem; background: var(--branco); transition: var(--transicao); outline: none; }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--azul-claro); box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
    .form-group textarea { min-height: 140px; resize: vertical; }

    footer { background: var(--cinza-escuro); color: var(--branco); padding: 60px 0 30px; border-top: 1px solid rgba(255,255,255,0.05); }
    .footer-content { display: flex; flex-direction: column; align-items: center; gap: 30px; text-align: center; }
    .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--branco); }
    .footer-logo span { color: var(--azul-claro); }
    .footer-social { display: flex; gap: 20px; }
    .footer-social a { width: 44px; height: 44px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--branco); transition: var(--transicao); font-size: 1.1rem; }
    .footer-social a:hover { background: var(--azul-claro); border-color: var(--azul-claro); transform: translateY(-4px); }
    .footer-copy { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: 20px; }

    .chat-toggle { position: fixed; bottom: 30px; right: 30px; width: 64px; height: 64px; background: var(--azul); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--branco); cursor: pointer; z-index: 9999; box-shadow: 0 8px 24px rgba(30, 58, 138, 0.35); transition: var(--transicao); }
    .chat-toggle:hover { background: var(--azul-claro); transform: scale(1.1) rotate(15deg); }
    .chat-box { position: fixed; bottom: 110px; right: 30px; width: 360px; height: 520px; background: var(--branco); border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); border: 1px solid rgba(30, 58, 138, 0.1); z-index: 9998; display: none; flex-direction: column; overflow: hidden; animation: fadeUp 0.4s ease-out; }
    .chat-header { background: var(--azul); color: var(--branco); padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; }
    .chat-header h4 { font-size: 1rem; font-weight: 600; display: flex; align-items: center; gap: 10px; }
    .chat-close { background: none; border: none; color: var(--branco); cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; }
    .chat-messages { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px; background: #f8fafc; }
    .chat-message { max-width: 85%; padding: 10px 16px; border-radius: 16px; font-size: 0.95rem; line-height: 1.5; animation: fadeUp 0.3s ease-out; }
    .chat-message.user { align-self: flex-end; background: var(--azul); color: var(--branco); border-bottom-right-radius: 4px; }
    .chat-message.ai { align-self: flex-start; background: var(--branco); color: var(--cinza-escuro); border: 1px solid #e5e7eb; border-bottom-left-radius: 4px; }
    .chat-input-area { padding: 16px 20px; background: var(--branco); border-top: 1px solid #e5e7eb; display: flex; gap: 10px; }
    .chat-input { flex: 1; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 12px; font-family: 'Inter', sans-serif; font-size: 0.95rem; outline: none; }
    .chat-input:focus { border-color: var(--azul-claro); }
    .chat-send { width: 40px; height: 40px; background: var(--azul); color: var(--branco); border: none; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transicao); }
    .chat-send:hover { background: var(--azul-claro); }
    .chat-typing { font-size: 0.8rem; color: var(--prata); font-style: italic; margin-left: 8px; animation: pulse 1.5s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

    @media (max-width: 768px) {
      .mobile-menu { display: block; }
      nav { position: fixed; top: 80px; left: -100%; width: 100%; background: var(--branco); border-bottom: 1px solid rgba(30, 58, 138, 0.06); transition: var(--transicao); padding: 30px 20px; }
      nav.active { left: 0; }
      nav ul { flex-direction: column; gap: 20px; }
      nav a { font-size: 1.1rem; }
      section { padding: 60px 0; }
      .sobre { grid-template-columns: 1fr; gap: 40px; }
      .sobre-foto .foto-placeholder { height: 350px; }
      .contato-grid { grid-template-columns: 1fr; gap: 40px; }
      .contato-form { padding: 30px 24px; }
      .chat-box { width: calc(100% - 40px); right: 20px; bottom: 90px; height: 60vh; }
      .hero { height: auto; min-height: 600px; padding: 120px 0 60px; }
    }
  `;

  const html = `
    <header id="header">
      <div class="nav-container container">
        <div class="logo">dr<span>.</span>igormontalverne</div>
        <nav id="nav">
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#trabalho">Meu Trabalho</a></li>
            <li><a href="#servicos">Servicos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <a href="#contato" class="btn btn-header">Agendar</a>
        <div class="mobile-menu" id="mobileMenu">&#9776;</div>
      </div>
    </header>

    <section class="hero">
      <img src="https://images.unsplash.com/photo-1600859257202-9e86d4482084?auto=format&fit=crop&w=1600&q=80" alt="Sorriso" class="hero-bg">
      <div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <h1>Seu sorriso tem identidade.<br><span>Meu cuidado tambem.</span></h1>
        <p>Cirurgiao-Dentista especializado em estetica do sorriso com precisao e naturalidade. Sobral - CE.</p>
        <div class="cta-group">
          <a href="#contato" class="btn btn-primary">Agendar Consulta</a>
          <a href="#trabalho" class="btn btn-outline">Ver Meu Trabalho</a>
        </div>
      </div>
    </section>

    <section id="sobre">
      <div class="container">
        <div class="section-title reveal">
          <h2>Sobre Mim</h2>
          <div class="divider"></div>
          <p>Dr. Igor Mont'Alverne | Cirurgiao-Dentista em Sobral - CE</p>
        </div>
        <div class="sobre reveal">
          <div class="sobre-texto">
            <h3>Estetica do sorriso com precisao e naturalidade</h3>
            <p>Ola, sou o Dr. Igor Mont'Alverne, Cirurgiao-Dentista. Atendo em Sobral - CE com foco em odontologia moderna, humanizada e voltada para a estetica dental com resultados naturais e harmonicos.</p>
            <p>Minha missao e cuidar do seu sorriso com a mesma atencao e dedicacao que dedico ao meu proprio, entregando saude, confianca e bem-estar para cada paciente.</p>
            <ul class="sobre-destaques">
              <li><span class="icon">${ICON.check}</span><span>Facetas e Reab. estetica</span></li>
              <li><span class="icon">${ICON.check}</span><span>Ortodontia e Invisalign</span></li>
              <li><span class="icon">${ICON.check}</span><span>Cirurgias e Proteses</span></li>
              <li><span class="icon">${ICON.check}</span><span>Atendimento acolhedor a comunidade LGBTQ+</span></li>
            </ul>
          </div>
          <div class="sobre-foto">
            <div class="foto-placeholder">
              <span>Foto profissional do Cirurgiao Dentista</span>
            </div>
            <div class="foto-badge">
              ${ICON.location} R. Cel. Mont'Alverne, 905 - Centro, Sobral - CE
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="trabalho">
      <div class="container">
        <div class="section-title reveal">
          <h2>Meu Trabalho</h2>
          <div class="divider"></div>
          <p>Transformacoes de sorrisos com tecnica e arte odontologica</p>
        </div>
        <div class="trabalho-grid">
          <div class="trabalho-item reveal">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" alt="Sorriso 1">
            <div class="trabalho-overlay"><span>Estetica do Sorriso</span></div>
          </div>
          <div class="trabalho-item reveal">
            <img src="https://images.unsplash.com/photo-1598595404523-08ffda257f41?auto=format&fit=crop&w=600&q=80" alt="Sorriso 2">
            <div class="trabalho-overlay"><span>Clareamento Dental</span></div>
          </div>
          <div class="trabalho-item reveal">
            <img src="https://images.unsplash.com/photo-1605577632355-4e6a00b0a92e?auto=format&fit=crop&w=600&q=80" alt="Sorriso 3">
            <div class="trabalho-overlay"><span>Facetas de Porcelana</span></div>
          </div>
          <div class="trabalho-item reveal">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" alt="Sorriso 4">
            <div class="trabalho-overlay"><span>Ortodontia Moderna</span></div>
          </div>
          <div class="trabalho-item reveal">
            <img src="https://images.unsplash.com/photo-1623952677192-6d026c7df02c?auto=format&fit=crop&w=600&q=80" alt="Sorriso 5">
            <div class="trabalho-overlay"><span>Invisalign</span></div>
          </div>
          <div class="trabalho-item reveal">
            <img src="https://images.unsplash.com/photo-1592174482127-9c97e7f3455b?auto=format&fit=crop&w=600&q=80" alt="Sorriso 6">
            <div class="trabalho-overlay"><span>Reabilitacao Oral</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicos">
      <div class="container">
        <div class="section-title reveal">
          <h2>Servicos</h2>
          <div class="divider"></div>
          <p>Cuidados odontologicos modernos para o seu sorriso</p>
        </div>
        <div class="servicos-grid">
          <div class="servico-card reveal">
            <div class="servico-icon">${ICON.tooth}</div>
            <h3>Facetas e Reab. Estetica</h3>
            <p>Transforme a aparencia do seu sorriso com facetas de porcelana e resina, com acabamento natural e duradouro.</p>
          </div>
          <div class="servico-card reveal">
            <div class="servico-icon">${ICON.sparkle}</div>
            <h3>Clareamento Dental</h3>
            <p>Recupere o brilho dos dentes com tecnicas seguras e eficazes, respeitando a saude do esmalte dental.</p>
          </div>
          <div class="servico-card reveal">
            <div class="servico-icon">${ICON.align}</div>
            <h3>Ortodontia e Invisalign</h3>
            <p>Alinhamento dental discreto e eficiente com aparelhos fixos ou alinhadores invisiveis personalizados.</p>
          </div>
          <div class="servico-card reveal">
            <div class="servico-icon">${ICON.medical}</div>
            <h3>Cirurgias e Proteses</h3>
            <p>Procedimentos cirurgicos orais e reabilitacao protetica com precisao e conforto ao paciente.</p>
          </div>
          <div class="servico-card reveal">
            <div class="servico-icon">${ICON.smile}</div>
            <h3>Harmonizacao Orofacial</h3>
            <p>Procedimentos esteticos faciais suaves que valorizam a harmonia do sorriso com a face.</p>
          </div>
          <div class="servico-card reveal">
            <div class="servico-icon">${ICON.child}</div>
            <h3>Odontopediatria</h3>
            <p>Cuidado especializado para os pequenos, criando uma experiencia positiva desde a primeira consulta.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contato" class="contato">
      <div class="container">
        <div class="contato-grid">
          <div class="contato-info reveal">
            <h3>Vamos conversar?</h3>
            <p>Agende sua consulta ou tire suas duvidas. Estou aqui para cuidar do seu sorriso com atencao e carinho.</p>
            <div class="contato-item">
              <span class="icon">${ICON.location}</span>
              <div>
                <h4>Endereco</h4>
                <p>R. Cel. Mont'Alverne, 905 - Centro, Sobral - CE, 62100-000</p>
              </div>
            </div>
            <div class="contato-item">
              <span class="icon">${ICON.phone}</span>
              <div>
                <h4>Telefone</h4>
                <p>(88) 99607-6581</p>
              </div>
            </div>
            <div class="contato-item">
              <span class="icon">${ICON.clock}</span>
              <div>
                <h4>Horario</h4>
                <p>Aberto · Fecha 19:00</p>
              </div>
            </div>
            <div class="contato-item">
              <span class="icon">${ICON.link}</span>
              <div>
                <h4>Site / Bio</h4>
                <p>bio.site/dr.igormontalverne</p>
              </div>
            </div>
            <div style="margin-top: 30px; font-size: 0.85rem; color: var(--cinza-medio);">
              Empresa que acolhe a comunidade LGBTQ+<br>
              Se identifica como empresa de empreendedoras
            </div>
          </div>
          <div class="contato-form reveal">
            <h3>Envie uma mensagem</h3>
            <form id="formContato">
              <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required>
              </div>
              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="seu@email.com" required>
              </div>
              <div class="form-group">
                <label for="contato">Contato (WhatsApp)</label>
                <input type="tel" id="contato" name="contato" placeholder="(88) 9 9999-9999" required>
              </div>
              <div class="form-group">
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" placeholder="Como posso ajudar voce?" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">dr<span>.</span>igormontalverne</div>
          <div class="footer-social">
            <a href="https://instagram.com/dr.igormontalverne" target="_blank" aria-label="Instagram">${ICON.chat}</a>
            <a href="https://wa.me/5588996076581" target="_blank" aria-label="WhatsApp">${ICON.chat}</a>
            <a href="mailto:contato@drigormontalverne.com.br" aria-label="E-mail">${ICON.link}</a>
          </div>
          <div class="footer-copy">
            &copy; 2026 Dr. Igor Mont'Alverne - Cirurgiao-Dentista. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>

    <div class="chat-toggle" id="chatToggle" title="Converse com nossa IA">${ICON.chat}</div>
    <div class="chat-box" id="chatBox">
      <div class="chat-header">
        <h4>${ICON.robot} Assistente IA</h4>
        <button class="chat-close" id="chatClose">${ICON.close}</button>
      </div>
      <div class="chat-messages" id="chatMessages">
        <div class="chat-message ai">
          Ola! Sou o assistente virtual do Dr. Igor Mont'Alverne. Como posso ajudar voce hoje?
        </div>
      </div>
      <div class="chat-input-area">
        <input type="text" id="chatInput" placeholder="Digite sua mensagem..." maxlength="500">
        <button class="chat-send" id="chatSend">${ICON.send}</button>
      </div>
    </div>
  `;

  function init() {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    document.body.insertAdjacentHTML('afterbegin', html);

    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap';
    document.head.appendChild(font);

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
      } else {
        header.style.padding = '0';
        header.style.boxShadow = 'none';
      }
    });

    const mobileMenu = document.getElementById('mobileMenu');
    const nav = document.getElementById('nav');
    mobileMenu.addEventListener('click', () => {
      const active = nav.classList.toggle('active');
      mobileMenu.textContent = active ? '&#10005;' : '&#9776;';
    });
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenu.textContent = '&#9776;';
      });
    });

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const formContato = document.getElementById('formContato');
    formContato.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = formContato.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.opacity = '1';
        alert('Mensagem enviada com sucesso! Em breve retornaremos seu contato.');
        formContato.reset();
      }, 1500);
    });

    const chatToggle = document.getElementById('chatToggle');
    const chatBox = document.getElementById('chatBox');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    const chatId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    chatToggle.addEventListener('click', () => {
      const isOpen = chatBox.style.display === 'flex';
      chatBox.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
      chatBox.style.display = 'none';
    });

    function addMessage(text, type) {
      const div = document.createElement('div');
      div.className = 'chat-message ' + type;
      div.textContent = text;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function setTyping(show) {
      let typing = document.querySelector('.chat-typing');
      if (show && !typing) {
        typing = document.createElement('div');
        typing.className = 'chat-typing';
        typing.textContent = 'IA esta digitando...';
        chatMessages.appendChild(typing);
      } else if (!show && typing) {
        typing.remove();
      }
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      addMessage(text, 'user');
      chatInput.value = '';
      setTyping(true);

      try {
        const response = await fetch('https://memoken.com/webhook/artificial-inteligence/corretion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            'human message': text
          })
        });
        setTyping(false);
        if (response.ok) {
          const data = await response.json();
          let aiText = '';
          if (typeof data === 'string') aiText = data;
          else if (data && data.response) aiText = data.response;
          else if (data && data.message) aiText = data.message;
          else if (data && data.text) aiText = data.text;
          else aiText = JSON.stringify(data);
          addMessage(aiText, 'ai');
        } else {
          addMessage('Desculpe, nao consegui processar sua mensagem no momento. Tente novamente mais tarde.', 'ai');
        }
      } catch (error) {
        setTyping(false);
        addMessage('Erro de conexao com o servidor de IA. Verifique sua internet e tente novamente.', 'ai');
        console.error('Erro no chat IA:', error);
      }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();