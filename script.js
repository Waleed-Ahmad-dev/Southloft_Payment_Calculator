// ==========================================
// 1. MASTER INVENTORY DATABASE
// ==========================================
const INVENTORY = [
    // FLOOR 1
    { "u": "101", "floor": "1", "type": "C", "area": 360.59, "reg": 645000, "post": 715000, "pool": false },
    { "u": "102", "floor": "1", "type": "C", "area": 363.07, "reg": 645000, "post": 715000, "pool": false },
    { "u": "103", "floor": "1", "type": "C", "area": 350.04, "reg": 645000, "post": 715000, "pool": false },
    { "u": "104", "floor": "1", "type": "A (Flex)", "area": 522.16, "reg": 899000, "post": 975000, "pool": true },
    { "u": "105", "floor": "1", "type": "A (Flex)", "area": 861.54, "reg": 999000, "post": 1100000, "pool": true },
    { "u": "106", "floor": "1", "type": "C", "area": 351.12, "reg": 645000, "post": 715000, "pool": false },
    { "u": "107", "floor": "1", "type": "C", "area": 353.81, "reg": 645000, "post": 715000, "pool": false },
    { "u": "108", "floor": "1", "type": "C", "area": 352.84, "reg": 645000, "post": 715000, "pool": false },
    { "u": "109", "floor": "1", "type": "E (Flex)", "area": 504.72, "reg": 849000, "post": 935000, "pool": false },
    { "u": "110", "floor": "1", "type": "D", "area": 326.68, "reg": 620000, "post": 690000, "pool": false },
    { "u": "111", "floor": "1", "type": "D", "area": 325.72, "reg": 620000, "post": 690000, "pool": false },
    { "u": "112", "floor": "1", "type": "E (Flex)", "area": 504.61, "reg": 849000, "post": 935000, "pool": false },
    { "u": "113", "floor": "1", "type": "C", "area": 346.71, "reg": 645000, "post": 715000, "pool": false },
    { "u": "114", "floor": "1", "type": "C", "area": 340.79, "reg": 645000, "post": 715000, "pool": false },
    { "u": "115", "floor": "1", "type": "C", "area": 350.47, "reg": 645000, "post": 715000, "pool": false },
    { "u": "116", "floor": "1", "type": "B (Flex)", "area": 385.78, "reg": 699000, "post": 775000, "pool": true },
    { "u": "117", "floor": "1", "type": "C", "area": 354.99, "reg": 645000, "post": 715000, "pool": false },
    { "u": "118", "floor": "1", "type": "D", "area": 315.06, "reg": 620000, "post": 690000, "pool": false },
    { "u": "119", "floor": "1", "type": "D", "area": 319.9, "reg": 620000, "post": 690000, "pool": false },
    { "u": "120", "floor": "1", "type": "D", "area": 313.88, "reg": 620000, "post": 690000, "pool": false },
    { "u": "121", "floor": "1", "type": "D", "area": 318.83, "reg": 620000, "post": 690000, "pool": false },
    { "u": "122", "floor": "1", "type": "D", "area": 321.73, "reg": 620000, "post": 690000, "pool": false },
    { "u": "123", "floor": "1", "type": "D", "area": 326.68, "reg": 620000, "post": 690000, "pool": false },
    { "u": "124", "floor": "1", "type": "E (Flex)", "area": 536.15, "reg": 875000, "post": 975000, "pool": false },
    // FLOOR 2
    { "u": "201", "floor": "2", "type": "C", "area": 360.59, "reg": 595000, "post": 649000, "pool": false },
    { "u": "202", "floor": "2", "type": "C", "area": 363.07, "reg": 595000, "post": 649000, "pool": false },
    { "u": "203", "floor": "2", "type": "C", "area": 349.93, "reg": 595000, "post": 649000, "pool": false },
    { "u": "204", "floor": "2", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "205", "floor": "2", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "206", "floor": "2", "type": "C", "area": 351.12, "reg": 595000, "post": 649000, "pool": false },
    { "u": "207", "floor": "2", "type": "C", "area": 353.81, "reg": 595000, "post": 649000, "pool": false },
    { "u": "208", "floor": "2", "type": "C", "area": 352.84, "reg": 595000, "post": 649000, "pool": false },
    { "u": "209", "floor": "2", "type": "E (Flex)", "area": 504.83, "reg": 775000, "post": 850000, "pool": false },
    { "u": "210", "floor": "2", "type": "D", "area": 326.58, "reg": 560000, "post": 620000, "pool": false },
    { "u": "211", "floor": "2", "type": "D", "area": 325.93, "reg": 560000, "post": 620000, "pool": false },
    { "u": "212", "floor": "2", "type": "E (Flex)", "area": 504.61, "reg": 775000, "post": 850000, "pool": false },
    { "u": "213", "floor": "2", "type": "C", "area": 346.71, "reg": 595000, "post": 649000, "pool": false },
    { "u": "214", "floor": "2", "type": "C", "area": 340.79, "reg": 595000, "post": 649000, "pool": false },
    { "u": "215", "floor": "2", "type": "C", "area": 350.47, "reg": 595000, "post": 649000, "pool": false },
    { "u": "216", "floor": "2", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "217", "floor": "2", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "218", "floor": "2", "type": "C", "area": 354.99, "reg": 595000, "post": 649000, "pool": false },
    { "u": "219", "floor": "2", "type": "D", "area": 314.95, "reg": 560000, "post": 620000, "pool": false },
    { "u": "220", "floor": "2", "type": "D", "area": 319.9, "reg": 560000, "post": 620000, "pool": false },
    { "u": "221", "floor": "2", "type": "D", "area": 313.88, "reg": 560000, "post": 620000, "pool": false },
    { "u": "222", "floor": "2", "type": "D", "area": 318.83, "reg": 560000, "post": 620000, "pool": false },
    { "u": "223", "floor": "2", "type": "D", "area": 321.73, "reg": 560000, "post": 620000, "pool": false },
    { "u": "224", "floor": "2", "type": "D", "area": 326.68, "reg": 560000, "post": 620000, "pool": false },
    { "u": "225", "floor": "2", "type": "E (Flex)", "area": 536.15, "reg": 799000, "post": 890000, "pool": false },
    // FLOOR 3
    { "u": "301", "floor": "3", "type": "C", "area": 360.59, "reg": 595000, "post": 649000, "pool": false },
    { "u": "302", "floor": "3", "type": "C", "area": 363.07, "reg": 595000, "post": 649000, "pool": false },
    { "u": "303", "floor": "3", "type": "C", "area": 349.93, "reg": 595000, "post": 649000, "pool": false },
    { "u": "304", "floor": "3", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "305", "floor": "3", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "306", "floor": "3", "type": "C", "area": 351.12, "reg": 595000, "post": 649000, "pool": false },
    { "u": "307", "floor": "3", "type": "C", "area": 353.81, "reg": 595000, "post": 649000, "pool": false },
    { "u": "308", "floor": "3", "type": "C", "area": 352.84, "reg": 595000, "post": 649000, "pool": false },
    { "u": "309", "floor": "3", "type": "E (Flex)", "area": 504.83, "reg": 775000, "post": 850000, "pool": false },
    { "u": "310", "floor": "3", "type": "D", "area": 326.58, "reg": 560000, "post": 620000, "pool": false },
    { "u": "311", "floor": "3", "type": "D", "area": 325.93, "reg": 560000, "post": 620000, "pool": false },
    { "u": "312", "floor": "3", "type": "E (Flex)", "area": 504.61, "reg": 775000, "post": 850000, "pool": false },
    { "u": "313", "floor": "3", "type": "C", "area": 346.71, "reg": 595000, "post": 649000, "pool": false },
    { "u": "314", "floor": "3", "type": "C", "area": 340.79, "reg": 595000, "post": 649000, "pool": false },
    { "u": "315", "floor": "3", "type": "C", "area": 350.47, "reg": 595000, "post": 649000, "pool": false },
    { "u": "316", "floor": "3", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "317", "floor": "3", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "318", "floor": "3", "type": "C", "area": 354.99, "reg": 595000, "post": 649000, "pool": false },
    { "u": "319", "floor": "3", "type": "D", "area": 314.95, "reg": 560000, "post": 620000, "pool": false },
    { "u": "320", "floor": "3", "type": "D", "area": 319.9, "reg": 560000, "post": 620000, "pool": false },
    { "u": "321", "floor": "3", "type": "D", "area": 313.88, "reg": 560000, "post": 620000, "pool": false },
    { "u": "322", "floor": "3", "type": "D", "area": 318.83, "reg": 560000, "post": 620000, "pool": false },
    { "u": "323", "floor": "3", "type": "D", "area": 321.73, "reg": 560000, "post": 620000, "pool": false },
    { "u": "324", "floor": "3", "type": "D", "area": 326.68, "reg": 560000, "post": 620000, "pool": false },
    { "u": "325", "floor": "3", "type": "E (Flex)", "area": 536.15, "reg": 799000, "post": 890000, "pool": false },
    // FLOOR 4
    { "u": "401", "floor": "4", "type": "C", "area": 360.59, "reg": 595000, "post": 649000, "pool": false },
    { "u": "402", "floor": "4", "type": "C", "area": 363.07, "reg": 595000, "post": 649000, "pool": false },
    { "u": "403", "floor": "4", "type": "C", "area": 349.93, "reg": 595000, "post": 649000, "pool": false },
    { "u": "404", "floor": "4", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "405", "floor": "4", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "406", "floor": "4", "type": "C", "area": 351.12, "reg": 595000, "post": 649000, "pool": false },
    { "u": "407", "floor": "4", "type": "C", "area": 353.81, "reg": 595000, "post": 649000, "pool": false },
    { "u": "408", "floor": "4", "type": "C", "area": 352.84, "reg": 595000, "post": 649000, "pool": false },
    { "u": "409", "floor": "4", "type": "E (Flex)", "area": 504.83, "reg": 775000, "post": 850000, "pool": false },
    { "u": "410", "floor": "4", "type": "D", "area": 326.58, "reg": 560000, "post": 620000, "pool": false },
    { "u": "411", "floor": "4", "type": "D", "area": 325.93, "reg": 560000, "post": 620000, "pool": false },
    { "u": "412", "floor": "4", "type": "E (Flex)", "area": 504.61, "reg": 775000, "post": 850000, "pool": false },
    { "u": "413", "floor": "4", "type": "C", "area": 346.71, "reg": 595000, "post": 649000, "pool": false },
    { "u": "414", "floor": "4", "type": "C", "area": 340.79, "reg": 595000, "post": 649000, "pool": false },
    { "u": "415", "floor": "4", "type": "C", "area": 350.47, "reg": 595000, "post": 649000, "pool": false },
    { "u": "416", "floor": "4", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "417", "floor": "4", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "418", "floor": "4", "type": "C", "area": 354.99, "reg": 595000, "post": 649000, "pool": false },
    { "u": "419", "floor": "4", "type": "D", "area": 314.95, "reg": 560000, "post": 620000, "pool": false },
    { "u": "420", "floor": "4", "type": "D", "area": 319.9, "reg": 560000, "post": 620000, "pool": false },
    { "u": "421", "floor": "4", "type": "D", "area": 313.88, "reg": 560000, "post": 620000, "pool": false },
    { "u": "422", "floor": "4", "type": "D", "area": 318.83, "reg": 560000, "post": 620000, "pool": false },
    { "u": "423", "floor": "4", "type": "D", "area": 321.73, "reg": 560000, "post": 620000, "pool": false },
    { "u": "424", "floor": "4", "type": "D", "area": 326.68, "reg": 560000, "post": 620000, "pool": false },
    { "u": "425", "floor": "4", "type": "E (Flex)", "area": 536.15, "reg": 799000, "post": 890000, "pool": false },
    // FLOOR 5
    { "u": "501", "floor": "5", "type": "C", "area": 360.59, "reg": 595000, "post": 649000, "pool": false },
    { "u": "502", "floor": "5", "type": "C", "area": 363.07, "reg": 595000, "post": 649000, "pool": false },
    { "u": "503", "floor": "5", "type": "C", "area": 349.93, "reg": 595000, "post": 649000, "pool": false },
    { "u": "504", "floor": "5", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "505", "floor": "5", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "506", "floor": "5", "type": "C", "area": 351.12, "reg": 595000, "post": 649000, "pool": false },
    { "u": "507", "floor": "5", "type": "C", "area": 353.81, "reg": 595000, "post": 649000, "pool": false },
    { "u": "508", "floor": "5", "type": "C", "area": 352.84, "reg": 595000, "post": 649000, "pool": false },
    { "u": "509", "floor": "5", "type": "E (Flex)", "area": 504.83, "reg": 775000, "post": 850000, "pool": false },
    { "u": "510", "floor": "5", "type": "D", "area": 326.58, "reg": 560000, "post": 620000, "pool": false },
    { "u": "511", "floor": "5", "type": "D", "area": 325.93, "reg": 560000, "post": 620000, "pool": false },
    { "u": "512", "floor": "5", "type": "E (Flex)", "area": 504.61, "reg": 775000, "post": 850000, "pool": false },
    { "u": "513", "floor": "5", "type": "C", "area": 346.71, "reg": 595000, "post": 649000, "pool": false },
    { "u": "514", "floor": "5", "type": "C", "area": 340.79, "reg": 595000, "post": 649000, "pool": false },
    { "u": "515", "floor": "5", "type": "C", "area": 350.47, "reg": 595000, "post": 649000, "pool": false },
    { "u": "516", "floor": "5", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "517", "floor": "5", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "518", "floor": "5", "type": "C", "area": 354.99, "reg": 595000, "post": 649000, "pool": false },
    { "u": "519", "floor": "5", "type": "D", "area": 314.95, "reg": 560000, "post": 620000, "pool": false },
    { "u": "520", "floor": "5", "type": "D", "area": 319.9, "reg": 560000, "post": 620000, "pool": false },
    { "u": "521", "floor": "5", "type": "D", "area": 313.88, "reg": 560000, "post": 620000, "pool": false },
    { "u": "522", "floor": "5", "type": "D", "area": 318.83, "reg": 560000, "post": 620000, "pool": false },
    { "u": "523", "floor": "5", "type": "D", "area": 321.73, "reg": 560000, "post": 620000, "pool": false },
    { "u": "524", "floor": "5", "type": "D", "area": 326.68, "reg": 560000, "post": 620000, "pool": false },
    { "u": "525", "floor": "5", "type": "E (Flex)", "area": 536.15, "reg": 799000, "post": 890000, "pool": false },
    // FLOOR 6
    { "u": "601", "floor": "6", "type": "C", "area": 360.59, "reg": 595000, "post": 649000, "pool": false },
    { "u": "602", "floor": "6", "type": "C", "area": 363.07, "reg": 595000, "post": 649000, "pool": false },
    { "u": "603", "floor": "6", "type": "C", "area": 349.93, "reg": 595000, "post": 649000, "pool": false },
    { "u": "604", "floor": "6", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "605", "floor": "6", "type": "A (Flex)", "area": 583.51, "reg": 815000, "post": 899000, "pool": true },
    { "u": "606", "floor": "6", "type": "C", "area": 351.12, "reg": 595000, "post": 649000, "pool": false },
    { "u": "607", "floor": "6", "type": "C", "area": 353.81, "reg": 595000, "post": 649000, "pool": false },
    { "u": "608", "floor": "6", "type": "C", "area": 352.84, "reg": 595000, "post": 649000, "pool": false },
    { "u": "609", "floor": "6", "type": "E (Flex)", "area": 504.83, "reg": 775000, "post": 850000, "pool": false },
    { "u": "610", "floor": "6", "type": "D", "area": 326.58, "reg": 560000, "post": 620000, "pool": false },
    { "u": "611", "floor": "6", "type": "D", "area": 325.93, "reg": 560000, "post": 620000, "pool": false },
    { "u": "612", "floor": "6", "type": "E (Flex)", "area": 504.61, "reg": 775000, "post": 850000, "pool": false },
    { "u": "613", "floor": "6", "type": "C", "area": 346.71, "reg": 595000, "post": 649000, "pool": false },
    { "u": "614", "floor": "6", "type": "C", "area": 340.79, "reg": 595000, "post": 649000, "pool": false },
    { "u": "615", "floor": "6", "type": "C", "area": 350.47, "reg": 595000, "post": 649000, "pool": false },
    { "u": "616", "floor": "6", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "617", "floor": "6", "type": "B (Flex)", "area": 383.84, "reg": 635000, "post": 699000, "pool": true },
    { "u": "618", "floor": "6", "type": "C", "area": 354.99, "reg": 595000, "post": 649000, "pool": false },
    { "u": "619", "floor": "6", "type": "D", "area": 314.95, "reg": 560000, "post": 620000, "pool": false },
    { "u": "620", "floor": "6", "type": "D", "area": 319.9, "reg": 560000, "post": 620000, "pool": false },
    { "u": "621", "floor": "6", "type": "D", "area": 313.88, "reg": 560000, "post": 620000, "pool": false },
    { "u": "622", "floor": "6", "type": "D", "area": 318.83, "reg": 560000, "post": 620000, "pool": false },
    { "u": "623", "floor": "6", "type": "D", "area": 321.73, "reg": 560000, "post": 620000, "pool": false },
    { "u": "624", "floor": "6", "type": "D", "area": 326.68, "reg": 560000, "post": 620000, "pool": false },
    { "u": "625", "floor": "6", "type": "E (Flex)", "area": 536.15, "reg": 799000, "post": 890000, "pool": false }
];

