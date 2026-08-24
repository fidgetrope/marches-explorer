// ---------------------------------------------------------------------------
// Marches Explorer — curated data
// Sources are cited per record. Coordinates marked approx:true were not
// available as precise lat/lon in primary sources and are estimated from a
// stated distance/direction off a precisely-known neighbouring site — treat
// GPS distances to those sites as indicative, not exact.
// ---------------------------------------------------------------------------

const SITES = [
  {
    id: "old-oswestry",
    name: "Old Oswestry Hillfort",
    period: "Iron Age",
    dates: "c. 8th century BC – 1st century AD",
    lat: 52.87273,
    lon: -3.04886,
    approx: false,
    elevation: "165 m, ramparts enclose c. 5.3 ha",
    summary: "One of the largest and most complex hillforts on the England–Wales border, built up over four distinct phases with a double bank and ditch, later a third bank, and elaborate defended entrances to east and west. Called “the Stonehenge of the Iron Age” by some archaeologists for its scale and sophistication.",
    archaeology: "William Varley's 1939–40 excavations showed the earliest occupation was simple round huts on an open, undefended hillock, with the multivallate defences added in later phases. The west entrance has unusual rectangular hollows separated by ridges, still not fully explained. No evidence the Romans ever attacked it despite its size. Later folded into the line of Wat's Dyke in the early medieval period. Canadian troops training here in the First World War caused extensive scarring to the interior. A 3D laser model was made in 2024 for vegetation management.",
    interest: "Associated in local tradition with the birthplace of Guinevere. Wilfred Owen trained nearby at Park Hall camp during the First World War.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Old_Oswestry" },
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/old-oswestry-hillfort/" }
    ]
  },
  {
    id: "bury-ditches",
    name: "Bury Ditches",
    period: "Iron Age",
    dates: "British Iron Age",
    lat: 52.447098,
    lon: -2.991633,
    approx: false,
    elevation: "Summit of Sunnyhill, near Clunbury",
    summary: "A strikingly well-preserved multivallate hillfort with up to four ramparts and ditches forming a neat oval, and two well-preserved entranceways. Among the most complete examples of its type in the Marches, now under Forestry England woodland.",
    archaeology: "The rampart-and-ditch sequence is unusually legible on the ground compared with many Marches forts, which is part of why it's a popular reference site for understanding hillfort defensive design.",
    interest: "A steep climb from the car park rewards you with panoramic views over the Clun valley toward Wales.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bury_Ditches" },
      { label: "Council for British Archaeology", url: "https://www.archaeologyuk.org/resource/hike-up-iron-age-hillforts-at-bury-ditches--shropshire.html" }
    ]
  },
  {
    id: "wrekin",
    name: "The Wrekin",
    period: "Iron Age",
    dates: "Iron Age; stormed by Rome in AD 47",
    lat: 52.671136,
    lon: -2.548604,
    approx: false,
    elevation: "407 m summit; fort covers c. 8 ha",
    summary: "Shropshire's most famous hill, thought to have been the tribal capital of the Cornovii before the Roman conquest of the Marches. In AD 47 Roman forces stormed and burned the fort, moving the defeated tribe to what became Wroxeter (Viroconium).",
    archaeology: "The fort occupies most of the summit ridge. The hill itself is built from Uriconian volcanic rocks around 680 million years old — among the oldest exposed rock in England, see the geology tab.",
    interest: "The neighbouring quarry hill, the Ercall, exposes the actual unconformity between those ancient volcanic rocks and much younger Cambrian sediment — walkable in twenty minutes from the Wrekin car park.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Wrekin" },
      { label: "Cornovii (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cornovii_(Midlands)" }
    ]
  },
  {
    id: "caer-caradoc",
    name: "Caer Caradoc (Church Stretton)",
    period: "Iron Age / late Bronze Age",
    dates: "Late Bronze Age – Iron Age",
    lat: 52.55302,
    lon: -2.77279,
    approx: false,
    elevation: "Hilltop above Church Stretton",
    summary: "A large multivallate hillfort with an associated causeway, on the hill traditionally (though disputably) linked to the British resistance leader Caratacus.",
    archaeology: "Local tradition holds this was the site of Caratacus's last stand against Rome, and a cave near the summit is called Caractacus's Cave. Historians are sceptical: Tacitus's account of the battle mentions a river, and there isn't one here.",
    interest: "A good example of how a striking hill picks up a hero legend regardless of the evidence — worth holding the story and the archaeology apart in your head as you climb it.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caer_Caradoc" },
      { label: "Historic England listing", url: "https://historicengland.org.uk/listing/the-list/list-entry/1010723" }
    ]
  },
  {
    id: "nordy-bank",
    name: "Nordy Bank",
    period: "Late Bronze Age / early Iron Age",
    dates: "Late Bronze Age – early Iron Age",
    lat: 52.4583,
    lon: -2.6257,
    approx: false,
    elevation: "On a spur off Brown Clee Hill",
    summary: "A univallate (single-rampart) oval hillfort, 260 m by 200 m, enclosing about 3.2 hectares on a westward spur of Brown Clee Hill.",
    archaeology: "Its single, simpler bank-and-ditch circuit contrasts with the multivallate forts nearby (Bury Ditches, Caer Caradoc), a useful comparison for how hillfort defences varied across the region and over time.",
    interest: "Brown Clee is Shropshire's highest hill; Nordy Bank sits on its lower shoulder rather than the summit.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nordy_Bank" }
    ]
  },
  {
    id: "titterstone-clee",
    name: "Titterstone Clee Hill",
    period: "Bronze Age & Iron Age",
    dates: "Bronze Age cairn c. 4,000 years old; Iron Age hillfort",
    lat: 52.3983,
    lon: -2.5965,
    approx: false,
    elevation: "533 m summit",
    summary: "A hilltop with two phases of prehistoric use: a Bronze Age burial cairn near the summit (about 4,000 years old, suggesting the top was once a ceremonial site) and, around it, one of England's larger Iron Age hillforts at roughly 29.6 hectares.",
    archaeology: "Unusually for the region, the fort's walls are built from stone blocks rather than earth banks, and it also has two Bronze Age ring cairns in its western quarter. Centuries of stone quarrying for the local dolerite (“Dhustone”) have damaged parts of the site, though it has survived better than the fort on neighbouring Brown Clee.",
    interest: "The Dhustone dolerite that was quarried here is the same intrusive rock discussed on the geology tab under the Carboniferous.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Titterstone_Clee_Hill" },
      { label: "Atlas of Hillforts", url: "http://hillforts.arch.ox.ac.uk/records/EN0091.html" }
    ]
  },
  {
    id: "croft-ambrey",
    name: "Croft Ambrey",
    period: "Iron Age",
    dates: "6th century BC – AD 48",
    lat: 52.295,
    lon: -2.815,
    approx: false,
    elevation: "Herefordshire border, Marches",
    summary: "One of the most thoroughly excavated hillforts in Britain, occupied continuously from the 6th century BC until just after the Roman conquest reached the area in AD 48. It grew from about 2.2 to 3.6 hectares over its life, with a southern annexe added later.",
    archaeology: "Excavations in 1960–66 found closely packed rectangular buildings rebuilt up to six times on the same footprint, plus iron tools and weapons, sickles, shale and glass objects, bone and antler items, spindle whorls, loom weights, quern stones and pottery. The excavators estimated a resident population of 500–900 people — a proper Iron Age town, not a refuge fort.",
    interest: "Just south of the Shropshire border, but core Marches territory and one of the best-evidenced sites in this list for what daily life in a hillfort actually looked like.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Croft_Ambrey" },
      { label: "National Trust", url: "https://www.nationaltrust.org.uk/visit/worcestershire-herefordshire/croft-castle-and-parkland/croft-ambrey-walk-at-croft-castle" }
    ]
  },
  {
    id: "llanymynech-hill",
    name: "Llanymynech Hill",
    period: "Late Bronze Age – Roman",
    dates: "Later Bronze Age to Roman period",
    lat: 52.79,
    lon: -3.09,
    approx: false,
    elevation: "Straddles the England/Wales border",
    summary: "At roughly 57 hectares, one of the largest hillforts in Britain, and unusual in physically straddling the England–Wales border where the rivers Vyrnwy, Tanat and Cain meet the Severn plain.",
    archaeology: "The hill was an important source of copper, lead and zinc ore from the Iron Age through the Roman period; ore was mined and worked into bronze from the later Bronze Age onward, and a cave within the fort may have served as a Roman-period mine. Radiocarbon dates from a 1981 pipe trench fall between 363 BC and AD 53, and copper-alloy finds suggest the hillfort already existed before the late 2nd century BC.",
    interest: "A rare case of a hillfort that's also an industrial site — worth thinking about alongside Mitchell's Fold's stone-axe factory as evidence that 'ancient' didn't mean self-sufficient farming in isolation; these places traded.",
    links: [
      { label: "Atlas of Hillforts", url: "https://hillforts.arch.ox.ac.uk/records/WA0071.html" },
      { label: "Coflein", url: "https://coflein.gov.uk/en/sites/92487" }
    ]
  },
  {
    id: "mitchells-fold",
    name: "Mitchell's Fold Stone Circle",
    period: "Bronze Age",
    dates: "Bronze Age",
    lat: 52.5784,
    lon: -3.0281,
    approx: false,
    elevation: "Saddle between Stapeley Hill and Corndon Hill",
    summary: "A Bronze Age stone circle, roughly elliptical at 27 m by 25 m, originally comprising around 30 pillars of which about 15 survive, ranging from 25 cm to 1.9 m tall. Under English Heritage guardianship as a Scheduled Ancient Monument, alongside a nearby standing stone and cairn.",
    archaeology: "Sits within a few miles of a Late Neolithic/Early Bronze Age stone axe factory, suggesting this stretch of the Stiperstones/Corndon uplands was a working and ceremonial landscape rather than an isolated monument.",
    interest: "Local legend: a giant's cow gave endless milk here until a witch drained it with a sieve; the cow fled to become the Dun Cow of Warwickshire legend, and the witch was turned to stone and hemmed in by the other stones as punishment. Two related circles, Hoarstones and the now-destroyed Whetstones, lie within a couple of miles.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mitchell%27s_Fold" },
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/mitchells-fold-stone-circle/" }
    ]
  },
  {
    id: "hoarstones",
    name: "Hoarstones (Black Marsh) Stone Circle",
    period: "Late Neolithic / Early Bronze Age",
    dates: "Late Neolithic – Early Bronze Age",
    lat: 52.592676,
    lon: -2.999199,
    approx: false,
    elevation: "Near Black Marsh, Shropshire–Powys border",
    summary: "A large ring of small dolerite stones, 23.3 m by 21.1 m, with between 38 and 40 stones identified — more than the classic tradition of smaller circles this size usually has. One of only two surviving stone circles in Shropshire, alongside Mitchell's Fold about 1.5 miles away.",
    archaeology: "Excavated in 1924 by Lily F. Chitty, who initially identified 33 stones before locating more. Many stones are low and grass-covered, some buried in peat, and a few bear holes drilled during 19th-century mining prospecting.",
    interest: "Historically there were thought to be as many as five stone circles within two miles of each other on this stretch of the Shropshire–Powys border; only Mitchell's Fold and Hoarstones still stand.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hoarstones" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=990" }
    ]
  },
  {
    id: "whetstones",
    name: "Whetstones Stone Circle (destroyed)",
    period: "Late Neolithic / Bronze Age",
    dates: "c. 3000–1300 BC (circle); demolished 1870",
    lat: 52.571,
    lon: -3.028,
    approx: true,
    elevation: "Below Corndon Hill, near White Grit / Priestweston",
    summary: "A large stone circle, about 30 m across its major axis, half a mile south of Mitchell's Fold. Recorded with three stones still standing in 1841, the circle was pulled down around 1860 and finally demolished in 1870, almost certainly for field clearance or building stone.",
    archaeology: "Surviving stones — including one recorded at 1.2 m long, described as leaning in the soft, boggy ground — were reused as boundary stones and can still be picked out along an adjacent field edge today.",
    interest: "Included here deliberately as a reminder that the visible ancient landscape is a survivor's sample: this was a large circle, and it went the way of a field wall within living memory of the Ordnance Survey.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Whetstones_(stone_circle)" }
    ]
  },
  {
    id: "bromfield",
    name: "Bromfield Barrow Cemetery",
    period: "Neolithic – Bronze Age (with later Iron Age burial)",
    dates: "Neolithic/Beaker/Bronze Age; excavated 1966–79",
    lat: 52.3936,
    lon: -2.7422,
    approx: false,
    elevation: "Near Ludlow, on the golf course and racecourse",
    summary: "A Bronze Age barrow cemetery of originally around 20 burial mounds, of which three survive as visible monuments, set on what is now a golf course and racecourse near Ludlow. Wider excavations at Bromfield between 1966 and 1979 also revealed Neolithic and Beaker-period activity, and a separate Iron Age barrow burial.",
    archaeology: "The largest surviving mound, Robin Hood's Butt, is 28 m across and over 4 m high; an 1884 excavation found the cremated remains of a boy with a bronze implement. A second barrow contained an oval stone-lined cist with a secondary cremation urn near the top. A third, badly plough-damaged mound about 70 m across remains unexcavated.",
    interest: "A rare case in this region of prehistoric ritual and burial activity persisting on one spot across Neolithic, Bronze Age and Iron Age phases — and of a monument sharing its ground today with a race meeting.",
    links: [
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/11715/bromfield-barrow-cemetery" },
      { label: "Cambridge Core (excavation report)", url: "https://www.cambridge.org/core/journals/proceedings-of-the-prehistoric-society/article/abs/bromfield-shropshire-neolithic-beaker-and-bronze-age-sites-196679/6AF95A43B2A065B89A1A55DAC12A4FA9" }
    ]
  },
  {
    id: "bodbury-ring",
    name: "Bodbury Ring",
    period: "Late Bronze Age / Iron Age",
    dates: "Late Bronze Age origin; Middle Iron Age remodelling",
    lat: 52.5481,
    lon: -2.8199,
    approx: false,
    elevation: "Above Carding Mill Valley, Church Stretton",
    summary: "The visible earthwork on Bodbury Hill above Carding Mill Valley is only a small, easily-defended fort at the southern tip of a much larger hillfort. LiDAR survey work found the original fort once enclosed the entire ridgetop of Bodbury Hill — roughly six times the area previously mapped.",
    archaeology: "The discovery was made entirely from airborne laser-scan data, with no ground disturbance; the smaller, later fort visible today may reflect increased tension in the Middle Iron Age, when communities pulled back to more defensible, compact positions. A separate Roman-period enclosed settlement has also been identified nearby.",
    interest: "A good example of how much of the prehistoric Marches landscape is still being discovered without a single trowel going into the ground — remote sensing keeps rewriting the map.",
    links: [
      { label: "National Trust", url: "https://www.nationaltrust.org.uk/visit/shropshire-staffordshire/carding-mill-valley-on-the-long-mynd/bodbury-ring-hillfort-discovered-to-be-six-times-larger-than-originally-thought" },
      { label: "Atlas of Hillforts", url: "http://hillforts.arch.ox.ac.uk/records/EN0043.html" }
    ]
  },
  {
    id: "caynham-camp",
    name: "Caynham Camp",
    period: "Iron Age",
    dates: "From c. 390 BC, in three build phases",
    lat: 52.36,
    lon: -2.669,
    approx: false,
    elevation: "Near Ludlow",
    summary: "A univallate hillfort of about 4.0 hectares near Ludlow, built in three phases: an earliest timber-laced rampart from around 390 BC, replaced later by stone-revetted defences, and finally by massive earth-and-stone ramparts.",
    archaeology: "The eastern rampart is the most impressive surviving element, up to 5.5 m high with a 4 m wide ditch and counterscarp bank; the north side is much slighter due to the naturally steeper terrain there. The main entrance is a deeply inturned passage 40 m long at the south-east corner.",
    interest: "A clear, compact example of a fort rebuilt and re-engineered over centuries rather than a single-phase structure — worth comparing against Old Oswestry's more dramatic multi-phase sequence.",
    links: [
      { label: "Atlas of Hillforts", url: "http://hillforts.arch.ox.ac.uk/records/EN0061.html" }
    ]
  },
  {
    id: "burrow-camp",
    name: "Burrow Camp",
    period: "Iron Age",
    dates: "Iron Age; pottery finds dated to c. 100 BC",
    lat: 52.44145,
    lon: -2.91206,
    approx: false,
    elevation: "358 m, summit of Burrow Hill near Hopesay and Aston-on-Clun",
    summary: "A pear-shaped hillfort enclosing about 2 hectares (5 acres) at the summit of Burrow Hill, with four sets of ramparts and ditches around most of its circuit and two natural springs inside the defences.",
    archaeology: "Considered a fine example of a nationally rare type of hillfort — relatively small but with multiple ramparts — concentrated mostly in the Marches and generally read as a permanently occupied, high-status Iron Age settlement rather than a seasonal refuge. Limited excavation of a house platform in 1978 exposed a circular rock-cut platform carrying at least two round-house gullies and postholes, with a group of 'duck-stamped' pottery dated to around 100 BC.",
    interest: "On 13 September 1943 a Vickers Wellington bomber on a night exercise from RAF Chipping Warden was struck by lightning and crashed on the hilltop, killing all eight crew — a reminder that even a small, quiet hill like this can carry more than one layer of history.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Burrow_(Shropshire)" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=10707" }
    ]
  },
  {
    id: "bury-walls",
    name: "Bury Walls",
    period: "Iron Age",
    dates: "Iron Age, with a later Romano-Celtic-period building",
    lat: 52.84278,
    lon: -2.62861,
    approx: false,
    elevation: "160 m, near Weston-under-Redcastle",
    summary: "A univallate promontory fort of about 8 hectares on a sandstone ridge, defended on its vulnerable north side by two massive ramparts and ditches — the inner rampart standing some 7.8 m above the interior — with single, lower ramparts elsewhere and a natural spring inside the enclosure.",
    archaeology: "A 1930 excavation at the inturned north-east entrance found cart ruts, hearths and building foundations first taken for a medieval structure but now interpreted as a Romano-Celtic temple. Geophysical survey in 1999–2000 revealed concentric terraces inside the northern half of the fort, whose construction spoil appears to have been reused in the defences.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bury_Walls" }
    ]
  },
  {
    id: "the-berth",
    name: "The Berth",
    period: "Late Iron Age – Roman",
    dates: "Late Iron Age through to the 4th century AD",
    lat: 52.8077,
    lon: -2.8467,
    approx: false,
    elevation: "95 m, on glacial gravel mounds near Baschurch",
    summary: "A rare marsh fort: two linked enclosures — one of about 3.1 ha, one about 0.5 ha — built on natural glacial gravel mounds rising out of wetland by the River Perry and Berth Pool, joined by a 120 m stone-and-gravel causeway, rather than the hilltop most Marches forts favour.",
    archaeology: "P. S. Gelling's 1962–63 excavations found timber buildings of both Iron Age and Roman date, alongside middle-to-late Iron Age and Roman pottery and a La Tène brooch. A Roman-period bronze cauldron was found here before 1906, and a Romano-British glass bead turned up in 1976.",
    interest: "Local legend places the graves of British kings under the pool here — whether or not it's literally true, it's a sign of how long this unusual, waterlogged fort stayed part of the region's folk memory after it went out of use.",
    links: [
      { label: "Atlas of Hillforts", url: "http://hillforts.arch.ox.ac.uk/records/EN0084.html" }
    ]
  },
  {
    id: "caer-din-ring",
    name: "Caer-Din Ring",
    period: "Iron Age / Romano-British",
    dates: "Iron Age to Romano-British",
    lat: 52.466413,
    lon: -3.115363,
    approx: false,
    elevation: "On a hill above Folly Brook, Clun Forest, near Newcastle on Clun",
    summary: "A small, univallate contour hillfort in a commanding position between the Folly Brook/River Clun confluence and the Kerry Ridgeway, about 114 m by 122 m with an internal area of roughly 0.85 ha — a single earthen bank and ditch, reduced in places by later ploughing.",
    archaeology: "The original entrance faces east; a second, later entrance was cut through the north-west side. An adjacent ancient field boundary, a round barrow and cultivation remains are scheduled alongside the ring itself, suggesting the wider hilltop stayed in use, in different ways, well after the fort's main occupation.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1021280" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/14382/caer-din-ring" }
    ]
  },
  {
    id: "norton-camp",
    name: "Norton Camp",
    period: "Iron Age",
    dates: "6th century BC – mid-1st century AD",
    lat: 52.432538,
    lon: -2.814507,
    approx: false,
    elevation: "On steep wooded slopes above the River Onny, Craven Arms",
    summary: "A large, prominent D-shaped multivallate hillfort of about 6.6 hectares (17 acres), with two ramparts and an outer ditch around most of its circuit, reinforced on the south-west by two further banks that may have started as late Bronze Age cross-dykes later folded into the fort's defences.",
    archaeology: "The ramparts, up to 4 m high in places, have survived unusually well because tree and shrub cover has protected them from weathering ever since. Seven circular huts have been identified in the fort's north-western interior, pointing to a permanently occupied community rather than a seasonal refuge.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1021073" },
      { label: "Atlas of Hillforts", url: "http://hillforts.arch.ox.ac.uk/records/EN0074.html" }
    ]
  },
  {
    id: "earls-hill",
    name: "Earl's Hill Camp",
    period: "Iron Age",
    dates: "From c. 600 BC",
    lat: 52.63801,
    lon: -2.87496,
    approx: false,
    elevation: "320 m, summit of Pontesford Hill",
    summary: "A small multivallate hillfort of about 2.8 hectares occupying the steep summit and southern slopes of Pontesford Hill, with a main enclosure of 1.1 ha and an elongated 1.7 ha annexe, defended by a single rampart and ditch with a causewayed north-east entrance.",
    archaeology: "Possible hut platforms have been identified inside, and finds — a bronze ring fragment and flint flakes, now in Shrewsbury Museum — hint at activity both before and during the Iron Age occupation. Evidence of vitrification (rampart material fused by intense heat) has also been recorded here, though whether from deliberate rampart-building technique or an accidental fire is unresolved. The fort sits on Uriconian volcanic rock around 650 million years old, part of the same ancient volcanic arc that built the Wrekin.",
    interest: "Shropshire's first nature reserve, established here by the Shropshire Wildlife Trust in 1964, protects the earthworks alongside the hill's wildlife.",
    links: [
      { label: "Atlas of Hillforts", url: "http://hillforts.arch.ox.ac.uk/records/EN0066.html" },
      { label: "Shropshire Wildlife Trust", url: "https://www.shropshirewildlifetrust.org.uk/nature-reserves/earls-and-pontesford-hill" }
    ]
  },
  {
    id: "coxall-knoll",
    name: "Coxall Knoll",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.3553,
    lon: -2.9334,
    approx: false,
    elevation: "262 m, straddling the Shropshire–Herefordshire border near Bucknell",
    summary: "A multiple-enclosure hillfort roughly 570 m east–west by 200 m north–south, on a hill so exactly on the Shropshire–Herefordshire county line that the boundary runs straight through the monument.",
    archaeology: "Its layout — a smaller, more strongly defended enclosure attached to a larger, more lightly defended one — is typical of a recognised group of 'multiple enclosure' forts concentrated in the southern Marches, thought to reflect some mix of higher-status occupation and stock management rather than a single defensive design.",
    interest: "A tidy illustration of how modern county lines were drawn straight across a landscape that predates them by two thousand years.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coxall_Knoll" },
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1014107" }
    ]
  },
  {
    id: "brown-clee-forts",
    name: "Abdon Burf & Clee Burf Hillforts",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.4555,
    lon: -2.5999,
    approx: true,
    elevation: "Abdon Burf, 540 m (Shropshire's highest point), and Clee Burf, 510 m — the twin summits of Brown Clee Hill",
    summary: "Brown Clee's two summits each carried their own Iron Age hillfort — Clee Burf originally an oval enclosure of about 3.6 ha, Abdon Burf on the slightly higher summit — making this, together with neighbouring Nordy Bank on the hill's western shoulder, a rare case of three hillforts sharing one hill.",
    archaeology: "Both summit forts have been badly damaged, first by centuries of quarrying for Dhustone dolerite (see the geology tab) and more recently by mast and radar installations on both tops. Only ragged remnants survive: at Clee Burf, a stony rampart scarp about 100 m long and up to 2.7 m high in the south-east quadrant; Abdon Burf's defences are even more fragmentary. Nordy Bank, lower down and clear of the quarries, is the only one of the three to survive largely intact.",
    interest: "Worth visiting alongside Nordy Bank as a lesson in survivorship bias: the hillfort you can see clearly here is the one that happened to escape industrial-era quarrying, not necessarily the one that mattered most to its Iron Age builders.",
    links: [
      { label: "Atlas of Hillforts (Clee Burf)", url: "https://hillforts.arch.ox.ac.uk/records/EN0063.html" },
      { label: "Atlas of Hillforts (Abdon Burf)", url: "http://hillforts.arch.ox.ac.uk/records/EN0039.html" }
    ]
  },
  {
    id: "wart-hill",
    name: "Wart Hill Camp",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.4576,
    lon: -2.8834,
    approx: false,
    elevation: "324 m, near Clunbury",
    summary: "A hillfort ringing a distinctive, steep conical summit in the Clun valley area, giving wide views over the surrounding Shropshire Hills and forming the focal point of a local waymarked walk, 'The Wart Hill Wander'.",
    archaeology: "Like several of the smaller Clun-area forts nearby (Caer-Din Ring, Bury Ditches) it belongs to the dense cluster of Iron Age hillforts along this stretch of the Marches, though it has seen less formal excavation than its larger neighbours.",
    links: [
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=14689" }
    ]
  },
  {
    id: "corndon-hill-cairns",
    name: "Corndon Hill Cairns",
    period: "Bronze Age",
    dates: "Bronze Age round barrow cemetery",
    lat: 52.563256,
    lon: -3.025406,
    approx: false,
    elevation: "513 m summit, on the Shropshire–Powys border",
    summary: "At least eight Bronze Age round cairns are strung along Corndon Hill's summit ridge, forming one of the densest burial-cairn cemeteries in the district — a fitting neighbour half a mile from Mitchell's Fold. The largest is over 20 m across; a smaller kerbed cairn retains a surviving central cist.",
    archaeology: "The summit cairn is about 30 m across and 1 m high, and now carries an Ordnance Survey triangulation pillar. Several of the cairns show signs of historic stone-robbing and antiquarian disturbance.",
    interest: "Corndon Hill's dolerite was quarried by Neolithic and early Bronze Age people for stone axes at nearby factory sites, meaning the hill was already an important place — economically as well as ceremonially — before these burial cairns were even built on it. See the geology tab and Mitchell's Fold for more on this wider ceremonial landscape.",
    links: [
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4490/corndon-hill" }
    ]
  },
  {
    id: "breiddin",
    name: "The Breiddin Hillfort",
    period: "Late Bronze Age – Iron Age",
    dates: "Rampart timbers radiocarbon-dated to c. 800 BC; rebuilt c. 3rd century BC",
    lat: 52.7227,
    lon: -3.0442,
    approx: false,
    elevation: "365 m, above the Severn valley near Welshpool",
    summary: "A large hillfort of about 28 hectares on a striking, steep-sided hill overlooking the Severn as it leaves the Welsh uplands. Sporadic Mesolithic and early Bronze Age activity was followed by a substantial late Bronze Age settlement defended by a timber-framed rampart, radiocarbon-dated to around 800 BC — one of the best-dated Bronze Age defended sites in the region.",
    archaeology: "After a quieter phase when the hilltop was probably used mainly for grazing, the rampart was rebuilt on a much larger scale around the 3rd century BC. Rescue excavations in 1969–76 found the rampart had been built in clearly separate sections, suggesting different work-gangs building side by side. At the fort's centre, a natural pool (Buckbean Pond) preserved a radiocarbon-dated pollen and plant sequence spanning the site's later prehistoric occupation.",
    interest: "One of the richest sources anywhere in the region for Late Bronze Age metalwork, recovered from the earlier rampart phase — direct physical evidence that hillforts here were already substantial, defended places well before the classic Iron Age period most Marches forts date to.",
    links: [
      { label: "CBA Research Report 76", url: "https://archaeologydataservice.ac.uk/archives/view/cba_rr/rr76.cfm" },
      { label: "Antiquaries Journal (Cambridge Core)", url: "https://www.cambridge.org/core/journals/antiquaries-journal/article/abs/is-there-anybody-out-there-a-reconsideration-of-the-environmental-evidence-from-the-breiddin-hillfort-powys-wales/69996A89DD2D0D11ADF1B08F43406C7E" }
    ]
  },
  {
    id: "ffridd-faldwyn",
    name: "Ffridd Faldwyn",
    period: "Neolithic – Iron Age",
    dates: "Neolithic occupation; Bronze Age barrow; Iron Age hillfort in four phases, into the Roman period",
    lat: 52.56,
    lon: -3.16,
    approx: true,
    elevation: "On a hill above Montgomery, overlooking the Vale of Montgomery",
    summary: "One of the largest hillforts in Wales, its earthworks grew from an initial 1.2-hectare enclosure to around 4.4 hectares in a later phase. Excavations in 1937–39 found Neolithic activity sealed beneath the southern gateway of the earliest enclosure — occupation here goes back well before the hillfort was ever built.",
    archaeology: "A small mound inside the earliest enclosure may be a Bronze Age round barrow, hinting at continued significance of the site between the Neolithic and Iron Age phases. The Iron Age fort itself went through several rebuilds: an early timber-palisaded enclosure, a later box-framed timber rampart with a north-western extension and barbican, a major expansion down toward the River Severn, and a final earthwork refurbishment, possibly as late as the Roman conquest period. Only a single sherd of Iron Age pottery has ever been recovered, part of why the fort's later chronology is still debated.",
    interest: "Together with the Breiddin, a reminder that 'hillfort' can mean a site with two thousand years of layered history under one name, not a single building event.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ffridd_Faldwyn,_Montgomery" },
      { label: "Coflein", url: "https://coflein.gov.uk/en/sites/92480" }
    ]
  },
  {
    id: "roundton-hill",
    name: "Roundton Hill Camp",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.54806,
    lon: -3.04278,
    approx: false,
    elevation: "Above Churchstoke, on a volcanic hill on the Shropshire–Powys border",
    summary: "A well-preserved hillfort measuring about 180 m by 130 m, its rampart of stone and earth encircling the summit on the north, west and south sides while a very steep natural scarp defends the east — a good example of a fort using terrain to save on earthwork.",
    archaeology: "The hill itself is a volcanic outcrop, geologically related to nearby Corndon Hill; its rocky, thin-soiled slopes support plants uncommon elsewhere in the district, part of why it's now a national nature reserve.",
    interest: "From the summit, Corndon Hill's Bronze Age cairns and Mitchell's Fold are both visible — a chance to place three of this list's monuments in the same sightline, spanning well over a thousand years of use.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Roundton_Hill" },
      { label: "Montgomeryshire Wildlife Trust", url: "https://www.montwt.co.uk/nature-reserves/roundton-hill" }
    ]
  },
  {
    id: "credenhill-camp",
    name: "Credenhill Camp",
    period: "Iron Age",
    dates: "6th century BC – mid-1st century AD",
    lat: 52.096103,
    lon: -2.802816,
    approx: false,
    elevation: "Near Hereford, on Credenhill Court hill",
    summary: "A large multivallate hillfort, among the biggest in Herefordshire, sometimes suggested as a tribal centre of the Dobunni before the Roman conquest — a role broadly analogous to the Wrekin's for the Cornovii further north.",
    archaeology: "Evidence points to dense internal occupation typical of a permanently settled, near-'proto-urban' hillfort rather than a seasonal refuge, in keeping with other large, long-lived forts in this list such as Croft Ambrey.",
    interest: "Now under Woodland Trust-managed woodland, with the earthworks best appreciated on the ground rather than from a distance — a contrast with the open, walkable ramparts of Old Oswestry or Bury Ditches further north.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1005526" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4744" }
    ]
  },
  {
    id: "sutton-walls",
    name: "Sutton Walls",
    period: "Iron Age (with early medieval reuse)",
    dates: "Defences from c. 100 BC; occupied for around 500 years; later associated with an 8th-century royal death",
    lat: 52.113,
    lon: -2.694,
    approx: false,
    elevation: "Near Hereford",
    summary: "An elongated oval hillfort about 4 miles north of Hereford, defended from around 100 BC by a V-shaped ditch and internal bank, later reinforced with timber and stone revetting. Excavation found roundhouse foundations, corn-drying ovens and hearths spanning some 500 years of permanent settlement.",
    archaeology: "At the west entrance, excavator Kathleen Kenyon found a pit containing a 'war cemetery' of 24 skeletons, several decapitated — likely evidence of violent conflict at or after the Roman conquest.",
    interest: "Early medieval tradition associates the site with the murder of the East Anglian king Æthelberht, beheaded around AD 794 on the orders of the Mercian king Offa's court. Whether or not that identification is correct, it shows how a striking earthwork kept accruing legend long after its Iron Age builders were forgotten.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/whats-new/in-your-area/midlands/sutton-walls-hillfort/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sutton_Walls_Hill_Fort" }
    ]
  },
  {
    id: "wapley-hill",
    name: "Wapley Hill Camp",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.256447,
    lon: -2.959963,
    approx: false,
    elevation: "Near Presteigne, on the Herefordshire–Powys border",
    summary: "A large multivallate hillfort about 3 km south-east of Presteigne, with multiple concentric ramparts and ditches enclosing a substantial hilltop — one of the more imposing defensive earthworks on this stretch of the border.",
    archaeology: "Later pillow mounds (artificial rabbit warrens) were built within the old fort, a common secondary use of hillfort interiors across the Marches once their original defensive purpose was long forgotten.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1011017" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4753" }
    ]
  },
  {
    id: "burfa-camp",
    name: "Burfa Camp",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.242521,
    lon: -3.048578,
    approx: false,
    elevation: "On Burfa Bank, near Old Radnor, Powys",
    summary: "A substantial hillfort enclosing about 13 hectares on Burfa Bank overlooking the Hindwell valley — considerably larger than most Welsh hillforts, which tend to be under 2 ha — just inside the Welsh border and close to the line later taken by Offa's Dyke.",
    archaeology: "Its scale places it alongside Llanymynech Hill and Croft Ambrey as one of the larger, more significant hillforts of the wider Marches, rather than a purely local defensive site.",
    interest: "Offa's Dyke passes near the foot of Burfa Bank — a physical reminder that this Iron Age boundary country became a fought-over frontier again more than a thousand years later.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Burfa_Castle" },
      { label: "Roman Britain", url: "https://www.roman-britain.co.uk/places/burfa_camp/" }
    ]
  },
  {
    id: "british-camp",
    name: "British Camp (Herefordshire Beacon)",
    period: "Iron Age (with later Norman reuse)",
    dates: "Iron Age, 4th century BC – 1st century AD; Norman ringwork added after 1066",
    lat: 52.05798,
    lon: -2.35176,
    approx: false,
    elevation: "338 m summit, Malvern Hills",
    summary: "One of the most dramatic hillforts anywhere in Britain, its concentric banks and ditches following the natural contours of the Herefordshire Beacon summit, with evidence for around 120 huts inside the defences during its main occupation between the 4th century BC and 1st century AD.",
    archaeology: "After the Norman Conquest a ringwork-and-bailey castle was built directly into the old hillfort's summit, reusing its earthworks rather than replacing them — the lumpy, multi-layered summit visible today is really two different fortifications from two very different eras, superimposed on each other.",
    interest: "Sits at the southern end of the Malvern ridge, with views across three counties — a fitting bookend to this list alongside the Wrekin at the northern end of the same broad upland spine of the Marches.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Herefordshire_Beacon" },
      { label: "Atlas of Hillforts", url: "https://hillforts.arch.ox.ac.uk/records/EN0005.html" }
    ]
  },
  {
    id: "midsummer-hill",
    name: "Midsummer Hill Camp",
    period: "Iron Age",
    dates: "Main occupation from around 500 BC, lasting roughly 500 years",
    lat: 52.035384,
    lon: -2.349817,
    approx: false,
    elevation: "284 m, Malvern Hills, on the Herefordshire–Worcestershire border",
    summary: "One of the most unusual hillforts in the region: its ramparts enclose not one hilltop but two — Midsummer Hill and neighbouring Hollybush Hill — plus the valley between them, a highly unusual layout for a Marches fort.",
    archaeology: "Over 400 hut platforms have been identified across the site, among the largest such counts anywhere in the region. Excavation of one stone-built hut circle found stone flooring, storage pits and evidence of metalworking.",
    interest: "Best visited together with British Camp, a short walk south along the same ridge — the two forts, occupied contemporaneously, suggest this small stretch of the Malverns supported an unusually dense Iron Age population.",
    links: [
      { label: "National Trust", url: "https://www.nationaltrust.org.uk/visit/worcestershire-herefordshire/herefordshire-countryside/midsummer-hill" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Midsummer_Hill" }
    ]
  }
];

