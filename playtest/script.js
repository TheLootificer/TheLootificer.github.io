document.addEventListener('DOMContentLoaded', () => {
    const rollBtn = document.getElementById('roll-btn');
    const combatLog = document.getElementById('combat-log');
    
    const characters = {
        rogue: { agility: 5, damage: 8, defense: 4 },
        knight: { agility: 1, damage: 10, defense: 10 },
        barbarian: { agility: 2, damage: 15, defense: 6 },
        mage: { agility: -1, damage: 18, defense: 2 },
        goblin: { agility: 3, damage: 6, defense: 3 }
    };

    function updateCharacterStats(role, charId) {
        if (charId === 'custom') return;
        const char = characters[charId];
        if (!char) return;

        document.getElementById(`${role}-agility`).value = char.agility;
        
        if (role === 'att') {
            document.getElementById(`${role}-damage`).value = char.damage;
        } else if (role === 'def') {
            document.getElementById(`${role}-base`).value = char.defense; // The user renamed this id to def-base
        }
    }

    document.getElementById('att-character').addEventListener('change', (e) => {
        updateCharacterStats('att', e.target.value);
    });

    document.getElementById('def-character').addEventListener('change', (e) => {
        updateCharacterStats('def', e.target.value);
    });

    // Populate the form fields on initial load based on the currently selected options
    updateCharacterStats('att', document.getElementById('att-character').value);
    updateCharacterStats('def', document.getElementById('def-character').value);

    function rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    function addLog(message, type = '', details = '') {
        const placeholder = document.querySelector('.log-placeholder');
        if (placeholder) placeholder.remove();

        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        
        let html = `<span>${message}</span>`;
        if (details) {
            html += `<div class="roll-details">${details}</div>`;
        }
        entry.innerHTML = html;
        
        combatLog.appendChild(entry);
        
        // Auto-scroll to bottom smoothly
        setTimeout(() => {
            combatLog.scrollTo({
                top: combatLog.scrollHeight,
                behavior: 'smooth'
            });
        }, 50);
    }

    function addSeparator() {
        // Only add separator if there are already logs
        if (!document.querySelector('.log-placeholder')) {
            const sep = document.createElement('div');
            sep.style.borderBottom = '1px dashed rgba(255,255,255,0.15)';
            sep.style.margin = '15px 0 5px 0';
            combatLog.appendChild(sep);
        }
    }

    rollBtn.addEventListener('click', () => {
        // Quick button animation class toggle
        rollBtn.style.transform = 'scale(0.95)';
        setTimeout(() => rollBtn.style.transform = '', 150);

        addSeparator();
        addLog('--- INITIATING COMBAT ROUND ---', 'system');

        const attAgility = parseInt(document.getElementById('att-agility').value) || 0;
        const attBaseDamage = parseInt(document.getElementById('att-damage').value) || 0;
        const defAgility = parseInt(document.getElementById('def-agility').value) || 0;
        const defBase = parseInt(document.getElementById('def-base').value) || 0;
        const defFullRed = defBase;
        const defHalfRed = Math.floor(defBase / 2);

        let aNatRoll = rollD20();
        let dNatRoll = rollD20();

        let aTotal = aNatRoll + attAgility;
        let dTotal = dNatRoll + defAgility;

        addLog(`Attacker rolled ${aTotal}`, 'attacker', `(1d20: ${aNatRoll}) + ${attAgility} Agility`);
        addLog(`Defender rolled ${dTotal}`, 'defender', `(1d20: ${dNatRoll}) + ${defAgility} Agility`);

        // =======================
        // Rule: TIE BREAKER
        // =======================
        if (aTotal === dTotal) {
            addLog(`⚡ TIE DETECTED! Both sides rolled a total of ${aTotal}. Rerolling logic engaged!`, 'critical');
            let aReroll = rollD20();
            let dReroll = rollD20();
            let aRerollTot = aReroll + attAgility;
            let dRerollTot = dReroll + defAgility;
            
            while (aRerollTot === dRerollTot) {
                addLog(`Another tie (${aRerollTot})! Rerolling...`, 'system');
                aReroll = rollD20();
                dReroll = rollD20();
                aRerollTot = aReroll + attAgility;
                dRerollTot = dReroll + defAgility;
            }
            
            addLog(`Tie-Breaker: Attacker rolled ${aRerollTot}, Defender rolled ${dRerollTot}.`, 'system', 
                   `Attacker (d20: ${aReroll} + ${attAgility}), Defender (d20: ${dReroll} + ${defAgility})`);
            
            if (aRerollTot > dRerollTot) {
                addLog(`⚔️ Attacker wins the tie-breaker! They strike with DOUBLE damage. Defender takes FULL damage.`, 'result');
                addLog(`🩸 Result: Defender takes ${attBaseDamage * 2} damage!`, 'result', 'No defense reductions apply on tie loss.');
            } else {
                addLog(`🛡️ Defender wins the tie-breaker! They instantly counter-attack with DOUBLE damage. Attacker takes FULL damage.`, 'result');
                addLog(`💥 Result: Attacker takes double damage! (Assuming identical weapon stats = ${attBaseDamage * 2} damage taken)`, 'result');
            }
            return; // Tie resolves everything for this round
        }

        // =======================
        // SPECIAL RULES (Nat 1 / Nat 20)
        // =======================
        let aNat1 = aNatRoll === 1;
        let aNat20 = aNatRoll === 20;
        let dNat1 = dNatRoll === 1;
        let dNat20 = dNatRoll === 20;

        let damageMultiplier = 1;

        if (aNat1) {
            addLog(`❌ Attacker rolled a Nat 1! They stumble and cannot make an attack until their next turn.`, 'critical');
        }
        if (aNat20) {
            addLog(`🔥 Attacker rolled a Nat 20! The attack will deal DOUBLE damage (if it connects).`, 'critical');
            damageMultiplier *= 2;
        }
        if (dNat1) {
            addLog(`💀 Defender rolled a Nat 1! They left themselves wide open. Attacker will roll DOUBLE damage.`, 'critical');
            damageMultiplier *= 2; // "attacker rolls double"
        }
        if (dNat20) {
            addLog(`✨ Defender rolled a Nat 20! They completely dodge any attack and instantly make a counter-attack!`, 'critical');
            return; // Defender evades fully and counters, end regular resolution
        }

        if (aNat1) return; // Attacker cannot attack this turn.

        // =======================
        // STANDARD COMBAT LOGIC
        // =======================
        // Success/Fail by X 
        // Difference = Defender Total - Attacker Total
        let difference = dTotal - aTotal; 

        let finalDamage = attBaseDamage * damageMultiplier;
        let baseDmgText = damageMultiplier > 1 ? `${attBaseDamage} × ${damageMultiplier} multiplier = ${finalDamage}` : `${finalDamage}`;
        
        if (difference >= 5) { 
            // Defender succeeds by 5+
            addLog(`💨 Defender succeeds by ${difference} (5+ margin)! They completely evade the strike.`, 'result');
            addLog(`🛡️ Result: 0 damage taken.`, 'result');
        } 
        else if (difference >= 1 && difference <= 4) { 
            // Defender succeeds by 1-4
            let reducedAmount = Math.max(0, finalDamage - defFullRed);
            addLog(`🛡️ Defender succeeds by ${difference} (1-4 margin). They brace for impact, taking full-defense reduced damage.`, 'result');
            addLog(`🩸 Result: Takes ${reducedAmount} damage.`, 'result', `Damage: ${baseDmgText} - ${defFullRed} (Full Reduction)`);
        } 
        else if (difference <= -1 && difference >= -4) { 
            // Defender fails by 1-4
            let reducedAmount = Math.max(0, finalDamage - defHalfRed);
            addLog(`⚠️ Defender fails by ${Math.abs(difference)} (1-4 margin). A glancing blow bypasses some defense, taking half-defense reduced damage.`, 'result');
            addLog(`🩸 Result: Takes ${reducedAmount} damage.`, 'result', `Damage: ${baseDmgText} - ${defHalfRed} (Half Reduction)`);
        } 
        else if (difference <= -5) { 
            // Defender fails by 5+
            addLog(`💥 Defender fails by ${Math.abs(difference)} (5+ margin). The attacker finds a vital spot, dealing full damage!`, 'result');
            addLog(`🩸 Result: Takes ${finalDamage} damage!`, 'result', `Damage: ${baseDmgText} with NO reductions.`);
        }
    });
});
