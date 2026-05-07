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

// ==========================================
// 2. CALCULATION ENGINE
// ==========================================
const formatter = new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 });

// Application state for balloons
let balloonCount = 0;

// Debounce utility to prevent calculate() firing on every keystroke
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

$(document).ready(() => {
    initFilters();
    initCalculator();
    $('#btn-pdf').on('click', generateProfessionalPDF);
});

function initFilters() {
    const floors = [...new Set(INVENTORY.map(i => i.floor))].sort();
    const types  = [...new Set(INVENTORY.map(i => i.type))].sort();

    $('#filter-floor').append('<option value="all">ALL FLOORS</option>');
    floors.forEach(f => $('#filter-floor').append(`<option value="${f}">FLOOR ${f}</option>`));

    $('#filter-type').append('<option value="all">ALL TYPES</option>');
    types.forEach(t => $('#filter-type').append(`<option value="${t}">${t}</option>`));

    $('#unit-select').select2({ placeholder: "SEARCH UNIT ID...", minimumResultsForSearch: 1 });
    updateUnitDropdown();
    $('#filter-floor, #filter-type').on('change', updateUnitDropdown);
}

function updateUnitDropdown() {
    const floor = $('#filter-floor').val();
    const type  = $('#filter-type').val();
    $('#unit-select').empty().append(new Option("", "", true, true));
    INVENTORY.forEach(item => {
        const floorMatch = floor === 'all' || item.floor === floor;
        const typeMatch  = type  === 'all' || item.type  === type;
        if (floorMatch && typeMatch) {
            $('#unit-select').append(new Option(`UNIT ${item.u} • ${item.type} • ${item.area} sqft`, item.u));
        }
    });
    $('#unit-select').trigger('change');
}

function initCalculator() {
    // Immediate recalc for dropdowns/checkboxes
    $('#unit-select, #plan-mode, #toggle-furnish, #toggle-pool').on('change', calculate);

    // Debounced recalc for text input
    const debouncedCalc = debounce(calculate, 300);
    $('#input-discount').on('input', debouncedCalc);

    // Dynamic Balloon Handlers
    $('#btn-add-balloon').on('click', () => addBalloonRow());
    
    // Listen for inputs inside dynamic balloon rows
    $('#balloon-list').on('input', '.balloon-amt, .balloon-month', debouncedCalc);
    
    // Listen for removal
    $('#balloon-list').on('click', '.btn-remove-balloon', function() {
        $(this).closest('.balloon-row').remove();
        balloonCount--;
        $('#btn-add-balloon').show(); // Show button again when count drops below 4
        calculate();
    });

    // Provide one initial balloon row automatically to guide the user
    addBalloonRow(4, 25000, true);
    
    calculate();
}

/**
 * Dynamically adds a new custom balloon payment row. Maximum 4 allowed.
 */
function addBalloonRow(defaultMonth = 4, defaultAmt = 25000, isInitialSetup = false) {
    if (balloonCount >= 4) return;
    
    let monthOptions = '';
    // Typically months run from 3 to 29 (30 is handover usually, so 29 is the last standard pre-handover month)
    for(let i = 3; i <= 29; i++) {
        let selected = (i === defaultMonth) ? 'selected' : '';
        monthOptions += `<option value="${i}" ${selected}>Month ${i}</option>`;
    }

    const rowHTML = `
        <div class="balloon-row flex gap-2 items-center">
            <select class="balloon-month flex-1 p-3 rounded-xl text-xs font-bold border border-slate-200">
                ${monthOptions}
            </select>
            <input type="number" value="${defaultAmt}" class="balloon-amt flex-1 p-3 rounded-xl text-xs font-bold text-center border border-slate-200" style="color: var(--color-egyptian-earth);" placeholder="Amount AED">
            <button type="button" class="btn-remove-balloon px-4 py-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors font-black">X</button>
        </div>
    `;
    
    $('#balloon-list').append(rowHTML);
    balloonCount++;

    if (balloonCount >= 4) {
        $('#btn-add-balloon').hide();
    }
    
    // Trigger calculation if user clicks to add
    if (!isInitialSetup) {
        calculate();
    }
}