// ---------------------------------------------------------------------------
// Geology of the Marches — regional write-ups, tied to specific outcrops
// ---------------------------------------------------------------------------

const GEOLOGY_REGIONS = [
  {
    id: "long-mynd",
    name: "The Long Mynd",
    periodTag: "Precambrian (Ediacaran), c. 565 million years",
    summary: "The Long Mynd is built from around 8,000 metres of mudstone and siltstone, laid down on a desolate tidal mudflat at the edge of an ancient continent roughly 565 million years ago — deep in the Precambrian, hundreds of millions of years before anything with a shell or a skeleton existed. Rivers carried ground-up mud, silt and sand off the land and spread it across shallow marine flats; later, earth movements folded and tilted those flat layers into the near-vertical beds you can see in the valley sides today.",
    detail: "The rock still preserves raindrop impressions and mud-crack patterns from when this surface baked and dried between tides — some of the oldest weather ever directly recorded in rock anywhere in Britain.",
    linkedSiteIds: ["caer-caradoc", "bodbury-ring"]
  },
  {
    id: "wrekin-ercall",
    name: "The Wrekin & the Ercall",
    periodTag: "Precambrian volcanics (c. 680–560 Ma) unconformably overlain by Cambrian sediment (c. 526 Ma)",
    summary: "The Wrekin is built mainly from Uriconian volcanic rock — lava and ash from an explosive volcanic arc around 680 million years ago, among the oldest rock exposed anywhere in England. It was later intruded by a pink igneous rock called granophyre, dated to about 560 million years ago. The hill itself was never a volcano; it's made of volcanic rock, which is a different thing.",
    detail: "The neighbouring quarry hill, the Ercall, is internationally important for exposing the actual boundary — an angular unconformity — where those steeply-tilted Precambrian volcanic rocks are overlain by much younger, gently-dipping Cambrian sediment, marking a huge gap in time and a major episode of folding dated to around 526 million years ago. It's one of the clearest places in Britain to put your hand across roughly 150 million years of missing history in a single stride.",
    linkedSiteIds: ["wrekin", "earls-hill"]
  },
  {
    id: "stiperstones",
    name: "The Stiperstones",
    periodTag: "Ordovician, quartzite",
    summary: "The jagged tors of the Stiperstones ridge are Stiperstones Quartzite — an unusually pure, quartz-rich rock, distinguished from the older Cambrian Wrekin Quartzite by both its age and its purity. It likely formed in a shallow-water, perhaps beach, environment, though some geologists argue for a deeper-water origin via underwater slumping triggered by fault movement — that debate is still active research.",
    detail: "The quartzite contains conglomerate bands with rounded quartz pebbles up to a centimetre across, along with fragments of purple Longmyndian sandstone picked up during deposition — a physical link back to the older rocks of the Long Mynd next door. The frost-shattered tors, including the Devil's Chair, are a much more recent Ice Age feature carved into this ancient rock.",
    linkedSiteIds: ["mitchells-fold", "hoarstones", "whetstones", "corndon-hill-cairns", "roundton-hill"]
  },
  {
    id: "wenlock-edge",
    name: "Wenlock Edge",
    periodTag: "Silurian, c. 430 million years",
    summary: "Wenlock Edge is a limestone escarpment laid down on a gently sloping shelf in warm, shallow, sub-tropical seas during the Silurian period, when this part of Britain lay south of the equator. Patch reefs built by corals grew across the shelf, hosting trilobites, brachiopods, crinoids and sea snails filtering food from the water or hunting each other across the reef.",
    detail: "The escarpment's shape today is down to differential erosion: the hard reef limestone resists weathering far better than the softer shales and siltstones around it, leaving the limestone standing proud as a ridge while the softer rock has worn down into the parallel valleys of Ape Dale, Hope Dale and Corve Dale that flank it.",
    linkedSiteIds: []
  },
  {
    id: "clee-hills",
    name: "The Clee Hills",
    periodTag: "Carboniferous, coal measures and a dolerite sill",
    summary: "Titterstone Clee and Brown Clee are capped by Carboniferous coal measure sediments — the same broad geological episode that gave the South Wales and Midlands coalfields their coal — into which a sheet of molten rock was later forced sideways between the sandstone layers, cooling into a hard, dark dolerite sill known locally as Dhustone.",
    detail: "Dhustone (probably from the Welsh du, black) was quarried on Titterstone Clee for road setts and dock construction, and later crushed for concrete aggregate and road surfacing — one of the few places in this list where the geology directly shaped the local economy for a couple of centuries, on top of shaping the Bronze Age choice of the hilltop for a cairn thousands of years earlier.",
    linkedSiteIds: ["titterstone-clee", "brown-clee-forts"]
  }
];

