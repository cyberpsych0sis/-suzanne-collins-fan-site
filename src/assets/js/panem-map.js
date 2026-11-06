/* ============================================================
   Atlas of Panem — interactive geography
   Powers the dedicated map page (map.html). District content
   lives in the DISTRICTS array below; the base geometry is in
   panem-geo.js. Borders are interpretive, not canonical.
   ============================================================ */
(function () {
    'use strict';

    var DISTRICTS = [
        {
            key: 'capitol',
            label: 'The Capitol',
            short: 'CAPITOL',
            badge: '★',
            name: 'Seat of Power',
            industry: 'Government, luxury & spectacle',
            icon: 'fa-building-columns',
            region: 'The Rocky Mountains · former Colorado',
            territory: 'The Capitol Federal District',
            summary: 'The Capitol is the glittering heart of Panem: a city of towering architecture, extravagant fashion, and carefully staged television. From here the Games are produced and the districts are governed — a world of abundance built on the labour of the twelve districts.',
            facts: [
                ['Ruler', 'President Coriolanus Snow'],
                ['Defining event', 'The annual Hunger Games'],
                ['Landmark', 'The Training Center'],
                ['Atmosphere', 'Opulent — and watched']
            ],
            themes: ['The Hunger Games', 'The Quarter Quell', 'Propaganda'],
            residents: 'Coriolanus Snow · Effie Trinket · Caesar Flickerman · Cinna'
        },
        {
            key: '1',
            label: 'District 01',
            short: 'LUXURY',
            badge: '01',
            name: 'Luxury',
            industry: 'Jewelry, perfume & gemstones',
            icon: 'fa-gem',
            region: 'The western Rockies · former Utah & Wyoming',
            territory: 'Utah & Wyoming',
            summary: 'The wealthiest of the districts, District 1 crafts the jewels, perfumes, and luxuries worn by the Capitol elite. Its children train from an early age for the Games, producing the polished, confident “Career” tributes who volunteer rather than wait to be reaped.',
            facts: [
                ['Output', 'Jewelry, gemstones & perfume'],
                ['Games culture', 'Career volunteer district'],
                ['Position', 'Closest to the Capitol elite'],
                ['Reputation', 'Glamour masking exploitation']
            ],
            themes: ['Career tributes', 'Capital luxury', 'The 74th Games'],
            residents: 'Cashmere · Gloss · Glimmer · Marvel'
        },
        {
            key: '2',
            label: 'District 02',
            short: 'MASONRY',
            badge: '02',
            name: 'Masonry & Weapons',
            industry: 'Stone, masonry & weaponry',
            icon: 'fa-hammer',
            region: 'The desert Southwest · former Arizona, New Mexico & Colorado',
            territory: 'Arizona, New Mexico & Colorado',
            summary: 'District 2 quarries the stone that builds the Capitol and manufactures much of Panem’s weaponry. Its close ties to the Peacekeepers and its ruthless training academies make it the most powerful Career district — and a key prize for any rebellion.',
            facts: [
                ['Output', 'Stone, masonry & weapons'],
                ['Games culture', 'Career volunteer district'],
                ['Special role', 'Peacekeeper recruitment'],
                ['Post-war', 'Gale Hawthorne relocates here']
            ],
            themes: ['Career tributes', 'Peacekeepers', 'Cato & Clove'],
            residents: 'Cato · Clove · Brutus · Enobaria'
        },
        {
            key: '3',
            label: 'District 03',
            short: 'TECH',
            badge: '03',
            name: 'Electronics & Technology',
            industry: 'Electronics, computers & wiring',
            icon: 'fa-microchip',
            region: 'The industrial Great Lakes · former Michigan, Ohio & Indiana',
            territory: 'Michigan, Ohio & Indiana',
            summary: 'District 3 produces the electronics, screens, and wiring that keep Panem running. Its tributes are often underestimated, but the district’s technical knowledge proves vital to the rebellion — especially through victors like Beetee and Wiress.',
            facts: [
                ['Output', 'Electronics, computers & wiring'],
                ['Games culture', 'Underestimated technicians'],
                ['Rebel asset', 'Hacking & broadcast technology'],
                ['Notable victors', 'Beetee & Wiress']
            ],
            themes: ['Technology', 'The arena', 'Rebel strategy'],
            residents: 'Beetee · Wiress'
        },
        {
            key: '4',
            label: 'District 04',
            short: 'FISHING',
            badge: '04',
            name: 'Fishing',
            industry: 'Fishing & seafood',
            icon: 'fa-fish',
            region: 'The Pacific coast · former California',
            territory: 'California & the western shore',
            summary: 'District 4 harvests the sea’s bounty for the Capitol and trains some of the Games’ deadliest Careers. Beneath its coastal prosperity lies the same bargain as District 1: privilege purchased through participation in the Games.',
            facts: [
                ['Output', 'Fish, seafood & coastal goods'],
                ['Games culture', 'Career volunteer district'],
                ['Coastline', 'Panem’s western shore'],
                ['Notable victors', 'Finnick Odair & Mags']
            ],
            themes: ['Finnick Odair', 'The Quarter Quell', 'Annie Cresta'],
            residents: 'Finnick Odair · Annie Cresta · Mags'
        },
        {
            key: '5',
            label: 'District 05',
            short: 'POWER',
            badge: '05',
            name: 'Power',
            industry: 'Electricity & power generation',
            icon: 'fa-bolt',
            region: 'The Mojave & Colorado basin · former Nevada',
            territory: 'Nevada',
            summary: 'District 5 generates the electricity that lights the Capitol and powers its technology. The district is rarely shown on the page, but its infrastructure is a strategic target: cut the power and the Capitol’s spectacle goes dark.',
            facts: [
                ['Output', 'Electricity & power grids'],
                ['Known tribute', 'The 74th Games’ “Foxface”'],
                ['Strategic value', 'Energy for the Capitol'],
                ['On the page', 'Largely seen through the Games']
            ],
            themes: ['Infrastructure', 'The 74th Games', 'Foxface'],
            residents: 'Foxface (74th tribute)'
        },
        {
            key: '6',
            label: 'District 06',
            short: 'TRANSPORT',
            badge: '06',
            name: 'Transport',
            industry: 'Trains, vehicles & hovercraft',
            icon: 'fa-train-subway',
            region: 'The central rail corridor · former Illinois, Missouri, Iowa, Minnesota & Wisconsin',
            territory: 'The central corridor',
            summary: 'District 6 moves Panem: trains, vehicles, and the transport networks that link the districts to the Capitol. Its workers are closely monitored, and morphling addiction is a recurring tragedy among its victors and tributes.',
            facts: [
                ['Output', 'Trains, vehicles & transport'],
                ['Social cost', 'Widespread morphling addiction'],
                ['Games presence', 'Often overlooked tributes'],
                ['Strategic value', 'Movement of goods & people']
            ],
            themes: ['Morphling', 'Logistics', 'The 75th Games'],
            residents: 'Morphling victors (unnamed)'
        },
        {
            key: '7',
            label: 'District 07',
            short: 'LUMBER',
            badge: '07',
            name: 'Lumber',
            industry: 'Timber & logging',
            icon: 'fa-tree',
            region: 'The Pacific Northwest · former Washington, Oregon & Idaho',
            territory: 'Washington, Oregon & Idaho',
            summary: 'District 7 fells the forests that furnish the Capitol and the arena. Its tributes are trained to handle axes and saws, and the district gives Panem one of its most ferocious rebels: Johanna Mason, victor of the 71st Hunger Games.',
            facts: [
                ['Output', 'Timber, lumber & paper'],
                ['Games culture', 'Axe & blade specialists'],
                ['Notable victor', 'Johanna Mason'],
                ['Rebel role', 'Fierce anti-Capitol resistance']
            ],
            themes: ['Johanna Mason', 'The 75th Games', 'Forest warfare'],
            residents: 'Johanna Mason · Blight'
        },
        {
            key: '8',
            label: 'District 08',
            short: 'TEXTILES',
            badge: '08',
            name: 'Textiles',
            industry: 'Textiles & clothing',
            icon: 'fa-shirt',
            region: 'The textile belt · former Virginia, the Carolinas, Tennessee, Maryland & Delaware',
            territory: 'The mid-Atlantic & Carolina mills',
            summary: 'District 8 weaves the fabric that clothes the Capitol. Its factories are crowded and tightly policed, yet the district becomes an early centre of open resistance — a rebellion led in part by Commander Paylor, who later helps shape Panem’s future.',
            facts: [
                ['Output', 'Textiles, clothing & uniforms'],
                ['Conditions', 'Crowded factories, strict policing'],
                ['Rebel role', 'Early uprising in Catching Fire'],
                ['Post-war leader', 'Commander Paylor']
            ],
            themes: ['Uprising', 'Paylor', 'Industrial labour'],
            residents: 'Commander Paylor · Cecelia · Bonnie · Twill'
        },
        {
            key: '9',
            label: 'District 09',
            short: 'GRAIN',
            badge: '09',
            name: 'Grain',
            industry: 'Grain & agriculture',
            icon: 'fa-wheat-awn',
            region: 'The northern Great Plains · former Montana, the Dakotas, Nebraska & Kansas',
            territory: 'The northern Plains',
            summary: 'District 9 grows and processes the grain that feeds much of Panem. It is one of the least explored districts in the novels, appearing mainly through its tributes and its place in the Capitol’s food supply chain.',
            facts: [
                ['Output', 'Grain & cereal crops'],
                ['On the page', 'Rarely depicted directly'],
                ['Strategic value', 'Food supply for Panem'],
                ['Games presence', 'Unnamed tributes']
            ],
            themes: ['Agriculture', 'Food supply', 'The Games'],
            residents: 'Unnamed tributes'
        },
        {
            key: '10',
            label: 'District 10',
            short: 'LIVESTOCK',
            badge: '10',
            name: 'Livestock',
            industry: 'Cattle, meat & leather',
            icon: 'fa-cow',
            region: 'The southern Plains · former Texas & Oklahoma',
            territory: 'Texas & Oklahoma',
            summary: 'District 10 raises the livestock that stocks Capitol tables and provides leather for its goods. The district is rural, sprawling, and largely unglamorous — a place where the Games feel less like spectacle and more like another season of loss.',
            facts: [
                ['Output', 'Cattle, meat & leather'],
                ['Landscape', 'Open ranches & pastures'],
                ['Known figure', 'Dalton, a cattle rancher'],
                ['Games presence', 'Rarely named tributes']
            ],
            themes: ['Rural life', 'Dalton', 'Food supply'],
            residents: 'Dalton'
        },
        {
            key: '11',
            label: 'District 11',
            short: 'AGRICULTURE',
            badge: '11',
            name: 'Agriculture',
            industry: 'Crops, orchards & cotton',
            icon: 'fa-seedling',
            region: 'The Deep South · former Georgia, Alabama, Mississippi, Louisiana, Arkansas & Florida',
            territory: 'The southern agricultural belt',
            summary: 'District 11 is Panem’s vast agricultural heartland, worked under the watch of strict Peacekeepers. Its people are poor and closely controlled, but the district produces some of the saga’s most memorable characters — including Rue, whose death becomes a spark for rebellion.',
            facts: [
                ['Output', 'Crops, fruit, cotton & grain'],
                ['Conditions', 'Harsh labour, strict enforcement'],
                ['Notable tributes', 'Rue & Thresh'],
                ['Rebel role', 'Uprising after Rue’s death']
            ],
            themes: ['Rue', 'Thresh', 'Rebellion'],
            residents: 'Rue · Thresh · Seeder · Chaff'
        },
        {
            key: '12',
            label: 'District 12',
            short: 'COAL',
            badge: '12',
            name: 'Coal',
            industry: 'Coal mining',
            icon: 'fa-mountain',
            region: 'Appalachia · former West Virginia, Kentucky & Pennsylvania',
            territory: 'Appalachia',
            summary: 'District 12 is the poorest district in Panem, its miners working dark seams beneath the mountains of Appalachia. It is the home of Katniss Everdeen, Peeta Mellark, Gale Hawthorne, and Haymitch Abernathy — and, after the bombing in Catching Fire, a symbol of the Capitol’s willingness to erase a people.',
            facts: [
                ['Output', 'Coal'],
                ['Nickname', 'The Seam'],
                ['Games history', 'Few victors — Haymitch & Katniss'],
                ['Fate', 'Destroyed in Catching Fire, later rebuilt']
            ],
            themes: ['Katniss Everdeen', 'The Seam', 'Mockingjay'],
            residents: 'Katniss Everdeen · Peeta Mellark · Gale Hawthorne · Haymitch Abernathy · Primrose Everdeen'
        },
        {
            key: '13',
            label: 'District 13',
            short: 'GRAPHITE',
            badge: '13',
            name: 'Graphite & Nuclear',
            industry: 'Graphite mining & nuclear weapons',
            icon: 'fa-radiation',
            region: 'The Northeast · former New England & New York',
            territory: 'The Northeast',
            summary: 'Officially destroyed during the Dark Days, District 13 survived underground and rebuilt itself as a disciplined military state. Its graphite mines and nuclear arsenal made it the only force capable of challenging the Capitol — and its leader, President Alma Coin, has plans of her own.',
            facts: [
                ['Output', 'Graphite & nuclear weapons'],
                ['Official status', 'Destroyed in the Dark Days'],
                ['Reality', 'Militarised underground society'],
                ['Rebel role', 'HQ of the Second Rebellion']
            ],
            themes: ['Alma Coin', 'The Second Rebellion', 'Nuclear deterrence'],
            residents: 'President Alma Coin · Boggs'
        }
    ];

    var geo = window.PANEM_GEO;
    var map = document.getElementById('panem-map');
    if (!geo || !map) return;

    var shell = document.getElementById('panem-map-shell');
    var territoriesLayer = document.getElementById('panem-territories');
    var stateLayer = document.getElementById('panem-state-lines');
    var riverLayer = document.getElementById('panem-rivers');
    var labelLayer = document.getElementById('panem-context-labels');
    var markerLayer = document.getElementById('panem-markers');
    var outline = document.getElementById('panem-outline');
    var chipsLayer = document.getElementById('panem-district-chips');
    var infoPanel = document.getElementById('panem-info');
    var indexGrid = document.getElementById('panem-district-index');
    var tooltip = document.getElementById('panem-tooltip');
    var mapSection = document.getElementById('atlas');

    var TINTS = {
        capitol: ['#e3b76a', '#6b4c1c'],
        '1': ['#d9c9a3', '#4a4028'],
        '2': ['#c9c2b4', '#3e3a32'],
        '3': ['#c2cbbf', '#2f3a33'],
        '4': ['#b9cfd2', '#223a3c'],
        '5': ['#e0c9a4', '#4a3b25'],
        '6': ['#c7c2d6', '#343146'],
        '7': ['#bfd0b4', '#2c3a2b'],
        '8': ['#d8bfc2', '#3f2f33'],
        '9': ['#ddcf9e', '#443c26'],
        '10': ['#d2c3a5', '#3d3427'],
        '11': ['#bdd0ad', '#2e3a28'],
        '12': ['#c0c5cc', '#2f353c'],
        '13': ['#c9c0d6', '#383147']
    };

    var selectedKey = 'capitol';
    var hoverKey = null;
    var lastFocused = null;

    function findDistrict(key) {
        for (var i = 0; i < DISTRICTS.length; i++) {
            if (DISTRICTS[i].key === key) return DISTRICTS[i];
        }
        return DISTRICTS[0];
    }

    /* ── Build the map layers ─────────────────────────────────────── */
    outline.setAttribute('d', geo.outline);

    territoriesLayer.innerHTML = DISTRICTS.map(function (d) {
        var tint = TINTS[d.key] || ['#ddd5c5', '#302b25'];
        return '<path class="panem-territory" data-district="' + d.key + '" d="' +
               geo.territories[d.key] + '" fill-rule="evenodd" role="button" tabindex="0" ' +
               'aria-label="' + d.label + ': ' + d.industry + '" ' +
               'style="--tint:' + tint[0] + ';--tint-dark:' + tint[1] + '"></path>';
    }).join('');

    stateLayer.innerHTML = geo.states.map(function (s) {
        return '<path class="panem-state-line" d="' + s.d + '" fill="none"></path>';
    }).join('');

    riverLayer.innerHTML = geo.rivers.map(function (r) {
        return '<path class="panem-river" d="' + r.d + '"><title>' + r.name + ' River</title></path>';
    }).join('');

    labelLayer.innerHTML = geo.contextLabels.map(function (l) {
        var cls = l.ocean ? 'panem-ocean-label' : 'panem-geo-label';
        var transform = l.rotate ? ' transform="rotate(' + l.rotate + ' ' + l.x + ' ' + l.y + ')"' : '';
        return '<text class="' + cls + '" x="' + l.x + '" y="' + l.y + '" text-anchor="middle"' +
               transform + '>' + l.text + '</text>';
    }).join('');

    function markerMarkup(d) {
        var m = geo.markers[d.key];
        if (!m) return '';

        if (d.key === 'capitol') {
            return '<g id="panem-marker-capitol" class="panem-district panem-marker panem-capitol" data-district="capitol" ' +
                   'role="button" tabindex="0" aria-label="The Capitol: seat of Panem’s government">' +
                       '<title>The Capitol — Seat of Power</title>' +
                       '<circle class="panem-capitol-halo" cx="' + m.x + '" cy="' + m.y + '" r="26"></circle>' +
                       '<circle class="panem-marker-dot panem-capitol-dot" cx="' + m.x + '" cy="' + m.y + '" r="10"></circle>' +
                       '<text class="panem-marker-number panem-capitol-star" x="' + m.x + '" y="' + m.y +
                           '" dy=".35em" text-anchor="middle">★</text>' +
                       '<text class="panem-marker-label" x="' + m.labelX + '" y="' + m.labelY +
                           '" text-anchor="middle">CAPITOL</text>' +
                   '</g>';
        }

        return '<g id="panem-marker-' + d.key + '" class="panem-district panem-marker" data-district="' + d.key + '" ' +
               'role="button" tabindex="0" aria-label="' + d.label + ': ' + d.industry + '">' +
                   '<title>' + d.label + ' — ' + d.name + '</title>' +
                   '<circle class="panem-marker-halo" cx="' + m.x + '" cy="' + m.y + '" r="17"></circle>' +
                   '<circle class="panem-marker-dot" cx="' + m.x + '" cy="' + m.y + '" r="10"></circle>' +
                   '<text class="panem-marker-number" x="' + m.x + '" y="' + m.y +
                       '" dy=".35em" text-anchor="middle">' + d.badge + '</text>' +
                   '<text class="panem-marker-label" x="' + m.labelX + '" y="' + m.labelY +
                       '" text-anchor="middle">' + d.short + '</text>' +
               '</g>';
    }

    markerLayer.innerHTML =
        '<circle class="panem-capitol-glow" cx="' + geo.markers.capitol.x + '" cy="' +
        geo.markers.capitol.y + '" r="58" fill="url(#panem-capitol-glow)" aria-hidden="true"></circle>' +
        DISTRICTS.map(markerMarkup).join('');

    chipsLayer.innerHTML = DISTRICTS.map(function (d) {
        return '<button type="button" class="panem-chip" data-district="' + d.key +
               '" aria-label="Show ' + d.label + '" aria-pressed="false" title="' + d.label + '">' +
               (d.key === 'capitol' ? d.badge : 'D' + d.badge) + '</button>';
    }).join('');

    indexGrid.innerHTML = DISTRICTS.map(function (d) {
        var tint = TINTS[d.key] || ['#ddd5c5', '#302b25'];
        return '<button type="button" class="panem-card group" data-district="' + d.key +
               '" aria-pressed="false" style="--tint:' + tint[0] + ';--tint-dark:' + tint[1] + '">' +
                   '<span class="panem-card-badge">' + d.badge + '</span>' +
                   '<span class="min-w-0 flex-1 text-left">' +
                       '<span class="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#b45309] dark:text-[#e7b04a]">' + d.label + '</span>' +
                       '<span class="mt-0.5 block font-serif text-lg font-bold text-[#0f172a] dark:text-[#f1e7d4]">' + d.name + '</span>' +
                       '<span class="mt-1 block text-[11px] leading-snug text-[#57534e] dark:text-[#b0a48f]">' + d.region + '</span>' +
                   '</span>' +
                   '<i class="fa-solid fa-arrow-right mt-1 text-xs text-[#b45309] transition-transform group-hover:translate-x-1 dark:text-[#e7b04a]"></i>' +
               '</button>';
    }).join('');

    /* ── Selection + hover ────────────────────────────────────────── */
    function setPressed(selector, key) {
        document.querySelectorAll(selector).forEach(function (el) {
            var active = el.getAttribute('data-district') === key;
            el.classList.toggle('is-active', active);
            if (el.hasAttribute('aria-pressed')) {
                el.setAttribute('aria-pressed', active ? 'true' : 'false');
            }
        });
    }

    function render(key) {
        var d = findDistrict(key);
        selectedKey = d.key;

        setPressed('.panem-territory', d.key);
        setPressed('.panem-marker', d.key);
        setPressed('.panem-chip', d.key);
        setPressed('.panem-card', d.key);

        map.setAttribute('aria-activedescendant', 'panem-marker-' + d.key);

        var facts = d.facts.map(function (fact) {
            return '<div class="rounded-xl border border-[#e2d8c3] bg-white/70 px-3 py-2 dark:border-[#3b342c] dark:bg-[#12100e]/60">' +
                       '<dt class="text-[9px] font-bold uppercase tracking-[0.16em] text-[#b45309] dark:text-[#e7b04a]">' + fact[0] + '</dt>' +
                       '<dd class="mt-0.5 text-xs font-semibold leading-snug text-[#292524] dark:text-[#ece2cf]">' + fact[1] + '</dd>' +
                   '</div>';
        }).join('');

        var themes = d.themes.map(function (theme) {
            return '<span class="rounded-full bg-[#064e3b]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#064e3b] dark:bg-[#e7b04a]/10 dark:text-[#e7b04a]">' +
                       theme + '</span>';
        }).join('');

        infoPanel.innerHTML =
            '<div class="panem-info-enter">' +
                '<div class="flex items-start gap-4">' +
                    '<span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#064e3b] text-[#e7b04a] shadow-md dark:bg-[#b02a2a] dark:text-[#f6efdf]">' +
                        '<i class="fa-solid ' + d.icon + ' text-xl"></i>' +
                    '</span>' +
                    '<div class="min-w-0">' +
                        '<p class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b45309] dark:text-[#e7b04a]">' + d.label + '</p>' +
                        '<h2 class="mt-0.5 font-serif text-2xl font-bold leading-tight text-[#0f172a] dark:text-[#f1e7d4]">' + d.name + '</h2>' +
                        '<p class="mt-1 text-xs font-medium text-[#57534e] dark:text-[#b0a48f]">' + d.industry + '</p>' +
                    '</div>' +
                '</div>' +
                '<p class="mt-4 flex items-start gap-2 rounded-xl bg-[#064e3b]/5 px-3 py-2 text-[11px] leading-relaxed text-[#064e3b] dark:bg-[#e7b04a]/5 dark:text-[#e7b04a]">' +
                    '<i class="fa-solid fa-location-dot mt-0.5 text-[#b45309] dark:text-[#e7b04a]"></i>' +
                    '<span><strong class="font-bold">' + d.territory + '</strong><br>' + d.region + '</span>' +
                '</p>' +
                '<p class="mt-4 text-sm leading-relaxed text-[#57534e] dark:text-[#b0a48f]">' + d.summary + '</p>' +
                '<dl class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">' + facts + '</dl>' +
                '<div class="mt-4">' +
                    '<p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#57534e] dark:text-[#b0a48f]">Known for</p>' +
                    '<div class="mt-2 flex flex-wrap gap-1.5">' + themes + '</div>' +
                '</div>' +
                '<div class="mt-4 border-t border-[#e2d8c3] pt-4 dark:border-[#3b342c]">' +
                    '<p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#57534e] dark:text-[#b0a48f]">' +
                        '<i class="fa-regular fa-user mr-1 text-[#b45309] dark:text-[#e7b04a]"></i>Notable residents' +
                    '</p>' +
                    '<p class="mt-1.5 text-xs leading-relaxed text-[#292524] dark:text-[#ece2cf]">' + d.residents + '</p>' +
                '</div>' +
                '<a href="collections.html#hunger-games" class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#064e3b] px-4 py-3 text-sm font-semibold text-[#fcfaf2] shadow-sm transition-colors hover:bg-[#022c22] hover:shadow-md dark:bg-[#b02a2a] dark:text-[#f6efdf] dark:hover:bg-[#8c1f22]">' +
                    '<i class="fa-solid fa-timeline text-[#e7b04a] dark:text-[#f4ca72]"></i>' +
                    'Follow the Panem timeline' +
                    '<i class="fa-solid fa-arrow-right text-xs"></i>' +
                '</a>' +
            '</div>';

        if (history.replaceState) {
            history.replaceState(null, '', '#district-' + d.key);
        }
    }

    function setHover(key) {
        if (key === hoverKey) return;
        hoverKey = key;

        document.querySelectorAll('.panem-territory, .panem-marker').forEach(function (el) {
            el.classList.toggle('is-hover', key !== null && el.getAttribute('data-district') === key);
        });

        map.classList.toggle('has-hover', key !== null);
    }

    function showTooltip(key, event) {
        if (!tooltip || !shell) return;
        var d = findDistrict(key);
        tooltip.innerHTML = '<span class="panem-tooltip-label">' +
            d.label + '</span><span class="panem-tooltip-name">' +
            d.name + '</span>';
        tooltip.classList.add('is-visible');
        tooltip.setAttribute('aria-hidden', 'false');
        moveTooltip(event);
    }

    function moveTooltip(event) {
        if (!tooltip || !shell) return;
        var rect = shell.getBoundingClientRect();
        var x = Math.min(Math.max(event.clientX - rect.left, 84), rect.width - 84);
        var y = Math.max(event.clientY - rect.top - 16, 66);
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }

    function hideTooltip() {
        if (!tooltip) return;
        tooltip.classList.remove('is-visible');
        tooltip.setAttribute('aria-hidden', 'true');
    }

    function revealInfo() {
        if (window.innerWidth < 1280 && infoPanel.scrollIntoView) {
            infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    document.addEventListener('pointerover', function (event) {
        var target = event.target.closest && event.target.closest('[data-district]');
        if (!target) return;
        var key = target.getAttribute('data-district');
        if (!key || !findDistrict(key)) return;
        setHover(key);
        if (shell && shell.contains(target) && event.pointerType !== 'touch') {
            showTooltip(key, event);
        }
    });

    document.addEventListener('pointerout', function (event) {
        var target = event.target.closest && event.target.closest('[data-district]');
        if (!target) return;
        var related = event.relatedTarget;
        if (related && target.contains(related)) return;
        setHover(null);
        hideTooltip();
    });

    document.addEventListener('pointermove', function (event) {
        if (tooltip && tooltip.classList.contains('is-visible')) moveTooltip(event);
    });

    document.addEventListener('click', function (event) {
        var target = event.target.closest && event.target.closest('[data-district]');
        if (!target) return;
        var key = target.getAttribute('data-district');
        if (!key || !findDistrict(key)) return;

        if (dragMoved) {
            dragMoved = false;
            return;
        }

        render(key);
        hideTooltip();

        if (target.classList.contains('panem-card')) {
            mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.setTimeout(function () {
                var marker = document.querySelector('.panem-marker[data-district="' + key + '"]');
                if (marker) marker.focus({ preventScroll: true });
            }, 420);
        } else if (window.innerWidth < 1280) {
            revealInfo();
        }
    });

    document.addEventListener('keydown', function (event) {
        var target = event.target;
        if (!target.closest) return;

        var item = target.closest('.panem-territory, .panem-marker');
        if (item && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            render(item.getAttribute('data-district'));
            hideTooltip();
            return;
        }

        if (event.key === 'Escape' && hoverKey) {
            setHover(null);
            hideTooltip();
        }
    });

    /* ── Zoom + pan ──────────────────────────────────────────────── */
    var W = geo.width;
    var H = geo.height;
    var vb = { x: 0, y: 0, w: W, h: H };
    var MAX_ZOOM = 7;

    function applyViewBox() {
        map.setAttribute('viewBox', vb.x.toFixed(1) + ' ' + vb.y.toFixed(1) + ' ' +
                                   vb.w.toFixed(1) + ' ' + vb.h.toFixed(1));
    }

    function clampView() {
        vb.w = Math.min(W, Math.max(W / MAX_ZOOM, vb.w));
        vb.h = vb.w * H / W;
        vb.x = Math.min(W - vb.w, Math.max(0, vb.x));
        vb.y = Math.min(H - vb.h, Math.max(0, vb.y));
    }

    function zoomAt(factor, cx, cy) {
        var nw = Math.min(W, Math.max(W / MAX_ZOOM, vb.w / factor));
        var scale = nw / vb.w;
        vb.x = cx - (cx - vb.x) * scale;
        vb.y = cy - (cy - vb.y) * scale;
        vb.w = nw;
        vb.h = vb.w * H / W;
        clampView();
        applyViewBox();
        map.classList.toggle('is-zoomed', vb.w < W - 1);
    }

    function resetView() {
        vb = { x: 0, y: 0, w: W, h: H };
        applyViewBox();
        map.classList.remove('is-zoomed');
    }

    function clientToSvg(clientX, clientY) {
        var pt = map.createSVGPoint();
        pt.x = clientX;
        pt.y = clientY;
        return pt.matrixTransform(map.getScreenCTM().inverse());
    }

    document.querySelectorAll('[data-map-action]').forEach(function (button) {
        button.addEventListener('click', function () {
            var action = button.getAttribute('data-map-action');
            if (action === 'reset') {
                resetView();
                return;
            }
            var cx = vb.x + vb.w / 2;
            var cy = vb.y + vb.h / 2;
            zoomAt(action === 'in' ? 1.35 : 1 / 1.35, cx, cy);
            map.classList.add('is-zoomed');
        });
    });

    map.addEventListener('wheel', function (event) {
        event.preventDefault();
        var p = clientToSvg(event.clientX, event.clientY);
        zoomAt(event.deltaY < 0 ? 1.18 : 1 / 1.18, p.x, p.y);
    }, { passive: false });

    map.addEventListener('dblclick', function (event) {
        var p = clientToSvg(event.clientX, event.clientY);
        zoomAt(1.45, p.x, p.y);
    });

    var drag = null;
    var dragMoved = false;

    map.addEventListener('pointerdown', function (event) {
        if (event.button !== 0) return;
        drag = {
            id: event.pointerId,
            clientX: event.clientX,
            clientY: event.clientY,
            vb: { x: vb.x, y: vb.y, w: vb.w, h: vb.h },
            start: clientToSvg(event.clientX, event.clientY)
        };
        dragMoved = false;
        map.classList.add('is-panning');
        if (map.setPointerCapture) {
            try { map.setPointerCapture(event.pointerId); } catch (e) { /* ignore */ }
        }
    });

    map.addEventListener('pointermove', function (event) {
        if (!drag || event.pointerId !== drag.id) return;
        var dx = event.clientX - drag.clientX;
        var dy = event.clientY - drag.clientY;
        if (!dragMoved && Math.abs(dx) + Math.abs(dy) > 5) dragMoved = true;
        if (!dragMoved) return;

        var current = clientToSvg(event.clientX, event.clientY);
        vb.w = drag.vb.w;
        vb.h = drag.vb.h;
        vb.x = drag.vb.x - (current.x - drag.start.x);
        vb.y = drag.vb.y - (current.y - drag.start.y);
        clampView();
        applyViewBox();
        map.classList.toggle('is-zoomed', vb.w < W - 1);
        hideTooltip();
    });

    function endDrag(event) {
        if (!drag) return;
        if (event && event.pointerId !== undefined && event.pointerId !== drag.id) return;
        if (map.releasePointerCapture && drag.id !== undefined) {
            try { map.releasePointerCapture(drag.id); } catch (e) { /* ignore */ }
        }
        drag = null;
        map.classList.remove('is-panning');
        window.setTimeout(function () { dragMoved = false; }, 40);
    }

    map.addEventListener('pointerup', endDrag);
    map.addEventListener('pointercancel', endDrag);
    map.addEventListener('pointerleave', function () {
        if (drag) endDrag();
        hideTooltip();
    });

    /* ── Deep link + initial state ──────────────────────────────── */
    var hash = window.location.hash.replace('#district-', '');
    if (hash && findDistrict(hash).key === hash) {
        render(hash);
        resetView();
    } else {
        render('capitol');
        resetView();
    }
})();