// Formatter for AED
const formatter = new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 });

// Global Date Helpers
const addMonths = (date, months) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    const parts = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).split(' ');
    return `${parts[0]} ${parts[1]} ${parts[2]}`;
};

const formatExactDate = (date) => date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

let balloonCount = 0;

// ==========================================
// RELIABLE NUMBER INPUT BINDING HELPER
// Attaches native DOM listeners (more reliable
// than jQuery for type="number" alongside Select2)
// ==========================================
function bindNumberInput(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input',  calculate);
    el.addEventListener('change', calculate);
    // Catches spinner arrow clicks in all browsers
    el.addEventListener('keyup',  calculate);
    el.addEventListener('mouseup', calculate);
}

$(document).ready(() => {

    // 1. Bind Select / Toggle controls via jQuery (these are fine)
    $('#unit-select, #plan-mode, #toggle-furnish, #toggle-pool').on('change', calculate);

    // 2. Bind all number inputs via NATIVE listeners — fixes the DP field not recalculating
    bindNumberInput('input-dp');
    bindNumberInput('input-discount');
    bindNumberInput('input-dld-fee');
    bindNumberInput('input-admin-fee');

    // 3. Balloon payment add button
    $('#btn-add-balloon').on('click', () => {
        if (balloonCount >= 4) return;
        balloonCount++;
        const rowId = `balloon-row-${Date.now()}`;
        $('#balloon-wrapper').append(`
            <div id="${rowId}" class="flex gap-2 items-center balloon-entry mt-2">
                <input type="number" min="1" step="1" class="balloon-inst w-1/3 p-3 rounded-xl text-xs font-bold border border-slate-200" placeholder="Inst. No (e.g. 4)">
                <input type="number" min="0" step="1000" class="balloon-amount w-full p-3 rounded-xl text-xs font-bold border border-slate-200" placeholder="Amount (AED)">
                <button type="button" class="remove-balloon p-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-colors" onclick="$('#${rowId}').remove(); balloonCount--; calculate();">X</button>
            </div>
        `);
        $(`#${rowId} input`).on('input change keyup', calculate);
    });

    $('#btn-pdf').on('click', generateProfessionalPDF);

    // 4. Initialize filters last — their internal trigger('change') will fire calculate()
    initFilters();
});

