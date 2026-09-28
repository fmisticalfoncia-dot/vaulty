(() => {
  const installCss = `
  .vault-install-btn{display:none;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(201,177,125,.55);background:transparent;color:#f4f0e8;border-radius:999px;padding:10px 14px;font:inherit;font-size:10px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;margin-left:10px}
  .vault-install-btn.ready{display:inline-flex}.vault-install-btn:hover{border-color:#c9b17d;color:#c9b17d}
  .vault-install-note{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:9999;max-width:min(92vw,520px);background:#11100f;color:#f4f0e8;border:1px solid rgba(201,177,125,.45);box-shadow:0 20px 60px rgba(0,0,0,.45);padding:18px 20px;font:13px/1.55 Arial,sans-serif;display:none}
  .vault-install-note strong{display:block;margin-bottom:6px}.vault-install-note button{margin-top:10px;border:1px solid rgba(244,240,232,.2);background:#f4f0e8;color:#080808;padding:9px 12px;cursor:pointer;text-transform:uppercase;font-size:10px;letter-spacing:.12em}
  @media(max-width:800px){.vault-install-btn{display:none!important}.vault-install-note{bottom:14px}}
  `;
  const style=document.createElement('style'); style.textContent=installCss; document.head.appendChild(style);

  let deferredPrompt=null;
  const addButton=()=>{
    if(document.getElementById('vaultInstallBtn')) return;
    const b=document.createElement('button'); b.id='vaultInstallBtn'; b.className='vault-install-btn'; b.type='button'; b.textContent='Install VAULT';
    const login=document.querySelector('a.login');
    if(login && login.parentNode) login.parentNode.insertBefore(b, login);
    else document.querySelector('.nav')?.appendChild(b);
    b.addEventListener('click', async()=>{
      if(deferredPrompt){ deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; b.classList.remove('ready'); return; }
      if(/iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream){
        showNote('<strong>Install VAULT on iPhone</strong>Open the Share menu in Safari, then choose <b>Add to Home Screen</b>.');
      }
    });
  };
  const showNote=(html)=>{
    let n=document.getElementById('vaultInstallNote');
    if(!n){n=document.createElement('div');n.id='vaultInstallNote';n.className='vault-install-note';document.body.appendChild(n)}
    n.innerHTML=html+'<br><button type="button" id="vaultInstallClose">Close</button>'; n.style.display='block'; document.getElementById('vaultInstallClose').onclick=()=>n.style.display='none';
  };
  window.addEventListener('beforeinstallprompt', e=>{e.preventDefault();deferredPrompt=e;addButton();setTimeout(()=>document.getElementById('vaultInstallBtn')?.classList.add('ready'),200)});
  window.addEventListener('appinstalled',()=>{document.getElementById('vaultInstallBtn')?.remove();deferredPrompt=null;});
  document.addEventListener('DOMContentLoaded',()=>{
    addButton();
    if('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
  });
})();