function calculate() {
    const uId  = $('#unit-select').val();
    const unit = INVENTORY.find(i => i.u === uId);

    if (!unit) {
        $('#unit-specs').css('opacity', '0.3');
        return;
    }

    $('#unit-specs').css('opacity', '1');
    $('#spec-area').text(unit.area.toFixed(0));
    $('#spec-type').text(unit.type);

    const plan = $('#plan-mode').val();
    let netPrice = (plan === '7030') ? unit.reg : unit.post;

    const isFurnished = $('#toggle-furnish').is(':checked');
    if (!isFurnished) netPrice -= 25000;

    const canHavePool = unit.pool;
    if (canHavePool) $('#pool-container').removeClass('opacity-50 pointer-events-none');
    else {
        $('#pool-container').addClass('opacity-50 pointer-events-none');
        $('#toggle-pool').prop('checked', false);
    }

    if (canHavePool && $('#toggle-pool').is(':checked')) netPrice += 100000;

    const discPercent = parseFloat($('#input-discount').val()) || 0;
    netPrice = netPrice * (1 - (discPercent / 100));

    // ── Parse Custom Balloon Payments ──
    let balloons = [];
    let sumOfBalloons = 0;
    
    $('.balloon-row').each(function() {
        let m = parseInt($(this).find('.balloon-month').val());
        let a = parseFloat($(this).find('.balloon-amt').val()) || 0;
        
        // If a user accidentally selects the same month multiple times, consolidate it
        let existing = balloons.find(b => b.month === m);
        if (existing) {
            existing.amt += a;
        } else {
            balloons.push({ month: m, amt: a });
        }
        sumOfBalloons += a;
    });

    let schedule = [];

    const dpAmt      = netPrice * 0.10;
    const secondInst = netPrice * 0.10;
    schedule.push({ m: 'BOOKING', desc: 'DOWN PAYMENT (10%)',        amt: dpAmt,      type: 'milestone' });
    schedule.push({ m: 'MONTH 2', desc: 'SECOND INSTALLMENT (10%)', amt: secondInst,  type: 'milestone' });

    // Target liquidity generated during construction (before handover)
    const bridgeTarget = (plan === '7030') ? 0.50 : 0.30;
    const bridgeTotal  = netPrice * bridgeTarget;
    
    // Validation: Total balloon cannot exceed the bridge amount, otherwise monthly installments are negative
    if (sumOfBalloons >= bridgeTotal) {
        $('#balloon-error')
            .removeClass('hidden')
            .text(`Warning: Total balloon payments (${formatter.format(sumOfBalloons)}) exceed or equal the allowable bridge limit (${formatter.format(bridgeTotal)}). Please reduce the amount.`);
    } else {
        $('#balloon-error').addClass('hidden');
    }

    const monthlyInst  = (bridgeTotal - sumOfBalloons) / 28;

    const rows = [];

    for (let i = 1; i <= 30; i++) {
        if (i === 2) continue; // Already handled month 2 milestone
        
        let rowType = 'monthly';
        let desc    = 'MONTHLY INSTALLMENT';
        let amt     = monthlyInst;

        // Check if there is a custom balloon for the current month
        let matchingBalloon = balloons.find(b => b.month === i);

        if (matchingBalloon) {
            rowType = 'balloon';
            desc    = 'MONTHLY + BALLOON PAYMENT';
            amt     = monthlyInst + matchingBalloon.amt;
        }
        
        if (i === 30) {
            rowType = 'milestone';
            desc    = `HANDOVER & POSSESSION (${plan === '7030' ? '30%' : '10%'})`;
            amt     = netPrice * (plan === '7030' ? 0.30 : 0.10);
        }
        
        schedule.push({ m: 'MONTH ' + i, desc, amt, type: rowType });
    }

    if (plan === '6040') {
        const postTotal   = netPrice * 0.40;
        const postMonthly = postTotal / 36;
        for (let j = 31; j <= 66; j++) {
            schedule.push({ m: 'MONTH ' + j, desc: 'POST-HANDOVER PAYMENT (40%)', amt: postMonthly, type: 'post' });
        }
    }

    // Single DOM write for the entire table body
    schedule.forEach(row => {
        let rowClass = '';
        if (row.type === 'milestone') rowClass = 'row-milestone';
        else if (row.type === 'balloon') rowClass = 'row-balloon';
        const amtColor = row.type === 'milestone' ? 'var(--color-egyptian-earth)' : 'var(--color-emerald-green)';
        const descColor = row.type === 'milestone' ? 'var(--color-egyptian-earth)' : '#64748B';
        
        rows.push(`
            <tr class="${rowClass}" style="color: var(--color-nor-de-vigne);">
                <td class="p-4 uppercase text-[10px] font-black">${row.m}</td>
                <td class="p-4 text-[10px] uppercase tracking-wide" style="color:${descColor}">${row.desc}</td>
                <td class="p-4 text-right text-[11px] font-bold" style="color:${amtColor}">${formatter.format(row.amt)}</td>
            </tr>`);
    });

    $('#schedule-body').html(rows.join(''));

    // Update summary cards
    $('#dash-net').text(formatter.format(netPrice));
    $('#dash-dp').text(formatter.format(dpAmt));
    $('#dash-monthly').text(formatter.format(monthlyInst));
    $('#badge-plan').text(plan === '7030' ? '70/30 PLAN' : '60/40 POST-HANDOVER');

    // Export payload for PDF logic
    window.currentExportData = {
        netPrice, unit, plan, schedule,
        furnished: isFurnished,
        pool: $('#toggle-pool').is(':checked'),
        balloons: balloons, // Sorted or custom array
        sumOfBalloons: sumOfBalloons
    };
}

