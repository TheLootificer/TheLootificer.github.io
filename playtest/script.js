document.addEventListener('DOMContentLoaded', () => {
    const rollBtn = document.getElementById('roll-btn');
    const combatLog = document.getElementById('combat-log');
    
    const characters = {
        ace: { agility: 0, damage: '1d8+3', defense: 4, hp: 24 },
        wolf: { agility: 2, damage: '1d6+2', defense: 2, hp: 7 }
    };

    let attackerHp = 24;
    let defenderHp = 7;

    function updateCharacterStats(role, charId) {
        if (charId === 'custom') return;
        const char = characters[charId];
        if (!char) return;

        document.getElementById(`${role}-agility`).value = char.agility;
        
        if (role === 'att') {
            document.getElementById(`${role}-damage`).value = char.damage;
        } else if (role === 'def') {
            document.getElementById(`${role}-base`).value = char.defense;
        }
    }

    function togglePanelStats(role, charId) {
        const panelClass = role === 'att' ? 'attacker-panel' : 'defender-panel';
        const panel = document.querySelector(`.${panelClass}`);
        if (!panel) return;
        
        const inputGroups = panel.querySelectorAll('.input-group');
        
        if (charId === 'wolf') {
            // Hide everything but the select for Wolf
            inputGroups.forEach(group => {
                if (!group.querySelector('select')) {
                    group.classList.add('hidden');
                }
            });
        } else {
            inputGroups.forEach(group => {
                group.classList.remove('hidden');
                // Ace also hides his damage because it's dynamic
                if (charId === 'ace' && group.querySelector('input[type="number"]') && (group.querySelector('label').innerText.includes('DAMAGE'))) {
                    group.classList.add('hidden');
                }
            });
        }
    }

    function swapRoles() {
        const attSelect = document.getElementById('att-character');
        const defSelect = document.getElementById('def-character');
        
        const oldAtt = attSelect.value;
        const oldDef = defSelect.value;
        
        // Swap health variables
        [attackerHp, defenderHp] = [defenderHp, attackerHp];
        
        // Swap select values
        attSelect.value = oldDef;
        defSelect.value = oldAtt;
        
        // Update stats
        updateCharacterStats('att', oldDef);
        updateCharacterStats('def', oldAtt);
        
        // Toggle visibility
        togglePanelStats('att', oldDef);
        togglePanelStats('def', oldAtt);
        
        // Update active turn highlights
        document.querySelector('.attacker-panel').classList.add('active-turn');
        document.querySelector('.defender-panel').classList.remove('active-turn');
        
        addLog(`🔄 ROLES SWAPPED! Both sides prepare for the next exchange.`, 'system');
    }

    document.getElementById('att-character').addEventListener('change', (e) => {
        updateCharacterStats('att', e.target.value);
        togglePanelStats('att', e.target.value);
        if (characters[e.target.value]) {
            attackerHp = characters[e.target.value].hp;
            addLog(`New Attacker: HP reset to ${attackerHp}`, 'system');
        }
    });

    // Populate the form fields on initial load based on the currently selected options
    const initialAtt = document.getElementById('att-character').value;
    const initialDef = document.getElementById('def-character').value;
    
    updateCharacterStats('att', initialAtt);
    updateCharacterStats('def', initialDef);
    togglePanelStats('att', initialAtt);
    togglePanelStats('def', initialDef);
    
    document.querySelector('.attacker-panel').classList.add('active-turn');

    if (characters[initialAtt]) {
        attackerHp = characters[initialAtt].hp;
    }
    if (characters[initialDef]) {
        defenderHp = characters[initialDef].hp;
    }

    // Character Selection Logic
    const selectionOverlay = document.getElementById('selection-overlay');
    const charCards = document.querySelectorAll('.char-card');

    charCards.forEach(card => {
        card.addEventListener('click', () => {
            const charId = card.getAttribute('data-char');
            if (characters[charId]) {
                // Update attacker selection
                const attSelect = document.getElementById('att-character');
                attSelect.value = charId;
                updateCharacterStats('att', charId);
                
                // Reset HP
                attackerHp = characters[charId].hp;
                
                // Toggle Stats for Ace if selected
                togglePanelStats('att', charId);
                
                addLog(`Hero Chosen: Welcome, ${charId.toUpperCase()}!`, 'system');
                
                // Fade out overlay
                selectionOverlay.classList.add('fade-out');
                setTimeout(() => {
                    selectionOverlay.classList.add('hidden');
                }, 500);
            }
        });
    });

    document.getElementById('def-character').addEventListener('change', (e) => {
        updateCharacterStats('def', e.target.value);
        togglePanelStats('def', e.target.value);

        if (characters[e.target.value]) {
            defenderHp = characters[e.target.value].hp;
            addLog(`New Defender: HP reset to ${defenderHp}`, 'system');
        }
    });

    function rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    function rollD6() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollD8() {
        return Math.floor(Math.random() * 8) + 1;
    }

    function parseDamage(damageStr) {
        if (typeof damageStr === 'number') return damageStr;
        if (damageStr === '1d6+2') {
            const roll = rollD6();
            const total = roll + 2;
            return { total, details: `(1d6: ${roll}) + 2 Str` };
        }
        if (damageStr === '1d8+3') {
            const roll = rollD8();
            const total = roll + 3;
            return { total, details: `(1d8: ${roll}) + 3 Str` };
        }
        return parseInt(damageStr) || 0;
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
        
        // Ensure highlight is correct
        document.querySelector('.attacker-panel').classList.add('active-turn');
        document.querySelector('.defender-panel').classList.remove('active-turn');

        const attAgility = parseInt(document.getElementById('att-agility').value) || 0;
        const attDamageInput = document.getElementById('att-damage').value;
        const attackerChar = document.getElementById('att-character').value;
        
        let damageData;
        if (attackerChar === 'wolf') {
            damageData = parseDamage('1d6+2');
        } else if (attackerChar === 'ace') {
            damageData = parseDamage('1d8+3');
        } else {
            damageData = { total: parseInt(attDamageInput) || 0, details: '' };
        }

        const attBaseDamage = damageData.total;
        const attDamageDetails = damageData.details;

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
                const dmg = attBaseDamage * 2;
                defenderHp -= dmg;
                addLog(`🩸 Result: Defender takes ${dmg} damage!`, 'result', 'No defense reductions apply on tie loss.');
                if (defenderHp <= 0) {
                    defenderHp = 0;
                    addLog(`💀 DEFENDER DEFEATED! Remaining HP: 0`, 'critical');
                } else {
                    addLog(`❤️ Defender Remaining HP: ${defenderHp}`, 'system');
                }
            } else {
                addLog(`🛡️ Defender wins the tie-breaker! They instantly counter-attack with DOUBLE damage. Attacker takes FULL damage.`, 'result');
                // For direct counter, use defender's damage logic
                const defDamageIn = document.getElementById('def-base').value; // Wait, current system uses att-damage for dual testing
                // User requirement: Wolf does 1d6 damage. Let's handle counter damage properly.
                const defChar = document.getElementById('def-character').value;
                let counterDamageData;
                if (defChar === 'wolf') {
                    counterDamageData = parseDamage('1d6+2');
                } else if (defChar === 'ace') {
                    counterDamageData = parseDamage('1d8+3');
                } else {
                    counterDamageData = { total: 10, details: '(Static Counter)' }; // Placeholder if not wolf/ace
                }
                const counterDmg = counterDamageData.total * 2;
                attackerHp -= counterDmg;
                addLog(`💥 Result: Attacker takes ${counterDmg} damage!`, 'result', `${counterDamageData.details} × 2`);
                if (attackerHp <= 0) {
                    attackerHp = 0;
                    addLog(`💀 ATTACKER DEFEATED! Remaining HP: 0`, 'critical');
                } else {
                    addLog(`💙 Attacker Remaining HP: ${attackerHp}`, 'system');
                }
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
            const defChar = document.getElementById('def-character').value;
            let counterDamageData;
            if (defChar === 'wolf') {
                counterDamageData = parseDamage('1d6+2');
            } else if (defChar === 'ace') {
                counterDamageData = parseDamage('1d8+3');
            } else {
                counterDamageData = { total: 10, details: '(Static Counter)' };
            }
            attackerHp -= counterDamageData.total;
            addLog(`💥 Result: Attacker takes ${counterDamageData.total} damage!`, 'result', `${counterDamageData.details}`);
            if (attackerHp <= 0) {
                attackerHp = 0;
                addLog(`💀 ATTACKER DEFEATED! Remaining HP: 0`, 'critical');
            } else {
                addLog(`💙 Attacker Remaining HP: ${attackerHp}`, 'system');
            }
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
        if (attDamageDetails && damageMultiplier === 1) {
            baseDmgText = `${attDamageDetails} = ${finalDamage}`;
        } else if (attDamageDetails && damageMultiplier > 1) {
            baseDmgText = `${attDamageDetails} (${attBaseDamage}) × ${damageMultiplier} = ${finalDamage}`;
        }
        
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

        // Apply health reduction
        defenderHp -= finalDamage;
        if (defenderHp <= 0) {
            defenderHp = 0;
            addLog(`💀 DEFENDER DEFEATED! Remaining HP: 0`, 'critical');
        } else {
            addLog(`❤️ Defender Remaining HP: ${defenderHp}`, 'system');
        }

        // Swap roles for next round if both still alive
        if (attackerHp > 0 && defenderHp > 0) {
            setTimeout(swapRoles, 1500); // Small delay for readability
        }
    });
});
