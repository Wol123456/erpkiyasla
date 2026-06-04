// compare.js — Karşılaştırma motoru

let mode = 2;
let chosen = [];

function setMode(n) {
  mode = n;
  chosen = [];
  document.querySelectorAll('.mode-btn').forEach((b, i) => b.classList.toggle('sel', i === n - 2));
  document.getElementById('h-n').textContent = n;
  document.querySelectorAll('.prod-chip').forEach(c => c.classList.remove('chosen'));
  document.getElementById('cnt-badge').textContent = '0 seçildi';
  document.getElementById('comp-panel').style.display = 'none';
  document.getElementById('empty-state').style.display = 'block';
  document.getElementById('picker-hint').innerHTML =
    `👆 Karşılaştırmak istediğiniz <span id="h-n" style="color:var(--tq);font-weight:500">${n}</span> ürünü seçin`;
}

function toggleProduct(id) {
  const chip = document.querySelector(`[data-id="${id}"]`);
  if (chosen.includes(id)) {
    chosen = chosen.filter(x => x !== id);
    chip.classList.remove('chosen');
  } else {
    if (chosen.length >= mode) {
      const first = chosen.shift();
      document.querySelector(`[data-id="${first}"]`).classList.remove('chosen');
    }
    chosen.push(id);
    chip.classList.add('chosen');
  }
  document.getElementById('cnt-badge').textContent = `${chosen.length} seçildi`;
  if (chosen.length === mode) {
    renderComparison();
  } else {
    document.getElementById('comp-panel').style.display = 'none';
    document.getElementById('empty-state').style.display = 'block';
  }
}

function getProduct(id) {
  for (const v of VENDORS) {
    for (const p of v.products) {
      if (p.id === id) return { ...p, vcolor: v.color };
    }
  }
  return null;
}

function renderStars(s) {
  return s
    .replace(/★/g, '<span style="color:#F0A500">★</span>')
    .replace(/½/g, '<span style="color:#F0A500;font-size:10px">½</span>');
}

function renderComparison() {
  const prods = chosen.map(id => getProduct(id));
  const n = prods.length;

  document.getElementById('empty-state').style.display = 'none';
  const panel = document.getElementById('comp-panel');
  panel.style.display = 'block';

  // Scroll to comparison
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Header cards
  const hg = document.getElementById('header-grid');
  hg.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  const bestScore = Math.max(...prods.map(p => p.skor));

  hg.innerHTML = prods.map(p => `
    <div class="erp-header-card ${p.skor === bestScore ? 'top' : ''}">
      ${p.skor === bestScore ? '<div class="top-badge">En Yüksek Puan</div>' : ''}
      <div class="ehc-icon" style="background:${p.vcolor}">${p.short}</div>
      <div class="ehc-name">${p.label}</div>
      <div class="ehc-vendor">${p.vendor}</div>
      <div class="ehc-score">${p.skor}<span>/10</span></div>
      <div class="ehc-stars">${renderStars(p.stars)}</div>
      <div class="ehc-tag">${p.olcek}</div>
      <div class="ehc-tag">${p.bulut ? '☁️ Bulut' : '🖥 On-premise'}</div>
    </div>`).join('');

  // Score table
  const cats = ['kullanim', 'fiyat', 'entegrasyon', 'mobil', 'destek'];
  const catLabels = ['Kullanım Kolaylığı', 'Fiyat / Performans', 'Entegrasyon Gücü', 'Mobil / Bulut', 'Teknik Destek'];
  const colors = prods.map(p => p.vcolor);

  const st = document.getElementById('score-table');
  st.innerHTML = `
    <thead><tr>
      <th>Kategori</th>
      ${prods.map(p => `<th>${p.label}</th>`).join('')}
    </tr></thead>
    <tbody>
      ${cats.map((c, ci) => `
        <tr>
          <td>${catLabels[ci]}</td>
          ${prods.map((p, pi) => `
            <td>
              <div class="bar-w">
                <div class="bar-t">
                  <div class="bar-f" style="width:${p.puan[c] * 10}%;background:${colors[pi]}"></div>
                </div>
                <span class="bv">${p.puan[c]}</span>
              </div>
            </td>`).join('')}
        </tr>`).join('')}
      <tr>
        <td>e-Fatura / e-Arşiv</td>
        ${prods.map(p => `<td>${p.moduller.some(m => m.includes('e-Fatura') || m.includes('e-Dönüşüm'))
          ? '<span class="ck">✓</span>'
          : '<span class="cx">✗</span>'}</td>`).join('')}
      </tr>
      <tr>
        <td>Native Bulut</td>
        ${prods.map(p => `<td>${p.bulut ? '<span class="ck">✓</span>' : '<span class="cx">✗</span>'}</td>`).join('')}
      </tr>
      <tr>
        <td>Hedef Kitle</td>
        ${prods.map(p => `<td style="font-size:11px">${p.olcek}</td>`).join('')}
      </tr>
      <tr>
        <td>Kurulum Tipi</td>
        ${prods.map(p => `<td style="font-size:11px">${p.tip}</td>`).join('')}
      </tr>
    </tbody>`;

  // Module grid
  const mg = document.getElementById('mod-grid');
  mg.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  mg.innerHTML = prods.map(p => `
    <div class="mod-col">
      <div class="mod-h" style="background:${p.vcolor}">
        <div class="mod-ic">${p.short}</div>${p.label}
      </div>
      ${p.moduller.map(m => `<div class="mi y"><div class="d" style="background:${p.vcolor}"></div>${m}</div>`).join('')}
      ${(p.nomod || []).map(m => `<div class="mi n"><div class="d"></div>${m}</div>`).join('')}
    </div>`).join('');

  // Pros/Cons
  const pcg = document.getElementById('pc-grid');
  pcg.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  pcg.innerHTML = prods.map(p => `
    <div class="pc-card">
      <div class="pc-hd">
        <div class="pc-ib" style="background:${p.vcolor}">${p.short}</div>${p.label}
      </div>
      ${p.pros.map(x => `<div class="pro">${x}</div>`).join('')}
      ${p.cons.map(x => `<div class="con">${x}</div>`).join('')}
    </div>`).join('');
}

// Build vendor/product picker
function buildPicker() {
  const vl = document.getElementById('vendors-list');
  VENDORS.forEach(v => {
    const row = document.createElement('div');
    row.className = 'vendor-row';
    row.innerHTML = `
      <div class="vendor-name">${v.name}</div>
      <div class="products-row">
        ${v.products.map(p => `
          <div class="prod-chip" data-id="${p.id}" onclick="toggleProduct('${p.id}')">
            <span class="dot" style="background:${v.color}"></span>${p.label}
          </div>`).join('')}
      </div>`;
    vl.appendChild(row);
  });
}

// Init
buildPicker();