// ---------------------------------------------------------------------------
// Geological time scale (ICS International Chronostratigraphic Chart, 2023)
// All dates in millions of years ago (Ma) except the top of the Quaternary (0)
// ---------------------------------------------------------------------------

const TIME_SCALE = [
  {
    eon: "Hadean",
    start: 4600, end: 4000,
    blurb: "Earth forming and cooling. No rock from this eon survives in Britain, or almost anywhere on Earth.",
    local: null
  },
  {
    eon: "Archean",
    start: 4000, end: 2500,
    blurb: "Earliest continents and earliest life (simple single-celled microbes). Still nothing preserved locally.",
    local: null
  },
  {
    eon: "Proterozoic",
    start: 2500, end: 538.8,
    blurb: "Complex cells, an oxygen-rich atmosphere, and by the very end, the first soft-bodied multicellular life (the Ediacaran biota) — but still nothing with a shell, skeleton or hard part.",
    local: "The Long Mynd's tidal mudflats (c. 565 Ma) and the Wrekin's volcanic rocks (c. 680–560 Ma) both belong to the tail end of this eon, in the Ediacaran period.",
    eras: [
      { era: "Paleoproterozoic", start: 2500, end: 1600 },
      { era: "Mesoproterozoic", start: 1600, end: 1000 },
      { era: "Neoproterozoic", start: 1000, end: 538.8, periods: [
        { period: "Tonian", start: 1000, end: 720 },
        { period: "Cryogenian", start: 720, end: 635, blurb: "“Snowball Earth” — the planet may have frozen over almost entirely." },
        { period: "Ediacaran", start: 635, end: 538.8, blurb: "First soft-bodied multicellular life.", local: "Long Mynd mudflats; Wrekin volcanics and granophyre" }
      ]}
    ]
  },
  {
    eon: "Phanerozoic",
    start: 538.8, end: 0,
    blurb: "The eon of visible, hard-shelled and skeletal life — everything from trilobites to us.",
    local: null,
    eras: [
      {
        era: "Paleozoic", start: 538.8, end: 251.9,
        blurb: "“Ancient life”: the Cambrian explosion, the first fish, plants and forests colonising land, and finally the first reptiles, ending in Earth's worst mass extinction.",
        periods: [
          { period: "Cambrian", start: 538.8, end: 485.4, blurb: "The 'Cambrian explosion' of complex animal life with hard shells and skeletons.", local: "The Wrekin Quartzite and the Ercall unconformity — the boundary between ancient volcanic rock and new Cambrian sediment." },
          { period: "Ordovician", start: 485.4, end: 443.8, blurb: "Diverse marine life; the era ends in one of the 'big five' mass extinctions.", local: "The Stiperstones Quartzite ridge, source of the district's dramatic tors." },
          { period: "Silurian", start: 443.8, end: 419.2, blurb: "Warm shallow seas; the first jawed fish and the first land plants with vascular tissue.", local: "Wenlock Edge's coral-reef limestone — this part of Britain sat south of the equator at the time." },
          { period: "Devonian", start: 419.2, end: 358.9, blurb: "The 'Age of Fishes'; first forests and the first four-limbed animals crawl onto land." },
          { period: "Carboniferous", start: 358.9, end: 298.9, blurb: "Vast tropical coal swamps; first reptiles.", local: "The coal measures and Dhustone dolerite sill capping the Clee Hills." },
          { period: "Permian", start: 298.9, end: 251.9, blurb: "Supercontinent Pangaea assembles; ends in the largest mass extinction in Earth's history, wiping out most marine species." }
        ]
      },
      {
        era: "Mesozoic", start: 251.9, end: 66,
        blurb: "“Middle life”: the age of the dinosaurs, from their rise after the Permian extinction to their sudden end.",
        periods: [
          { period: "Triassic", start: 251.9, end: 201.4, blurb: "Life recovers from the Permian extinction; first dinosaurs and mammals appear." },
          { period: "Jurassic", start: 201.4, end: 145, blurb: "Dinosaurs dominate; first birds appear." },
          { period: "Cretaceous", start: 145, end: 66, blurb: "Flowering plants spread widely; ends with the asteroid impact that killed the non-avian dinosaurs." }
        ]
      },
      {
        era: "Cenozoic", start: 66, end: 0,
        blurb: "“New life”: the age of mammals, from the extinction of the dinosaurs to today.",
        periods: [
          { period: "Paleogene", start: 66, end: 23.03, blurb: "Mammals diversify rapidly to fill niches left empty by the dinosaurs." },
          { period: "Neogene", start: 23.03, end: 2.58, blurb: "Grasslands spread; early hominins appear toward its end." },
          { period: "Quaternary", start: 2.58, end: 0, blurb: "Repeated ice ages, the evolution of modern humans, and the shaping of the landscape we see today.", local: "The Ice Age glaciers that carved the Shropshire valleys, dumped the boulder clay of the lowlands, and shattered the Stiperstones tors through repeated freeze-thaw — this is the period that gave the ancient rock beneath it its present-day shape." }
        ]
      }
    ]
  }
];