// ==========================================
// 3. PDF ENGINE
// ==========================================

function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload  = () => resolve(img);
        img.onerror = () => { console.warn(`Failed to load: ${url}`); resolve(null); };
        img.src = url;
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

    // Load all images in parallel
    const [imgTitle, imgMap, imgRender, imgSubtitle, imgThankYou] = await Promise.all([
        loadImage(basePath + 'Title.jpg'),
        loadImage(basePath + 'Map.jpg'),
        loadImage(basePath + 'Render.jpg'),
        loadImage(basePath + 'Subtitle.jpg'),
        loadImage(basePath + '9.jpg')
    ]);

    // ── PAGE 1: TITLE (use jsPDF's default first page) ──
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

    // ── PAGE 2: MAP ───────────────────────────────────────────────────
    doc.addPage();
    if (imgMap) {
        doc.addImage(imgMap, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(220,220,220); doc.rect(0,0,pageW,pageH,'F');
        doc.setTextColor(100,100,100); doc.setFontSize(18);
        doc.text('Map.jpg missing — place in assets/', pageW/2, pageH/2, {align:'center'});
    }

    // ── PAGE 3: RENDER ────────────────────────────────────────────────
    doc.addPage();
    if (imgRender) {
        doc.addImage(imgRender, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(220,220,220); doc.rect(0,0,pageW,pageH,'F');
        doc.setTextColor(100,100,100); doc.setFontSize(18);
        doc.text('Render.jpg missing — place in assets/', pageW/2, pageH/2, {align:'center'});
    }

    // ── PAGE 4: UNIT SPECIFICATIONS ──────────────────────────────────
    doc.addPage();
    const _dkGreen   = [13,  54,  45];
    const _ltGreen   = [143, 182, 126];
    const _offWhite  = [238, 232, 213];
    const _dimWhite  = [160, 165, 155];

    doc.setFillColor(..._dkGreen);
    doc.rect(0, 0, pageW, pageH, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setCharSpace(0);
    doc.setTextColor(..._offWhite);
    doc.text('Southloft', 18, 22);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setCharSpace(2);
    doc.setTextColor(..._ltGreen);
    doc.text('ELEVATED CO-LIVING', 18, 30);
    doc.setCharSpace(0);

    doc.setDrawColor(..._ltGreen);
    doc.setLineWidth(0.25);
    doc.line(18, 35, pageW - 18, 35);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(36);
    doc.setCharSpace(1);
    doc.setTextColor(..._offWhite);
    doc.text(`UNIT ${data.unit.u}`, 18, 62);
    doc.setCharSpace(0);

    const specRows = [
        ['FLOOR NO.',    `${data.unit.floor}`],
        ['UNIT TYPE',    data.unit.type],
        ['TOTAL AREA',   `${data.unit.area.toFixed(2)} SQFT`],
        ['PURCHASE PRICE', formatter.format(data.netPrice)],
        ['FURNISHING',   data.furnished ? 'FULLY FURNISHED' : 'UNFURNISHED'],
        ['PRIVATE POOL', data.pool      ? 'INCLUDED'        : 'NOT INCLUDED'],
    ];

    let specY  = 78;
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
        doc.setTextColor(..._dimWhite);
        doc.text(label, labelX, specY);
        doc.setCharSpace(0);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(..._offWhite);
        doc.text(val, valueX, specY);

        specY += rowGap;
    });

    // ── PAGE 5: PREMIUM PAYMENT PLAN ──────────────────────────────────
    doc.addPage();
    const darkGreen  = [13,  54,  45];
    const lightGreen = [143, 182, 126];
    const offWhite   = [238, 232, 213];
    const dimWhite   = [155, 160, 152];

    doc.setFillColor(...darkGreen);
    doc.rect(0, 0, pageW, pageH, 'F');

    const ML = 16;   
    const MR = 16;   
    const CW = pageW - ML - MR;  

    const planLabel = data.plan === '7030' ? '70 | 30 PAYMENT PLAN' : '60 | 40 PAYMENT PLAN';
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
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

    const C = [
        { label: 'INSTALLMENT',         x: ML,                w: 60 },
        { label: '% OF PURCHASE',       x: ML + 62,           w: 32 },
        { label: 'AMOUNT (AED)',        x: ML + 62 + 34,      w: 55 },
        { label: 'PAYMENT DATE',        x: ML + 62 + 34 + 57, w: 55 },
        { label: 'MILESTONE',           x: ML + 62 + 34 + 57 + 57, w: 63 },
    ];

    const colHeaderY = 30;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(...lightGreen);
    doc.setCharSpace(0);
    C.forEach(c => doc.text(c.label, c.x, colHeaderY));

    doc.setDrawColor(255, 255, 255);
    doc.setGState(new doc.GState({ opacity: 0.15 }));
    doc.line(ML, colHeaderY + 3, pageW - MR, colHeaderY + 3);
    doc.setGState(new doc.GState({ opacity: 1 }));

    // Core variables
    const np           = data.netPrice;
    const plan         = data.plan;
    const dpAmt        = np * 0.10;
    const secondInst   = np * 0.10;
    const bridgeTarget = plan === '7030' ? 0.50 : 0.30;
    const bridgeTotal  = np * bridgeTarget;
    const sumBalloons  = data.sumOfBalloons || 0;
    const monthlyInst  = (bridgeTotal - sumBalloons) / 28;
    const handoverPct  = plan === '7030' ? 30 : 10;
    const handoverAmt  = np * (handoverPct / 100);
    const midPct       = ((bridgeTarget - 0.20) * 100).toFixed(0);
    const dldFee       = (np * 0.04).toLocaleString('en-AE', {maximumFractionDigits:0});
    const fmt          = v => v.toLocaleString('en-AE', {maximumFractionDigits:0});

    const tableRows = [
        {
            labelLines: ['BOOKING AMOUNT', '+ FEES'],
            pct: '10%',
            amtLines:  [fmt(dpAmt), dldFee + ' — DLD FEE', '5,000 — OQOOD FEE'],
            dateLines: ['ON BOOKING'],
            ms:        'ON BOOKING'
        },
        {
            labelLines: ['FIRST INSTALLMENT'],
            pct: '10%',
            amtLines:  [fmt(secondInst)],
            dateLines: ['1 MONTH FROM', 'BOOKING DATE'],
            ms:        '—'
        },
        {
            labelLines: ['MONTHLY INSTALLMENTS', '(MONTHS 3–30)'],
            pct: midPct + '%',
            amtLines:  [fmt(monthlyInst) + ' / MONTH'],
            dateLines: ['MONTHS 3 – 30'],
            ms:        '—'
        }
    ];

    // Inject Custom Balloon Block Dynamically
    if (data.balloons && data.balloons.length > 0) {
        // Sort balloons logically for the UI display
        const sortedBalloons = data.balloons.sort((a,b) => a.month - b.month);
        
        const bAmtLines  = sortedBalloons.map(b => fmt(b.amt));
        const bDateLines = sortedBalloons.map(b => `MONTH ${b.month}`);
        
        // Append total row
        bAmtLines.push(fmt(sumBalloons) + ' TOTAL');
        bDateLines.push('');
        
        tableRows.push({
            labelLines: ['CUSTOM BALLOON PAYMENTS', `(${sortedBalloons.length} OCCURRENCES)`],
            pct:        '—',
            amtLines:   bAmtLines,
            dateLines:  bDateLines,
            ms:         '—'
        });
    }

    tableRows.push({
        labelLines: ['HANDOVER'],
        pct: handoverPct + '%',
        amtLines:  [fmt(handoverAmt)],
        dateLines: ['ON HANDOVER'],
        ms:        'COMPLETION'
    });

    if (plan === '6040') {
        const postMonthly = (np * 0.40) / 36;
        tableRows.push({
            labelLines: ['POST-HANDOVER', '(36 MONTHS)'],
            pct: '40%',
            amtLines:  [fmt(postMonthly) + ' / MONTH'],
            dateLines: ['MONTHS 31 – 66'],
            ms: '—'
        });
    }

    const lineH    = 4.8;  
    const rowPad   = 6;    
    let rowY       = colHeaderY + 10;

    tableRows.forEach((row) => {
        const maxLines = Math.max(row.labelLines.length, row.amtLines.length, row.dateLines.length);
        const rowHeight = rowPad + maxLines * lineH + 4;

        doc.setDrawColor(255, 255, 255);
        doc.setGState(new doc.GState({ opacity: 0.10 }));
        doc.line(ML, rowY + rowHeight, pageW - MR, rowY + rowHeight);
        doc.setGState(new doc.GState({ opacity: 1 }));

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);

        doc.setTextColor(...offWhite);
        row.labelLines.forEach((l, i) => doc.text(l, C[0].x, rowY + rowPad + i * lineH));

        doc.text(row.pct, C[1].x, rowY + rowPad);

        row.amtLines.forEach((a, i) => {
            // First lines are bright, the appended 'Total' line or secondary info is dimmer
            doc.setTextColor(...((i === row.amtLines.length - 1 && a.includes('TOTAL')) ? dimWhite : offWhite));
            doc.setFontSize(i === 0 ? 8.5 : 7.5);
            doc.text(a, C[2].x, rowY + rowPad + i * lineH);
        });

        doc.setTextColor(...offWhite);
        doc.setFontSize(8.5);
        row.dateLines.forEach((d, i) => doc.text(d, C[3].x, rowY + rowPad + i * lineH));

        doc.text(row.ms, C[4].x, rowY + rowPad);

        rowY += rowHeight;
    });

    const bankSectionTop = pageH - 62;
    doc.setDrawColor(...lightGreen);
    doc.setLineWidth(0.3);
    doc.line(ML, bankSectionTop, pageW - MR, bankSectionTop);

    const colB1 = ML;
    const colB2 = ML + CW / 2 + 4;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...offWhite);
    doc.text('BOOKING AND INSTALLMENT PAYMENTS', colB1, bankSectionTop + 6);
    doc.text('FOR 4% DLD AND ADMIN FEE', colB2, bankSectionTop + 6);

    const bankLeft = [
        ['Bank',           'United Bank Limited (UBL)'],
        ['Account Title',  'ESCROW ACCOUNT GATEWAY BY PREMIERCHOICE'],
        ['Account Number', '200770307'],
        ['IBAN',           'AE090470000000200770307'],
        ['Swift Code',     'UNILAEAD'],
        ['Branch',         'Deira, Dubai'],
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
            doc.text(v, startX, y + 3.8);
            y += 9;
        });
    };

    drawBank(bankLeft,  colB1, bankSectionTop + 12);
    drawBank(bankRight, colB2, bankSectionTop + 12);

    // ── PAGE 5: SUBTITLE ─────────────────────────────────────────────
    doc.addPage();
    if (imgSubtitle) {
        doc.addImage(imgSubtitle, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(61,57,53); doc.rect(0,0,pageW,pageH,'F');
        doc.setTextColor(255,255,255); doc.setFontSize(18);
        doc.text('Subtitle.jpg missing — place in assets/', pageW/2, pageH/2, {align:'center'});
    }

    // ── PAGE 6: PLAIN TITLE PAGE ────────
    doc.addPage();
    if (imgTitle) {
        doc.addImage(imgTitle, 'JPEG', 0, 0, pageW, pageH);
    } else {
        doc.setFillColor(13,54,45); doc.rect(0,0,pageW,pageH,'F');
    }

    doc.save(`SouthLofts_Unit_${data.unit.u}_Proposal.pdf`);
    $btn.text('Generate Executive PDF').prop('disabled', false);
}