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
    linkedSiteIds: ["wrekin"]
  },
  {
    id: "stiperstones",
    name: "The Stiperstones",
    periodTag: "Ordovician, quartzite",
    summary: "The jagged tors of the Stiperstones ridge are Stiperstones Quartzite — an unusually pure, quartz-rich rock, distinguished from the older Cambrian Wrekin Quartzite by both its age and its purity. It likely formed in a shallow-water, perhaps beach, environment, though some geologists argue for a deeper-water origin via underwater slumping triggered by fault movement — that debate is still active research.",
    detail: "The quartzite contains conglomerate bands with rounded quartz pebbles up to a centimetre across, along with fragments of purple Longmyndian sandstone picked up during deposition — a physical link back to the older rocks of the Long Mynd next door. The frost-shattered tors, including the Devil's Chair, are a much more recent Ice Age feature carved into this ancient rock.",
    linkedSiteIds: ["mitchells-fold", "hoarstones", "whetstones"]
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
    linkedSiteIds: ["titterstone-clee"]
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