// ==========================================
// 2. FILTER & UNIT DROPDOWN SETUP
// ==========================================

function initFilters() {
    const floors = [...new Set(INVENTORY.map(i => i.floor))].sort();
    const types  = [...new Set(INVENTORY.map(i => i.type))].sort();

    $('#filter-floor').append('<option value="all">ALL FLOORS</option>');
    floors.forEach(f => $('#filter-floor').append(`<option value="${f}">FLOOR ${f}</option>`));

    $('#filter-type').append('<option value="all">ALL TYPES</option>');
    types.forEach(t => $('#filter-type').append(`<option value="${t}">${t}</option>`));

    $('#unit-select').select2({ minimumResultsForSearch: 1 });
    updateUnitDropdown();
    $('#filter-floor, #filter-type').on('change', updateUnitDropdown);
}

function updateUnitDropdown() {
    const floor = $('#filter-floor').val();
    const type  = $('#filter-type').val();

    $('#unit-select').empty();
    let count = 0;

    INVENTORY.forEach(item => {
        const floorMatch = floor === 'all' || item.floor === floor;
        const typeMatch  = type  === 'all' || item.type  === type;
        if (floorMatch && typeMatch) {
            $('#unit-select').append(new Option(`UNIT ${item.u} • ${item.type} • ${item.area} sqft`, item.u));
            count++;
        }
    });

    if (count === 0) {
        $('#unit-select').append(new Option("NO UNITS AVAILABLE", ""));
    }

    $('#unit-select').trigger('change');
}

