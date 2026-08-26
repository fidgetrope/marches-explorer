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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4621/old-oswestry" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/2081/bury-ditches" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4009/wrekin" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/5016/caer-caradoc-church-stretton" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/3319/nordy-bank" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/8917/titterstone-clee-hill" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/3317/croft-ambrey" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/7001/llanymynech-hill" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/139/mitchells-fold" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/2309/hoarstones" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4501/whetstones" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/11715/bromfield-barrow-cemetery" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/7393/bodbury-ring" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/3318/caynham-camp" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/3316/burrow" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/14275/bury-walls" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/13907/berth" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4749/norton-camp-shropshire" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/8368/earls-hill-and-pontesford-hill" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/8508/coxall-knoll" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/19450/wart-hill-camp" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4516/breiddin-hill-camp" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/14129/ffridd-faldwyn" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/13849/roundton" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/5246/credenhill-camp" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/5245/sutton-walls" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/3320/wapley-hill" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/6795/burfa-bank" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/5203/british-camp" }
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
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4058/midsummer-hill" }
    ]
  },
  {
    id: "leckhampton-hill",
    name: "Leckhampton Hill Hillfort",
    period: "Iron Age",
    dates: "c. 900–100 BC hillfort; barrow burial mound possibly earlier",
    lat: 51.864155,
    lon: -2.076921,
    approx: false,
    elevation: "330 m, above Cheltenham and Shurdington, on the Cotswold escarpment",
    summary: "A univallate hillfort on the edge of the Cotswold scarp above Cheltenham, one of a string of forts built along this escarpment between about 900 and 100 BC, thought to have been held by the Dobunni. Unusually for the region, an extremely rare Iron Age round barrow survives inside a square enclosure within the fort.",
    archaeology: "Excavations in the 1920s and in 1969–70 found the rampart's original bank had stood 2–3 m high behind a ditch nearly 3 m deep and over 4 m wide, faced with a wooden palisade and stone wall and pierced by a substantial gatehouse. A 2008 survey by Gloucestershire County Council Archaeological Services confirmed an Iron Age settlement within the fort, with hut circles, internal enclosures and ditches.",
    interest: "The hill is better known today for the Devil's Chimney, a slender pinnacle of rock left standing by centuries of quarrying — the Romans took stone from here too, and lime-burning and building-stone extraction continued into the 1920s, cutting straight through parts of the Iron Age earthwork before Cheltenham Town Council bought the hill for public access in 1927–29.",
    links: [
      { label: "Friends of Leckhampton Hill", url: "https://www.leckhamptonhill.org.uk/site-description/historical-archaeology/" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4695" }
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/11647/leckhampton-hill" }
    ]
  },
  {
    id: "crickley-hill",
    name: "Crickley Hill",
    period: "Neolithic – Iron Age",
    dates: "Causewayed enclosure c. 3650 BC, destroyed c. 3490–3450 BC; Iron Age hillfort in the 1st millennium BC",
    lat: 51.843905,
    lon: -2.10374,
    approx: false,
    elevation: "On the Cotswold escarpment near Birdlip, close to Shurdington",
    summary: "One of the most important prehistoric sites in Britain, occupied on and off for over 4,000 years: an early Neolithic causewayed enclosure (c. 3650 BC), rebuilt as a continuous-ditch defended settlement around 3550 BC, then a later Iron Age hillfort covering nearly 9 hectares and home to around 100 people, followed by Roman and sub-Roman activity.",
    archaeology: "The Neolithic settlement met a violent end: hundreds of leaf-shaped flint arrowheads, concentrated around its two entrances and its burned palisade line, mark an attack dated to around 3490–3450 BC and known as the 'Battle of Crickley Hill' — among the clearest physical evidence anywhere in Britain that Neolithic communities fought organised, deadly conflicts rather than just isolated raids. The site was excavated nearly every summer from 1969 to 1993, one of the largest and longest continuous excavations in the UK, led by Philip Dixon.",
    interest: "A late Iron Age burial found nearby at Barrow Wake, the Birdlip Grave, produced one of the finest Celtic mirrors ever found in Britain — see the separate entry for that site, a short walk from here along the scarp.",
    links: [
      { label: "National Trust", url: "https://www.nationaltrust.org.uk/visit/gloucestershire-cotswolds/crickley-hill/history-of-crickley-hill" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Crickley_Hill_and_Barrow_Wake" }
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/56/crickley-hill" }
    ]
  },
  {
    id: "belas-knap",
    name: "Belas Knap Long Barrow",
    period: "Neolithic",
    dates: "c. 3000 BC, with burials continuing over succeeding centuries",
    lat: 51.923,
    lon: -1.9692,
    approx: false,
    elevation: "On Cleeve Hill, above Winchcombe",
    summary: "A particularly fine and well-preserved Cotswold-Severn long barrow, about 54 m long, 18 m wide and up to 4.3 m high, with a deceptive false entrance at its northern end flanked by two projecting 'horns' — the real burial chambers open instead from its sides.",
    archaeology: "Excavations in 1863 and 1865 found the remains of at least 31 people in the side chambers, with Romano-British pottery inside one chamber showing it was still accessible — deliberately or otherwise — millennia after it was built. The barrow was restored following excavation, with its drystone walling reconstructed.",
    interest: "The false entrance is the barrow's best-known trick: an imposing doorway that leads nowhere, apparently built to mislead or deter anyone trying to break in from the front, while the real chambers open unobtrusively from the sides.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Belas_Knap" },
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/belas-knap-long-barrow/" }
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/54/belas-knap" }
    ]
  },
  {
    id: "nottingham-hill-camp",
    name: "Nottingham Hill Camp",
    period: "Iron Age",
    dates: "6th century BC – mid-1st century AD",
    lat: 51.9844,
    lon: -2.0167,
    approx: false,
    elevation: "On Cleeve Hill, near Gotherington, north of Cheltenham",
    summary: "One of the largest hillforts in Gloucestershire, a promontory fort of roughly 100 hectares (250 acres) enclosed by a single rampart cut across the neck of a prominent spur of the Cotswold escarpment — a huge area by regional standards, more typical of a tribal gathering or stock-management site than a small defended farmstead.",
    archaeology: "Aerial photography, field survey and chance finds within the fort have identified a probable round barrow cemetery as well as settlement evidence spanning the Iron Age and Romano-British periods, suggesting the site's huge enclosed area was used and re-used across many centuries rather than in a single phase.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1004864" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4697" }
    ]
  },
  {
    id: "cleeve-cloud-hillfort",
    name: "Cleeve Cloud Hillfort",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 51.927654,
    lon: -2.023367,
    approx: false,
    elevation: "On Cleeve Common, the highest point of the Cotswold escarpment, near Southam",
    summary: "A small multivallate hillfort on Cleeve Cloud, the highest point of the Cotswold scarp at over 300 m, occupying a sloping promontory whose natural western drop supplies one line of defence while concentric double ramparts — up to 9.1 m wide and 2.5 m high — guard the more vulnerable sides.",
    archaeology: "Cleeve Common carries a wealth of prehistoric earthworks beyond the fort itself, including possible earlier monuments, making this one of the richest single stretches of the Cotswold escarpment for visible archaeology — Nottingham Hill Camp and Belas Knap both lie within a few miles on the same ridge.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1002132" },
      { label: "Gloucestershire archaeology reassessment (PDF)", url: "https://glosarch.org.uk/wp-content/uploads/2023/11/Cleeve-Cloud-Hillfort-and-The-Ring-for-HE-final.pdf" }
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/11639/cleeve-cloud" }
    ]
  },
  {
    id: "painswick-beacon",
    name: "Painswick Beacon (Kimsbury Camp)",
    period: "Iron Age",
    dates: "c. 400–100 BC, with activity into the Roman period",
    lat: 51.807382,
    lon: -2.191405,
    approx: false,
    elevation: "Painswick Beacon, above Painswick, on the Cotswold escarpment south of Cheltenham",
    summary: "An impressively multivallate hillfort of about 3.2 hectares (8 acres), also known as Kimsbury Camp or Castle Godwyn, with up to three concentric banks and ditches defending its southern side — the most imposing rampart sequence of any hillfort in this part of the Cotswolds.",
    archaeology: "Pottery, coins and other finds recovered from the site span the Iron Age through to the 3rd century AD, showing activity continued well into the Roman period. The interior has been heavily altered since — much of it is now a golf course, and quarrying has removed some of the original earthworks — though the multiple ramparts remain clearly walkable.",
    interest: "Local tradition holds the fort was reused as an artillery outpost by Royalist forces during the 1643 siege of Gloucester in the Civil War — a reminder that a well-sited Iron Age earthwork can still be useful ground two thousand years after it was built.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kimsbury_hill_fort" },
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1004865" }
    ,
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/5227/painswick-beacon" }
    ]
  },
  {
    id: "birdlip-grave",
    name: "The Birdlip Grave",
    period: "Late Iron Age",
    dates: "c. 100–50 BC",
    lat: 51.834915,
    lon: -2.102849,
    approx: false,
    elevation: "Barrow Wake, on the scarp edge between Birdlip and Crickley Hill",
    summary: "A late Iron Age burial group found in 1879 by a quarryman digging for stone at Barrow Wake: three graves in a row, a high-status woman in her thirties buried centrally between two men, accompanied by an exceptional set of grave goods.",
    archaeology: "The woman was buried with a bronze bowl placed over her face, bronze and silver bracelets, a multi-part amber necklace, a silver-gilt brooch, four bronze rings, and — the find that gave the group its fame — an intricately engraved bronze mirror in the La Tène style, its back covered in 77 individual curvilinear patterns filled with cross-hatching, its handle inlaid with red glass enamel. All the finds are now in the Museum of Gloucester.",
    interest: "The wealth of the burial has led some to suggest the woman may have been a priestess or the wife of a local chieftain — grand enough that one popular but unproven theory even linked the site to Boudica. Whatever her identity, it's one of the richest known burials of the period anywhere in Britain, sitting on the same escarpment as Crickley Hill and Leckhampton, a reminder this ridge stayed important for thousands of years.",
    links: [
      { label: "Wikipedia (Birdlip Mirror)", url: "https://en.wikipedia.org/wiki/Birdlip_Mirror" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=7799" }
    ]
  },
  {
    id: "arthurs-stone-herefordshire",
    name: "Arthur's Stone",
    period: "Neolithic",
    dates: "c. 3700–2700 BC",
    lat: 52.08157,
    lon: -2.99536,
    approx: false,
    elevation: "On a ridge above the Golden Valley, between Dorstone and Bredwardine, Herefordshire",
    summary: "A Neolithic chambered tomb — really a dolmen, since only its stone skeleton survives — with nine upright stones supporting a capstone estimated at over 25 tonnes. A northern outlier of the Cotswold-Severn tomb group and one of five Neolithic tombs known in the immediate area, it once stood inside a long earthen mound reached by a right-angled entrance passage.",
    archaeology: "The tomb has never been formally excavated, so what's known comes largely by comparison with similar Cotswold-Severn sites nearby, which have produced incomplete skeletal remains, flint tools, arrowheads and pottery — suggesting Arthur's Stone served both burial and wider ritual purposes over generations.",
    interest: "Local legend holds the stones mark the spot where King Arthur fought a giant, who fell against one stone and left an indentation still pointed out today — a similar hero-legend pattern to Caer Caradoc's Caratacus story further north in this list.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arthur%27s_Stone,_Herefordshire" },
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/arthurs-stone/" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/99/arthurs-stone" }
    ]
  },
  {
    id: "four-stones-old-radnor",
    name: "The Four Stones",
    period: "Bronze Age",
    dates: "Late Neolithic – Early Bronze Age",
    lat: 52.23976,
    lon: -3.10435,
    approx: false,
    elevation: "In the Walton Basin, between Old Radnor and New Radnor, Powys",
    summary: "Four substantial monoliths, the tallest around 1.8 m, set in a rough square in the Walton Basin — one of the most densely settled parts of Neolithic and Bronze Age Britain. Faint cup marks survive on the south-western stone.",
    archaeology: "The Walton Basin around the circle contains an exceptional concentration of prehistoric monuments, including the remains of a vast timber palisaded enclosure of some 1,400 oak posts once standing up to 18 feet high — evidence this was a major ritual landscape, not an isolated monument.",
    interest: "Welsh folklore tells of a battle here in which four kings died, each stone marking a grave; a later tradition has the stones creeping down to Hindwell Pool at night to drink whenever they hear Old Radnor church bells.",
    links: [
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=349" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/106/four-stones" }
    ]
  },
  {
    id: "bache-hill-whimble-cairns",
    name: "Bache Hill & the Whimble Cairns",
    period: "Bronze Age",
    dates: "Bronze Age",
    lat: 52.25536,
    lon: -3.16481,
    approx: false,
    elevation: "Radnor Forest, above New Radnor, Powys",
    summary: "Six round barrows strung in a curving line from the summit of the Whimble, Radnor Forest's most distinctive conical peak, along the ridge to Bache Hill — most of them intervisible with at least one neighbour. Bache Hill's own summit cairn now carries a trig point.",
    archaeology: "The barrows sit on or just below the 2,000 ft contour, alongside several ring cairns nearby on Black Mixen — a dense enough concentration of Bronze Age burial monuments on these summits that the whole ridge reads as a deliberately visible funerary landscape.",
    interest: "A good comparison with the Clee Hills or Corndon Hill cairns further north in this list: another upland ridge in the Marches where a whole string of visible summit monuments, not just one, marks out Bronze Age burial ground.",
    links: [
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4247/bache-hill-and-the-whimble" },
      { label: "Radnor Forest walk guide (Heneb)", url: "https://heneb.org.uk/wp-content/uploads/2025/01/bachehill.pdf" }
    ]
  },
  {
    id: "pen-y-wyrlod",
    name: "Pen-y-Wyrlod Long Cairn",
    period: "Neolithic",
    dates: "c. 4200–3000 BC",
    lat: 52.05067,
    lon: -3.13177,
    approx: false,
    elevation: "In the Black Mountains foothills, near Arthur's Stone, Herefordshire/Powys border",
    summary: "An early Neolithic chambered long cairn, pear-shaped and about 18.5 m long, with a main chamber of four upright stones and a smaller second chamber toward its north-eastern end. Some researchers argue it's among the earliest Neolithic monuments built anywhere in the Black Mountains region.",
    archaeology: "First excavated in 1920–21, the site was rediscovered in 1972 when its owner began quarrying the mound for building stone — work stopped once human bone and the chambers were exposed, but not before more than half of the southern end had already been removed.",
    interest: "One of five Neolithic tombs known in the immediate area around Arthur's Stone (see the separate entry) — this stretch of the Golden Valley's edge was clearly a significant early Neolithic landscape, not a single isolated monument.",
    links: [
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4080" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/3453/pen-y-wyrlod" }
    ]
  },
  {
    id: "nesscliffe-hill-camp",
    name: "Nesscliffe Hill Camp",
    period: "Iron Age",
    dates: "From c. 500 BC, with Roman-period reuse",
    lat: 52.77189,
    lon: -2.91022,
    approx: false,
    elevation: "On a sandstone escarpment above the Severn and Vyrnwy valleys, near Shrewsbury",
    summary: "A small multivallate hillfort of about 2.8 hectares, built against the sheer sandstone cliffs at the north-western end of Nesscliffe Hill in two conjoined enclosures of apparently different dates. Small multivallate hillforts like this are nationally rare, with only around 100 known examples.",
    archaeology: "Stone-lined guard chambers still mark the entrance passageway. The first archaeological dig here in 40 years, in 2019, found nationally important evidence of Iron Age furnaces and ironworking tools, plus well-preserved Roman-period deposits showing the site stayed in use long after the Iron Age.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1020285" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/8360/nesscliffe-hill-camp" }
    ]
  },
  {
    id: "gaer-fawr-welshpool",
    name: "Gaer Fawr (Welshpool)",
    period: "Iron Age",
    dates: "Developed phase c. 400–150 BC",
    lat: 52.70778,
    lon: -3.1487,
    approx: false,
    elevation: "Above Guilsfield, overlooking the Severn valley near Welshpool, Powys",
    summary: "A large multivallate hillfort of about 5.8 hectares, hidden in Woodland Trust woodland on a hill north of Guilsfield. Its ramparts are exceptionally well preserved — up to 8 m high, two lines deep on the east and as many as five lines deep on the more vulnerable west side.",
    archaeology: "The fort grew in at least two phases: an earlier summit enclosure of about 2.7 ha, later extended westward onto a lower terrace to roughly double the interior. Two elaborate entrances at the north-east and south-west lead in, with a smaller third entrance to the west and a separate annexe to the south.",
    links: [
      { label: "Coflein", url: "https://coflein.gov.uk/en/site/306997/" },
      { label: "Woodland Trust", url: "https://www.woodlandtrust.org.uk/visiting-woods/woods/gaer-fawr-wood/" }
    ]
  },
  {
    id: "beacon-ring",
    name: "Beacon Ring",
    period: "Iron Age (with an earlier Bronze Age barrow)",
    dates: "Middle Iron Age, c. 400–300 BC",
    lat: 52.64453,
    lon: -3.08643,
    approx: false,
    elevation: "On the summit of Long Mountain (Cefn Digoll), near Welshpool, Powys",
    summary: "An Iron Age hillfort crowning the highest point of Long Mountain, with a Bronze Age round barrow already standing inside it when the fort was built — a similar pattern to Titterstone Clee, where a Bronze Age cairn predates the Iron Age fort built up around it. A popular stop on the Offa's Dyke Path today.",
    archaeology: "Excavations in 2017–19 produced a revised plan of the earthworks, examined the entrances, and used auger sampling to trace how the ramparts and ditches were built and later modified — confirming a middle Iron Age construction date, around 400–300 BC.",
    interest: "Its Welsh name, Caer Digoll, comes from the ridge itself (Cefn Digoll, 'unbroken ridge'); the English name is much younger — a beacon was last lit here in June 1887 for Queen Victoria's Golden Jubilee, continuing a tradition already shown on a 1663 estate map.",
    links: [
      { label: "Heneb project page", url: "https://heneb.org.uk/project/beacon-ring/" },
      { label: "Woodland Trust", url: "https://www.woodlandtrust.org.uk/visiting-woods/woods/beacon-ring/" }
    ]
  },
  {
    id: "castle-ring-old-radnor",
    name: "Castle Ring (Old Radnor)",
    period: "Iron Age (with a later medieval castle)",
    dates: "Iron Age; a small castle was built within it in the medieval period",
    lat: 52.26433,
    lon: -3.07565,
    approx: false,
    elevation: "Near Old Radnor, Powys",
    summary: "A roughly circular Iron Age hillfort about 100 m across, with a stone-and-earth rampart broadening on its eastern side and an entrance to the south-east — later reused as the site of a small medieval castle, whose builders deepened the original ditch to quarry stone for their own walls.",
    archaeology: "The inner ditch, originally dug simply to supply material for the Iron Age rampart, was deliberately re-cut and deepened in the medieval period — a rare case in this list of a later structure directly cannibalising an earlier one for building material, rather than just reusing the earthwork's footprint.",
    interest: "Offa's Dyke passes close by, near the foot of Burfa Bank — the same stretch of border already noted at the Burfa Camp entry a few miles south.",
    links: [
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=6023" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/5240/castle_ring_old_radnor.html" }
    ]
  },
  {
    id: "kinnerton-court-stones",
    name: "Kinnerton Court Stones",
    period: "Bronze Age",
    dates: "Bronze Age",
    lat: 52.25682,
    lon: -3.10624,
    approx: false,
    elevation: "Near Walton, in the Walton Basin, Powys",
    summary: "A pair of standing stones (Kinnerton Court Stone I and II) a few metres apart, within the same densely settled Walton Basin ritual landscape as the Four Stones circle nearby — this stretch of the Marches border was one of the most intensively used parts of prehistoric Britain.",
    archaeology: "Standing stones and burial mounds are scattered across the whole Walton Basin, alongside the remains of the vast Neolithic timber palisaded enclosure noted at the Four Stones entry — the wider context that makes two isolated-looking stones part of a much bigger picture.",
    links: [
      { label: "Megalithic Portal (Stone I)", url: "https://www.megalithic.co.uk/article.php?sid=6391" },
      { label: "The Modern Antiquarian (Stone I)", url: "https://www.themodernantiquarian.com/site.php/4069/kinnerton_court_stone_i.html" }
    ]
  },
  {
    id: "devils-ring-and-finger",
    name: "The Devil's Ring and Finger",
    period: "Neolithic (possibly Bronze Age)",
    dates: "Neolithic, possibly Bronze Age",
    lat: 52.9364,
    lon: -2.436,
    approx: false,
    elevation: "Near Mucklestone, on the Shropshire–Staffordshire border",
    summary: "Two leaning standing stones at a field boundary near Norton Forge Farm — one grooved, one pierced by a genuinely rare holed opening, only a handful of comparable holed stones being known anywhere in England. Probably Neolithic, though a Bronze Age date can't be ruled out.",
    archaeology: "Neither stone is thought to be in its original position; their leaning, off-alignment stance against the field wall suggests both have been moved at some point, most likely from a former stone alignment, circle or chambered tomb nearby whose full extent is now lost.",
    interest: "The holed stone is the real rarity here — most 'ring and finger' folk-names in Britain describe a similar pairing, but genuine prehistoric holed stones like this one are uncommon enough that each survivor matters individually to archaeologists studying the type.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1003495" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4985" }
    ]
  },
  {
    id: "caer-caradoc-chapel-lawn",
    name: "Caer Caradoc (Chapel Lawn)",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 52.37546,
    lon: -3.01517,
    approx: false,
    elevation: "On Garn Bank, above Chapel Lawn, near Clun",
    summary: "The smaller and lesser-known of Shropshire's two hillforts sharing the name Caer Caradoc — this one above Chapel Lawn near Clun, not the more famous fort near Church Stretton already in this list. A fine example of the same nationally rare type as Burrow Camp: a relatively small hillfort with multiple ramparts, a form concentrated mostly in the Marches.",
    archaeology: "Sits at the eastern end of Garn Bank's summit ridge, within a loop of the River Redlake, with several well-preserved ditches and at least one entrance still legible on the ground.",
    interest: "Like its larger namesake at Church Stretton, this hill is traditionally linked to Caratacus's last stand against Rome — a reminder that the Caratacus legend attached itself to more than one striking hilltop across the region, not just the best-known one.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caer_Caradoc_(Chapel_Lawn)" },
      { label: "Historic England", url: "https://ancientmonuments.uk/119257-caer-caradoc-a-small-multivallate-hillfort-clun" }
    ]
  },
  {
    id: "stiperstones-cairns",
    name: "The Stiperstones Cairns",
    period: "Bronze Age",
    dates: "Bronze Age",
    lat: 52.58019,
    lon: -2.93429,
    approx: false,
    elevation: "Along the Stiperstones ridge, near Manstone Rock",
    summary: "A group of round cairns and a rare tor cairn strung along the Stiperstones ridge, including one perched directly on top of a natural quartzite outcrop near Manstone Rock, Shropshire's second-highest point. Tor cairns are nationally rare, found only where suitable rocky summits exist on high moorland.",
    archaeology: "The cairns contribute directly to understanding Bronze Age settlement density and land use on this upland — a similar pattern to the barrow cemetery on neighbouring Corndon Hill, suggesting the whole Stiperstones/Corndon upland mattered for burial and ceremony well before it mattered for stone-axe production and mining.",
    interest: "See the Geology tab for the quartzite tors themselves; this entry is specifically about the Bronze Age monuments built on top of them, distinct from — though inseparable from — the geological story.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1007706" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/9457/stiperstones" }
    ]
  },
  {
    id: "hetty-peglers-tump",
    name: "Hetty Pegler's Tump (Uley Long Barrow)",
    period: "Neolithic",
    dates: "c. 3300–3200 BC",
    lat: 51.69783,
    lon: -2.30533,
    approx: false,
    elevation: "On Crawley Hill, above Uley, overlooking the Severn Vale",
    summary: "One of the best-known Cotswold-Severn long barrows, about 37 m long and up to 3 m high, its entrance marked by two standing stones capped with a lintel leading into a 10 m stone passage with two pairs of side chambers and an end chamber. Named after Hester ('Hetty') Pegler, a 17th-century owner of the field.",
    archaeology: "Excavated in 1821 and again in 1854, the barrow produced human skeletons and wild boar jawbones in the first dig, then nine human skulls along with animal teeth and tusks in the second — among the richer excavated assemblages of any Cotswold-Severn tomb.",
    interest: "At roughly 15 miles from Shurdington, this is the furthest-flung entry in the Gloucestershire cluster — but among the most significant long barrows in the county, and worth the extra distance if you're covering the Cotswold long-barrow group properly.",
    links: [
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/uley-long-barrow-hetty-peglers-tump/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Uley_Long_Barrow" }
    ]
  },
  {
    id: "longstone-minchinhampton",
    name: "The Longstone of Minchinhampton",
    period: "Neolithic – Bronze Age",
    dates: "Late Neolithic – Bronze Age",
    lat: 51.69721,
    lon: -2.16641,
    approx: false,
    elevation: "On Minchinhampton Common, near Nailsworth",
    summary: "A single standing stone of oolitic limestone up to 2.1 m high, locally nicknamed the Holey Stone for the large and small holes perforating it — most likely natural weathering rather than deliberate carving, though nobody has proven it either way.",
    archaeology: "As with most standing stones, no firm excavated date exists — the type ranges from the late Neolithic through the Bronze Age across the handful of comparable examples that have actually been investigated.",
    interest: "Tradition held that passing a sick child through the stone's holes could cure whooping cough, measles or rickets; another legend has the stone dancing around the field at midnight. Just over a mile from the Bulwarks earthwork on the same Common.",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Longstone_of_Minchinhampton" },
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1002130" }
    ]
  },
  {
    id: "nympsfield-long-barrow",
    name: "Nympsfield Long Barrow",
    period: "Neolithic",
    dates: "c. 2800 BC",
    lat: 51.71047,
    lon: -2.29673,
    approx: false,
    elevation: "Near Nympsfield, on the Cotswold escarpment, half a mile from Hetty Pegler's Tump",
    summary: "An oval Neolithic burial mound about 30 m long, one of the earliest local examples of a barrow built with separate internal chambers, its entrance flanked by two standing stones leading into a gallery with two side chambers and an end chamber.",
    archaeology: "Excavations in 1862, 1937 and 1974 recovered the remains of at least thirteen people, including a child buried in a stone cist, plus Neolithic pottery — some of it found blocking the entrance, suggesting the chamber was deliberately closed before the end of the Neolithic. Finds are held at Gloucester City Museum.",
    interest: "Close enough to Hetty Pegler's Tump to visit both in one walk — a rare chance to compare two Cotswold-Severn tombs excavated to very different standards, a century apart, within sight of each other.",
    links: [
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/nympsfield-long-barrow/history/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nympsfield_Long_Barrow" }
    ]
  },
  {
    id: "notgrove-long-barrow",
    name: "Notgrove Long Barrow",
    period: "Neolithic",
    dates: "c. 3800–3500 BC",
    lat: 51.88878,
    lon: -1.86049,
    approx: false,
    elevation: "Near Notgrove, in the northern Cotswolds",
    summary: "A well-preserved Cotswold-Severn long barrow, 50 m long and tapering to a point, retained by a low stone wall, with a domed inner chamber and a forecourt flanked by projecting 'horns' probably used for ritual observance rather than burial itself.",
    archaeology: "Excavated in 1881 and again in 1934–35, the dig found a stone cist with a male skeleton inside the domed chamber and traced an entrance passage from the forecourt. Finds are held at Cheltenham Museum. Between about 3800 and 3500 BC, almost every community across the Cotswold-Severn area built a monument like this one.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1009157" },
      { label: "Excavation report (Cambridge Core, PDF)", url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/93C4371C69B0E5B73DD652EB295A8946/S0261340900015393a.pdf/viinotgrove_long_barrow_gloucestershire.pdf" }
    ]
  },
  {
    id: "windmill-tump",
    name: "Windmill Tump (Rodmarton Long Barrow)",
    period: "Neolithic",
    dates: "c. 4000–3500 BC",
    lat: 51.67391,
    lon: -2.0969,
    approx: false,
    elevation: "West of Rodmarton village",
    summary: "A trapezoidal chambered long barrow, 57 m by 27 m, with a forecourt at its eastern end flanked by two projections and a deliberate false entrance — two standing stones and a lintel that lead nowhere, blocked by a slab — while the real burial chambers open from the sides, the same deceptive design seen at Belas Knap further north.",
    archaeology: "Partial excavations in 1863, 1939 and 1987 found thirteen complete skeletons and fragments of several more across two internal chambers, plus animal bones. Roman pottery and coins of Claudius Gothicus (AD 268–70) show the site was still being visited, or reused, well over three thousand years after it was built.",
    links: [
      { label: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/windmill-tump-long-barrow-rodmarton/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Windmill_Tump" }
    ]
  },
  {
    id: "west-tump",
    name: "West Tump",
    period: "Neolithic",
    dates: "Neolithic",
    lat: 51.81775,
    lon: -2.12768,
    approx: false,
    elevation: "Near Cranham and Birdlip, on a west-facing hillside",
    summary: "A Cotswold-Severn long barrow about 48 m long and up to 3 m high, its south-eastern end curving slightly inward to form the characteristic 'horns' seen at several other barrows in this list — a design feature repeated widely enough across the group to suggest a shared, deliberate architectural tradition rather than local variation.",
    archaeology: "Discovered and excavated by G. B. Witts in 1880, the barrow survives well enough to still hold archaeological and environmental evidence of both the monument and the landscape it was built into.",
    interest: "Only a couple of miles from Crickley Hill and the Birdlip Grave, already in this list — this small stretch of the escarpment edge around Birdlip carries an unusually dense run of prehistoric sites for such a short walk.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1016078" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4709" }
    ]
  },
  {
    id: "randwick-long-barrow",
    name: "Randwick Long Barrow",
    period: "Neolithic",
    dates: "Roughly 4,500–5,400 years old",
    lat: 51.76,
    lon: -2.25359,
    approx: false,
    elevation: "On a hilltop above Randwick, near Stroud, within Standish Wood",
    summary: "A substantial long barrow mound, about 55 m long and still standing 4 m high in places, with the remains of a horned entrance and forecourt at its north-eastern end leading to a single stone-lined chamber. Set deep in atmospheric Cotswold woodland, surrounded by old quarry pits and scrapes from centuries of stone-getting.",
    archaeology: "An 1883 excavation found the forecourt opening as expected to the north-east, giving access to a simple one-cell chamber containing disarticulated human remains — a much simpler internal plan than the multi-chambered barrows at Nympsfield or Hetty Pegler's Tump nearby.",
    interest: "A short walk further into the woods turns up more round barrows and a cross-dyke — worth the wander if the long barrow alone isn't enough.",
    links: [
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4699" },
      { label: "The Modern Antiquarian", url: "https://www.themodernantiquarian.com/site/4981/randwick_long_barrow.html" }
    ]
  },
  {
    id: "avening-burial-chambers",
    name: "Avening Burial Chambers & the Tinglestone",
    period: "Neolithic",
    dates: "Neolithic",
    lat: 51.68912,
    lon: -2.17072,
    approx: false,
    elevation: "In and around the village of Avening, near Nailsworth",
    summary: "Two related but separate Neolithic monuments in the same village: a set of burial chambers, largely collapsed and now overgrown in a private garden in Lower Avening, and — a short distance away — the Tinglestone, a standing stone atop the wrecked remains of a second chambered long barrow known as Norn's Tump.",
    archaeology: "The Tinglestone itself is a substantial slab of oolitic limestone, about four feet wide and worn through with holes; the barrow it once stood over was largely destroyed by amateur digging in the early 19th century, a fate several other Cotswold long barrows in this list only narrowly avoided.",
    interest: "A useful cautionary example alongside Whetstones in Shropshire: two more Neolithic monuments substantially lost to poorly-recorded 19th-century interference rather than to modern development.",
    links: [
      { label: "The Modern Antiquarian (Avening)", url: "https://www.themodernantiquarian.com/site/4961/avening-burial-chambers" },
      { label: "The Modern Antiquarian (Tinglestone)", url: "https://www.themodernantiquarian.com/site/4705/tinglestone" }
    ]
  },
  {
    id: "haresfield-camp",
    name: "Haresfield Camp",
    period: "Late Bronze Age / Iron Age (with Romano-British reuse)",
    dates: "8th–5th century BC hillfort; Romano-British settlement later",
    lat: 51.77892,
    lon: -2.24934,
    approx: false,
    elevation: "On Haresfield Hill and Ring Hill, above Haresfield, near Stroud",
    summary: "A slight univallate hillfort with an unusually large double rampart, spanning the summits of Ring Hill and Haresfield Hill, alongside a Romano-British settlement, a cross-dyke, and a round barrow — Haresfield Beacon — capped today by an unusual stone-built Ordnance Survey trig point.",
    archaeology: "Dating to the late Bronze Age or early Iron Age (8th–5th centuries BC), most sites of this univallate type were used for only 150–200 years before abandonment or rebuilding — interpreted variously as stock enclosures, redistribution centres, refuges or permanent settlements. Roman-period finds — a quern, pottery, animal bones — were recovered here in 1837.",
    interest: "The Beacon itself, a genuine round barrow long predating the fort around it, is a good example of the same pattern seen at British Camp and Beacon Ring elsewhere in this list: an older burial monument absorbed into a later defended site rather than being cleared away.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1004861" },
      { label: "Megalithic Portal", url: "https://www.megalithic.co.uk/article.php?sid=4694" }
    ]
  },
  {
    id: "norbury-camp-coberley",
    name: "Norbury Camp (Coberley)",
    period: "Iron Age",
    dates: "Iron Age",
    lat: 51.83221,
    lon: -2.01451,
    approx: false,
    elevation: "Near Coberley, in the central Cotswolds",
    summary: "A slight univallate hillfort with a sub-oval interior of about 3.25 hectares, defended by a single bank-and-ditch rampart that survives best on its southern side, where the bank still stands up to 1.4 m high behind a ditch 7.5 m wide.",
    archaeology: "As a 'slight univallate' type, it's considered important evidence for the transition between late Bronze Age and Iron Age communities in the region, even though ploughing has worn away the rampart on the north-east and south-west sides.",
    interest: "Not to be confused with the other Norbury Camps scattered across the Cotswolds — there's at least one more, near Farmington — a reminder that generic hillfort names like 'Norbury' or 'Castle Ring' recur across the region and aren't unique identifiers on their own.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1018167" }
    ]
  },
  {
    id: "conderton-camp",
    name: "Conderton Camp",
    period: "Iron Age",
    dates: "Late 6th – 4th century BC",
    lat: 52.05968,
    lon: -2.06273,
    approx: false,
    elevation: "On Bredon Hill, overlooking the River Avon, Worcestershire",
    summary: "A small promontory hillfort on the south-west shoulder of Bredon Hill, one of three hillforts on this single hill, built between the late 6th and 4th centuries BC and occupied through to the end of the Iron Age — likely starting as a communal meeting and market site before becoming a fortified, permanent settlement.",
    archaeology: "Excavated by Nicholas Thomas in 1958–59, though the full report wasn't published until 2005, the dig recovered prehistoric and Roman artefacts from trenches across the site, adding detail to the wider picture of Bredon Hill's three interlinked hillforts.",
    interest: "Bredon Hill's other two hillforts make this a good area to explore multiple related Iron Age sites on one hill, similar to Brown Clee's three forts already in this list.",
    links: [
      { label: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1005327" },
      { label: "The Modern Antiquarian", url: "https://themodernantiquarian.com/site/5141/conderton_camp.html" }
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