// ==========================================
// 3. MASTER CALCULATION ENGINE
// ==========================================

function calculate() {
    const uId  = $('#unit-select').val();
    const unit = INVENTORY.find(i => i.u === uId);

    if (!unit) {
        $('#unit-specs').css('opacity', '0.3');
        return;
    }

    const plan = $('#plan-mode').val();

    // Base price depends on plan type
    let baseTotal = (plan === 'standard') ? unit.reg : unit.post;

    // Update unit spec display
    $('#unit-specs').css('opacity', '1');
    $('#spec-area').text(unit.area.toFixed(0));
    $('#spec-type').text(unit.type);

    const isFurnished = $('#toggle-furnish').is(':checked');
    const canHavePool = unit.pool;

    if (canHavePool) {
        $('#pool-container').removeClass('opacity-50 pointer-events-none');
    } else {
        $('#pool-container').addClass('opacity-50 pointer-events-none');
        $('#toggle-pool').prop('checked', false);
    }

    // Apply furnish / pool adjustments
    let adjustedTotal = baseTotal;
    if (!isFurnished) adjustedTotal -= 25000;
    if (canHavePool && $('#toggle-pool').is(':checked')) adjustedTotal += 100000;

    // Discount
    let discPercent = parseFloat($('#input-discount').val()) || 0;
    if (discPercent > 99) { discPercent = 99; $('#input-discount').val(99); }
    let netPrice = adjustedTotal * (1 - (discPercent / 100));

    // --- READ DOWN PAYMENT FROM INPUT (the fix) ---
    // Always read fresh from the DOM element to guarantee we get the latest typed value
    const dpInputEl = document.getElementById('input-dp');
    let dpPercent = parseFloat(dpInputEl.value);
    if (isNaN(dpPercent) || dpPercent < 0) dpPercent = 0;
    if (dpPercent > 100) { dpPercent = 100; dpInputEl.value = 100; }

    let dpAmt = netPrice * (dpPercent / 100);

    // Fees
    const dldFeePercent = parseFloat($('#input-dld-fee').val()) || 0;
    const adminFee      = parseFloat($('#input-admin-fee').val()) || 0;
    const dldFee        = netPrice * (dldFeePercent / 100);

    // Build schedule
    const table   = $('#schedule-body');
    table.empty();
    let schedule  = [];
    const today   = new Date();
    const todayStr = addMonths(today, 0);

    // Always-present upfront rows
    schedule.push({ monthOffset: 0, date: todayStr, desc: 'Downpayment', percent: dpPercent.toFixed(1) + '%', amt: dpAmt });
    schedule.push({ monthOffset: 0, date: todayStr, desc: 'DLD fee',     percent: dldFeePercent + '%',        amt: dldFee });
    schedule.push({ monthOffset: 0, date: todayStr, desc: 'Admin fee',   percent: '-',                        amt: adminFee });

    // Plan-specific installments
    if (plan === 'standard') {
        $('#badge-plan').text('STANDARD 60/40 PLAN');
        schedule.push({ installmentNum: 1, monthOffset: 3,  date: addMonths(today, 3),  desc: '1st Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 2, monthOffset: 6,  date: addMonths(today, 6),  desc: '2nd Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 3, monthOffset: 9,  date: addMonths(today, 9),  desc: '3rd Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 4, monthOffset: 12, date: addMonths(today, 12), desc: '4th Installment', percent: '10%', amt: netPrice * 0.10 });
        schedule.push({ installmentNum: 5, monthOffset: 15, date: addMonths(today, 15), desc: '5th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 6, monthOffset: 18, date: addMonths(today, 18), desc: '6th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 7, monthOffset: 21, date: addMonths(today, 21), desc: '7th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ monthOffset: 24, isCompletion: true, date: 'On completion', desc: 'Completion', percent: '0%', amt: 0 });

    } else if (plan === '3yr') {
        $('#badge-plan').text('3-YEAR POST HANDOVER');
        schedule.push({ installmentNum: 1, monthOffset: 5,  date: addMonths(today, 5),  desc: '1st Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 2, monthOffset: 9,  date: addMonths(today, 9),  desc: '2nd Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 3, monthOffset: 13, date: addMonths(today, 13), desc: '3rd Installment', percent: '10%', amt: netPrice * 0.10 });
        schedule.push({ installmentNum: 4, monthOffset: 17, date: addMonths(today, 17), desc: '4th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 5, monthOffset: 21, date: addMonths(today, 21), desc: '5th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 6, monthOffset: 24, isCompletion: true, date: 'On completion', desc: '6th Installment', percent: '0%', amt: 0 });

        const completionDate = new Date(today);
        completionDate.setMonth(completionDate.getMonth() + 24);
        const phMonths = [3, 6, 9, 12, 16, 18, 21, 24, 27, 30, 33, 36];
        const phRates  = [0.03, 0.03, 0.03, 0.05, 0.03, 0.03, 0.03, 0.05, 0.03, 0.03, 0.03, 0.03];
        phMonths.forEach((m, idx) => {
            schedule.push({
                installmentNum: idx + 7,
                monthOffset: 24 + m,
                date: formatExactDate(new Date(completionDate.getFullYear(), completionDate.getMonth() + m, completionDate.getDate())),
                desc: `${idx + 7}th Installment`,
                percent: `${(phRates[idx] * 100).toFixed(0)}%`,
                amt: netPrice * phRates[idx]
            });
        });

    } else if (plan === '5yr') {
        $('#badge-plan').text('5-YEAR POST HANDOVER');
        schedule.push({ installmentNum: 1, monthOffset: 5,  date: addMonths(today, 5),  desc: '1st Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 2, monthOffset: 9,  date: addMonths(today, 9),  desc: '2nd Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 3, monthOffset: 13, date: addMonths(today, 13), desc: '3rd Installment', percent: '10%', amt: netPrice * 0.10 });
        schedule.push({ installmentNum: 4, monthOffset: 17, date: addMonths(today, 17), desc: '4th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 5, monthOffset: 21, date: addMonths(today, 21), desc: '5th Installment', percent: '5%',  amt: netPrice * 0.05 });
        schedule.push({ installmentNum: 6, monthOffset: 24, isCompletion: true, date: 'On completion', desc: '6th Installment', percent: '0%', amt: 0 });

        const completionDate = new Date(today);
        completionDate.setMonth(completionDate.getMonth() + 24);
        for (let i = 1; i <= 10; i++) {
            schedule.push({
                installmentNum: i + 6,
                monthOffset: 24 + (i * 6),
                date: formatExactDate(new Date(completionDate.getFullYear(), completionDate.getMonth() + (i * 6), completionDate.getDate())),
                desc: `${i + 6}th Installment`,
                percent: '4%',
                amt: netPrice * 0.04
            });
        }
    }

    // -----------------------------------------------
    // DYNAMIC BALANCE: calculate Completion remainder
    // -----------------------------------------------
    let completionItem = schedule.find(s => s.isCompletion);
    $('#balloon-error').addClass('hidden');

    if (completionItem) {
        // Sum all property payments EXCEPT the completion row and fee rows
        let totalPropertyPayments = schedule.reduce((sum, s) => {
            if (s.isCompletion || s.desc === 'DLD fee' || s.desc === 'Admin fee') return sum;
            return sum + s.amt;
        }, 0);

        let remainingBalance = netPrice - totalPropertyPayments;

        // Safety cap: DP cannot overdrain the balance
        if (remainingBalance < 0) {
            const excess   = Math.abs(remainingBalance);
            dpAmt         -= excess;
            dpPercent      = (dpAmt / netPrice) * 100;

            dpInputEl.value = dpPercent.toFixed(1);
            const dpItem    = schedule.find(s => s.desc === 'Downpayment');
            dpItem.amt      = dpAmt;
            dpItem.percent  = dpPercent.toFixed(1) + '%';
            remainingBalance = 0;

            $('#balloon-error')
                .text(`Notice: Downpayment was automatically capped at ${dpPercent.toFixed(1)}% to balance fixed installments.`)
                .removeClass('hidden text-red-500')
                .addClass('text-orange-500');
        } else {
            $('#balloon-error').addClass('text-red-500').removeClass('text-orange-500');
        }

        if (remainingBalance < 1 && remainingBalance > -1) remainingBalance = 0;

        completionItem.amt     = remainingBalance;
        completionItem.percent = ((remainingBalance / netPrice) * 100).toFixed(1) + '%';
    }

    // -----------------------------------------------
    // BALLOON PAYMENTS
    // -----------------------------------------------
    let balloons      = [];
    let totalBalloonAmt = 0;
    let invalidInsts  = [];

    $('.balloon-entry').each(function () {
        const instNum = parseInt($(this).find('.balloon-inst').val());
        const a       = parseFloat($(this).find('.balloon-amount').val());
        if (!isNaN(instNum) && !isNaN(a) && instNum > 0 && a > 0) {
            const target = schedule.find(s => s.installmentNum === instNum);
            if (!target) {
                invalidInsts.push(instNum);
            } else {
                balloons.push({ instNum, amount: a });
                totalBalloonAmt += a;
            }
        }
    });

    if (invalidInsts.length > 0) {
        $('#balloon-error').text(`Error: Installment number(s) ${invalidInsts.join(', ')} do not exist in this plan.`).removeClass('hidden');
    } else if (balloons.length > 0 && completionItem) {
        if (totalBalloonAmt > completionItem.amt) {
            $('#balloon-error')
                .text(`Error: Total balloon payments exceed available Completion balance (${formatter.format(completionItem.amt)}).`)
                .removeClass('hidden text-orange-500')
                .addClass('text-red-500');
        } else {
            if (!$('#balloon-error').hasClass('text-orange-500')) $('#balloon-error').addClass('hidden');

            completionItem.amt    -= totalBalloonAmt;
            completionItem.percent = ((completionItem.amt / netPrice) * 100).toFixed(1) + '%';

            balloons.forEach(b => {
                let existing = schedule.find(s => s.installmentNum === b.instNum);
                if (existing) {
                    let shortDesc = existing.desc.replace('Installment', 'Inst.');
                    if (!shortDesc.includes('Balloon')) existing.desc = `Balloon + ${shortDesc}`;
                    existing.amt    += b.amount;
                    existing.percent = ((existing.amt / netPrice) * 100).toFixed(1) + '%';
                }
            });

            schedule.forEach((item, index) => item.originalIndex = index);
            schedule.sort((a, b) => a.monthOffset !== b.monthOffset ? a.monthOffset - b.monthOffset : a.originalIndex - b.originalIndex);
        }
    }

    // -----------------------------------------------
    // 1ST YEAR EQUITY CALCULATION (DP + Installments <= 12m)
    // -----------------------------------------------
    let firstYearTotal = 0;
    schedule.forEach(item => {
        // Exclude generic fees, include Downpayment and any property installment up to 12 months
        if (item.desc !== 'DLD fee' && item.desc !== 'Admin fee' && item.monthOffset <= 12) {
            firstYearTotal += item.amt;
        }
    });

    const firstYearPct = netPrice > 0 ? (firstYearTotal / netPrice) * 100 : 0;

    const $fyCard    = $('#card-first-year');
    const $fyPctText = $('#dash-first-year-pct');
    const $fyAmtText = $('#dash-first-year-amt');

    $fyPctText.text(firstYearPct.toFixed(1) + '%');
    $fyAmtText.text(formatter.format(firstYearTotal));

    // Fix: We must apply colors using inline CSS rather than Tailwind classes 
    // because Tailwind CDN JIT compiler ignores dynamically added string classes in external scripts.
    if (firstYearPct >= 40) {
        $fyCard.css('border-color', 'var(--color-wasabi)'); // Match the green metric box style
        $fyPctText.css('color', 'var(--color-emerald-green)');
    } else {
        $fyCard.css('border-color', '#EF4444'); // Tailwind red-500 equivalent
        $fyPctText.css('color', '#DC2626'); // Tailwind red-600 equivalent
    }

    // -----------------------------------------------
    // RENDER TABLE
    // -----------------------------------------------
    let rowsHTML = '';
    schedule.forEach((row, idx) => {
        const percentStr   = row.percent !== '-' ? ` (${row.percent})` : '';
        const isUpfront    = idx < 3;
        const isBalloonHighlight = row.desc.includes('Balloon');

        let rowClass  = 'row-milestone';
        let amtColor  = 'var(--color-egyptian-earth)';
        let descColor = 'var(--color-egyptian-earth)';

        if (isUpfront) {
            rowClass  = 'row-balloon';
            amtColor  = 'var(--color-emerald-green)';
            descColor = '#64748B';
        } else if (isBalloonHighlight) {
            amtColor  = 'var(--color-emerald-green)';
            descColor = 'var(--color-emerald-green)';
        }

        rowsHTML += `
            <tr class="${rowClass}" style="color: var(--color-nor-de-vigne);">
                <td class="p-4 uppercase text-[10px] font-black">${row.date}</td>
                <td class="p-4 text-[10px] uppercase tracking-wide font-bold" style="color:${descColor}">${row.desc}${percentStr}</td>
                <td class="p-4 text-right text-[11px] font-black" style="color:${amtColor}">${formatter.format(row.amt)}</td>
            </tr>
        `;
    });
    table.html(rowsHTML);

    // Update dashboard cards
    $('#dash-net').text(formatter.format(netPrice));
    $('#dash-dp').text(formatter.format(dpAmt));
    $('#dash-fees').text(formatter.format(dldFee + adminFee));

    // Export payload for PDF
    window.currentExportData = {
        netPrice, unit, plan, schedule,
        furnished: isFurnished,
        pool: $('#toggle-pool').is(':checked'),
        dpAmt, dldFee, adminFee, dldPercent: dldFeePercent, dpPercent
    };
}


// ==========================================
// 4. PDF ENGINE
// ==========================================

function loadImage(url) {
    return new Promise((resolve) => {
        const img    = new Image();
        img.onload   = () => resolve(img);
        img.onerror  = () => { console.warn(`Failed to load: ${url}`); resolve(null); };
        img.src      = url;
    });
}

async function generateProfessionalPDF() {
    const { jsPDF } = window.jspdf;
    const doc   = new jsPDF('l', 'mm', 'a4');
    const pageW = 297;
    const pageH = 210;

    const data = window.currentExportData;
    if (!data) return alert("Please select a unit first.");

    const $btn = $('#btn-pdf');
    $btn.text('GENERATING PDF...').prop('disabled', true);

    const basePath = 'assets/';

    const [imgTitle, imgMap, imgRender, imgSubtitle, imgThankYou] = await Promise.all([
        loadImage(basePath + 'Title.jpg'),
        loadImage(basePath + 'Map.jpg'),
        loadImage(basePath + 'Render.jpg'),
        loadImage(basePath + 'Subtitle.jpg'),
        loadImage(basePath + '9.jpg')
    ]);

    // -- PAGE 1: TITLE --
    if (imgTitle) {
        doc.addImage(imgTitle, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(13, 54, 45);
        doc.rect(0, 0, pageW, pageH, 'F');
    }

    const unitTextX = pageW * 0.62;
    const unitTextY = pageH * 0.60;
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.setCharSpace(4);
    doc.text(`UNIT ${data.unit.u}`, unitTextX, unitTextY);
    doc.setCharSpace(0);

    // -- PAGE 2: MAP --
    doc.addPage();
    if (imgMap) {
        doc.addImage(imgMap, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(220, 220, 220); doc.rect(0, 0, pageW, pageH, 'F');
        doc.setTextColor(100, 100, 100); doc.setFontSize(18);
        doc.text('Map.jpg missing — place in assets/', pageW / 2, pageH / 2, { align: 'center' });
    }

    // -- PAGE 3: RENDER --
    doc.addPage();
    if (imgRender) {
        doc.addImage(imgRender, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(220, 220, 220); doc.rect(0, 0, pageW, pageH, 'F');
        doc.setTextColor(100, 100, 100); doc.setFontSize(18);
        doc.text('Render.jpg missing — place in assets/', pageW / 2, pageH / 2, { align: 'center' });
    }

    // -- PAGE 4: UNIT SPECIFICATIONS --
    doc.addPage();
    const darkGreen  = [13,  54,  45];
    const lightGreen = [143, 182, 126];
    const offWhite   = [238, 232, 213];
    const dimWhite   = [160, 165, 155];

    doc.setFillColor(...darkGreen);
    doc.rect(0, 0, pageW, pageH, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setCharSpace(0);
    doc.setTextColor(...offWhite);
    doc.text('Southloft', 18, 22);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setCharSpace(2);
    doc.setTextColor(...lightGreen);
    doc.text('ELEVATED CO-LIVING', 18, 30);
    doc.setCharSpace(0);

    doc.setDrawColor(...lightGreen);
    doc.setLineWidth(0.25);
    doc.line(18, 35, pageW - 18, 35);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(36);
    doc.setCharSpace(1);
    doc.setTextColor(...offWhite);
    doc.text(`UNIT ${data.unit.u}`, 18, 62);
    doc.setCharSpace(0);

    const specRows = [
        ['FLOOR NO.',      `${data.unit.floor}`],
        ['UNIT TYPE',      data.unit.type],
        ['TOTAL AREA',     `${data.unit.area.toFixed(2)} SQFT`],
        ['PURCHASE PRICE', formatter.format(data.netPrice)],
        ['DOWNPAYMENT',    `${parseFloat(data.dpPercent).toFixed(1)}% (${formatter.format(data.dpAmt)})`],
        ['FURNISHING',     data.furnished ? 'FULLY FURNISHED' : 'UNFURNISHED'],
        ['PRIVATE POOL',   data.pool      ? 'INCLUDED'        : 'NOT INCLUDED'],
    ];

    let specY     = 78;
    const rowGap  = 15;
    const labelX  = 18;
    const valueX  = 110;

    specRows.forEach(([label, val]) => {
        doc.setDrawColor(255, 255, 255);
        doc.setGState(new doc.GState({ opacity: 0.08 }));
        doc.line(labelX, specY - 4, pageW - 18, specY - 4);
        doc.setGState(new doc.GState({ opacity: 1 }));

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setCharSpace(1);
        doc.setTextColor(...dimWhite);
        doc.text(label, labelX, specY);
        doc.setCharSpace(0);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...offWhite);
        doc.text(val, valueX, specY);

        specY += rowGap;
    });

    // -- PAGE 5: DYNAMIC PAYMENT PLAN --
    doc.addPage();

    doc.setFillColor(...darkGreen);
    doc.rect(0, 0, pageW, pageH, 'F');

    const ML = 16;
    const MR = 16;

    let planLabel = 'STANDARD 60/40 PAYMENT PLAN';
    if (data.plan === '3yr') planLabel = '3-YEAR POST HANDOVER PLAN';
    if (data.plan === '5yr') planLabel = '5-YEAR POST HANDOVER PLAN';

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setCharSpace(0);
    doc.setTextColor(...offWhite);
    doc.text(planLabel, ML, 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...lightGreen);
    doc.text('PURCHASE PRICE:', pageW - MR - 65, 18);
    doc.setTextColor(...offWhite);
    doc.text(formatter.format(data.netPrice), pageW - MR - 65 + 42, 18);

    doc.setDrawColor(...lightGreen);
    doc.setLineWidth(0.3);
    doc.line(ML, 22, pageW - MR, 22);

    const renderTwoColumns = data.schedule.length > 15;
    const colHeaderY = 30;

    const drawColHeaders = (offsetX) => {
        const C = [
            { label: 'TIMELINE',    x: offsetX,       align: 'left'  },
            { label: 'DESCRIPTION', x: offsetX + 28,  align: 'left'  },
            { label: '%',           x: offsetX + 105, align: 'right' },
            { label: 'AMOUNT',      x: offsetX + 130, align: 'right' }
        ];

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...lightGreen);
        doc.setCharSpace(0);
        C.forEach(c => doc.text(c.label, c.x, colHeaderY, { align: c.align }));

        doc.setDrawColor(255, 255, 255);
        doc.setGState(new doc.GState({ opacity: 0.15 }));
        doc.line(offsetX, colHeaderY + 3, offsetX + 130, colHeaderY + 3);
        doc.setGState(new doc.GState({ opacity: 1 }));
        return C;
    };

    const drawScheduleBlock = (scheduleSubset, C, startY) => {
        const lineH = 7.5;
        let rowY    = startY;

        scheduleSubset.forEach((row) => {
            doc.setDrawColor(255, 255, 255);
            doc.setGState(new doc.GState({ opacity: 0.08 }));
            doc.line(C[0].x, rowY + lineH, C[0].x + 130, rowY + lineH);
            doc.setGState(new doc.GState({ opacity: 1 }));

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7.5);

            doc.setTextColor(...dimWhite);
            doc.text(row.date, C[0].x, rowY + 5, { align: C[0].align });

            doc.setTextColor(...offWhite);
            doc.text(row.desc.toUpperCase(), C[1].x, rowY + 5, { align: C[1].align });

            doc.text(row.percent, C[2].x, rowY + 5, { align: C[2].align });
            const cleanAmt = formatter.format(row.amt).replace('AED', '').trim();
            doc.text(cleanAmt, C[3].x, rowY + 5, { align: C[3].align });

            rowY += lineH;
        });
    };

    if (renderTwoColumns) {
        const mid      = Math.ceil(data.schedule.length / 2);
        const col1Data = data.schedule.slice(0, mid);
        const col2Data = data.schedule.slice(mid);

        const CLeft  = drawColHeaders(ML);
        drawScheduleBlock(col1Data, CLeft, colHeaderY + 5);

        const rightOffset = pageW / 2 + 5;
        const CRight      = drawColHeaders(rightOffset);
        drawScheduleBlock(col2Data, CRight, colHeaderY + 5);
    } else {
        const C = drawColHeaders(ML);
        drawScheduleBlock(data.schedule, C, colHeaderY + 5);
    }

    // Bank details
    const bankSectionTop = pageH - 45;
    doc.setDrawColor(...lightGreen);
    doc.setLineWidth(0.3);
    doc.line(ML, bankSectionTop, pageW - MR, bankSectionTop);

    const colB1 = ML;
    const colB2 = ML + (pageW / 2) - 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...offWhite);
    doc.text('BOOKING AND INSTALLMENT PAYMENTS', colB1, bankSectionTop + 6);
    doc.text(`FOR ${data.dldPercent}% DLD AND ADMIN FEE`, colB2, bankSectionTop + 6);

    const bankLeft = [
        ['Bank',           'United Bank Limited (UBL)'],
        ['Account Title',  'ESCROW ACCOUNT GATEWAY BY PREMIERCHOICE'],
        ['Account Number', '200770307'],
        ['IBAN',           'AE090470000000200770307'],
        ['Swift Code',     'UNILAEAD'],
    ];
    const bankRight = [
        ['Bank',           'Abu Dhabi Commercial Bank'],
        ['Account Title',  'PCI REAL ESTATE DEVELOPERS LLC'],
        ['IBAN',           'AE770030010031001994462'],
        ['Swift Code',     'ADCBAEAA'],
    ];

    const drawBank = (entries, startX, startY) => {
        let y = startY;
        entries.forEach(([k, v]) => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(...lightGreen);
            doc.text(k, startX, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7);
            doc.setTextColor(...offWhite);
            doc.text(v, startX + 25, y);
            y += 4.5;
        });
    };

    drawBank(bankLeft,  colB1, bankSectionTop + 12);
    drawBank(bankRight, colB2, bankSectionTop + 12);

    // -- PAGE 6: SUBTITLE --
    doc.addPage();
    if (imgSubtitle) {
        doc.addImage(imgSubtitle, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(61, 57, 53); doc.rect(0, 0, pageW, pageH, 'F');
        doc.setTextColor(255, 255, 255); doc.setFontSize(18);
        doc.text('Subtitle.jpg missing — place in assets/', pageW / 2, pageH / 2, { align: 'center' });
    }

    // -- PAGE 7: THANK YOU --
    doc.addPage();
    if (imgThankYou) {
        doc.addImage(imgThankYou, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(13, 54, 45); doc.rect(0, 0, pageW, pageH, 'F');
    }

    doc.save(`SouthLofts_Unit_${data.unit.u}_Proposal.pdf`);
    $btn.text('Generate Executive PDF').prop('disabled', false);
}