var thinky = require('../db/config');
var r = thinky.r;

var Bird = require('../models/bird');

var birds = [
  {
    "sciName":"Abeillia abeillei",
    "commonName":"Emerald-chinned Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aburria aburri",
    "commonName":"Wattled Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Acanthidops bairdi",
    "commonName":"Peg-billed Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acanthis flammea",
    "commonName":"Common Redpoll",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acanthis hornemanni",
    "commonName":"Hoary Redpoll",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Accipiter bicolor",
    "commonName":"Bicolored Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter collaris",
    "commonName":"Semicollared Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter cooperii",
    "commonName":"Cooper's Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter gentilis",
    "commonName":"Northern Goshawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter gundlachi",
    "commonName":"Gundlach's Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter poliogaster",
    "commonName":"Gray-bellied Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter rufitorques",
    "commonName":"Fiji Goshawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter striatus",
    "commonName":"Sharp-shinned Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Accipiter superciliosus",
    "commonName":"Tiny Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Acridotheres cristatellus",
    "commonName":"Crested Myna",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acridotheres fuscus",
    "commonName":"Jungle Myna",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acridotheres grandis",
    "commonName":"Great Myna",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acridotheres tristis",
    "commonName":"Common Myna",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrobatornis fonsecai",
    "commonName":"Pink-legged Graveteiro",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus aequinoctialis",
    "commonName":"Kiritimati Reed-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus atyphus",
    "commonName":"Tuamotu Reed-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus caffer",
    "commonName":"Tahiti Reed-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus familiaris",
    "commonName":"Millerbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus kerearako",
    "commonName":"Cook Islands Reed-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus schoenobaenus",
    "commonName":"Sedge Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acrocephalus taiti",
    "commonName":"Henderson Island Reed-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Acropternis orthonyx",
    "commonName":"Ocellated Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Actitis hypoleucos",
    "commonName":"Common Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Actitis macularius",
    "commonName":"Spotted Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Adelomyia melanogenys",
    "commonName":"Speckled Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aechmophorus clarkii",
    "commonName":"Clark's Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Aechmophorus occidentalis",
    "commonName":"Western Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Aegolius acadicus",
    "commonName":"Northern Saw-whet Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Aegolius funereus",
    "commonName":"Boreal Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Aegolius harrisii",
    "commonName":"Buff-fronted Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Aegolius ridgwayi",
    "commonName":"Unspotted Saw-whet Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Aerodramus bartschi",
    "commonName":"Mariana Swiftlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aerodramus leucophaeus",
    "commonName":"Polynesian Swiftlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aerodramus sawtelli",
    "commonName":"Atiu Swiftlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aerodramus spodiopygius",
    "commonName":"White-rumped Swiftlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aeronautes andecolus",
    "commonName":"Andean Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aeronautes montivagus",
    "commonName":"White-tipped Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aeronautes saxatalis",
    "commonName":"White-throated Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aethia cristatella",
    "commonName":"Crested Auklet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Aethia psittacula",
    "commonName":"Parakeet Auklet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Aethia pusilla",
    "commonName":"Least Auklet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Aethia pygmaea",
    "commonName":"Whiskered Auklet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Agamia agami",
    "commonName":"Agami Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Agapornis personatus",
    "commonName":"Yellow-collared Lovebird",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Agapornis roseicollis",
    "commonName":"Rosy-faced Lovebird",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Agelaioides badius",
    "commonName":"Bay-winged Cowbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelaius assimilis",
    "commonName":"Red-shouldered Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelaius humeralis",
    "commonName":"Tawny-shouldered Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelaius phoeniceus",
    "commonName":"Red-winged Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelaius tricolor",
    "commonName":"Tricolored Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelaius xanthomus",
    "commonName":"Yellow-shouldered Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelasticus cyanopus",
    "commonName":"Unicolored Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelasticus thilius",
    "commonName":"Yellow-winged Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agelasticus xanthophthalmus",
    "commonName":"Pale-eyed Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aglaeactis castelnaudii",
    "commonName":"White-tufted Sunbeam",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aglaeactis cupripennis",
    "commonName":"Shining Sunbeam",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aglaeactis pamela",
    "commonName":"Black-hooded Sunbeam",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aglaiocercus berlepschi",
    "commonName":"Venezuelan Sylph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aglaiocercus coelestis",
    "commonName":"Violet-tailed Sylph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aglaiocercus kingi",
    "commonName":"Long-tailed Sylph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Agriornis albicauda",
    "commonName":"White-tailed Shrike-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agriornis lividus",
    "commonName":"Great Shrike-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agriornis micropterus",
    "commonName":"Gray-bellied Shrike-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agriornis montanus",
    "commonName":"Black-billed Shrike-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Agriornis murinus",
    "commonName":"Lesser Shrike-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aimophila notosticta",
    "commonName":"Oaxaca Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aimophila rufescens",
    "commonName":"Rusty Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aimophila ruficeps",
    "commonName":"Rufous-crowned Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aix galericulata",
    "commonName":"Mandarin Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aix sponsa",
    "commonName":"Wood Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Alauda arvensis",
    "commonName":"Sky Lark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Alca torda",
    "commonName":"Razorbill",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Alectoris chukar",
    "commonName":"Chukar",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Alectrurus risora",
    "commonName":"Strange-tailed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Alectrurus tricolor",
    "commonName":"Cock-tailed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Alipiopsitta xanthops",
    "commonName":"Yellow-faced Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Alle alle",
    "commonName":"Dovekie",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Allenia fusca",
    "commonName":"Scaly-breasted Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Alopochelidon fucata",
    "commonName":"Tawny-headed Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Alopochen aegyptiaca",
    "commonName":"Egyptian Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Amandava amandava",
    "commonName":"Red Avadavat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Amaurolimnas concolor",
    "commonName":"Uniform Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Amaurospiza concolor",
    "commonName":"Blue Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Amaurospiza moesta",
    "commonName":"Blackish-blue Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Amazilia amabilis",
    "commonName":"Blue-chested Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia amazilia",
    "commonName":"Amazilia Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia beryllina",
    "commonName":"Berylline Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia boucardi",
    "commonName":"Mangrove Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia brevirostris",
    "commonName":"White-chested Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia candida",
    "commonName":"White-bellied Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia castaneiventris",
    "commonName":"Chestnut-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia chionogaster",
    "commonName":"White-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia cyanifrons",
    "commonName":"Indigo-capped Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia cyanocephala",
    "commonName":"Azure-crowned Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia cyanura",
    "commonName":"Blue-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia decora",
    "commonName":"Charming Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia edward",
    "commonName":"Snowy-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia fimbriata",
    "commonName":"Glittering-throated Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia franciae",
    "commonName":"Andean Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia lactea",
    "commonName":"Sapphire-spangled Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia leucogaster",
    "commonName":"Plain-bellied Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia luciae",
    "commonName":"Honduran Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia rosenbergi",
    "commonName":"Purple-chested Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia rutila",
    "commonName":"Cinnamon Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia saucerrottei",
    "commonName":"Steely-vented Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia tobaci",
    "commonName":"Copper-rumped Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia tzacatl",
    "commonName":"Rufous-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia versicolor",
    "commonName":"Versicolored Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia violiceps",
    "commonName":"Violet-crowned Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia viridicauda",
    "commonName":"Green-and-white Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia viridifrons",
    "commonName":"Green-fronted Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia viridigaster",
    "commonName":"Green-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazilia yucatanensis",
    "commonName":"Buff-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Amazona aestiva",
    "commonName":"Turquoise-fronted Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona agilis",
    "commonName":"Black-billed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona albifrons",
    "commonName":"White-fronted Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona amazonica",
    "commonName":"Orange-winged Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona arausiaca",
    "commonName":"Red-necked Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona auropalliata",
    "commonName":"Yellow-naped Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona autumnalis",
    "commonName":"Red-lored Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona barbadensis",
    "commonName":"Yellow-shouldered Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona brasiliensis",
    "commonName":"Red-tailed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona collaria",
    "commonName":"Yellow-billed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona dufresniana",
    "commonName":"Blue-cheeked Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona farinosa",
    "commonName":"Mealy Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona festiva",
    "commonName":"Festive Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona finschi",
    "commonName":"Lilac-crowned Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona guildingii",
    "commonName":"St. Vincent Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona imperialis",
    "commonName":"Imperial Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona kawalli",
    "commonName":"Kawall's Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona leucocephala",
    "commonName":"Cuban Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona mercenarius",
    "commonName":"Scaly-naped Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona ochrocephala",
    "commonName":"Yellow-crowned Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona oratrix",
    "commonName":"Yellow-headed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona pretrei",
    "commonName":"Red-spectacled Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona rhodocorytha",
    "commonName":"Red-browed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona tucumana",
    "commonName":"Tucuman Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona ventralis",
    "commonName":"Hispaniolan Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona versicolor",
    "commonName":"St. Lucia Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona vinacea",
    "commonName":"Vinaceous-breasted Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona viridigenalis",
    "commonName":"Red-crowned Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona vittata",
    "commonName":"Puerto Rican Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazona xantholora",
    "commonName":"Yellow-lored Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Amazonetta brasiliensis",
    "commonName":"Brazilian Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Amblycercus holosericeus",
    "commonName":"Yellow-billed Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Amblyramphus holosericeus",
    "commonName":"Scarlet-headed Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus aurifrons",
    "commonName":"Yellow-browed Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus bairdii",
    "commonName":"Baird's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus caudacutus",
    "commonName":"Saltmarsh Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus henslowii",
    "commonName":"Henslow's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus humeralis",
    "commonName":"Grassland Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus leconteii",
    "commonName":"Le Conte's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus maritimus",
    "commonName":"Seaside Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus nelsoni",
    "commonName":"Nelson's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ammodramus savannarum",
    "commonName":"Grasshopper Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ampelioides tschudii",
    "commonName":"Scaled Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ampelion rubrocristatus",
    "commonName":"Red-crested Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ampelion rufaxilla",
    "commonName":"Chestnut-crested Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Amphispiza bilineata",
    "commonName":"Black-throated Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Amphispiza quinquestriata",
    "commonName":"Five-striped Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabacerthia amaurotis",
    "commonName":"White-browed Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabacerthia lichtensteini",
    "commonName":"Ochre-breasted Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabacerthia ruficaudata",
    "commonName":"Rufous-tailed Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabacerthia striaticollis",
    "commonName":"Montane Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabacerthia variegaticeps",
    "commonName":"Scaly-throated Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabazenops dorsalis",
    "commonName":"Dusky-cheeked Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anabazenops fuscus",
    "commonName":"White-collared Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anairetes alpinus",
    "commonName":"Ash-breasted Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anairetes fernandezianus",
    "commonName":"Juan Fernandez Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anairetes flavirostris",
    "commonName":"Yellow-billed Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anairetes nigrocristatus",
    "commonName":"Black-crested Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anairetes parulus",
    "commonName":"Tufted Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anairetes reguloides",
    "commonName":"Pied-crested Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anas acuta",
    "commonName":"Northern Pintail",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas americana",
    "commonName":"American Wigeon",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas andium",
    "commonName":"Andean Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas bahamensis",
    "commonName":"White-cheeked Pintail",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas clypeata",
    "commonName":"Northern Shoveler",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas crecca",
    "commonName":"Green-winged Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas cyanoptera",
    "commonName":"Cinnamon Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas discors",
    "commonName":"Blue-winged Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas falcata",
    "commonName":"Falcated Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas flavirostris",
    "commonName":"Yellow-billed Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas formosa",
    "commonName":"Baikal Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas fulvigula",
    "commonName":"Mottled Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas georgica",
    "commonName":"Yellow-billed Pintail",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas laysanensis",
    "commonName":"Laysan Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas penelope",
    "commonName":"Eurasian Wigeon",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas platalea",
    "commonName":"Red Shoveler",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas platyrhynchos",
    "commonName":"Mallard",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas puna",
    "commonName":"Puna Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas querquedula",
    "commonName":"Garganey",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas rubripes",
    "commonName":"American Black Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas sibilatrix",
    "commonName":"Chiloe Wigeon",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas strepera",
    "commonName":"Gadwall",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas superciliosa",
    "commonName":"Pacific Black Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas versicolor",
    "commonName":"Silver Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas wyvilliana",
    "commonName":"Hawaiian Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anas zonorhyncha",
    "commonName":"Eastern Spot-billed Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Ancistrops strigilatus",
    "commonName":"Chestnut-winged Hookbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Andigena cucullata",
    "commonName":"Hooded Mountain-Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Andigena hypoglauca",
    "commonName":"Gray-breasted Mountain-Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Andigena laminirostris",
    "commonName":"Plate-billed Mountain-Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Andigena nigrirostris",
    "commonName":"Black-billed Mountain-Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Androdon aequatorialis",
    "commonName":"Tooth-billed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anhima cornuta",
    "commonName":"Horned Screamer",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anhinga anhinga",
    "commonName":"Anhinga",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Anhinga rufa",
    "commonName":"African Darter",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Anisognathus igniventris",
    "commonName":"Scarlet-bellied Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anisognathus lacrymosus",
    "commonName":"Lacrimose Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anisognathus melanogenys",
    "commonName":"Black-cheeked Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anisognathus notabilis",
    "commonName":"Black-chinned Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anisognathus somptuosus",
    "commonName":"Blue-winged Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anodorhynchus hyacinthinus",
    "commonName":"Hyacinth Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Anodorhynchus leari",
    "commonName":"Indigo Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Anopetia gounellei",
    "commonName":"Broad-tipped Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anous minutus",
    "commonName":"Black Noddy",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Anous stolidus",
    "commonName":"Brown Noddy",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Anser albifrons",
    "commonName":"Greater White-fronted Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anser anser",
    "commonName":"Graylag Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anser brachyrhynchus",
    "commonName":"Pink-footed Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anser erythropus",
    "commonName":"Lesser White-fronted Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anser fabalis",
    "commonName":"Taiga Bean-Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anser serrirostris",
    "commonName":"Tundra Bean-Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Anthocephala floriceps",
    "commonName":"Blossomcrown",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax dominicus",
    "commonName":"Antillean Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax mango",
    "commonName":"Jamaican Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax nigricollis",
    "commonName":"Black-throated Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax prevostii",
    "commonName":"Green-breasted Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax veraguensis",
    "commonName":"Veraguan Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax viridigula",
    "commonName":"Green-throated Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthracothorax viridis",
    "commonName":"Green Mango",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Anthus antarcticus",
    "commonName":"South Georgia Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus bogotensis",
    "commonName":"Paramo Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus cervinus",
    "commonName":"Red-throated Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus chacoensis",
    "commonName":"Pampas Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus correndera",
    "commonName":"Correndera Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus furcatus",
    "commonName":"Short-billed Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus gustavi",
    "commonName":"Pechora Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus hellmayri",
    "commonName":"Hellmayr's Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus hodgsoni",
    "commonName":"Olive-backed Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus lutescens",
    "commonName":"Yellowish Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus nattereri",
    "commonName":"Ochre-breasted Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus novaeseelandiae",
    "commonName":"Australasian Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus pratensis",
    "commonName":"Meadow Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus rubescens",
    "commonName":"American Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anthus spragueii",
    "commonName":"Sprague's Pipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Antilophia galeata",
    "commonName":"Helmeted Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Antrostomus arizonae",
    "commonName":"Mexican Whip-poor-will",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus badius",
    "commonName":"Yucatan Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus carolinensis",
    "commonName":"Chuck-will's-widow",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus cubanensis",
    "commonName":"Greater Antillean Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus noctitherus",
    "commonName":"Puerto Rican Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus ridgwayi",
    "commonName":"Buff-collared Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus rufus",
    "commonName":"Rufous Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus salvini",
    "commonName":"Tawny-collared Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus saturatus",
    "commonName":"Dusky Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus sericocaudatus",
    "commonName":"Silky-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Antrostomus vociferus",
    "commonName":"Eastern Whip-poor-will",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Anumbius annumbi",
    "commonName":"Firewood-gatherer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Anurolimnas castaneiceps",
    "commonName":"Chestnut-headed Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Anurolimnas fasciatus",
    "commonName":"Black-banded Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Anurolimnas viridis",
    "commonName":"Russet-crowned Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aphanotriccus audax",
    "commonName":"Black-billed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphanotriccus capitalis",
    "commonName":"Tawny-chested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphantochroa cirrochloris",
    "commonName":"Sombre Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aphelocoma californica",
    "commonName":"Western Scrub-Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphelocoma coerulescens",
    "commonName":"Florida Scrub-Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphelocoma insularis",
    "commonName":"Island Scrub-Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphelocoma ultramarina",
    "commonName":"Transvolcanic Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphelocoma unicolor",
    "commonName":"Unicolored Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphelocoma wollweberi",
    "commonName":"Mexican Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphrastura spinicauda",
    "commonName":"Thorn-tailed Rayadito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aphrodroma brevirostris",
    "commonName":"Kerguelen Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Aplonis atrifusca",
    "commonName":"Samoan Starling",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aplonis cinerascens",
    "commonName":"Rarotonga Starling",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aplonis tabuensis",
    "commonName":"Polynesian Starling",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Aptenodytes forsteri",
    "commonName":"Emperor Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Aptenodytes patagonicus",
    "commonName":"King Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Apus pacificus",
    "commonName":"Pacific Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aquila chrysaetos",
    "commonName":"Golden Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Ara ambiguus",
    "commonName":"Great Green Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara ararauna",
    "commonName":"Blue-and-yellow Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara chloropterus",
    "commonName":"Red-and-green Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara glaucogularis",
    "commonName":"Blue-throated Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara macao",
    "commonName":"Scarlet Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara militaris",
    "commonName":"Military Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara rubrogenys",
    "commonName":"Red-fronted Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ara severus",
    "commonName":"Chestnut-fronted Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aramides axillaris",
    "commonName":"Rufous-necked Wood-Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aramides cajaneus",
    "commonName":"Gray-necked Wood-Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aramides calopterus",
    "commonName":"Red-winged Wood-Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aramides saracura",
    "commonName":"Slaty-breasted Wood-Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aramides wolfi",
    "commonName":"Brown Wood-Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aramides ypecaha",
    "commonName":"Giant Wood-Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aramus guarauna",
    "commonName":"Limpkin",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Aratinga acuticaudata",
    "commonName":"Blue-crowned Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga aurea",
    "commonName":"Peach-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga auricapillus",
    "commonName":"Golden-capped Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga cactorum",
    "commonName":"Cactus Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga canicularis",
    "commonName":"Orange-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga chloroptera",
    "commonName":"Hispaniolan Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga erythrogenys",
    "commonName":"Red-masked Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga euops",
    "commonName":"Cuban Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga finschi",
    "commonName":"Crimson-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga holochlora",
    "commonName":"Green Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga jandaya",
    "commonName":"Jandaya Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga leucophthalma",
    "commonName":"White-eyed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga mitrata",
    "commonName":"Mitred Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga nana",
    "commonName":"Olive-throated Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga pertinax",
    "commonName":"Brown-throated Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga solstitialis",
    "commonName":"Sun Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga strenua",
    "commonName":"Pacific Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga wagleri",
    "commonName":"Scarlet-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Aratinga weddellii",
    "commonName":"Dusky-headed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Archilochus alexandri",
    "commonName":"Black-chinned Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Archilochus colubris",
    "commonName":"Ruby-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Ardea alba",
    "commonName":"Great Egret",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ardea cinerea",
    "commonName":"Gray Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ardea cocoi",
    "commonName":"Cocoi Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ardea herodias",
    "commonName":"Great Blue Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ardea purpurea",
    "commonName":"Purple Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Arenaria interpres",
    "commonName":"Ruddy Turnstone",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Arenaria melanocephala",
    "commonName":"Black Turnstone",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Arremon abeillei",
    "commonName":"Black-capped Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon assimilis",
    "commonName":"Gray-browed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon atricapillus",
    "commonName":"Black-headed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon aurantiirostris",
    "commonName":"Orange-billed Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon basilicus",
    "commonName":"Sierra Nevada Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon brunneinucha",
    "commonName":"Chestnut-capped Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon castaneiceps",
    "commonName":"Olive Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon costaricensis",
    "commonName":"Costa Rican Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon crassirostris",
    "commonName":"Sooty-faced Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon flavirostris",
    "commonName":"Saffron-billed Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon franciscanus",
    "commonName":"Sao Francisco Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon perijanus",
    "commonName":"Perija Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon phaeopleurus",
    "commonName":"Caracas Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon phygas",
    "commonName":"Paria Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon schlegeli",
    "commonName":"Golden-winged Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon semitorquatus",
    "commonName":"Half-collared Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon taciturnus",
    "commonName":"Pectoral Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon torquatus",
    "commonName":"White-browed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremon virenticeps",
    "commonName":"Green-striped Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremonops chloronotus",
    "commonName":"Green-backed Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremonops conirostris",
    "commonName":"Black-striped Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremonops rufivirgatus",
    "commonName":"Olive Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arremonops tocuyensis",
    "commonName":"Tocuyo Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Artamus mentalis",
    "commonName":"Fiji Woodswallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Artemisiospiza belli",
    "commonName":"Bell's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Artemisiospiza nevadensis",
    "commonName":"Sagebrush Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Arundinicola leucocephala",
    "commonName":"White-headed Marsh Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asio flammeus",
    "commonName":"Short-eared Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Asio otus",
    "commonName":"Long-eared Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Asio stygius",
    "commonName":"Stygian Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Aspatha gularis",
    "commonName":"Blue-throated Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Asthenes anthoides",
    "commonName":"Austral Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes baeri",
    "commonName":"Short-billed Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes berlepschi",
    "commonName":"Berlepsch's Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes coryi",
    "commonName":"Ochre-browed Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes dorbignyi",
    "commonName":"Creamy-breasted Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes flammulata",
    "commonName":"Many-striped Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes fuliginosa",
    "commonName":"White-chinned Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes griseomurina",
    "commonName":"Mouse-colored Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes harterti",
    "commonName":"Black-throated Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes helleri",
    "commonName":"Puna Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes heterura",
    "commonName":"Maquis Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes hudsoni",
    "commonName":"Hudson's Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes humilis",
    "commonName":"Streak-throated Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes luizae",
    "commonName":"Cipo Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes maculicauda",
    "commonName":"Scribble-tailed Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes modesta",
    "commonName":"Cordilleran Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes moreirae",
    "commonName":"Itatiaia Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes ottonis",
    "commonName":"Rusty-fronted Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes palpebralis",
    "commonName":"Eye-ringed Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes pudibunda",
    "commonName":"Canyon Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes pyrrholeuca",
    "commonName":"Sharp-billed Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes sclateri",
    "commonName":"Puna Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes urubambensis",
    "commonName":"Line-fronted Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes vilcabambae",
    "commonName":"Vilcabamba Thistletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes virgata",
    "commonName":"Junin Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Asthenes wyatti",
    "commonName":"Streak-backed Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atalotriccus pilaris",
    "commonName":"Pale-eyed Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Athene cunicularia",
    "commonName":"Burrowing Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Atlapetes albiceps",
    "commonName":"White-headed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes albinucha",
    "commonName":"White-naped Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes albofrenatus",
    "commonName":"Moustached Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes canigenis",
    "commonName":"Cuzco Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes citrinellus",
    "commonName":"Yellow-striped Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes flaviceps",
    "commonName":"Yellow-headed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes forbesi",
    "commonName":"Apurimac Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes fulviceps",
    "commonName":"Fulvous-headed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes fuscoolivaceus",
    "commonName":"Dusky-headed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes latinuchus",
    "commonName":"Yellow-breasted Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes leucopis",
    "commonName":"White-rimmed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes leucopterus",
    "commonName":"White-winged Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes melanocephalus",
    "commonName":"Santa Marta Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes melanolaemus",
    "commonName":"Black-faced Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes melanopsis",
    "commonName":"Black-spectacled Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes nationi",
    "commonName":"Rusty-bellied Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes pallidiceps",
    "commonName":"Pale-headed Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes pallidinucha",
    "commonName":"Pale-naped Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes personatus",
    "commonName":"Tepui Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes pileatus",
    "commonName":"Rufous-capped Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes rufigenis",
    "commonName":"Rufous-eared Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes rufinucha",
    "commonName":"Bolivian Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes schistaceus",
    "commonName":"Slaty Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes seebohmi",
    "commonName":"Bay-crowned Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes semirufus",
    "commonName":"Ochre-breasted Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atlapetes tricolor",
    "commonName":"Tricolored Brush-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attagis gayi",
    "commonName":"Rufous-bellied Seedsnipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Attagis malouinus",
    "commonName":"White-bellied Seedsnipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Atthis ellioti",
    "commonName":"Wine-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Atthis heloisa",
    "commonName":"Bumblebee Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Atticora fasciata",
    "commonName":"White-banded Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atticora pileata",
    "commonName":"Black-capped Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Atticora tibialis",
    "commonName":"White-thighed Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila bolivianus",
    "commonName":"Dull-capped Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila cinnamomeus",
    "commonName":"Cinnamon Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila citriniventris",
    "commonName":"Citron-bellied Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila phoenicurus",
    "commonName":"Rufous-tailed Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila rufus",
    "commonName":"Gray-hooded Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila spadiceus",
    "commonName":"Bright-rumped Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Attila torridus",
    "commonName":"Ochraceous Attila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Augastes lumachella",
    "commonName":"Hooded Visorbearer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Augastes scutatus",
    "commonName":"Hyacinth Visorbearer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aulacorhynchus coeruleicinctis",
    "commonName":"Blue-banded Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Aulacorhynchus derbianus",
    "commonName":"Chestnut-tipped Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Aulacorhynchus haematopygus",
    "commonName":"Crimson-rumped Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Aulacorhynchus prasinus",
    "commonName":"Emerald Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Aulacorhynchus sulcatus",
    "commonName":"Groove-billed Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Aulacorhynchus whitelianus",
    "commonName":"Tepui Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Auriparus flaviceps",
    "commonName":"Verdin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus infuscatus",
    "commonName":"Olive-backed Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus leucophthalmus",
    "commonName":"White-eyed Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus melanopezus",
    "commonName":"Brown-rumped Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus ochrolaemus",
    "commonName":"Buff-throated Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus paraensis",
    "commonName":"Para Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus rubiginosus",
    "commonName":"Ruddy Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus rufipectus",
    "commonName":"Santa Marta Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Automolus rufipileatus",
    "commonName":"Chestnut-crowned Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Avocettula recurvirostris",
    "commonName":"Fiery-tailed Awlbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Aythya affinis",
    "commonName":"Lesser Scaup",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aythya americana",
    "commonName":"Redhead",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aythya collaris",
    "commonName":"Ring-necked Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aythya ferina",
    "commonName":"Common Pochard",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aythya fuligula",
    "commonName":"Tufted Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aythya marila",
    "commonName":"Greater Scaup",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Aythya valisineria",
    "commonName":"Canvasback",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Baeolophus atricristatus",
    "commonName":"Black-crested Titmouse",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Baeolophus bicolor",
    "commonName":"Tufted Titmouse",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Baeolophus inornatus",
    "commonName":"Oak Titmouse",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Baeolophus ridgwayi",
    "commonName":"Juniper Titmouse",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Baeolophus wollweberi",
    "commonName":"Bridled Titmouse",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bangsia arcaei",
    "commonName":"Blue-and-gold Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bangsia aureocincta",
    "commonName":"Gold-ringed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bangsia edwardsi",
    "commonName":"Moss-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bangsia melanochlamys",
    "commonName":"Black-and-gold Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bangsia rothschildi",
    "commonName":"Golden-chested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bartramia longicauda",
    "commonName":"Upland Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Baryphthengus martii",
    "commonName":"Rufous Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Baryphthengus ruficapillus",
    "commonName":"Rufous-capped Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Basileuterus belli",
    "commonName":"Golden-browed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus culicivorus",
    "commonName":"Golden-crowned Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus griseiceps",
    "commonName":"Gray-headed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus ignotus",
    "commonName":"Pirre Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus lachrymosus",
    "commonName":"Fan-tailed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus melanogenys",
    "commonName":"Black-cheeked Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus rufifrons",
    "commonName":"Rufous-capped Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus trifasciatus",
    "commonName":"Three-banded Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Basileuterus tristriatus",
    "commonName":"Three-striped Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Batara cinerea",
    "commonName":"Giant Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Berlepschia rikeri",
    "commonName":"Point-tailed Palmcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Biatas nigropectus",
    "commonName":"White-bearded Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Boissonneaua flavescens",
    "commonName":"Buff-tailed Coronet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Boissonneaua jardini",
    "commonName":"Velvet-purple Coronet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Boissonneaua matthewsii",
    "commonName":"Chestnut-breasted Coronet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Bolborhynchus ferrugineifrons",
    "commonName":"Rufous-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Bolborhynchus lineola",
    "commonName":"Barred Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Bolborhynchus orbygnesius",
    "commonName":"Andean Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Bombycilla cedrorum",
    "commonName":"Cedar Waxwing",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bombycilla garrulus",
    "commonName":"Bohemian Waxwing",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Bonasa umbellus",
    "commonName":"Ruffed Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Botaurus lentiginosus",
    "commonName":"American Bittern",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Botaurus pinnatus",
    "commonName":"Pinnated Bittern",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Brachygalba albogularis",
    "commonName":"White-throated Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Brachygalba goeringi",
    "commonName":"Pale-headed Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Brachygalba lugubris",
    "commonName":"Brown Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Brachygalba salmoni",
    "commonName":"Dusky-backed Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Brachyramphus brevirostris",
    "commonName":"Kittlitz's Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Brachyramphus marmoratus",
    "commonName":"Marbled Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Brachyramphus perdix",
    "commonName":"Long-billed Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Branta bernicla",
    "commonName":"Brant",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Branta canadensis",
    "commonName":"Canada Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Branta hutchinsii",
    "commonName":"Cackling Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Branta leucopsis",
    "commonName":"Barnacle Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Branta sandvicensis",
    "commonName":"Hawaiian Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Brotogeris chiriri",
    "commonName":"Yellow-chevroned Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris chrysoptera",
    "commonName":"Golden-winged Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris cyanoptera",
    "commonName":"Cobalt-winged Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris jugularis",
    "commonName":"Orange-chinned Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris pyrrhoptera",
    "commonName":"Gray-cheeked Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris sanctithomae",
    "commonName":"Tui Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris tirica",
    "commonName":"Plain Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Brotogeris versicolurus",
    "commonName":"White-winged Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Bubo scandiacus",
    "commonName":"Snowy Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Bubo virginianus",
    "commonName":"Great Horned Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Bubulcus ibis",
    "commonName":"Cattle Egret",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Bucco capensis",
    "commonName":"Collared Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Bucco macrodactylus",
    "commonName":"Chestnut-capped Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Bucco noanamae",
    "commonName":"Sooty-capped Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Bucco tamatia",
    "commonName":"Spotted Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Bucephala albeola",
    "commonName":"Bufflehead",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Bucephala clangula",
    "commonName":"Common Goldeneye",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Bucephala islandica",
    "commonName":"Barrow's Goldeneye",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Bulweria bulwerii",
    "commonName":"Bulwer's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Burhinus bistriatus",
    "commonName":"Double-striped Thick-knee",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Burhinus superciliaris",
    "commonName":"Peruvian Thick-knee",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Busarellus nigricollis",
    "commonName":"Black-collared Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo albigula",
    "commonName":"White-throated Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo albonotatus",
    "commonName":"Zone-tailed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo brachyurus",
    "commonName":"Short-tailed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo galapagoensis",
    "commonName":"Galapagos Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo jamaicensis",
    "commonName":"Red-tailed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo lagopus",
    "commonName":"Rough-legged Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo lineatus",
    "commonName":"Red-shouldered Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo nitidus",
    "commonName":"Gray-lined Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo plagiatus",
    "commonName":"Gray Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo platypterus",
    "commonName":"Broad-winged Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo regalis",
    "commonName":"Ferruginous Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo ridgwayi",
    "commonName":"Ridgway's Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo solitarius",
    "commonName":"Hawaiian Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo swainsoni",
    "commonName":"Swainson's Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteo ventralis",
    "commonName":"Rufous-tailed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus aequinoctialis",
    "commonName":"Rufous Crab Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus anthracinus",
    "commonName":"Common Black-Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus coronatus",
    "commonName":"Crowned Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus gundlachii",
    "commonName":"Cuban Black-Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus lacernulatus",
    "commonName":"White-necked Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus meridionalis",
    "commonName":"Savanna Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus schistaceus",
    "commonName":"Slate-colored Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus solitarius",
    "commonName":"Solitary Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buteogallus urubitinga",
    "commonName":"Great Black-Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Buthraupis montana",
    "commonName":"Hooded Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Buthraupis wetmorei",
    "commonName":"Masked Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Butorides striata",
    "commonName":"Striated Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Butorides virescens",
    "commonName":"Green Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Cacatua alba",
    "commonName":"White Cockatoo",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cacatua galerita",
    "commonName":"Sulphur-crested Cockatoo",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cacatua goffiniana",
    "commonName":"Tanimbar Corella",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cacatua moluccensis",
    "commonName":"Salmon-crested Cockatoo",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cacicus cela",
    "commonName":"Yellow-rumped Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus chrysonotus",
    "commonName":"Mountain Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus chrysopterus",
    "commonName":"Golden-winged Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus haemorrhous",
    "commonName":"Red-rumped Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus melanicterus",
    "commonName":"Yellow-winged Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus sclateri",
    "commonName":"Ecuadorian Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus solitarius",
    "commonName":"Solitary Black Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacicus uropygialis",
    "commonName":"Scarlet-rumped Cacique",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cacomantis flabelliformis",
    "commonName":"Fan-tailed Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Cairina moschata",
    "commonName":"Muscovy Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Calamospiza melanocorys",
    "commonName":"Lark Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calcarius lapponicus",
    "commonName":"Lapland Longspur",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calcarius ornatus",
    "commonName":"Chestnut-collared Longspur",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calcarius pictus",
    "commonName":"Smith's Longspur",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calidris acuminata",
    "commonName":"Sharp-tailed Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris alba",
    "commonName":"Sanderling",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris alpina",
    "commonName":"Dunlin",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris bairdii",
    "commonName":"Baird's Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris canutus",
    "commonName":"Red Knot",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris falcinellus",
    "commonName":"Broad-billed Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris ferruginea",
    "commonName":"Curlew Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris fuscicollis",
    "commonName":"White-rumped Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris himantopus",
    "commonName":"Stilt Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris maritima",
    "commonName":"Purple Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris mauri",
    "commonName":"Western Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris melanotos",
    "commonName":"Pectoral Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris minuta",
    "commonName":"Little Stint",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris minutilla",
    "commonName":"Least Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris ptilocnemis",
    "commonName":"Rock Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris pugnax",
    "commonName":"Ruff",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris pusilla",
    "commonName":"Semipalmated Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris pygmea",
    "commonName":"Spoon-billed Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris ruficollis",
    "commonName":"Red-necked Stint",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris subminuta",
    "commonName":"Long-toed Stint",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris subruficollis",
    "commonName":"Buff-breasted Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris temminckii",
    "commonName":"Temminck's Stint",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris tenuirostris",
    "commonName":"Great Knot",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calidris virgata",
    "commonName":"Surfbird",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Calliope calliope",
    "commonName":"Siberian Rubythroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Callipepla californica",
    "commonName":"California Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Callipepla douglasii",
    "commonName":"Elegant Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Callipepla gambelii",
    "commonName":"Gambel's Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Callipepla squamata",
    "commonName":"Scaled Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Calliphlox amethystina",
    "commonName":"Amethyst Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calliphlox bryantae",
    "commonName":"Magenta-throated Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calliphlox evelynae",
    "commonName":"Bahama Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calliphlox mitchellii",
    "commonName":"Purple-throated Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Callonetta leucophrys",
    "commonName":"Ringed Teal",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Calochaetes coccineus",
    "commonName":"Vermilion Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calocitta colliei",
    "commonName":"Black-throated Magpie-Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calocitta formosa",
    "commonName":"White-throated Magpie-Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calonectris diomedea",
    "commonName":"Cory's Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Calonectris edwardsii",
    "commonName":"Cape Verde Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Calonectris leucomelas",
    "commonName":"Streaked Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Calothorax lucifer",
    "commonName":"Lucifer Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calothorax pulcher",
    "commonName":"Beautiful Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calypte anna",
    "commonName":"Anna's Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calypte costae",
    "commonName":"Costa's Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Calyptophilus frugivorus",
    "commonName":"Eastern Chat-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Calyptophilus tertius",
    "commonName":"Western Chat-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Camarhynchus heliobates",
    "commonName":"Mangrove Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Camarhynchus pallidus",
    "commonName":"Woodpecker Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Camarhynchus parvulus",
    "commonName":"Small Tree-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Camarhynchus pauper",
    "commonName":"Medium Tree-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Camarhynchus psittacula",
    "commonName":"Large Tree-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campephilus gayaquilensis",
    "commonName":"Guayaquil Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus guatemalensis",
    "commonName":"Pale-billed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus haematogaster",
    "commonName":"Crimson-bellied Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus leucopogon",
    "commonName":"Cream-backed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus magellanicus",
    "commonName":"Magellanic Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus melanoleucos",
    "commonName":"Crimson-crested Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus pollens",
    "commonName":"Powerful Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus principalis",
    "commonName":"Ivory-billed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus robustus",
    "commonName":"Robust Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Campephilus rubricollis",
    "commonName":"Red-necked Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Camptostoma imberbe",
    "commonName":"Northern Beardless-Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Camptostoma obsoletum",
    "commonName":"Southern Beardless-Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylopterus curvipennis",
    "commonName":"Wedge-tailed Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus ensipennis",
    "commonName":"White-tailed Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus excellens",
    "commonName":"Long-tailed Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus falcatus",
    "commonName":"Lazuline Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus hemileucurus",
    "commonName":"Violet Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus hyperythrus",
    "commonName":"Rufous-breasted Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus largipennis",
    "commonName":"Gray-breasted Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus phainopeplus",
    "commonName":"Santa Marta Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus rufus",
    "commonName":"Rufous Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylopterus villaviscensio",
    "commonName":"Napo Sabrewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Campylorhamphus falcularius",
    "commonName":"Black-billed Scythebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhamphus procurvoides",
    "commonName":"Curve-billed Scythebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhamphus pusillus",
    "commonName":"Brown-billed Scythebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhamphus trochilirostris",
    "commonName":"Red-billed Scythebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus albobrunneus",
    "commonName":"White-headed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus brunneicapillus",
    "commonName":"Cactus Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus chiapensis",
    "commonName":"Giant Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus fasciatus",
    "commonName":"Fasciated Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus griseus",
    "commonName":"Bicolored Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus gularis",
    "commonName":"Spotted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus jocosus",
    "commonName":"Boucard's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus megalopterus",
    "commonName":"Gray-barred Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus nuchalis",
    "commonName":"Stripe-backed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus rufinucha",
    "commonName":"Rufous-naped Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus turdinus",
    "commonName":"Thrush-like Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus yucatanicus",
    "commonName":"Yucatan Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Campylorhynchus zonatus",
    "commonName":"Band-backed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus guarayanus",
    "commonName":"Fawn-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus leucopogon",
    "commonName":"Stripe-throated Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus leucotis",
    "commonName":"Buff-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus longirostris",
    "commonName":"Long-billed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus modestus",
    "commonName":"Plain Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus nigricapillus",
    "commonName":"Bay Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus semibadius",
    "commonName":"Riverside Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus superciliaris",
    "commonName":"Superciliated Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cantorchilus thoracicus",
    "commonName":"Stripe-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Capito auratus",
    "commonName":"Gilded Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito aurovirens",
    "commonName":"Scarlet-crowned Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito brunneipectus",
    "commonName":"Brown-chested Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito dayi",
    "commonName":"Black-girdled Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito hypoleucus",
    "commonName":"White-mantled Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito maculicoronatus",
    "commonName":"Spot-crowned Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito niger",
    "commonName":"Black-spotted Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito quinticolor",
    "commonName":"Five-colored Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito squamatus",
    "commonName":"Orange-fronted Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capito wallacei",
    "commonName":"Scarlet-banded Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Capsiempis flaveola",
    "commonName":"Yellow Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Caracara cheriway",
    "commonName":"Crested Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Caracara plancus",
    "commonName":"Southern Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Cardellina canadensis",
    "commonName":"Canada Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardellina pusilla",
    "commonName":"Wilson's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardellina rubra",
    "commonName":"Red Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardellina rubrifrons",
    "commonName":"Red-faced Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardellina versicolor",
    "commonName":"Pink-headed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardinalis cardinalis",
    "commonName":"Northern Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardinalis phoeniceus",
    "commonName":"Vermilion Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cardinalis sinuatus",
    "commonName":"Pyrrhuloxia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Carduelis carduelis",
    "commonName":"European Goldfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cariama cristata",
    "commonName":"Red-legged Seriema",
    "orderName":"Cariamiformes"
  },
  {
    "sciName":"Carpodacus erythrinus",
    "commonName":"Common Rosefinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Carpodectes antoniae",
    "commonName":"Yellow-billed Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Carpodectes hopkei",
    "commonName":"Black-tipped Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Carpodectes nitidus",
    "commonName":"Snowy Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Carpornis cucullata",
    "commonName":"Hooded Berryeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Carpornis melanocephala",
    "commonName":"Black-headed Berryeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Caryothraustes canadensis",
    "commonName":"Yellow-green Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Caryothraustes poliogaster",
    "commonName":"Black-faced Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Casiornis fuscus",
    "commonName":"Ash-throated Casiornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Casiornis rufus",
    "commonName":"Rufous Casiornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catamblyrhynchus diadema",
    "commonName":"Plushcap",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catamenia analis",
    "commonName":"Band-tailed Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catamenia homochroa",
    "commonName":"Paramo Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catamenia inornata",
    "commonName":"Plain-colored Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharopeza bishopi",
    "commonName":"Whistling Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cathartes aura",
    "commonName":"Turkey Vulture",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Cathartes burrovianus",
    "commonName":"Lesser Yellow-headed Vulture",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Cathartes melambrotus",
    "commonName":"Greater Yellow-headed Vulture",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Catharus aurantiirostris",
    "commonName":"Orange-billed Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus bicknelli",
    "commonName":"Bicknell's Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus dryas",
    "commonName":"Spotted Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus frantzii",
    "commonName":"Ruddy-capped Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus fuscater",
    "commonName":"Slaty-backed Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus fuscescens",
    "commonName":"Veery",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus gracilirostris",
    "commonName":"Black-billed Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus guttatus",
    "commonName":"Hermit Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus mexicanus",
    "commonName":"Black-headed Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus minimus",
    "commonName":"Gray-cheeked Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus occidentalis",
    "commonName":"Russet Nightingale-Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catharus ustulatus",
    "commonName":"Swainson's Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Catherpes mexicanus",
    "commonName":"Canyon Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Celeus castaneus",
    "commonName":"Chestnut-colored Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus elegans",
    "commonName":"Chestnut Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus flavescens",
    "commonName":"Blond-crested Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus flavus",
    "commonName":"Cream-colored Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus grammicus",
    "commonName":"Scale-breasted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus loricatus",
    "commonName":"Cinnamon Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus lugubris",
    "commonName":"Pale-crested Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus obrieni",
    "commonName":"Kaempfer's Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus spectabilis",
    "commonName":"Rufous-headed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus torquatus",
    "commonName":"Ringed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Celeus undatus",
    "commonName":"Waved Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Centrocercus minimus",
    "commonName":"Gunnison Sage-Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Centrocercus urophasianus",
    "commonName":"Greater Sage-Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Cephalopterus glabricollis",
    "commonName":"Bare-necked Umbrellabird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cephalopterus ornatus",
    "commonName":"Amazonian Umbrellabird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cephalopterus penduliger",
    "commonName":"Long-wattled Umbrellabird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cepphus columba",
    "commonName":"Pigeon Guillemot",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Cepphus grylle",
    "commonName":"Black Guillemot",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Ceratopipra chloromeros",
    "commonName":"Round-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ceratopipra cornuta",
    "commonName":"Scarlet-horned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ceratopipra erythrocephala",
    "commonName":"Golden-headed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ceratopipra mentalis",
    "commonName":"Red-capped Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ceratopipra rubrocapilla",
    "commonName":"Red-headed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercibis oxycerca",
    "commonName":"Sharp-tailed Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Cercomacra brasiliana",
    "commonName":"Rio de Janeiro Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra carbonaria",
    "commonName":"Rio Branco Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra cinerascens",
    "commonName":"Gray Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra ferdinandi",
    "commonName":"Bananal Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra laeta",
    "commonName":"Willis's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra manu",
    "commonName":"Manu Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra melanaria",
    "commonName":"Mato Grosso Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra nigrescens",
    "commonName":"Blackish Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra nigricans",
    "commonName":"Jet Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra parkeri",
    "commonName":"Parker's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra serva",
    "commonName":"Black Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cercomacra tyrannina",
    "commonName":"Dusky Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cerorhinca monocerata",
    "commonName":"Rhinoceros Auklet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Certhia americana",
    "commonName":"Brown Creeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Certhiasomus stictolaemus",
    "commonName":"Spot-throated Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Certhiaxis cinnamomeus",
    "commonName":"Yellow-chinned Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Certhiaxis mustelinus",
    "commonName":"Red-and-white Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Certhidea fusca",
    "commonName":"Gray Warbler-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Certhidea olivacea",
    "commonName":"Green Warbler-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chaetocercus astreans",
    "commonName":"Santa Marta Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetocercus berlepschi",
    "commonName":"Esmeraldas Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetocercus bombus",
    "commonName":"Little Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetocercus heliodor",
    "commonName":"Gorgeted Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetocercus jourdanii",
    "commonName":"Rufous-shafted Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetocercus mulsant",
    "commonName":"White-bellied Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura brachyura",
    "commonName":"Short-tailed Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura chapmani",
    "commonName":"Chapman's Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura cinereiventris",
    "commonName":"Gray-rumped Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura egregia",
    "commonName":"Pale-rumped Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura fumosa",
    "commonName":"Costa Rican Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura martinica",
    "commonName":"Lesser Antillean Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura meridionalis",
    "commonName":"Sick's Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura pelagica",
    "commonName":"Chimney Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura spinicaudus",
    "commonName":"Band-rumped Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura vauxi",
    "commonName":"Vaux's Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chaetura viridipennis",
    "commonName":"Amazonian Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalcostigma herrani",
    "commonName":"Rainbow-bearded Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalcostigma heteropogon",
    "commonName":"Bronze-tailed Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalcostigma olivaceum",
    "commonName":"Olivaceous Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalcostigma ruficeps",
    "commonName":"Rufous-capped Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalcostigma stanleyi",
    "commonName":"Blue-mantled Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalybura buffonii",
    "commonName":"White-vented Plumeleteer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chalybura urochrysia",
    "commonName":"Bronze-tailed Plumeleteer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chamaea fasciata",
    "commonName":"Wrentit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chamaepetes goudotii",
    "commonName":"Sickle-winged Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Chamaepetes unicolor",
    "commonName":"Black Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Chamaeza campanisona",
    "commonName":"Short-tailed Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chamaeza meruloides",
    "commonName":"Such's Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chamaeza mollissima",
    "commonName":"Barred Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chamaeza nobilis",
    "commonName":"Striated Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chamaeza ruficauda",
    "commonName":"Rufous-tailed Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chamaeza turdina",
    "commonName":"Schwartz's Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Charadrius alticola",
    "commonName":"Puna Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius bicinctus",
    "commonName":"Double-banded Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius collaris",
    "commonName":"Collared Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius dubius",
    "commonName":"Little Ringed Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius falklandicus",
    "commonName":"Two-banded Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius hiaticula",
    "commonName":"Common Ringed Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius leschenaultii",
    "commonName":"Greater Sand-Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius melodus",
    "commonName":"Piping Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius modestus",
    "commonName":"Rufous-chested Dotterel",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius mongolus",
    "commonName":"Lesser Sand-Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius montanus",
    "commonName":"Mountain Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius morinellus",
    "commonName":"Eurasian Dotterel",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius nivosus",
    "commonName":"Snowy Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius semipalmatus",
    "commonName":"Semipalmated Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius vociferus",
    "commonName":"Killdeer",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charadrius wilsonia",
    "commonName":"Wilson's Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Charitospiza eucosma",
    "commonName":"Coal-crested Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chasiempis ibidis",
    "commonName":"Oahu Elepaio",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chasiempis sandwichensis",
    "commonName":"Hawaii Elepaio",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chasiempis sclateri",
    "commonName":"Kauai Elepaio",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chauna chavaria",
    "commonName":"Northern Screamer",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chauna torquata",
    "commonName":"Southern Screamer",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chelidoptera tenebrosa",
    "commonName":"Swallow-winged Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Chen caerulescens",
    "commonName":"Snow Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chen canagica",
    "commonName":"Emperor Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chen rossii",
    "commonName":"Ross's Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chionis albus",
    "commonName":"Snowy Sheathbill",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chiroxiphia boliviana",
    "commonName":"Yungas Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chiroxiphia caudata",
    "commonName":"Swallow-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chiroxiphia lanceolata",
    "commonName":"Lance-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chiroxiphia linearis",
    "commonName":"Long-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chiroxiphia pareola",
    "commonName":"Blue-backed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlidonias hybrida",
    "commonName":"Whiskered Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chlidonias leucopterus",
    "commonName":"White-winged Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chlidonias niger",
    "commonName":"Black Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chloephaga hybrida",
    "commonName":"Kelp Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chloephaga melanoptera",
    "commonName":"Andean Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chloephaga picta",
    "commonName":"Upland Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chloephaga poliocephala",
    "commonName":"Ashy-headed Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chloephaga rubidiceps",
    "commonName":"Ruddy-headed Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Chlorestes notata",
    "commonName":"Blue-chinned Sapphire",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chloris chloris",
    "commonName":"European Greenfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chloris sinica",
    "commonName":"Oriental Greenfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chloroceryle aenea",
    "commonName":"American Pygmy Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Chloroceryle amazona",
    "commonName":"Amazon Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Chloroceryle americana",
    "commonName":"Green Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Chloroceryle inda",
    "commonName":"Green-and-rufous Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Chlorochrysa calliparaea",
    "commonName":"Orange-eared Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorochrysa nitidissima",
    "commonName":"Multicolored Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorochrysa phoenicotis",
    "commonName":"Glistening-green Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorophanes spiza",
    "commonName":"Green Honeycreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorophonia callophrys",
    "commonName":"Golden-browed Chlorophonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorophonia cyanea",
    "commonName":"Blue-naped Chlorophonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorophonia flavirostris",
    "commonName":"Yellow-collared Chlorophonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorophonia occipitalis",
    "commonName":"Blue-crowned Chlorophonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorophonia pyrrhophrys",
    "commonName":"Chestnut-breasted Chlorophonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorornis riefferii",
    "commonName":"Grass-green Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus canigularis",
    "commonName":"Ashy-throated Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus flavigularis",
    "commonName":"Yellow-throated Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus flavopectus",
    "commonName":"Common Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus flavovirens",
    "commonName":"Yellow-green Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus inornatus",
    "commonName":"Pirre Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus parvirostris",
    "commonName":"Short-billed Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus pileatus",
    "commonName":"Sooty-capped Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus semifuscus",
    "commonName":"Dusky Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorospingus tacarcunae",
    "commonName":"Tacarcuna Chlorospingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorostilbon alice",
    "commonName":"Green-tailed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon assimilis",
    "commonName":"Garden Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon auriceps",
    "commonName":"Golden-crowned Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon canivetii",
    "commonName":"Canivet's Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon forficatus",
    "commonName":"Cozumel Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon gibsoni",
    "commonName":"Red-billed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon lucidus",
    "commonName":"Glittering-bellied Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon maugaeus",
    "commonName":"Puerto Rican Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon melanorhynchus",
    "commonName":"Western Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon mellisugus",
    "commonName":"Blue-tailed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon poortmani",
    "commonName":"Short-tailed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon ricordii",
    "commonName":"Cuban Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon russatus",
    "commonName":"Coppery Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon stenurus",
    "commonName":"Narrow-tailed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorostilbon swainsonii",
    "commonName":"Hispaniolan Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chlorothraupis carmioli",
    "commonName":"Carmiol's Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorothraupis olivacea",
    "commonName":"Lemon-spectacled Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chlorothraupis stolzmanni",
    "commonName":"Ochre-breasted Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chondestes grammacus",
    "commonName":"Lark Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chondrohierax uncinatus",
    "commonName":"Hook-billed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Chordeiles acutipennis",
    "commonName":"Lesser Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Chordeiles gundlachii",
    "commonName":"Antillean Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Chordeiles minor",
    "commonName":"Common Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Chordeiles nacunda",
    "commonName":"Nacunda Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Chordeiles pusillus",
    "commonName":"Least Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Chordeiles rupestris",
    "commonName":"Sand-colored Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Chroicocephalus cirrocephalus",
    "commonName":"Gray-hooded Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chroicocephalus maculipennis",
    "commonName":"Brown-hooded Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chroicocephalus philadelphia",
    "commonName":"Bonaparte's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chroicocephalus ridibundus",
    "commonName":"Black-headed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chroicocephalus scopulinus",
    "commonName":"Red-billed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chroicocephalus serranus",
    "commonName":"Andean Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Chrysolampis mosquitus",
    "commonName":"Ruby-topaz Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chrysolophus amherstiae",
    "commonName":"Lady Amherst's Pheasant",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Chrysolophus pictus",
    "commonName":"Golden Pheasant",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Chrysomus icterocephalus",
    "commonName":"Yellow-hooded Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chrysomus ruficapillus",
    "commonName":"Chestnut-capped Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chrysothlypis chrysomelas",
    "commonName":"Black-and-yellow Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chrysothlypis salmoni",
    "commonName":"Scarlet-and-white Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Chrysuronia oenone",
    "commonName":"Golden-tailed Sapphire",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Chunga burmeisteri",
    "commonName":"Black-legged Seriema",
    "orderName":"Cariamiformes"
  },
  {
    "sciName":"Ciccaba albitarsis",
    "commonName":"Rufous-banded Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Ciccaba huhula",
    "commonName":"Black-banded Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Ciccaba nigrolineata",
    "commonName":"Black-and-white Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Ciccaba virgata",
    "commonName":"Mottled Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Cichlocolaptes leucophrus",
    "commonName":"Pale-browed Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cichlopsis leucogenys",
    "commonName":"Rufous-brown Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ciconia maguari",
    "commonName":"Maguari Stork",
    "orderName":"Ciconiiformes"
  },
  {
    "sciName":"Cinclocerthia gutturalis",
    "commonName":"Gray Trembler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclocerthia ruficauda",
    "commonName":"Brown Trembler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes albidiventris",
    "commonName":"Chestnut-winged Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes albiventris",
    "commonName":"Cream-winged Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes antarcticus",
    "commonName":"Blackish Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes aricomae",
    "commonName":"Royal Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes atacamensis",
    "commonName":"White-winged Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes comechingonus",
    "commonName":"Cordoba Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes excelsior",
    "commonName":"Stout-billed Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes fuscus",
    "commonName":"Buff-winged Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes nigrofumosus",
    "commonName":"Seaside Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes olrogi",
    "commonName":"Olrog's Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes oustaleti",
    "commonName":"Gray-flanked Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes pabsti",
    "commonName":"Long-tailed Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes palliatus",
    "commonName":"White-bellied Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes patagonicus",
    "commonName":"Dark-bellied Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclodes taczanowskii",
    "commonName":"Surf Cinclodes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclus leucocephalus",
    "commonName":"White-capped Dipper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclus mexicanus",
    "commonName":"American Dipper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinclus schulzi",
    "commonName":"Rufous-throated Dipper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinnycerthia fulva",
    "commonName":"Fulvous Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinnycerthia olivascens",
    "commonName":"Sharpe's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinnycerthia peruana",
    "commonName":"Peruvian Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cinnycerthia unirufa",
    "commonName":"Rufous Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Circus aeruginosus",
    "commonName":"Eurasian Marsh-Harrier",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Circus approximans",
    "commonName":"Swamp Harrier",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Circus buffoni",
    "commonName":"Long-winged Harrier",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Circus cinereus",
    "commonName":"Cinereous Harrier",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Circus cyaneus",
    "commonName":"Northern Harrier",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Cissopis leverianus",
    "commonName":"Magpie Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cistothorus apolinari",
    "commonName":"Apolinar's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cistothorus meridae",
    "commonName":"Merida Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cistothorus palustris",
    "commonName":"Marsh Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cistothorus platensis",
    "commonName":"Sedge Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Clangula hyemalis",
    "commonName":"Long-tailed Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Claravis geoffroyi",
    "commonName":"Purple-winged Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Claravis mondetoura",
    "commonName":"Maroon-chested Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Claravis pretiosa",
    "commonName":"Blue Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Clibanornis dendrocolaptoides",
    "commonName":"Canebrake Groundcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Clypicterus oseryi",
    "commonName":"Casqued Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Clytoctantes alixii",
    "commonName":"Recurve-billed Bushbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Clytoctantes atrogularis",
    "commonName":"Rondonia Bushbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Clytolaema rubricauda",
    "commonName":"Brazilian Ruby",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Clytorhynchus nigrogularis",
    "commonName":"Black-throated Shrikebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Clytorhynchus vitiensis",
    "commonName":"Fiji Shrikebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnemarchus erythropygius",
    "commonName":"Red-rumped Bush-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnemathraupis aureodorsalis",
    "commonName":"Golden-backed Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnemathraupis eximia",
    "commonName":"Black-chested Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnemoscopus rubrirostris",
    "commonName":"Gray-hooded Bush Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnemotriccus fuscatus",
    "commonName":"Fuscous Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnipodectes subbrunneus",
    "commonName":"Brownish Twistwing",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cnipodectes superrufus",
    "commonName":"Rufous Twistwing",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coccothraustes abeillei",
    "commonName":"Hooded Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coccothraustes coccothraustes",
    "commonName":"Hawfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coccothraustes vespertinus",
    "commonName":"Evening Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coccycua cinerea",
    "commonName":"Ash-colored Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccycua minuta",
    "commonName":"Little Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccycua pumila",
    "commonName":"Dwarf Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus americanus",
    "commonName":"Yellow-billed Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus erythropthalmus",
    "commonName":"Black-billed Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus euleri",
    "commonName":"Pearly-breasted Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus ferrugineus",
    "commonName":"Cocos Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus lansbergi",
    "commonName":"Gray-capped Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus longirostris",
    "commonName":"Hispaniolan Lizard-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus melacoryphus",
    "commonName":"Dark-billed Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus merlini",
    "commonName":"Great Lizard-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus minor",
    "commonName":"Mangrove Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus pluvialis",
    "commonName":"Chestnut-bellied Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus rufigularis",
    "commonName":"Bay-breasted Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus vetula",
    "commonName":"Jamaican Lizard-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Coccyzus vieilloti",
    "commonName":"Puerto Rican Lizard-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Cochlearius cochlearius",
    "commonName":"Boat-billed Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Coeligena bonapartei",
    "commonName":"Golden-bellied Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena coeligena",
    "commonName":"Bronzy Inca",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena helianthea",
    "commonName":"Blue-throated Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena iris",
    "commonName":"Rainbow Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena lutetiae",
    "commonName":"Buff-winged Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena orina",
    "commonName":"Dusky Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena phalerata",
    "commonName":"White-tailed Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena prunellei",
    "commonName":"Black Inca",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena torquata",
    "commonName":"Collared Inca",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena violifer",
    "commonName":"Violet-throated Starfrontlet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coeligena wilsoni",
    "commonName":"Brown Inca",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Coereba flaveola",
    "commonName":"Bananaquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Colaptes atricollis",
    "commonName":"Black-necked Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes auratus",
    "commonName":"Northern Flicker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes auricularis",
    "commonName":"Gray-crowned Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes campestris",
    "commonName":"Campo Flicker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes chrysoides",
    "commonName":"Gilded Flicker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes fernandinae",
    "commonName":"Fernandina's Flicker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes melanochloros",
    "commonName":"Green-barred Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes pitius",
    "commonName":"Chilean Flicker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes punctigula",
    "commonName":"Spot-breasted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes rivolii",
    "commonName":"Crimson-mantled Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes rubiginosus",
    "commonName":"Golden-olive Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colaptes rupicola",
    "commonName":"Andean Flicker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Colibri coruscans",
    "commonName":"Sparkling Violetear",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Colibri delphinae",
    "commonName":"Brown Violetear",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Colibri serrirostris",
    "commonName":"White-vented Violetear",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Colibri thalassinus",
    "commonName":"Green Violetear",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Colinus cristatus",
    "commonName":"Crested Bobwhite",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Colinus nigrogularis",
    "commonName":"Black-throated Bobwhite",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Colinus virginianus",
    "commonName":"Northern Bobwhite",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Colonia colonus",
    "commonName":"Long-tailed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Colorhamphus parvirostris",
    "commonName":"Patagonian Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Columba livia",
    "commonName":"Rock Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columba vitiensis",
    "commonName":"Metallic Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina buckleyi",
    "commonName":"Ecuadorian Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina cruziana",
    "commonName":"Croaking Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina inca",
    "commonName":"Inca Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina minuta",
    "commonName":"Plain-breasted Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina passerina",
    "commonName":"Common Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina picui",
    "commonName":"Picui Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina squammata",
    "commonName":"Scaled Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Columbina talpacoti",
    "commonName":"Ruddy Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Compsospiza baeri",
    "commonName":"Tucuman Mountain-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Compsospiza garleppi",
    "commonName":"Cochabamba Mountain-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Compsothraupis loricata",
    "commonName":"Scarlet-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conioptilon mcilhennyi",
    "commonName":"Black-faced Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum albifrons",
    "commonName":"Capped Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum bicolor",
    "commonName":"Bicolored Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum cinereum",
    "commonName":"Cinereous Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum ferrugineiventre",
    "commonName":"White-browed Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum leucogenys",
    "commonName":"White-eared Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum margaritae",
    "commonName":"Pearly-breasted Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum rufum",
    "commonName":"Rufous-browed Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum sitticolor",
    "commonName":"Blue-backed Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum speciosum",
    "commonName":"Chestnut-vented Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conirostrum tamarugense",
    "commonName":"Tamarugo Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopias albovittatus",
    "commonName":"White-ringed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopias cinchoneti",
    "commonName":"Lemon-browed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopias parvus",
    "commonName":"Yellow-throated Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopias trivirgatus",
    "commonName":"Three-striped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga ardesiaca",
    "commonName":"Slaty Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga aurita",
    "commonName":"Chestnut-belted Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga castaneiceps",
    "commonName":"Chestnut-crowned Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga lineata",
    "commonName":"Rufous Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga melanogaster",
    "commonName":"Black-bellied Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga melanops",
    "commonName":"Black-cheeked Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga peruviana",
    "commonName":"Ash-throated Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conopophaga roberti",
    "commonName":"Hooded Gnateater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conothraupis mesoleuca",
    "commonName":"Cone-billed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Conothraupis speculigera",
    "commonName":"Black-and-white Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus albogularis",
    "commonName":"White-throated Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus caribaeus",
    "commonName":"Cuban Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus cinereus",
    "commonName":"Tropical Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus cooperi",
    "commonName":"Olive-sided Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus fumigatus",
    "commonName":"Smoke-colored Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus hispaniolensis",
    "commonName":"Hispaniolan Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus latirostris",
    "commonName":"Lesser Antillean Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus lugubris",
    "commonName":"Dark Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus nigrescens",
    "commonName":"Blackish Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus ochraceus",
    "commonName":"Ochraceous Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus pallidus",
    "commonName":"Jamaican Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus pertinax",
    "commonName":"Greater Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus sordidulus",
    "commonName":"Western Wood-Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Contopus virens",
    "commonName":"Eastern Wood-Pewee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Copsychus malabaricus",
    "commonName":"White-rumped Shama",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coragyps atratus",
    "commonName":"Black Vulture",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Corapipo altera",
    "commonName":"White-ruffed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corapipo gutturalis",
    "commonName":"White-throated Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corapipo leucorrhoa",
    "commonName":"White-bibbed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus brachyrhynchos",
    "commonName":"American Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus caurinus",
    "commonName":"Northwestern Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus corax",
    "commonName":"Common Raven",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus cryptoleucus",
    "commonName":"Chihuahuan Raven",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus hawaiiensis",
    "commonName":"Hawaiian Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus imparatus",
    "commonName":"Tamaulipas Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus jamaicensis",
    "commonName":"Jamaican Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus leucognaphalus",
    "commonName":"White-necked Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus nasicus",
    "commonName":"Cuban Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus ossifragus",
    "commonName":"Fish Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus palmarum",
    "commonName":"Palm Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus sinaloae",
    "commonName":"Sinaloa Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corvus splendens",
    "commonName":"House Crow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coryphaspiza melanotis",
    "commonName":"Black-masked Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coryphistera alaudina",
    "commonName":"Lark-like Brushrunner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coryphospingus cucullatus",
    "commonName":"Red-crested Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coryphospingus pileatus",
    "commonName":"Pileated Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corythopis delalandi",
    "commonName":"Southern Antpipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Corythopis torquatus",
    "commonName":"Ringed Antpipit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coscoroba coscoroba",
    "commonName":"Coscoroba Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cotinga amabilis",
    "commonName":"Lovely Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cotinga cayana",
    "commonName":"Spangled Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cotinga cotinga",
    "commonName":"Purple-breasted Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cotinga maculata",
    "commonName":"Banded Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cotinga maynana",
    "commonName":"Plum-throated Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cotinga nattererii",
    "commonName":"Blue Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cotinga ridgwayi",
    "commonName":"Turquoise Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Coturnicops noveboracensis",
    "commonName":"Yellow Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Coturnix japonica",
    "commonName":"Japanese Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Cranioleuca albicapilla",
    "commonName":"Creamy-crested Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca albiceps",
    "commonName":"Light-crowned Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca antisiensis",
    "commonName":"Line-cheeked Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca baroni",
    "commonName":"Baron's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca curtata",
    "commonName":"Ash-browed Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca demissa",
    "commonName":"Tepui Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca erythrops",
    "commonName":"Red-faced Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca gutturata",
    "commonName":"Speckled Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca hellmayri",
    "commonName":"Streak-capped Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca henricae",
    "commonName":"Bolivian Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca marcapatae",
    "commonName":"Marcapata Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca muelleri",
    "commonName":"Scaled Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca obsoleta",
    "commonName":"Olive Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca pallida",
    "commonName":"Pallid Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca pyrrhophia",
    "commonName":"Stripe-crowned Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca semicinerea",
    "commonName":"Gray-headed Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca subcristata",
    "commonName":"Crested Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca sulphurifera",
    "commonName":"Sulphur-throated Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca vulpecula",
    "commonName":"Parker's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cranioleuca vulpina",
    "commonName":"Rusty-backed Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Crax alberti",
    "commonName":"Blue-billed Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Crax alector",
    "commonName":"Black Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Crax blumenbachii",
    "commonName":"Red-billed Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Crax daubentoni",
    "commonName":"Yellow-knobbed Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Crax fasciolata",
    "commonName":"Bare-faced Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Crax globulosa",
    "commonName":"Wattled Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Crax rubra",
    "commonName":"Great Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Creagrus furcatus",
    "commonName":"Swallow-tailed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Creurgops dentatus",
    "commonName":"Slaty Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Creurgops verticalis",
    "commonName":"Rufous-crested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Crotophaga ani",
    "commonName":"Smooth-billed Ani",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Crotophaga major",
    "commonName":"Greater Ani",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Crotophaga sulcirostris",
    "commonName":"Groove-billed Ani",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Cryptoleucopteryx plumbea",
    "commonName":"Plumbeous Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Crypturellus atrocapillus",
    "commonName":"Black-capped Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus bartletti",
    "commonName":"Bartlett's Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus berlepschi",
    "commonName":"Berlepsch's Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus boucardi",
    "commonName":"Slaty-breasted Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus cinereus",
    "commonName":"Cinereous Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus cinnamomeus",
    "commonName":"Thicket Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus duidae",
    "commonName":"Gray-legged Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus erythropus",
    "commonName":"Red-legged Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus kerriae",
    "commonName":"Choco Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus noctivagus",
    "commonName":"Yellow-legged Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus obsoletus",
    "commonName":"Brown Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus parvirostris",
    "commonName":"Small-billed Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus ptaritepui",
    "commonName":"Tepui Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus soui",
    "commonName":"Little Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus strigulosus",
    "commonName":"Brazilian Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus tataupa",
    "commonName":"Tataupa Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus transfasciatus",
    "commonName":"Pale-browed Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus undulatus",
    "commonName":"Undulated Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Crypturellus variegatus",
    "commonName":"Variegated Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Cuculus canorus",
    "commonName":"Common Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Culicivora caudacuta",
    "commonName":"Sharp-tailed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Curaeus curaeus",
    "commonName":"Austral Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Curaeus forbesi",
    "commonName":"Forbes's Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanerpes caeruleus",
    "commonName":"Purple Honeycreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanerpes cyaneus",
    "commonName":"Red-legged Honeycreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanerpes lucidus",
    "commonName":"Shining Honeycreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanerpes nitidus",
    "commonName":"Short-billed Honeycreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanicterus cyanicterus",
    "commonName":"Blue-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocitta cristata",
    "commonName":"Blue Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocitta stelleri",
    "commonName":"Steller's Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocompsa brissonii",
    "commonName":"Ultramarine Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocompsa cyanoides",
    "commonName":"Blue-black Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocompsa parellina",
    "commonName":"Blue Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax affinis",
    "commonName":"Black-chested Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax beecheii",
    "commonName":"Purplish-backed Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax caeruleus",
    "commonName":"Azure Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax cayanus",
    "commonName":"Cayenne Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax chrysops",
    "commonName":"Plush-crested Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax cristatellus",
    "commonName":"Curl-crested Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax cyanomelas",
    "commonName":"Purplish Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax cyanopogon",
    "commonName":"White-naped Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax dickeyi",
    "commonName":"Tufted Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax heilprini",
    "commonName":"Azure-naped Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax melanocyaneus",
    "commonName":"Bushy-crested Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax mystacalis",
    "commonName":"White-tailed Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax sanblasianus",
    "commonName":"San Blas Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax violaceus",
    "commonName":"Violaceous Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax yncas",
    "commonName":"Green Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanocorax yucatanicus",
    "commonName":"Yucatan Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanoliseus patagonus",
    "commonName":"Burrowing Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cyanoloxia glaucocaerulea",
    "commonName":"Glaucous-blue Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca argentigula",
    "commonName":"Silvery-throated Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca armillata",
    "commonName":"Black-collared Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca cucullata",
    "commonName":"Azure-hooded Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca mirabilis",
    "commonName":"White-throated Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca nana",
    "commonName":"Dwarf Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca pulchra",
    "commonName":"Beautiful Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca pumilo",
    "commonName":"Black-throated Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca turcosa",
    "commonName":"Turquoise Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanolyca viridicyanus",
    "commonName":"White-collared Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyanophaia bicolor",
    "commonName":"Blue-headed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cyanoramphus forbesi",
    "commonName":"Chatham Islands Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cyanoramphus novaezelandiae",
    "commonName":"Red-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Cyclarhis gujanensis",
    "commonName":"Rufous-browed Peppershrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyclarhis nigrirostris",
    "commonName":"Black-billed Peppershrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cygnus atratus",
    "commonName":"Black Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cygnus buccinator",
    "commonName":"Trumpeter Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cygnus columbianus",
    "commonName":"Tundra Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cygnus cygnus",
    "commonName":"Whooper Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cygnus melancoryphus",
    "commonName":"Black-necked Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cygnus olor",
    "commonName":"Mute Swan",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Cymbilaimus lineatus",
    "commonName":"Fasciated Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cymbilaimus sanctaemariae",
    "commonName":"Bamboo Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cynanthus latirostris",
    "commonName":"Broad-billed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cynanthus sordidus",
    "commonName":"Dusky Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cyphorhinus arada",
    "commonName":"Musician Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyphorhinus phaeocephalus",
    "commonName":"Song Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyphorhinus thoracicus",
    "commonName":"Chestnut-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cypseloides cherriei",
    "commonName":"Spot-fronted Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides cryptus",
    "commonName":"White-chinned Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides fumigatus",
    "commonName":"Sooty Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides lemosi",
    "commonName":"White-chested Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides niger",
    "commonName":"Black Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides rothschildi",
    "commonName":"Rothschild's Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides senex",
    "commonName":"Great Dusky Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypseloides storeri",
    "commonName":"White-fronted Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Cypsnagra hirundinacea",
    "commonName":"White-rumped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Cyrtonyx montezumae",
    "commonName":"Montezuma Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Cyrtonyx ocellatus",
    "commonName":"Ocellated Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Dacnis albiventris",
    "commonName":"White-bellied Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis berlepschi",
    "commonName":"Scarlet-breasted Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis cayana",
    "commonName":"Blue Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis flaviventer",
    "commonName":"Yellow-bellied Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis hartlaubi",
    "commonName":"Turquoise Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis lineata",
    "commonName":"Black-faced Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis nigripes",
    "commonName":"Black-legged Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis venusta",
    "commonName":"Scarlet-thighed Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dacnis viguieri",
    "commonName":"Viridian Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dactylortyx thoracicus",
    "commonName":"Singing Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Damophila julie",
    "commonName":"Violet-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Daption capense",
    "commonName":"Cape Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Daptrius ater",
    "commonName":"Black Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Deconychura longicauda",
    "commonName":"Long-tailed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Delichon urbicum",
    "commonName":"Common House-Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Deltarhynchus flammulatus",
    "commonName":"Flammulated Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendragapus fuliginosus",
    "commonName":"Sooty Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Dendragapus obscurus",
    "commonName":"Dusky Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Dendrexetastes rufigula",
    "commonName":"Cinnamon-throated Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocincla anabatina",
    "commonName":"Tawny-winged Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocincla fuliginosa",
    "commonName":"Plain-brown Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocincla homochroa",
    "commonName":"Ruddy Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocincla merula",
    "commonName":"White-chinned Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocincla turdina",
    "commonName":"Plain-winged Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocincla tyrannina",
    "commonName":"Tyrannine Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocolaptes certhia",
    "commonName":"Amazonian Barred-Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocolaptes hoffmannsi",
    "commonName":"Hoffmanns's Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocolaptes picumnus",
    "commonName":"Black-banded Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocolaptes platyrostris",
    "commonName":"Planalto Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocolaptes sanctithomae",
    "commonName":"Northern Barred-Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrocopos major",
    "commonName":"Great Spotted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Dendrocygna arborea",
    "commonName":"West Indian Whistling-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Dendrocygna autumnalis",
    "commonName":"Black-bellied Whistling-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Dendrocygna bicolor",
    "commonName":"Fulvous Whistling-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Dendrocygna viduata",
    "commonName":"White-faced Whistling-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Dendroplex kienerii",
    "commonName":"Zimmer's Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendroplex picus",
    "commonName":"Straight-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dendrortyx barbatus",
    "commonName":"Bearded Wood-Partridge",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Dendrortyx leucophrys",
    "commonName":"Buffy-crowned Wood-Partridge",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Dendrortyx macroura",
    "commonName":"Long-tailed Wood-Partridge",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Deroptyus accipitrinus",
    "commonName":"Red-fan Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Dichrozona cincta",
    "commonName":"Banded Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Didunculus strigirostris",
    "commonName":"Tooth-billed Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Diglossa albilatera",
    "commonName":"White-sided Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa baritula",
    "commonName":"Cinnamon-bellied Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa brunneiventris",
    "commonName":"Black-throated Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa caerulescens",
    "commonName":"Bluish Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa carbonaria",
    "commonName":"Gray-bellied Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa cyanea",
    "commonName":"Masked Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa glauca",
    "commonName":"Deep-blue Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa gloriosa",
    "commonName":"Merida Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa gloriosissima",
    "commonName":"Chestnut-bellied Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa humeralis",
    "commonName":"Black Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa indigotica",
    "commonName":"Indigo Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa lafresnayii",
    "commonName":"Glossy Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa major",
    "commonName":"Greater Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa mystacalis",
    "commonName":"Moustached Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa plumbea",
    "commonName":"Slaty Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa sittoides",
    "commonName":"Rusty Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diglossa venezuelensis",
    "commonName":"Venezuelan Flowerpiercer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diomedea epomophora",
    "commonName":"Royal Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Diomedea exulans",
    "commonName":"Wandering Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Diopsittaca nobilis",
    "commonName":"Red-shouldered Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Discosura conversii",
    "commonName":"Green Thorntail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Discosura langsdorffi",
    "commonName":"Black-bellied Thorntail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Discosura longicaudus",
    "commonName":"Racket-tailed Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Discosura popelairii",
    "commonName":"Wire-crested Thorntail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Diuca diuca",
    "commonName":"Common Diuca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Diuca speculifera",
    "commonName":"White-winged Diuca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dives atroviolaceus",
    "commonName":"Cuban Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dives dives",
    "commonName":"Melodious Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dives warszewiczi",
    "commonName":"Scrub Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dixiphia pipra",
    "commonName":"White-crowned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dolichonyx oryzivorus",
    "commonName":"Bobolink",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Doliornis remseni",
    "commonName":"Chestnut-bellied Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Doliornis sclateri",
    "commonName":"Bay-vented Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dolospingus fringilloides",
    "commonName":"White-naped Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Donacobius atricapilla",
    "commonName":"Black-capped Donacobius",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Donacospiza albifrons",
    "commonName":"Long-tailed Reed Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Doricha eliza",
    "commonName":"Mexican Sheartail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Doricha enicura",
    "commonName":"Slender Sheartail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Doryfera johannae",
    "commonName":"Blue-fronted Lancebill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Doryfera ludovicae",
    "commonName":"Green-fronted Lancebill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Dromococcyx pavoninus",
    "commonName":"Pavonine Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Dromococcyx phasianellus",
    "commonName":"Pheasant Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Drymophila devillei",
    "commonName":"Striated Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila ferruginea",
    "commonName":"Ferruginous Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila genei",
    "commonName":"Rufous-tailed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila hellmayri",
    "commonName":"Santa Marta Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila klagesi",
    "commonName":"Klages's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila malura",
    "commonName":"Dusky-tailed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila ochropyga",
    "commonName":"Ochre-rumped Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila rubricollis",
    "commonName":"Bertoni's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila squamata",
    "commonName":"Scaled Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymophila striaticeps",
    "commonName":"Streak-headed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymornis bridgesii",
    "commonName":"Scimitar-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Drymotoxeres pucheranii",
    "commonName":"Greater Scythebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dryocopus galeatus",
    "commonName":"Helmeted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Dryocopus lineatus",
    "commonName":"Lineated Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Dryocopus pileatus",
    "commonName":"Pileated Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Dryocopus schulzi",
    "commonName":"Black-bodied Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Dubusia castaneoventris",
    "commonName":"Chestnut-bellied Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dubusia taeniata",
    "commonName":"Buff-breasted Mountain-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ducula bicolor",
    "commonName":"Pied Imperial-Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ducula latrans",
    "commonName":"Peale's Imperial-Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ducula pacifica",
    "commonName":"Pacific Imperial-Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Dulus dominicus",
    "commonName":"Palmchat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dumetella carolinensis",
    "commonName":"Gray Catbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus leucostictus",
    "commonName":"White-streaked Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus mentalis",
    "commonName":"Plain Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus occidentalis",
    "commonName":"Bicolored Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus plumbeus",
    "commonName":"Plumbeous Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus puncticeps",
    "commonName":"Spot-crowned Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus stictothorax",
    "commonName":"Spot-breasted Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus striaticeps",
    "commonName":"Streak-crowned Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Dysithamnus xanthopterus",
    "commonName":"Rufous-backed Antvireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Egretta caerulea",
    "commonName":"Little Blue Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta garzetta",
    "commonName":"Little Egret",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta gularis",
    "commonName":"Western Reef-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta novaehollandiae",
    "commonName":"White-faced Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta rufescens",
    "commonName":"Reddish Egret",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta sacra",
    "commonName":"Pacific Reef-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta thula",
    "commonName":"Snowy Egret",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Egretta tricolor",
    "commonName":"Tricolored Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Elaenia albiceps",
    "commonName":"White-crested Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia chiriquensis",
    "commonName":"Lesser Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia cristata",
    "commonName":"Plain-crested Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia dayi",
    "commonName":"Great Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia fallax",
    "commonName":"Greater Antillean Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia flavogaster",
    "commonName":"Yellow-bellied Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia frantzii",
    "commonName":"Mountain Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia gigas",
    "commonName":"Mottle-backed Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia martinica",
    "commonName":"Caribbean Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia mesoleuca",
    "commonName":"Olivaceous Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia obscura",
    "commonName":"Highland Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia pallatangae",
    "commonName":"Sierran Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia parvirostris",
    "commonName":"Small-billed Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia pelzelni",
    "commonName":"Brownish Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia ridleyana",
    "commonName":"Noronha Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia ruficeps",
    "commonName":"Rufous-crowned Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia spectabilis",
    "commonName":"Large Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elaenia strepera",
    "commonName":"Slaty Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Elanoides forficatus",
    "commonName":"Swallow-tailed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Elanus leucurus",
    "commonName":"White-tailed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Electron carinatum",
    "commonName":"Keel-billed Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Electron platyrhynchum",
    "commonName":"Broad-billed Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Eleoscytalopus indigoticus",
    "commonName":"White-breasted Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eleoscytalopus psychopompus",
    "commonName":"Bahia Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eleothreptus anomalus",
    "commonName":"Sickle-winged Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Eleothreptus candicans",
    "commonName":"White-winged Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Elvira chionura",
    "commonName":"White-tailed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Elvira cupreiceps",
    "commonName":"Coppery-headed Emerald",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Emberiza aureola",
    "commonName":"Yellow-breasted Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza citrinella",
    "commonName":"Yellowhammer",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza elegans",
    "commonName":"Yellow-throated Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza leucocephalos",
    "commonName":"Pine Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza pallasi",
    "commonName":"Pallas's Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza pusilla",
    "commonName":"Little Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza rustica",
    "commonName":"Rustic Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza schoeniclus",
    "commonName":"Reed Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberiza variabilis",
    "commonName":"Gray Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberizoides herbicola",
    "commonName":"Wedge-tailed Grass-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Emberizoides ypiranganus",
    "commonName":"Lesser Grass-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Embernagra longicauda",
    "commonName":"Pale-throated Pampa-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Embernagra platensis",
    "commonName":"Great Pampa-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax affinis",
    "commonName":"Pine Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax albigularis",
    "commonName":"White-throated Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax alnorum",
    "commonName":"Alder Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax atriceps",
    "commonName":"Black-capped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax difficilis",
    "commonName":"Pacific-slope Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax flavescens",
    "commonName":"Yellowish Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax flaviventris",
    "commonName":"Yellow-bellied Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax fulvifrons",
    "commonName":"Buff-breasted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax hammondii",
    "commonName":"Hammond's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax minimus",
    "commonName":"Least Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax oberholseri",
    "commonName":"Dusky Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax occidentalis",
    "commonName":"Cordilleran Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax traillii",
    "commonName":"Willow Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax virescens",
    "commonName":"Acadian Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonax wrightii",
    "commonName":"Gray Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonomus aurantioatrocristatus",
    "commonName":"Crowned Slaty Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Empidonomus varius",
    "commonName":"Variegated Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Enicognathus ferrugineus",
    "commonName":"Austral Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Enicognathus leptorhynchus",
    "commonName":"Slender-billed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Ensifera ensifera",
    "commonName":"Sword-billed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Entomodestes coracinus",
    "commonName":"Black Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Entomodestes leucotis",
    "commonName":"White-eared Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla erythrura",
    "commonName":"Rufous-tailed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla fjeldsaai",
    "commonName":"Brown-backed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla fulviventris",
    "commonName":"Checker-throated Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla gutturalis",
    "commonName":"Brown-bellied Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla haematonota",
    "commonName":"Stipple-throated Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla leucophthalma",
    "commonName":"White-eyed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla ornata",
    "commonName":"Ornate Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Epinecrophylla spodionota",
    "commonName":"Foothill Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eremophila alpestris",
    "commonName":"Horned Lark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eriocnemis aline",
    "commonName":"Emerald-bellied Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis cupreoventris",
    "commonName":"Coppery-bellied Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis derbyi",
    "commonName":"Black-thighed Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis glaucopoides",
    "commonName":"Blue-capped Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis luciani",
    "commonName":"Sapphire-vented Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis mosquera",
    "commonName":"Golden-breasted Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis nigrivestis",
    "commonName":"Black-breasted Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eriocnemis vestita",
    "commonName":"Glowing Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Erythrura cyaneovirens",
    "commonName":"Red-headed Parrotfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Erythrura pealii",
    "commonName":"Fiji Parrotfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Estrilda astrild",
    "commonName":"Common Waxbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Estrilda caerulescens",
    "commonName":"Lavender Waxbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Estrilda melpoda",
    "commonName":"Orange-cheeked Waxbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Estrilda troglodytes",
    "commonName":"Black-rumped Waxbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eubucco bourcierii",
    "commonName":"Red-headed Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Eubucco richardsoni",
    "commonName":"Lemon-throated Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Eubucco tucinkae",
    "commonName":"Scarlet-hooded Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Eubucco versicolor",
    "commonName":"Versicolored Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Euchrepomis callinota",
    "commonName":"Rufous-rumped Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euchrepomis humeralis",
    "commonName":"Chestnut-shouldered Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euchrepomis sharpei",
    "commonName":"Yellow-rumped Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euchrepomis spodioptila",
    "commonName":"Ash-winged Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eucometis penicillata",
    "commonName":"Gray-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eudocimus albus",
    "commonName":"White Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Eudocimus ruber",
    "commonName":"Scarlet Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Eudromia elegans",
    "commonName":"Elegant Crested-Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Eudromia formosa",
    "commonName":"Quebracho Crested-Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Eudynamys taitensis",
    "commonName":"Long-tailed Koel",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Eudyptes chrysocome",
    "commonName":"Rockhopper Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Eudyptes chrysolophus",
    "commonName":"Macaroni Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Eudyptula minor",
    "commonName":"Little Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Eugenes fulgens",
    "commonName":"Magnificent Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eugralla paradoxa",
    "commonName":"Ochre-flanked Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eulampis holosericeus",
    "commonName":"Green-throated Carib",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eulampis jugularis",
    "commonName":"Purple-throated Carib",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eulidia yarrellii",
    "commonName":"Chilean Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eumomota superciliosa",
    "commonName":"Turquoise-browed Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Euneornis campestris",
    "commonName":"Orangequit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euodice cantans",
    "commonName":"African Silverbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euodice malabarica",
    "commonName":"Indian Silverbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eupetomena macroura",
    "commonName":"Swallow-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Euphagus carolinus",
    "commonName":"Rusty Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphagus cyanocephalus",
    "commonName":"Brewer's Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eupherusa cyanophrys",
    "commonName":"Blue-capped Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eupherusa eximia",
    "commonName":"Stripe-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eupherusa nigriventris",
    "commonName":"Black-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eupherusa poliocerca",
    "commonName":"White-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Euphonia affinis",
    "commonName":"Scrub Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia anneae",
    "commonName":"Tawny-capped Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia cayennensis",
    "commonName":"Golden-sided Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia chalybea",
    "commonName":"Green-throated Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia chlorotica",
    "commonName":"Purple-throated Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia chrysopasta",
    "commonName":"Golden-bellied Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia concinna",
    "commonName":"Velvet-fronted Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia cyanocephala",
    "commonName":"Golden-rumped Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia elegantissima",
    "commonName":"Elegant Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia finschi",
    "commonName":"Finsch's Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia fulvicrissa",
    "commonName":"Fulvous-vented Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia gouldi",
    "commonName":"Olive-backed Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia hirundinacea",
    "commonName":"Yellow-throated Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia imitans",
    "commonName":"Spot-crowned Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia jamaica",
    "commonName":"Jamaican Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia laniirostris",
    "commonName":"Thick-billed Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia luteicapilla",
    "commonName":"Yellow-crowned Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia mesochrysa",
    "commonName":"Bronze-green Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia minuta",
    "commonName":"White-vented Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia musica",
    "commonName":"Antillean Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia pectoralis",
    "commonName":"Chestnut-bellied Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia plumbea",
    "commonName":"Plumbeous Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia rufiventris",
    "commonName":"Rufous-bellied Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia saturata",
    "commonName":"Orange-crowned Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia trinitatis",
    "commonName":"Trinidad Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia violacea",
    "commonName":"Violaceous Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euphonia xanthogaster",
    "commonName":"Orange-bellied Euphonia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euplectes afer",
    "commonName":"Yellow-crowned Bishop",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euplectes franciscanus",
    "commonName":"Orange Bishop",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euptilotis neoxenus",
    "commonName":"Eared Quetzal",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Eurypyga helias",
    "commonName":"Sunbittern",
    "orderName":"Eurypygiformes"
  },
  {
    "sciName":"Euscarthmus meloryphus",
    "commonName":"Tawny-crowned Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Euscarthmus rufomarginatus",
    "commonName":"Rufous-sided Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Eutoxeres aquila",
    "commonName":"White-tipped Sicklebill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Eutoxeres condamini",
    "commonName":"Buff-tailed Sicklebill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Falcipennis canadensis",
    "commonName":"Spruce Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Falco columbarius",
    "commonName":"Merlin",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco deiroleucus",
    "commonName":"Orange-breasted Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco femoralis",
    "commonName":"Aplomado Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco mexicanus",
    "commonName":"Prairie Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco peregrinus",
    "commonName":"Peregrine Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco rufigularis",
    "commonName":"Bat Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco rusticolus",
    "commonName":"Gyrfalcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco sparverius",
    "commonName":"American Kestrel",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco subbuteo",
    "commonName":"Eurasian Hobby",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco tinnunculus",
    "commonName":"Eurasian Kestrel",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Falco vespertinus",
    "commonName":"Red-footed Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Ferminia cerverai",
    "commonName":"Zapata Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ficedula albicilla",
    "commonName":"Taiga Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ficedula narcissina",
    "commonName":"Narcissus Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Florisuga fusca",
    "commonName":"Black Jacobin",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Florisuga mellivora",
    "commonName":"White-necked Jacobin",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Fluvicola albiventer",
    "commonName":"Black-backed Water-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Fluvicola nengeta",
    "commonName":"Masked Water-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Fluvicola pica",
    "commonName":"Pied Water-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicarius analis",
    "commonName":"Black-faced Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicarius colma",
    "commonName":"Rufous-capped Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicarius nigricapillus",
    "commonName":"Black-headed Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicarius rufifrons",
    "commonName":"Rufous-fronted Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicarius rufipectus",
    "commonName":"Rufous-breasted Antthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora erythronotos",
    "commonName":"Black-hooded Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora grantsaui",
    "commonName":"Sincora Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora grisea",
    "commonName":"White-fringed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora iheringi",
    "commonName":"Narrow-billed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora littoralis",
    "commonName":"Restinga Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora melanogaster",
    "commonName":"Black-bellied Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora rufa",
    "commonName":"Rusty-backed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Formicivora serrana",
    "commonName":"Serra Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Forpus coelestis",
    "commonName":"Pacific Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Forpus conspicillatus",
    "commonName":"Spectacled Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Forpus cyanopygius",
    "commonName":"Mexican Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Forpus modestus",
    "commonName":"Dusky-billed Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Forpus passerinus",
    "commonName":"Green-rumped Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Forpus xanthops",
    "commonName":"Yellow-faced Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Forpus xanthopterygius",
    "commonName":"Blue-winged Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Foulehaio carunculatus",
    "commonName":"Wattled Honeyeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Francolinus erckelii",
    "commonName":"Erckel's Francolin",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Francolinus francolinus",
    "commonName":"Black Francolin",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Francolinus pondicerianus",
    "commonName":"Gray Francolin",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Fratercula arctica",
    "commonName":"Atlantic Puffin",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Fratercula cirrhata",
    "commonName":"Tufted Puffin",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Fratercula corniculata",
    "commonName":"Horned Puffin",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Frederickena fulva",
    "commonName":"Fulvous Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Frederickena unduliger",
    "commonName":"Undulated Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Frederickena viridis",
    "commonName":"Black-throated Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Fregata andrewsi",
    "commonName":"Christmas Island Frigatebird",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Fregata ariel",
    "commonName":"Lesser Frigatebird",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Fregata magnificens",
    "commonName":"Magnificent Frigatebird",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Fregata minor",
    "commonName":"Great Frigatebird",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Fregetta grallaria",
    "commonName":"White-bellied Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Fregetta tropica",
    "commonName":"Black-bellied Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Fringilla coelebs",
    "commonName":"Common Chaffinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Fringilla montifringilla",
    "commonName":"Brambling",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Fulica alai",
    "commonName":"Hawaiian Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica americana",
    "commonName":"American Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica ardesiaca",
    "commonName":"Slate-colored Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica armillata",
    "commonName":"Red-gartered Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica caribaea",
    "commonName":"Caribbean Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica cornuta",
    "commonName":"Horned Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica gigantea",
    "commonName":"Giant Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica leucoptera",
    "commonName":"White-winged Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulica rufifrons",
    "commonName":"Red-fronted Coot",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Fulmarus glacialis",
    "commonName":"Northern Fulmar",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Fulmarus glacialoides",
    "commonName":"Southern Fulmar",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Furnarius cristatus",
    "commonName":"Crested Hornero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Furnarius figulus",
    "commonName":"Wing-banded Hornero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Furnarius leucopus",
    "commonName":"Pale-legged Hornero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Furnarius minor",
    "commonName":"Lesser Hornero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Furnarius rufus",
    "commonName":"Rufous Hornero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Furnarius torridus",
    "commonName":"Pale-billed Hornero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Galbalcyrhynchus leucotis",
    "commonName":"White-eared Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbalcyrhynchus purusianus",
    "commonName":"Purus Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula albirostris",
    "commonName":"Yellow-billed Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula chalcothorax",
    "commonName":"Purplish Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula cyanescens",
    "commonName":"Bluish-fronted Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula cyanicollis",
    "commonName":"Blue-cheeked Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula dea",
    "commonName":"Paradise Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula galbula",
    "commonName":"Green-tailed Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula leucogastra",
    "commonName":"Bronzy Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula pastazae",
    "commonName":"Coppery-chested Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula ruficauda",
    "commonName":"Rufous-tailed Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Galbula tombacea",
    "commonName":"White-chinned Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Gallicolumba erythroptera",
    "commonName":"Polynesian Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Gallicolumba stairi",
    "commonName":"Friendly Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Gallinago andina",
    "commonName":"Puna Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago delicata",
    "commonName":"Wilson's Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago gallinago",
    "commonName":"Common Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago imperialis",
    "commonName":"Imperial Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago jamesoni",
    "commonName":"Andean Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago nobilis",
    "commonName":"Noble Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago paraguaiae",
    "commonName":"South American Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago solitaria",
    "commonName":"Solitary Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago stenura",
    "commonName":"Pin-tailed Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago stricklandii",
    "commonName":"Fuegian Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinago undulata",
    "commonName":"Giant Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gallinula chloropus",
    "commonName":"Eurasian Moorhen",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Gallinula galeata",
    "commonName":"Common Gallinule",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Gallinula melanops",
    "commonName":"Spot-flanked Gallinule",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Gallirallus australis",
    "commonName":"Weka",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Gallirallus philippensis",
    "commonName":"Buff-banded Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Gallus gallus",
    "commonName":"Red Junglefowl",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Gampsonyx swainsonii",
    "commonName":"Pearl Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Garrodia nereis",
    "commonName":"Gray-backed Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Garrulax canorus",
    "commonName":"Chinese Hwamei",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gavia adamsii",
    "commonName":"Yellow-billed Loon",
    "orderName":"Gaviiformes"
  },
  {
    "sciName":"Gavia arctica",
    "commonName":"Arctic Loon",
    "orderName":"Gaviiformes"
  },
  {
    "sciName":"Gavia immer",
    "commonName":"Common Loon",
    "orderName":"Gaviiformes"
  },
  {
    "sciName":"Gavia pacifica",
    "commonName":"Pacific Loon",
    "orderName":"Gaviiformes"
  },
  {
    "sciName":"Gavia stellata",
    "commonName":"Red-throated Loon",
    "orderName":"Gaviiformes"
  },
  {
    "sciName":"Gelochelidon nilotica",
    "commonName":"Gull-billed Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Geocerthia serrana",
    "commonName":"Striated Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geococcyx californianus",
    "commonName":"Greater Roadrunner",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Geococcyx velox",
    "commonName":"Lesser Roadrunner",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Geopelia cuneata",
    "commonName":"Diamond Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geopelia striata",
    "commonName":"Zebra Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geositta antarctica",
    "commonName":"Short-billed Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta crassirostris",
    "commonName":"Thick-billed Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta cunicularia",
    "commonName":"Common Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta isabellina",
    "commonName":"Creamy-rumped Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta maritima",
    "commonName":"Grayish Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta peruviana",
    "commonName":"Coastal Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta poeciloptera",
    "commonName":"Campo Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta punensis",
    "commonName":"Puna Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta rufipennis",
    "commonName":"Rufous-banded Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta saxicolina",
    "commonName":"Dark-winged Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geositta tenuirostris",
    "commonName":"Slender-billed Miner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geospiza conirostris",
    "commonName":"Large Cactus-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geospiza difficilis",
    "commonName":"Sharp-beaked Ground-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geospiza fortis",
    "commonName":"Medium Ground-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geospiza fuliginosa",
    "commonName":"Small Ground-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geospiza magnirostris",
    "commonName":"Large Ground-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geospiza scandens",
    "commonName":"Common Cactus-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis aequinoctialis",
    "commonName":"Masked Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis beldingi",
    "commonName":"Belding's Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis flavovelata",
    "commonName":"Altamira Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis formosa",
    "commonName":"Kentucky Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis nelsoni",
    "commonName":"Hooded Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis philadelphia",
    "commonName":"Mourning Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis poliocephala",
    "commonName":"Gray-crowned Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis rostrata",
    "commonName":"Bahama Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis semiflava",
    "commonName":"Olive-crowned Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis speciosa",
    "commonName":"Black-polled Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis tolmiei",
    "commonName":"MacGillivray's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geothlypis trichas",
    "commonName":"Common Yellowthroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Geotrygon albifacies",
    "commonName":"White-faced Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon caniceps",
    "commonName":"Gray-fronted Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon carrikeri",
    "commonName":"Tuxtla Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon chiriquensis",
    "commonName":"Chiriqui Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon chrysia",
    "commonName":"Key West Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon costaricensis",
    "commonName":"Buff-fronted Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon frenata",
    "commonName":"White-throated Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon goldmani",
    "commonName":"Russet-crowned Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon lawrencii",
    "commonName":"Purplish-backed Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon leucometopia",
    "commonName":"White-fronted Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon linearis",
    "commonName":"Lined Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon montana",
    "commonName":"Ruddy Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon mystacea",
    "commonName":"Bridled Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon purpurata",
    "commonName":"Purple Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon saphirina",
    "commonName":"Sapphire Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon veraguensis",
    "commonName":"Olive-backed Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon versicolor",
    "commonName":"Crested Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geotrygon violacea",
    "commonName":"Violaceous Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Geranoaetus albicaudatus",
    "commonName":"White-tailed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Geranoaetus melanoleucus",
    "commonName":"Black-chested Buzzard-Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Geranoaetus polyosoma",
    "commonName":"Variable Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Geranospiza caerulescens",
    "commonName":"Crane Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Gerygone albofrontata",
    "commonName":"Chatham Island Gerygone",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Glaucidium bolivianum",
    "commonName":"Yungas Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium brasilianum",
    "commonName":"Ferruginous Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium costaricanum",
    "commonName":"Costa Rican Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium gnoma",
    "commonName":"Northern Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium griseiceps",
    "commonName":"Central American Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium hardyi",
    "commonName":"Amazonian Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium jardinii",
    "commonName":"Andean Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium minutissimum",
    "commonName":"Least Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium mooreorum",
    "commonName":"Pernambuco Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium nana",
    "commonName":"Austral Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium nubicola",
    "commonName":"Cloud-forest Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium palmarum",
    "commonName":"Colima Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium parkeri",
    "commonName":"Subtropical Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium peruanum",
    "commonName":"Peruvian Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium sanchezi",
    "commonName":"Tamaulipas Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucidium siju",
    "commonName":"Cuban Pygmy-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Glaucis aeneus",
    "commonName":"Bronzy Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Glaucis hirsutus",
    "commonName":"Rufous-breasted Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Glyphorynchus spirurus",
    "commonName":"Wedge-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gnorimopsar chopi",
    "commonName":"Chopi Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Goethalsia bella",
    "commonName":"Pirre Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Goldmania violiceps",
    "commonName":"Violet-capped Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Gracula religiosa",
    "commonName":"Common Hill Myna",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria albigula",
    "commonName":"White-throated Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria alleni",
    "commonName":"Moustached Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria andicolus",
    "commonName":"Stripe-headed Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria bangsi",
    "commonName":"Santa Marta Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria blakei",
    "commonName":"Chestnut Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria capitalis",
    "commonName":"Bay Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria carrikeri",
    "commonName":"Pale-billed Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria dignissima",
    "commonName":"Ochre-striped Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria eludens",
    "commonName":"Elusive Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria erythroleuca",
    "commonName":"Red-and-white Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria erythrotis",
    "commonName":"Rufous-faced Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria excelsa",
    "commonName":"Great Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria flavotincta",
    "commonName":"Yellow-breasted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria gigantea",
    "commonName":"Giant Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria griseonucha",
    "commonName":"Gray-naped Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria guatimalensis",
    "commonName":"Scaled Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria haplonota",
    "commonName":"Plain-backed Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria hypoleuca",
    "commonName":"White-bellied Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria kaestneri",
    "commonName":"Cundinamarca Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria milleri",
    "commonName":"Brown-banded Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria nuchalis",
    "commonName":"Chestnut-naped Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria przewalskii",
    "commonName":"Rusty-tinged Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria quitensis",
    "commonName":"Tawny Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria ridgelyi",
    "commonName":"Jocotoco Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria ruficapilla",
    "commonName":"Chestnut-crowned Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria rufocinerea",
    "commonName":"Bicolored Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria rufula",
    "commonName":"Rufous Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria squamigera",
    "commonName":"Undulated Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria urraoensis",
    "commonName":"Urrao Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria varia",
    "commonName":"Variegated Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaria watkinsi",
    "commonName":"Watkins's Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula cumanensis",
    "commonName":"Sucre Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula ferrugineipectus",
    "commonName":"Rusty-breasted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula flavirostris",
    "commonName":"Ochre-breasted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula lineifrons",
    "commonName":"Crescent-faced Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula loricata",
    "commonName":"Scallop-breasted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula nana",
    "commonName":"Slate-crowned Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula ochraceifrons",
    "commonName":"Ochre-fronted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Grallaricula peruviana",
    "commonName":"Peruvian Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Granatellus pelzelni",
    "commonName":"Rose-breasted Chat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Granatellus sallaei",
    "commonName":"Gray-throated Chat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Granatellus venustus",
    "commonName":"Red-breasted Chat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Graydidascalus brachyurus",
    "commonName":"Short-tailed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Grus americana",
    "commonName":"Whooping Crane",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Grus canadensis",
    "commonName":"Sandhill Crane",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Grus grus",
    "commonName":"Common Crane",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Grus monacha",
    "commonName":"Hooded Crane",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Guarouba guarouba",
    "commonName":"Golden Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Gubernatrix cristata",
    "commonName":"Yellow Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gubernetes yetapa",
    "commonName":"Streamer-tailed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Guira guira",
    "commonName":"Guira Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Gygis alba",
    "commonName":"White Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Gymnocichla nudiceps",
    "commonName":"Bare-crowned Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnoderus foetidus",
    "commonName":"Bare-necked Fruitcrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnogyps californianus",
    "commonName":"California Condor",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Gymnomystax mexicanus",
    "commonName":"Oriole Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnomyza samoensis",
    "commonName":"Mao",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnomyza viridis",
    "commonName":"Giant Honeyeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnopithys leucaspis",
    "commonName":"Bicolored Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnopithys lunulatus",
    "commonName":"Lunulated Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnopithys rufigula",
    "commonName":"Rufous-throated Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnopithys salvini",
    "commonName":"White-throated Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnorhina tibicen",
    "commonName":"Australasian Magpie",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Gymnorhinus cyanocephalus",
    "commonName":"Pinyon Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Habia atrimaxillaris",
    "commonName":"Black-cheeked Ant-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Habia cristata",
    "commonName":"Crested Ant-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Habia fuscicauda",
    "commonName":"Red-throated Ant-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Habia gutturalis",
    "commonName":"Sooty Ant-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Habia rubica",
    "commonName":"Red-crowned Ant-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Haematoderus militaris",
    "commonName":"Crimson Fruitcrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Haematopus ater",
    "commonName":"Blackish Oystercatcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Haematopus bachmani",
    "commonName":"Black Oystercatcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Haematopus chathamensis",
    "commonName":"Chatham Oystercatcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Haematopus leucopodus",
    "commonName":"Magellanic Oystercatcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Haematopus palliatus",
    "commonName":"American Oystercatcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Haemorhous cassinii",
    "commonName":"Cassin's Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Haemorhous mexicanus",
    "commonName":"House Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Haemorhous purpureus",
    "commonName":"Purple Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Haliaeetus albicilla",
    "commonName":"White-tailed Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Haliaeetus leucocephalus",
    "commonName":"Bald Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Haliaeetus pelagicus",
    "commonName":"Steller's Sea-Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Halobaena caerulea",
    "commonName":"Blue Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Hapalopsittaca amazonina",
    "commonName":"Rusty-faced Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Hapalopsittaca fuertesi",
    "commonName":"Indigo-winged Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Hapalopsittaca melanotis",
    "commonName":"Black-winged Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Hapalopsittaca pyrrhops",
    "commonName":"Red-faced Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Hapaloptila castanea",
    "commonName":"White-faced Nunbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Haplophaedia assimilis",
    "commonName":"Buff-thighed Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Haplophaedia aureliae",
    "commonName":"Greenish Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Haplophaedia lugens",
    "commonName":"Hoary Puffleg",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Haplospiza rustica",
    "commonName":"Slaty Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Haplospiza unicolor",
    "commonName":"Uniform Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Harpagus bidentatus",
    "commonName":"Double-toothed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Harpagus diodon",
    "commonName":"Rufous-thighed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Harpia harpyja",
    "commonName":"Harpy Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Heliactin bilophus",
    "commonName":"Horned Sungem",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus amethysticollis",
    "commonName":"Amethyst-throated Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus exortis",
    "commonName":"Tourmaline Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus mavors",
    "commonName":"Orange-throated Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus micraster",
    "commonName":"Little Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus regalis",
    "commonName":"Royal Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus strophianus",
    "commonName":"Gorgeted Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliangelus viola",
    "commonName":"Purple-throated Sunangel",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Helicolestes hamatus",
    "commonName":"Slender-billed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Heliobletus contaminatus",
    "commonName":"Sharp-billed Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Heliodoxa aurescens",
    "commonName":"Gould's Jewelfront",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa branickii",
    "commonName":"Rufous-webbed Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa gularis",
    "commonName":"Pink-throated Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa imperatrix",
    "commonName":"Empress Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa jacula",
    "commonName":"Green-crowned Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa leadbeateri",
    "commonName":"Violet-fronted Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa rubinoides",
    "commonName":"Fawn-breasted Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa schreibersii",
    "commonName":"Black-throated Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliodoxa xanthogonys",
    "commonName":"Velvet-browed Brilliant",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliomaster constantii",
    "commonName":"Plain-capped Starthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliomaster furcifer",
    "commonName":"Blue-tufted Starthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliomaster longirostris",
    "commonName":"Long-billed Starthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliomaster squamosus",
    "commonName":"Stripe-breasted Starthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliornis fulica",
    "commonName":"Sungrebe",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Heliothryx auritus",
    "commonName":"Black-eared Fairy",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Heliothryx barroti",
    "commonName":"Purple-crowned Fairy",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hellmayrea gularis",
    "commonName":"White-browed Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Helmitheros vermivorum",
    "commonName":"Worm-eating Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemignathus flavus",
    "commonName":"Oahu Amakihi",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemignathus kauaiensis",
    "commonName":"Kauai Amakihi",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemignathus munroi",
    "commonName":"Akiapolaau",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemignathus virens",
    "commonName":"Hawaii Amakihi",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemiphaga chathamensis",
    "commonName":"Chatham Island Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Hemispingus atropileus",
    "commonName":"Black-capped Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus calophrys",
    "commonName":"Orange-browed Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus frontalis",
    "commonName":"Oleaginous Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus melanotis",
    "commonName":"Black-eared Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus parodii",
    "commonName":"Parodi's Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus reyi",
    "commonName":"Gray-capped Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus rufosuperciliaris",
    "commonName":"Rufous-browed Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus superciliaris",
    "commonName":"Superciliaried Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus trifasciatus",
    "commonName":"Three-striped Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus verticalis",
    "commonName":"Black-headed Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemispingus xanthophthalmus",
    "commonName":"Drab Hemispingus",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemithraupis flavicollis",
    "commonName":"Yellow-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemithraupis guira",
    "commonName":"Guira Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemithraupis ruficapilla",
    "commonName":"Rufous-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus cinnamomeipectus",
    "commonName":"Cinnamon-breasted Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus cohnhafti",
    "commonName":"Acre Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus diops",
    "commonName":"Drab-breasted Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus flammulatus",
    "commonName":"Flammulated Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus furcatus",
    "commonName":"Fork-tailed Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus granadensis",
    "commonName":"Black-throated Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus griseipectus",
    "commonName":"White-bellied Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus inornatus",
    "commonName":"Pelzeln's Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus iohannis",
    "commonName":"Johannes's Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus josephinae",
    "commonName":"Boat-billed Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus kaempferi",
    "commonName":"Kaempfer's Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus margaritaceiventer",
    "commonName":"Pearly-vented Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus minimus",
    "commonName":"Zimmer's Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus minor",
    "commonName":"Snethlage's Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus mirandae",
    "commonName":"Buff-breasted Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus nidipendulus",
    "commonName":"Hangnest Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus obsoletus",
    "commonName":"Brown-breasted Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus orbitatus",
    "commonName":"Eye-ringed Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus rufigularis",
    "commonName":"Buff-throated Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus spodiops",
    "commonName":"Yungas Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus striaticollis",
    "commonName":"Stripe-necked Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hemitriccus zosterops",
    "commonName":"White-eyed Tody-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Henicorhina leucophrys",
    "commonName":"Gray-breasted Wood-Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Henicorhina leucoptera",
    "commonName":"Bar-winged Wood-Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Henicorhina leucosticta",
    "commonName":"White-breasted Wood-Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Henicorhina negreti",
    "commonName":"Munchique Wood-Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpetotheres cachinnans",
    "commonName":"Laughing Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Herpsilochmus atricapillus",
    "commonName":"Black-capped Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus axillaris",
    "commonName":"Yellow-breasted Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus dorsimaculatus",
    "commonName":"Spot-backed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus dugandi",
    "commonName":"Dugand's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus gentryi",
    "commonName":"Ancient Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus longirostris",
    "commonName":"Large-billed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus motacilloides",
    "commonName":"Creamy-bellied Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus parkeri",
    "commonName":"Ash-throated Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus pectoralis",
    "commonName":"Pectoral Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus pileatus",
    "commonName":"Bahia Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus roraimae",
    "commonName":"Roraiman Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus rufimarginatus",
    "commonName":"Rufous-winged Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus sellowi",
    "commonName":"Caatinga Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus stictocephalus",
    "commonName":"Todd's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Herpsilochmus sticturus",
    "commonName":"Spot-tailed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Heterocercus aurantiivertex",
    "commonName":"Orange-crowned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Heterocercus flavivertex",
    "commonName":"Yellow-crowned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Heterocercus linteatus",
    "commonName":"Flame-crowned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Heteronetta atricapilla",
    "commonName":"Black-headed Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Heterospingus rubrifrons",
    "commonName":"Sulphur-rumped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Heterospingus xanthopygius",
    "commonName":"Scarlet-browed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Himantopus leucocephalus",
    "commonName":"Pied Stilt",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Himantopus mexicanus",
    "commonName":"Black-necked Stilt",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Himatione sanguinea",
    "commonName":"Apapane",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hirundinea ferruginea",
    "commonName":"Cliff Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hirundo neoxena",
    "commonName":"Welcome Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hirundo rustica",
    "commonName":"Barn Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hirundo tahitica",
    "commonName":"Pacific Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Histrionicus histrionicus",
    "commonName":"Harlequin Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Horornis diphone",
    "commonName":"Japanese Bush-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Horornis ruficapilla",
    "commonName":"Fiji Bush-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hydrobates pelagicus",
    "commonName":"European Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Hydrocoloeus minutus",
    "commonName":"Little Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Hydroprogne caspia",
    "commonName":"Caspian Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Hydropsalis cayennensis",
    "commonName":"White-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Hydropsalis climacocerca",
    "commonName":"Ladder-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Hydropsalis maculicaudus",
    "commonName":"Spot-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Hydropsalis torquata",
    "commonName":"Scissor-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Hylexetastes perrotii",
    "commonName":"Red-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylexetastes stresemanni",
    "commonName":"Bar-bellied Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylocharis chrysura",
    "commonName":"Gilded Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocharis cyanus",
    "commonName":"White-chinned Sapphire",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocharis eliciae",
    "commonName":"Blue-throated Goldentail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocharis grayi",
    "commonName":"Blue-headed Sapphire",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocharis leucotis",
    "commonName":"White-eared Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocharis sapphirina",
    "commonName":"Rufous-throated Sapphire",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocharis xantusii",
    "commonName":"Xantus's Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylocichla mustelina",
    "commonName":"Wood Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylocryptus erythrocephalus",
    "commonName":"Henna-hooded Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylocryptus rectirostris",
    "commonName":"Chestnut-capped Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hyloctistes subulatus",
    "commonName":"Striped Woodhaunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylomanes momotula",
    "commonName":"Tody Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Hylonympha macrocerca",
    "commonName":"Scissor-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Hylopezus auricularis",
    "commonName":"Masked Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus berlepschi",
    "commonName":"Amazonian Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus dives",
    "commonName":"Thicket Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus fulviventris",
    "commonName":"White-lored Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus macularius",
    "commonName":"Spotted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus nattereri",
    "commonName":"Speckle-breasted Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus ochroleucus",
    "commonName":"White-browed Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylopezus perspicillatus",
    "commonName":"Streak-chested Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus amaurocephalus",
    "commonName":"Gray-eyed Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus aurantiifrons",
    "commonName":"Golden-fronted Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus brunneiceps",
    "commonName":"Brown-headed Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus decurtatus",
    "commonName":"Lesser Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus flavipes",
    "commonName":"Scrub Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus hypoxanthus",
    "commonName":"Dusky-capped Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus muscicapinus",
    "commonName":"Buff-cheeked Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus ochraceiceps",
    "commonName":"Tawny-crowned Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus olivaceus",
    "commonName":"Olivaceous Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus pectoralis",
    "commonName":"Ashy-headed Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus poicilotis",
    "commonName":"Rufous-crowned Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus sclateri",
    "commonName":"Tepui Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus semibrunneus",
    "commonName":"Rufous-naped Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus semicinereus",
    "commonName":"Gray-chested Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophilus thoracicus",
    "commonName":"Lemon-chested Greenlet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophylax naevioides",
    "commonName":"Spotted Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophylax naevius",
    "commonName":"Spot-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylophylax punctulatus",
    "commonName":"Dot-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylorchilus navai",
    "commonName":"Nava's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hylorchilus sumichrasti",
    "commonName":"Sumichrast's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hymenops perspicillatus",
    "commonName":"Spectacled Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypnelus ruficollis",
    "commonName":"Russet-throated Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Hypocnemis cantator",
    "commonName":"Guianan Warbling-Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemis flavescens",
    "commonName":"Imeri Warbling-Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemis hypoxantha",
    "commonName":"Yellow-browed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemis ochrogyna",
    "commonName":"Rondonia Warbling-Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemis peruviana",
    "commonName":"Peruvian Warbling-Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemis striata",
    "commonName":"Spix's Warbling-Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemis subflava",
    "commonName":"Yellow-breasted Warbling-Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemoides maculicauda",
    "commonName":"Band-tailed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypocnemoides melanopogon",
    "commonName":"Black-chinned Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypoedaleus guttatus",
    "commonName":"Spot-backed Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Hypopyrrhus pyrohypogaster",
    "commonName":"Red-bellied Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ianthocincla pectoralis",
    "commonName":"Greater Necklaced Laughingthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ibycter americanus",
    "commonName":"Red-throated Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Icteria virens",
    "commonName":"Yellow-breasted Chat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus abeillei",
    "commonName":"Black-backed Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus auratus",
    "commonName":"Orange Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus auricapillus",
    "commonName":"Orange-crowned Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus bonana",
    "commonName":"Martinique Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus bullockii",
    "commonName":"Bullock's Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus cayanensis",
    "commonName":"Epaulet Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus chrysater",
    "commonName":"Yellow-backed Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus croconotus",
    "commonName":"Orange-backed Troupial",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus cucullatus",
    "commonName":"Hooded Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus dominicensis",
    "commonName":"Hispaniolan Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus galbula",
    "commonName":"Baltimore Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus graceannae",
    "commonName":"White-edged Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus graduacauda",
    "commonName":"Audubon's Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus gularis",
    "commonName":"Altamira Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus icterus",
    "commonName":"Venezuelan Troupial",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus jamacaii",
    "commonName":"Campo Troupial",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus laudabilis",
    "commonName":"St. Lucia Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus leucopteryx",
    "commonName":"Jamaican Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus maculialatus",
    "commonName":"Bar-winged Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus melanopsis",
    "commonName":"Cuban Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus mesomelas",
    "commonName":"Yellow-tailed Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus nigrogularis",
    "commonName":"Yellow Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus northropi",
    "commonName":"Bahama Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus parisorum",
    "commonName":"Scott's Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus pectoralis",
    "commonName":"Spot-breasted Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus portoricensis",
    "commonName":"Puerto Rican Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus prosthemelas",
    "commonName":"Black-cowled Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus pustulatus",
    "commonName":"Streak-backed Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus pyrrhopterus",
    "commonName":"Variable Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus spurius",
    "commonName":"Orchard Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Icterus wagleri",
    "commonName":"Black-vented Oriole",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ictinia mississippiensis",
    "commonName":"Mississippi Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Ictinia plumbea",
    "commonName":"Plumbeous Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Idiopsar brachyurus",
    "commonName":"Short-tailed Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ilicura militaris",
    "commonName":"Pin-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Incaspiza laeta",
    "commonName":"Buff-bridled Inca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Incaspiza ortizi",
    "commonName":"Gray-winged Inca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Incaspiza personata",
    "commonName":"Rufous-backed Inca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Incaspiza pulchra",
    "commonName":"Great Inca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Incaspiza watkinsi",
    "commonName":"Little Inca-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Inezia caudata",
    "commonName":"Pale-tipped Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Inezia inornata",
    "commonName":"Plain Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Inezia subflava",
    "commonName":"Amazonian Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Inezia tenuirostris",
    "commonName":"Slender-billed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iodopleura fusca",
    "commonName":"Dusky Purpletuft",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iodopleura isabellae",
    "commonName":"White-browed Purpletuft",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iodopleura pipra",
    "commonName":"Buff-throated Purpletuft",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iridophanes pulcherrimus",
    "commonName":"Golden-collared Honeycreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iridosornis analis",
    "commonName":"Yellow-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iridosornis jelskii",
    "commonName":"Golden-collared Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iridosornis porphyrocephalus",
    "commonName":"Purplish-mantled Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iridosornis reinhardti",
    "commonName":"Yellow-scarfed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Iridosornis rufivertex",
    "commonName":"Golden-crowned Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Isleria guttata",
    "commonName":"Rufous-bellied Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Isleria hauxwelli",
    "commonName":"Plain-throated Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ixobrychus exilis",
    "commonName":"Least Bittern",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ixobrychus involucris",
    "commonName":"Stripe-backed Bittern",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ixobrychus sinensis",
    "commonName":"Yellow Bittern",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ixoreus naevius",
    "commonName":"Varied Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Jabiru mycteria",
    "commonName":"Jabiru",
    "orderName":"Ciconiiformes"
  },
  {
    "sciName":"Jacamaralcyon tridactyla",
    "commonName":"Three-toed Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Jacamerops aureus",
    "commonName":"Great Jacamar",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Jacana jacana",
    "commonName":"Wattled Jacana",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Jacana spinosa",
    "commonName":"Northern Jacana",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Junco hyemalis",
    "commonName":"Dark-eyed Junco",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Junco phaeonotus",
    "commonName":"Yellow-eyed Junco",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Junco vulcani",
    "commonName":"Volcano Junco",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Jynx torquilla",
    "commonName":"Eurasian Wryneck",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Klais guimeti",
    "commonName":"Violet-headed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Knipolegus aterrimus",
    "commonName":"White-winged Black-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus cyanirostris",
    "commonName":"Blue-billed Black-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus hudsoni",
    "commonName":"Hudson's Black-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus lophotes",
    "commonName":"Crested Black-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus nigerrimus",
    "commonName":"Velvety Black-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus orenocensis",
    "commonName":"Riverside Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus poecilocercus",
    "commonName":"Amazonian Black-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus poecilurus",
    "commonName":"Rufous-tailed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus signatus",
    "commonName":"Andean Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Knipolegus striaticeps",
    "commonName":"Cinereous Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lafresnaya lafresnayi",
    "commonName":"Mountain Velvetbreast",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lagopus lagopus",
    "commonName":"Willow Ptarmigan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Lagopus leucura",
    "commonName":"White-tailed Ptarmigan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Lagopus muta",
    "commonName":"Rock Ptarmigan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Lalage maculosa",
    "commonName":"Polynesian Triller",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lalage sharpei",
    "commonName":"Samoan Triller",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lampornis amethystinus",
    "commonName":"Amethyst-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lampornis calolaemus",
    "commonName":"Purple-throated Mountain-gem",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lampornis castaneoventris",
    "commonName":"White-throated Mountain-gem",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lampornis clemenciae",
    "commonName":"Blue-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lampornis hemileucus",
    "commonName":"White-bellied Mountain-gem",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lampornis sybillae",
    "commonName":"Green-breasted Mountain-gem",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lampornis viridipallens",
    "commonName":"Green-throated Mountain-gem",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lamprolaima rhami",
    "commonName":"Garnet-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lamprolia victoriae",
    "commonName":"Silktail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lampropsar tanagrinus",
    "commonName":"Velvet-fronted Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lamprospiza melanoleuca",
    "commonName":"Red-billed Pied Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Laniisoma elegans",
    "commonName":"Shrike-like Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanio aurantius",
    "commonName":"Black-throated Shrike-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanio fulvus",
    "commonName":"Fulvous Shrike-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanio leucothorax",
    "commonName":"White-throated Shrike-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanio versicolor",
    "commonName":"White-winged Shrike-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Laniocera hypopyrra",
    "commonName":"Cinereous Mourner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Laniocera rufescens",
    "commonName":"Speckled Mourner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanius cristatus",
    "commonName":"Brown Shrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanius excubitor",
    "commonName":"Northern Shrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lanius ludovicianus",
    "commonName":"Loggerhead Shrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Larosterna inca",
    "commonName":"Inca Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus argentatus",
    "commonName":"Herring Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus atlanticus",
    "commonName":"Olrog's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus belcheri",
    "commonName":"Belcher's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus californicus",
    "commonName":"California Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus canus",
    "commonName":"Mew Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus crassirostris",
    "commonName":"Black-tailed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus delawarensis",
    "commonName":"Ring-billed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus dominicanus",
    "commonName":"Kelp Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus fuscus",
    "commonName":"Lesser Black-backed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus glaucescens",
    "commonName":"Glaucous-winged Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus glaucoides",
    "commonName":"Iceland Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus heermanni",
    "commonName":"Heermann's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus hyperboreus",
    "commonName":"Glaucous Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus livens",
    "commonName":"Yellow-footed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus marinus",
    "commonName":"Great Black-backed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus michahellis",
    "commonName":"Yellow-legged Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus occidentalis",
    "commonName":"Western Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus schistisagus",
    "commonName":"Slaty-backed Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larus thayeri",
    "commonName":"Thayer's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Larvivora sibilans",
    "commonName":"Rufous-tailed Robin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Laterallus albigularis",
    "commonName":"White-throated Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus exilis",
    "commonName":"Gray-breasted Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus jamaicensis",
    "commonName":"Black Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus leucopyrrhus",
    "commonName":"Red-and-white Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus levraudi",
    "commonName":"Rusty-flanked Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus melanophaius",
    "commonName":"Rufous-sided Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus ruber",
    "commonName":"Ruddy Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus spilonotus",
    "commonName":"Galapagos Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Laterallus xenopterus",
    "commonName":"Rufous-faced Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Lathrotriccus euleri",
    "commonName":"Euler's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lathrotriccus griseipectus",
    "commonName":"Gray-breasted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Legatus leucophaius",
    "commonName":"Piratic Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leiothrix lutea",
    "commonName":"Red-billed Leiothrix",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes affinis",
    "commonName":"Spot-crowned Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes albolineatus",
    "commonName":"Lineated Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes angustirostris",
    "commonName":"Narrow-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes falcinellus",
    "commonName":"Scalloped Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes fatimalimae",
    "commonName":"Inambari Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes lacrymiger",
    "commonName":"Montane Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes leucogaster",
    "commonName":"White-striped Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes souleyetii",
    "commonName":"Streak-headed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidocolaptes squamatus",
    "commonName":"Scaled Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidopyga coeruleogularis",
    "commonName":"Sapphire-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lepidopyga goudoti",
    "commonName":"Shining-green Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lepidopyga lilliae",
    "commonName":"Sapphire-bellied Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lepidothrix coeruleocapilla",
    "commonName":"Cerulean-capped Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidothrix coronata",
    "commonName":"Blue-crowned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidothrix iris",
    "commonName":"Opal-crowned Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidothrix isidorei",
    "commonName":"Blue-rumped Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidothrix nattereri",
    "commonName":"Snow-capped Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidothrix serena",
    "commonName":"White-fronted Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lepidothrix suavissima",
    "commonName":"Orange-bellied Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura aegithaloides",
    "commonName":"Plain-mantled Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura andicola",
    "commonName":"Andean Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura fuliginiceps",
    "commonName":"Brown-capped Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura pileata",
    "commonName":"Rusty-crowned Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura platensis",
    "commonName":"Tufted Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura setaria",
    "commonName":"Araucaria Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura striata",
    "commonName":"Streaked Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura striolata",
    "commonName":"Striolated Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura xenothorax",
    "commonName":"White-browed Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptasthenura yanacensis",
    "commonName":"Tawny Tit-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptodon cayanensis",
    "commonName":"Gray-headed Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Leptodon forbesi",
    "commonName":"White-collared Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Leptopogon amaurocephalus",
    "commonName":"Sepia-capped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptopogon rufipectus",
    "commonName":"Rufous-breasted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptopogon superciliaris",
    "commonName":"Slaty-capped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptopogon taczanowskii",
    "commonName":"Inca Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leptosittaca branickii",
    "commonName":"Golden-plumed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Leptotila cassini",
    "commonName":"Gray-chested Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila conoveri",
    "commonName":"Tolima Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila jamaicensis",
    "commonName":"Caribbean Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila megalura",
    "commonName":"Large-tailed Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila ochraceiventris",
    "commonName":"Ochre-bellied Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila pallida",
    "commonName":"Pallid Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila plumbeiceps",
    "commonName":"Gray-headed Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila rufaxilla",
    "commonName":"Gray-fronted Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila verreauxi",
    "commonName":"White-tipped Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Leptotila wellsi",
    "commonName":"Grenada Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Lesbia nuna",
    "commonName":"Green-tailed Trainbearer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lesbia victoriae",
    "commonName":"Black-tailed Trainbearer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lessonia oreas",
    "commonName":"Andean Negrito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lessonia rufa",
    "commonName":"Austral Negrito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leucippus baeri",
    "commonName":"Tumbes Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Leucippus chlorocercus",
    "commonName":"Olive-spotted Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Leucippus fallax",
    "commonName":"Buffy Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Leucippus taczanowskii",
    "commonName":"Spot-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Leucochloris albicollis",
    "commonName":"White-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Leucophaeus atricilla",
    "commonName":"Laughing Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Leucophaeus fuliginosus",
    "commonName":"Lava Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Leucophaeus modestus",
    "commonName":"Gray Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Leucophaeus pipixcan",
    "commonName":"Franklin's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Leucophaeus scoresbii",
    "commonName":"Dolphin Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Leucopternis kuhli",
    "commonName":"White-browed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Leucopternis melanops",
    "commonName":"Black-faced Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Leucopternis semiplumbeus",
    "commonName":"Semiplumbeous Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Leucosticte atrata",
    "commonName":"Black Rosy-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leucosticte australis",
    "commonName":"Brown-capped Rosy-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Leucosticte tephrocotis",
    "commonName":"Gray-crowned Rosy-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Limnoctites rectirostris",
    "commonName":"Straight-billed Reedhaunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Limnodromus griseus",
    "commonName":"Short-billed Dowitcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Limnodromus scolopaceus",
    "commonName":"Long-billed Dowitcher",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Limnornis curvirostris",
    "commonName":"Curve-billed Reedhaunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Limnothlypis swainsonii",
    "commonName":"Swainson's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Limosa fedoa",
    "commonName":"Marbled Godwit",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Limosa haemastica",
    "commonName":"Hudsonian Godwit",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Limosa lapponica",
    "commonName":"Bar-tailed Godwit",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Limosa limosa",
    "commonName":"Black-tailed Godwit",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Liosceles thoracicus",
    "commonName":"Rusty-belted Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus fuscocinereus",
    "commonName":"Dusky Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus lanioides",
    "commonName":"Cinnamon-vented Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus streptophorus",
    "commonName":"Rose-collared Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus unirufus",
    "commonName":"Rufous Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus uropygialis",
    "commonName":"Scimitar-winged Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus vociferans",
    "commonName":"Screaming Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lipaugus weberi",
    "commonName":"Chestnut-capped Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lochmias nematura",
    "commonName":"Sharp-tailed Streamcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Locustella lanceolata",
    "commonName":"Lanceolated Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Locustella ochotensis",
    "commonName":"Middendorff's Grasshopper-Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loddigesia mirabilis",
    "commonName":"Marvelous Spatuletail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lonchura atricapilla",
    "commonName":"Chestnut Munia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lonchura castaneothorax",
    "commonName":"Chestnut-breasted Munia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lonchura maja",
    "commonName":"White-headed Munia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lonchura malacca",
    "commonName":"Tricolored Munia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lonchura oryzivora",
    "commonName":"Java Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lonchura punctulata",
    "commonName":"Nutmeg Mannikin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophodytes cucullatus",
    "commonName":"Hooded Merganser",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Lophonetta specularioides",
    "commonName":"Crested Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Lophornis adorabilis",
    "commonName":"White-crested Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis brachylophus",
    "commonName":"Short-crested Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis chalybeus",
    "commonName":"Festive Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis delattrei",
    "commonName":"Rufous-crested Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis gouldii",
    "commonName":"Dot-eared Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis helenae",
    "commonName":"Black-crested Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis magnificus",
    "commonName":"Frilled Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis ornatus",
    "commonName":"Tufted Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis pavoninus",
    "commonName":"Peacock Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophornis stictolophus",
    "commonName":"Spangled Coquette",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Lophospingus griseocristatus",
    "commonName":"Gray-crested Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophospingus pusillus",
    "commonName":"Black-crested Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophostrix cristata",
    "commonName":"Crested Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Lophotriccus eulophotes",
    "commonName":"Long-crested Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophotriccus galeatus",
    "commonName":"Helmeted Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophotriccus pileatus",
    "commonName":"Scale-crested Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophotriccus vitiosus",
    "commonName":"Double-banded Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lophura leucomelanos",
    "commonName":"Kalij Pheasant",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Lophura nycthemera",
    "commonName":"Silver Pheasant",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Loxia curvirostra",
    "commonName":"Red Crossbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxia leucoptera",
    "commonName":"White-winged Crossbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxia megaplaga",
    "commonName":"Hispaniolan Crossbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxigilla barbadensis",
    "commonName":"Barbados Bullfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxigilla noctis",
    "commonName":"Lesser Antillean Bullfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxigilla portoricensis",
    "commonName":"Puerto Rican Bullfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxigilla violacea",
    "commonName":"Greater Antillean Bullfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxioides bailleui",
    "commonName":"Palila",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxipasser anoxanthus",
    "commonName":"Yellow-shouldered Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxops caeruleirostris",
    "commonName":"Akekee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxops coccineus",
    "commonName":"Akepa",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Loxops mana",
    "commonName":"Hawaii Creeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lurocalis rufiventris",
    "commonName":"Rufous-bellied Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Lurocalis semitorquatus",
    "commonName":"Short-tailed Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Luscinia svecica",
    "commonName":"Bluethroat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Lymnocryptes minimus",
    "commonName":"Jack Snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Machaeropterus deliciosus",
    "commonName":"Club-winged Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Machaeropterus pyrocephalus",
    "commonName":"Fiery-capped Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Machaeropterus regulus",
    "commonName":"Striped Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Machetornis rixosa",
    "commonName":"Cattle Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mackenziaena leachii",
    "commonName":"Large-tailed Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mackenziaena severa",
    "commonName":"Tufted Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Macroagelaius imthurni",
    "commonName":"Golden-tufted Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Macroagelaius subalaris",
    "commonName":"Mountain Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Macronectes giganteus",
    "commonName":"Southern Giant-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Macronectes halli",
    "commonName":"Northern Giant-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Macropsalis forcipata",
    "commonName":"Long-trained Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Magumma parva",
    "commonName":"Anianiau",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Malacoptila fulvogularis",
    "commonName":"Black-streaked Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Malacoptila fusca",
    "commonName":"White-chested Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Malacoptila mystacalis",
    "commonName":"Moustached Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Malacoptila panamensis",
    "commonName":"White-whiskered Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Malacoptila rufa",
    "commonName":"Rufous-necked Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Malacoptila semicincta",
    "commonName":"Semicollared Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Malacoptila striata",
    "commonName":"Crescent-chested Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Manacus aurantiacus",
    "commonName":"Orange-collared Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Manacus candei",
    "commonName":"White-collared Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Manacus manacus",
    "commonName":"White-bearded Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Manacus vitellinus",
    "commonName":"Golden-collared Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Margarobyas lawrencii",
    "commonName":"Bare-legged Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Margarops fuscatus",
    "commonName":"Pearly-eyed Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Margarornis bellulus",
    "commonName":"Beautiful Treerunner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Margarornis rubiginosus",
    "commonName":"Ruddy Treerunner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Margarornis squamiger",
    "commonName":"Pearled Treerunner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Margarornis stellatus",
    "commonName":"Fulvous-dotted Treerunner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Masius chrysopterus",
    "commonName":"Golden-winged Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mayrornis lessoni",
    "commonName":"Slaty Monarch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mayrornis versicolor",
    "commonName":"Ogea Monarch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mecocerculus calopterus",
    "commonName":"Rufous-winged Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mecocerculus hellmayri",
    "commonName":"Buff-banded Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mecocerculus leucophrys",
    "commonName":"White-throated Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mecocerculus minor",
    "commonName":"Sulphur-bellied Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mecocerculus poecilocercus",
    "commonName":"White-tailed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mecocerculus stictopterus",
    "commonName":"White-banded Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Megaceryle alcyon",
    "commonName":"Belted Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Megaceryle torquata",
    "commonName":"Ringed Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Megarynchus pitangua",
    "commonName":"Boat-billed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Megascops albogularis",
    "commonName":"White-throated Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops asio",
    "commonName":"Eastern Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops atricapilla",
    "commonName":"Black-capped Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops barbarus",
    "commonName":"Bearded Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops choliba",
    "commonName":"Tropical Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops clarkii",
    "commonName":"Bare-shanked Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops colombianus",
    "commonName":"Colombian Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops cooperi",
    "commonName":"Pacific Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops guatemalae",
    "commonName":"Vermiculated Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops hoyi",
    "commonName":"Montane Forest Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops ingens",
    "commonName":"Rufescent Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops kennicottii",
    "commonName":"Western Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops koepckeae",
    "commonName":"Koepcke's Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops marshalli",
    "commonName":"Cloud-forest Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops nudipes",
    "commonName":"Puerto Rican Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops petersoni",
    "commonName":"Cinnamon Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops roboratus",
    "commonName":"Peruvian Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops sanctaecatarinae",
    "commonName":"Long-tufted Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops seductus",
    "commonName":"Balsas Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops trichopsis",
    "commonName":"Whiskered Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megascops watsonii",
    "commonName":"Tawny-bellied Screech-Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Megastictus margaritatus",
    "commonName":"Pearly Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Megaxenops parnaguae",
    "commonName":"Great Xenops",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanerpes aurifrons",
    "commonName":"Golden-fronted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes cactorum",
    "commonName":"White-fronted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes candidus",
    "commonName":"White Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes carolinus",
    "commonName":"Red-bellied Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes chrysauchen",
    "commonName":"Golden-naped Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes chrysogenys",
    "commonName":"Golden-cheeked Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes cruentatus",
    "commonName":"Yellow-tufted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes erythrocephalus",
    "commonName":"Red-headed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes flavifrons",
    "commonName":"Yellow-fronted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes formicivorus",
    "commonName":"Acorn Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes herminieri",
    "commonName":"Guadeloupe Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes hoffmannii",
    "commonName":"Hoffmann's Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes hypopolius",
    "commonName":"Gray-breasted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes lewis",
    "commonName":"Lewis's Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes portoricensis",
    "commonName":"Puerto Rican Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes pucherani",
    "commonName":"Black-cheeked Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes pulcher",
    "commonName":"Beautiful Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes pygmaeus",
    "commonName":"Yucatan Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes radiolatus",
    "commonName":"Jamaican Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes rubricapillus",
    "commonName":"Red-crowned Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes striatus",
    "commonName":"Hispaniolan Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes superciliaris",
    "commonName":"West Indian Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanerpes uropygialis",
    "commonName":"Gila Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Melanitta americana",
    "commonName":"Black Scoter",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Melanitta fusca",
    "commonName":"White-winged Scoter",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Melanitta perspicillata",
    "commonName":"Surf Scoter",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Melanodera melanodera",
    "commonName":"White-bridled Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanodera xanthogramma",
    "commonName":"Yellow-bridled Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanopareia elegans",
    "commonName":"Elegant Crescentchest",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanopareia maranonica",
    "commonName":"Mara?on Crescentchest",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanopareia maximiliani",
    "commonName":"Olive-crowned Crescentchest",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanopareia torquata",
    "commonName":"Collared Crescentchest",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanoptila glabrirostris",
    "commonName":"Black Catbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanospiza richardsoni",
    "commonName":"St. Lucia Black Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanotis caerulescens",
    "commonName":"Blue Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melanotis hypoleucus",
    "commonName":"Blue-and-white Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Meleagris gallopavo",
    "commonName":"Wild Turkey",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Meleagris ocellata",
    "commonName":"Ocellated Turkey",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Mellisuga helenae",
    "commonName":"Bee Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Mellisuga minima",
    "commonName":"Vervain Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Melopsittacus undulatus",
    "commonName":"Budgerigar",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Melopyrrha nigra",
    "commonName":"Cuban Bullfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melospiza georgiana",
    "commonName":"Swamp Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melospiza lincolnii",
    "commonName":"Lincoln's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melospiza melodia",
    "commonName":"Song Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone aberti",
    "commonName":"Abert's Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone albicollis",
    "commonName":"White-throated Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone biarcuata",
    "commonName":"Prevost's Ground-Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone crissalis",
    "commonName":"California Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone fusca",
    "commonName":"Canyon Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone kieneri",
    "commonName":"Rusty-crowned Ground-Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Melozone leucotis",
    "commonName":"White-eared Ground-Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Merganetta armata",
    "commonName":"Torrent Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Mergellus albellus",
    "commonName":"Smew",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Mergus merganser",
    "commonName":"Common Merganser",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Mergus octosetaceus",
    "commonName":"Brazilian Merganser",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Mergus serrator",
    "commonName":"Red-breasted Merganser",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Merulaxis ater",
    "commonName":"Slaty Bristlefront",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mesembrinibis cayennensis",
    "commonName":"Green Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Metallura aeneocauda",
    "commonName":"Scaled Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura baroni",
    "commonName":"Violet-throated Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura eupogon",
    "commonName":"Fire-throated Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura odomae",
    "commonName":"Neblina Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura phoebe",
    "commonName":"Black Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura theresiae",
    "commonName":"Coppery Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura tyrianthina",
    "commonName":"Tyrian Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metallura williami",
    "commonName":"Viridian Metaltail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Metopothrix aurantiaca",
    "commonName":"Orange-fronted Plushcrown",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Metriopelia aymara",
    "commonName":"Golden-spotted Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Metriopelia ceciliae",
    "commonName":"Bare-faced Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Metriopelia melanoptera",
    "commonName":"Black-winged Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Metriopelia morenoi",
    "commonName":"Bare-eyed Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Micrastur buckleyi",
    "commonName":"Buckley's Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrastur gilvicollis",
    "commonName":"Lined Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrastur mintoni",
    "commonName":"Cryptic Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrastur mirandollei",
    "commonName":"Slaty-backed Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrastur plumbeus",
    "commonName":"Plumbeous Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrastur ruficollis",
    "commonName":"Barred Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrastur semitorquatus",
    "commonName":"Collared Forest-Falcon",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Micrathene whitneyi",
    "commonName":"Elf Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Microbates cinereiventris",
    "commonName":"Tawny-faced Gnatwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microbates collaris",
    "commonName":"Collared Gnatwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microcerculus bambla",
    "commonName":"Wing-banded Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microcerculus marginatus",
    "commonName":"Scaly-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microcerculus philomela",
    "commonName":"Nightingale Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microcerculus ustulatus",
    "commonName":"Flutist Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microchera albocoronata",
    "commonName":"Snowcap",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Microligea palustris",
    "commonName":"Green-tailed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Micromonacha lanceolata",
    "commonName":"Lanceolated Monklet",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Micropygia schomburgkii",
    "commonName":"Ocellated Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Microrhopias quixensis",
    "commonName":"Dot-winged Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Microstilbon burmeisteri",
    "commonName":"Slender-tailed Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Microxenops milleri",
    "commonName":"Rufous-tailed Xenops",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Milvago chimachima",
    "commonName":"Yellow-headed Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Milvago chimango",
    "commonName":"Chimango Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Mimus dorsalis",
    "commonName":"Brown-backed Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus gilvus",
    "commonName":"Tropical Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus graysoni",
    "commonName":"Socorro Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus gundlachii",
    "commonName":"Bahama Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus longicaudatus",
    "commonName":"Long-tailed Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus macdonaldi",
    "commonName":"Espa?ola Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus melanotis",
    "commonName":"San Cristobal Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus parvulus",
    "commonName":"Galapagos Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus patagonicus",
    "commonName":"Patagonian Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus polyglottos",
    "commonName":"Northern Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus saturninus",
    "commonName":"Chalk-browed Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus thenca",
    "commonName":"Chilean Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus trifasciatus",
    "commonName":"Floreana Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mimus triurus",
    "commonName":"White-banded Mockingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mionectes macconnelli",
    "commonName":"McConnell's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mionectes oleagineus",
    "commonName":"Ochre-bellied Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mionectes olivaceus",
    "commonName":"Olive-striped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mionectes rufiventris",
    "commonName":"Gray-hooded Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mionectes striaticollis",
    "commonName":"Streak-necked Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mitrephanes olivaceus",
    "commonName":"Olive Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mitrephanes phaeocercus",
    "commonName":"Tufted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mitrospingus cassinii",
    "commonName":"Dusky-faced Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mitrospingus oleagineus",
    "commonName":"Olive-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mitu salvini",
    "commonName":"Salvin's Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Mitu tomentosum",
    "commonName":"Crestless Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Mitu tuberosum",
    "commonName":"Razor-billed Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Mniotilta varia",
    "commonName":"Black-and-white Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Molothrus aeneus",
    "commonName":"Bronzed Cowbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Molothrus ater",
    "commonName":"Brown-headed Cowbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Molothrus bonariensis",
    "commonName":"Shiny Cowbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Molothrus oryzivorus",
    "commonName":"Giant Cowbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Molothrus rufoaxillaris",
    "commonName":"Screaming Cowbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Momotus aequatorialis",
    "commonName":"Andean Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Momotus bahamensis",
    "commonName":"Trinidad Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Momotus coeruliceps",
    "commonName":"Blue-crowned Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Momotus mexicanus",
    "commonName":"Russet-crowned Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Momotus momota",
    "commonName":"Amazonian Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Momotus subrufescens",
    "commonName":"Whooping Motmot",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Monasa atra",
    "commonName":"Black Nunbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Monasa flavirostris",
    "commonName":"Yellow-billed Nunbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Monasa morphoeus",
    "commonName":"White-fronted Nunbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Monasa nigrifrons",
    "commonName":"Black-fronted Nunbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Morococcyx erythropygus",
    "commonName":"Lesser Ground-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Morphnarchus princeps",
    "commonName":"Barred Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Morphnus guianensis",
    "commonName":"Crested Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Morus bassanus",
    "commonName":"Northern Gannet",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Morus serrator",
    "commonName":"Australasian Gannet",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Motacilla alba",
    "commonName":"White Wagtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Motacilla cinerea",
    "commonName":"Gray Wagtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Motacilla citreola",
    "commonName":"Citrine Wagtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Motacilla tschutschensis",
    "commonName":"Eastern Yellow Wagtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscicapa griseisticta",
    "commonName":"Gray-streaked Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscicapa latirostris",
    "commonName":"Asian Brown Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscicapa sibirica",
    "commonName":"Dark-sided Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscigralla brevicauda",
    "commonName":"Short-tailed Field Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscipipra vetula",
    "commonName":"Shear-tailed Gray Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola albifrons",
    "commonName":"White-fronted Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola albilora",
    "commonName":"White-browed Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola alpinus",
    "commonName":"Plain-capped Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola capistratus",
    "commonName":"Cinnamon-bellied Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola cinereus",
    "commonName":"Cinereous Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola flavinucha",
    "commonName":"Ochre-naped Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola fluviatilis",
    "commonName":"Little Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola frontalis",
    "commonName":"Black-fronted Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola griseus",
    "commonName":"Taczanowski's Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola juninensis",
    "commonName":"Puna Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola maclovianus",
    "commonName":"Dark-faced Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola maculirostris",
    "commonName":"Spot-billed Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Muscisaxicola rufivertex",
    "commonName":"Rufous-naped Ground-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes coloratus",
    "commonName":"Varied Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes elisabeth",
    "commonName":"Cuban Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes genibarbis",
    "commonName":"Rufous-throated Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes melanops",
    "commonName":"Black-faced Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes obscurus",
    "commonName":"Omao",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes occidentalis",
    "commonName":"Brown-backed Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes palmeri",
    "commonName":"Puaiohi",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes ralloides",
    "commonName":"Andean Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes townsendi",
    "commonName":"Townsend's Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myadestes unicolor",
    "commonName":"Slate-colored Solitaire",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Mycteria americana",
    "commonName":"Wood Stork",
    "orderName":"Ciconiiformes"
  },
  {
    "sciName":"Myiagra albiventris",
    "commonName":"Samoan Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiagra azureocapilla",
    "commonName":"Blue-crested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiagra vanikorensis",
    "commonName":"Vanikoro Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus antillarum",
    "commonName":"Puerto Rican Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus apicalis",
    "commonName":"Apical Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus barbirostris",
    "commonName":"Sad Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus cephalotes",
    "commonName":"Pale-edged Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus cinerascens",
    "commonName":"Ash-throated Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus crinitus",
    "commonName":"Great Crested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus ferox",
    "commonName":"Short-crested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus magnirostris",
    "commonName":"Galapagos Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus nugator",
    "commonName":"Grenada Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus nuttingi",
    "commonName":"Nutting's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus oberi",
    "commonName":"Lesser Antillean Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus panamensis",
    "commonName":"Panama Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus phaeocephalus",
    "commonName":"Sooty-crowned Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus sagrae",
    "commonName":"La Sagra's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus semirufus",
    "commonName":"Rufous Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus stolidus",
    "commonName":"Stolid Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus swainsoni",
    "commonName":"Swainson's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus tuberculifer",
    "commonName":"Dusky-capped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus tyrannulus",
    "commonName":"Brown-crested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus validus",
    "commonName":"Rufous-tailed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus venezuelensis",
    "commonName":"Venezuelan Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiarchus yucatanensis",
    "commonName":"Yucatan Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiobius atricaudus",
    "commonName":"Black-tailed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiobius barbatus",
    "commonName":"Whiskered Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiobius sulphureipygius",
    "commonName":"Sulphur-rumped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiobius villosus",
    "commonName":"Tawny-breasted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus albifrons",
    "commonName":"White-fronted Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus brunniceps",
    "commonName":"Brown-capped Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus castaneocapilla",
    "commonName":"Tepui Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus flavivertex",
    "commonName":"Yellow-crowned Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus melanocephalus",
    "commonName":"Spectacled Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus miniatus",
    "commonName":"Slate-throated Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus ornatus",
    "commonName":"Golden-fronted Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus pariae",
    "commonName":"Paria Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus pictus",
    "commonName":"Painted Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myioborus torquatus",
    "commonName":"Collared Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiodynastes bairdii",
    "commonName":"Baird's Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiodynastes chrysocephalus",
    "commonName":"Golden-crowned Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiodynastes hemichrysus",
    "commonName":"Golden-bellied Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiodynastes luteiventris",
    "commonName":"Sulphur-bellied Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiodynastes maculatus",
    "commonName":"Streaked Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis caniceps",
    "commonName":"Gray Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis cotta",
    "commonName":"Jamaican Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis flavivertex",
    "commonName":"Yellow-crowned Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis gaimardii",
    "commonName":"Forest Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis olallai",
    "commonName":"Foothill Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis subplacens",
    "commonName":"Pacific Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopagis viridicata",
    "commonName":"Greenish Elaenia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiophobus cryptoxanthus",
    "commonName":"Olive-chested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiophobus fasciatus",
    "commonName":"Bran-colored Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiophobus flavicans",
    "commonName":"Flavescent Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiophobus inornatus",
    "commonName":"Unadorned Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiophobus phoenicomitra",
    "commonName":"Orange-crested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiophobus roraimae",
    "commonName":"Roraiman Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiopsitta monachus",
    "commonName":"Monk Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Myiornis albiventris",
    "commonName":"White-bellied Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiornis atricapillus",
    "commonName":"Black-capped Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiornis auricularis",
    "commonName":"Eared Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiornis ecaudatus",
    "commonName":"Short-tailed Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiotheretes fumigatus",
    "commonName":"Smoky Bush-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiotheretes fuscorufus",
    "commonName":"Rufous-bellied Bush-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiotheretes pernix",
    "commonName":"Santa Marta Bush-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiotheretes striaticollis",
    "commonName":"Streak-throated Bush-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis basilica",
    "commonName":"Santa Marta Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis bivittata",
    "commonName":"Two-banded Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis chrysogaster",
    "commonName":"Golden-bellied Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis cinereicollis",
    "commonName":"Gray-throated Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis conspicillata",
    "commonName":"White-lored Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis coronata",
    "commonName":"Russet-crowned Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis flaveola",
    "commonName":"Flavescent Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis fraseri",
    "commonName":"Gray-and-gold Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis fulvicauda",
    "commonName":"Buff-rumped Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis leucoblephara",
    "commonName":"White-browed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis leucophrys",
    "commonName":"White-striped Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis luteoviridis",
    "commonName":"Citrine Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis nigrocristata",
    "commonName":"Black-crested Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis rivularis",
    "commonName":"Riverbank Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiothlypis signata",
    "commonName":"Pale-legged Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiotriccus ornatus",
    "commonName":"Ornate Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiozetetes cayanensis",
    "commonName":"Rusty-margined Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiozetetes granadensis",
    "commonName":"Gray-capped Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiozetetes luteiventris",
    "commonName":"Dusky-chested Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myiozetetes similis",
    "commonName":"Social Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myornis senilis",
    "commonName":"Ash-colored Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza atrothorax",
    "commonName":"Black-throated Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza berlepschi",
    "commonName":"Stub-tailed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza castanea",
    "commonName":"Zimmer's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza exsul",
    "commonName":"Chestnut-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza ferruginea",
    "commonName":"Ferruginous-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza fortis",
    "commonName":"Sooty Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza goeldii",
    "commonName":"Goeldi's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza griseiceps",
    "commonName":"Gray-headed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza hemimelaena",
    "commonName":"Chestnut-tailed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza hyperythra",
    "commonName":"Plumbeous Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza immaculata",
    "commonName":"Blue-lored Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza laemosticta",
    "commonName":"Dull-mantled Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza longipes",
    "commonName":"White-bellied Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza loricata",
    "commonName":"White-bibbed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza melanoceps",
    "commonName":"White-shouldered Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza nigricauda",
    "commonName":"Esmeraldas Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza palliata",
    "commonName":"Magdalena Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza pelzelni",
    "commonName":"Gray-bellied Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza ruficauda",
    "commonName":"Scalloped Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza squamosa",
    "commonName":"Squamate Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmeciza zeledoni",
    "commonName":"Zeledon's Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmia micrura",
    "commonName":"Short-tailed Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Myrmoborus leucophrys",
    "commonName":"White-browed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmoborus lugubris",
    "commonName":"Ash-breasted Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmoborus melanurus",
    "commonName":"Black-tailed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmoborus myotherinus",
    "commonName":"Black-faced Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmochanes hemileucus",
    "commonName":"Black-and-white Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmorchilus strigilatus",
    "commonName":"Stripe-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmornis torquata",
    "commonName":"Wing-banded Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmothera campanisona",
    "commonName":"Thrush-like Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmothera simplex",
    "commonName":"Tepui Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula ambigua",
    "commonName":"Yellow-throated Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula assimilis",
    "commonName":"Leaden Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula axillaris",
    "commonName":"White-flanked Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula behni",
    "commonName":"Plain-winged Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula brachyura",
    "commonName":"Pygmy Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula cherriei",
    "commonName":"Cherrie's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula grisea",
    "commonName":"Ashy Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula ignota",
    "commonName":"Moustached Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula iheringi",
    "commonName":"Ihering's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula klagesi",
    "commonName":"Klages's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula longicauda",
    "commonName":"Stripe-chested Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula longipennis",
    "commonName":"Long-winged Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula menetriesii",
    "commonName":"Gray Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula minor",
    "commonName":"Salvadori's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula multostriata",
    "commonName":"Amazonian Streaked-Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula pacifica",
    "commonName":"Pacific Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula schisticolor",
    "commonName":"Slaty Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula sclateri",
    "commonName":"Sclater's Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula sunensis",
    "commonName":"Rio Suno Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula surinamensis",
    "commonName":"Guianan Streaked-Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula unicolor",
    "commonName":"Unicolored Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrmotherula urosticta",
    "commonName":"Band-tailed Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myrtis fanny",
    "commonName":"Purple-collared Woodstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Myzomela cardinalis",
    "commonName":"Cardinal Myzomela",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Myzomela jugularis",
    "commonName":"Orange-breasted Myzomela",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nandayus nenday",
    "commonName":"Nanday Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Nannopsittaca dachilleae",
    "commonName":"Amazonian Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Nannopsittaca panychlora",
    "commonName":"Tepui Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Nasica longirostris",
    "commonName":"Long-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nemosia pileata",
    "commonName":"Hooded Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neochen jubata",
    "commonName":"Orinoco Goose",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Neochmia temporalis",
    "commonName":"Red-browed Firetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neocrex colombiana",
    "commonName":"Colombian Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Neocrex erythrops",
    "commonName":"Paint-billed Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Neoctantes niger",
    "commonName":"Black Bushbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neomorphus geoffroyi",
    "commonName":"Rufous-vented Ground-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Neomorphus pucheranii",
    "commonName":"Red-billed Ground-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Neomorphus radiolosus",
    "commonName":"Banded Ground-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Neomorphus rufipennis",
    "commonName":"Rufous-winged Ground-Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Neopelma aurifrons",
    "commonName":"Wied's Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neopelma chrysocephalum",
    "commonName":"Saffron-crested Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neopelma chrysolophum",
    "commonName":"Serra do Mar Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neopelma pallescens",
    "commonName":"Pale-bellied Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neopelma sulphureiventer",
    "commonName":"Sulphur-bellied Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neopipo cinnamomea",
    "commonName":"Cinnamon Manakin-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neothraupis fasciata",
    "commonName":"White-banded Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Neoxolmis rufiventris",
    "commonName":"Chocolate-vented Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nephelomyias lintoni",
    "commonName":"Orange-banded Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nephelomyias ochraceiventris",
    "commonName":"Ochraceous-breasted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nephelomyias pulcher",
    "commonName":"Handsome Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nephelornis oneilli",
    "commonName":"Pardusco",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nesoctites micromegas",
    "commonName":"Antillean Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Nesofregetta fuliginosa",
    "commonName":"Polynesian Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Nesopsar nigerrimus",
    "commonName":"Jamaican Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nesospingus speculiferus",
    "commonName":"Puerto Rican Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Nesotriccus ridgwayi",
    "commonName":"Cocos Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Netta erythrophthalma",
    "commonName":"Southern Pochard",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Netta peposaca",
    "commonName":"Rosy-billed Pochard",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Nomonyx dominicus",
    "commonName":"Masked Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Nonnula brunnea",
    "commonName":"Brown Nunlet",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nonnula frontalis",
    "commonName":"Gray-cheeked Nunlet",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nonnula rubecula",
    "commonName":"Rusty-breasted Nunlet",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nonnula ruficapilla",
    "commonName":"Rufous-capped Nunlet",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nonnula sclateri",
    "commonName":"Fulvous-chinned Nunlet",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Notharchus hyperrhynchus",
    "commonName":"White-necked Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Notharchus macrorhynchos",
    "commonName":"Guianan Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Notharchus ordii",
    "commonName":"Brown-banded Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Notharchus pectoralis",
    "commonName":"Black-breasted Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Notharchus swainsoni",
    "commonName":"Buff-bellied Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Notharchus tectus",
    "commonName":"Pied Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nothocercus bonapartei",
    "commonName":"Highland Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothocercus julius",
    "commonName":"Tawny-breasted Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothocercus nigrocapillus",
    "commonName":"Hooded Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothocrax urumutum",
    "commonName":"Nocturnal Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Nothoprocta cinerascens",
    "commonName":"Brushland Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothoprocta curvirostris",
    "commonName":"Curve-billed Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothoprocta ornata",
    "commonName":"Ornate Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothoprocta pentlandii",
    "commonName":"Andean Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothoprocta perdicaria",
    "commonName":"Chilean Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothoprocta taczanowskii",
    "commonName":"Taczanowski's Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothura boraquira",
    "commonName":"White-bellied Nothura",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothura chacoensis",
    "commonName":"Chaco Nothura",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothura darwinii",
    "commonName":"Darwin's Nothura",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothura maculosa",
    "commonName":"Spotted Nothura",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nothura minor",
    "commonName":"Lesser Nothura",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Nucifraga columbiana",
    "commonName":"Clark's Nutcracker",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Numenius americanus",
    "commonName":"Long-billed Curlew",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Numenius arquata",
    "commonName":"Eurasian Curlew",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Numenius madagascariensis",
    "commonName":"Far Eastern Curlew",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Numenius minutus",
    "commonName":"Little Curlew",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Numenius phaeopus",
    "commonName":"Whimbrel",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Numenius tahitiensis",
    "commonName":"Bristle-thighed Curlew",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Numida meleagris",
    "commonName":"Helmeted Guineafowl",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Nyctanassa violacea",
    "commonName":"Yellow-crowned Night-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Nyctibius aethereus",
    "commonName":"Long-tailed Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctibius bracteatus",
    "commonName":"Rufous Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctibius grandis",
    "commonName":"Great Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctibius griseus",
    "commonName":"Common Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctibius jamaicensis",
    "commonName":"Northern Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctibius leucopterus",
    "commonName":"White-winged Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctibius maculosus",
    "commonName":"Andean Potoo",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nycticorax nycticorax",
    "commonName":"Black-crowned Night-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Nycticryphes semicollaris",
    "commonName":"South American Painted-snipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Nyctidromus albicollis",
    "commonName":"Common Pauraque",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctidromus anthonyi",
    "commonName":"Scrub Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctiphrynus mcleodii",
    "commonName":"Eared Poorwill",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctiphrynus ocellatus",
    "commonName":"Ocellated Poorwill",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctiphrynus rosenbergi",
    "commonName":"Choco Poorwill",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctiphrynus yucatanicus",
    "commonName":"Yucatan Poorwill",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctipolus hirundinaceus",
    "commonName":"Pygmy Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctipolus nigrescens",
    "commonName":"Blackish Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctiprogne leucopyga",
    "commonName":"Band-tailed Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nyctiprogne vielliardi",
    "commonName":"Bahian Nighthawk",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Nymphicus hollandicus",
    "commonName":"Cockatiel",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Nystalus chacuru",
    "commonName":"White-eared Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nystalus maculatus",
    "commonName":"Spot-backed Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nystalus obamai",
    "commonName":"Western Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nystalus radiatus",
    "commonName":"Barred Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Nystalus striolatus",
    "commonName":"Striolated Puffbird",
    "orderName":"Galbuliformes"
  },
  {
    "sciName":"Oceanites gracilis",
    "commonName":"Elliot's Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanites oceanicus",
    "commonName":"Wilson's Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanites pincoyae",
    "commonName":"Pincoya Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma castro",
    "commonName":"Band-rumped Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma furcata",
    "commonName":"Fork-tailed Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma homochroa",
    "commonName":"Ashy Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma hornbyi",
    "commonName":"Ringed Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma leucorhoa",
    "commonName":"Leach's Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma markhami",
    "commonName":"Markham's Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma melania",
    "commonName":"Black Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma microsoma",
    "commonName":"Least Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma monorhis",
    "commonName":"Swinhoe's Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma tethys",
    "commonName":"Wedge-rumped Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Oceanodroma tristrami",
    "commonName":"Tristram's Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Ochetorhynchus andaecola",
    "commonName":"Rock Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochetorhynchus melanurus",
    "commonName":"Crag Chilia",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochetorhynchus phoenicurus",
    "commonName":"Band-tailed Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochetorhynchus ruficaudus",
    "commonName":"Straight-billed Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca cinnamomeiventris",
    "commonName":"Slaty-backed Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca diadema",
    "commonName":"Yellow-bellied Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca frontalis",
    "commonName":"Crowned Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca fumicolor",
    "commonName":"Brown-backed Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca jelskii",
    "commonName":"Jelski's Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca leucophrys",
    "commonName":"White-browed Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca oenanthoides",
    "commonName":"d'Orbigny's Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca piurae",
    "commonName":"Piura Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca pulchella",
    "commonName":"Golden-browed Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthoeca rufipectoralis",
    "commonName":"Rufous-breasted Chat-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ochthornis littoralis",
    "commonName":"Drab Water Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ocreatus underwoodii",
    "commonName":"Booted Racket-tail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Ocyalus latirostris",
    "commonName":"Band-tailed Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Odontophorus atrifrons",
    "commonName":"Black-fronted Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus balliviani",
    "commonName":"Stripe-faced Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus capueira",
    "commonName":"Spot-winged Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus columbianus",
    "commonName":"Venezuelan Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus erythrops",
    "commonName":"Rufous-fronted Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus gujanensis",
    "commonName":"Marbled Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus guttatus",
    "commonName":"Spotted Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus hyperythrus",
    "commonName":"Chestnut Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus leucolaemus",
    "commonName":"Black-breasted Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus melanonotus",
    "commonName":"Dark-backed Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus melanotis",
    "commonName":"Black-eared Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus speciosus",
    "commonName":"Rufous-breasted Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus stellatus",
    "commonName":"Starred Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontophorus strophium",
    "commonName":"Gorgeted Wood-Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Odontorchilus branickii",
    "commonName":"Gray-mantled Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Odontorchilus cinereus",
    "commonName":"Tooth-billed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oenanthe oenanthe",
    "commonName":"Northern Wheatear",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ognorhynchus icterotis",
    "commonName":"Yellow-eared Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Oncostoma cinereigulare",
    "commonName":"Northern Bentbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oncostoma olivaceum",
    "commonName":"Southern Bentbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Onychoprion aleuticus",
    "commonName":"Aleutian Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Onychoprion anaethetus",
    "commonName":"Bridled Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Onychoprion fuscatus",
    "commonName":"Sooty Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Onychoprion lunatus",
    "commonName":"Gray-backed Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Onychorhynchus coronatus",
    "commonName":"Royal Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Opisthocomus hoazin",
    "commonName":"Hoatzin",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Opisthoprora euryptera",
    "commonName":"Mountain Avocetbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oporornis agilis",
    "commonName":"Connecticut Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Orchesticus abeillei",
    "commonName":"Brown Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreomanes fraseri",
    "commonName":"Giant Conebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreomystis bairdi",
    "commonName":"Akikiki",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreonympha nobilis",
    "commonName":"Bearded Mountaineer",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oreophasis derbianus",
    "commonName":"Horned Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Oreopholus ruficollis",
    "commonName":"Tawny-throated Dotterel",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Oreopsar bolivianus",
    "commonName":"Bolivian Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreortyx pictus",
    "commonName":"Mountain Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Oreoscoptes montanus",
    "commonName":"Sage Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis celata",
    "commonName":"Orange-crowned Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis crissalis",
    "commonName":"Colima Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis gutturalis",
    "commonName":"Flame-throated Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis luciae",
    "commonName":"Lucy's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis peregrina",
    "commonName":"Tennessee Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis ruficapilla",
    "commonName":"Nashville Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis superciliosa",
    "commonName":"Crescent-chested Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothlypis virginiae",
    "commonName":"Virginia's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreothraupis arremonops",
    "commonName":"Tanager Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oreotrochilus adela",
    "commonName":"Wedge-tailed Hillstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oreotrochilus chimborazo",
    "commonName":"Ecuadorian Hillstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oreotrochilus estella",
    "commonName":"Andean Hillstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oreotrochilus leucopleurus",
    "commonName":"White-sided Hillstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oreotrochilus melanogaster",
    "commonName":"Black-breasted Hillstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oriturus superciliosus",
    "commonName":"Striped Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ornithion brunneicapillus",
    "commonName":"Brown-capped Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ornithion inerme",
    "commonName":"White-lored Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ornithion semiflavum",
    "commonName":"Yellow-bellied Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Orochelidon andecola",
    "commonName":"Andean Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Orochelidon flavipes",
    "commonName":"Pale-footed Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Orochelidon murina",
    "commonName":"Brown-bellied Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ortalis araucuan",
    "commonName":"East Brazilian Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis canicollis",
    "commonName":"Chaco Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis cinereiceps",
    "commonName":"Gray-headed Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis columbiana",
    "commonName":"Colombian Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis erythroptera",
    "commonName":"Rufous-headed Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis garrula",
    "commonName":"Chestnut-winged Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis guttata",
    "commonName":"Speckled Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis leucogastra",
    "commonName":"White-bellied Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis motmot",
    "commonName":"Variable Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis poliocephala",
    "commonName":"West Mexican Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis ruficauda",
    "commonName":"Rufous-vented Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis squamata",
    "commonName":"Scaled Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis superciliaris",
    "commonName":"Buff-browed Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis vetula",
    "commonName":"Plain Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Ortalis wagleri",
    "commonName":"Rufous-bellied Chachalaca",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Orthogonys chloricterus",
    "commonName":"Olive-green Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Orthopsittaca manilata",
    "commonName":"Red-bellied Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Orthorhyncus cristatus",
    "commonName":"Antillean Crested Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oryzoborus angolensis",
    "commonName":"Chestnut-bellied Seed-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oryzoborus atrirostris",
    "commonName":"Black-billed Seed-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oryzoborus crassirostris",
    "commonName":"Large-billed Seed-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oryzoborus funereus",
    "commonName":"Thick-billed Seed-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oryzoborus maximiliani",
    "commonName":"Great-billed Seed-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oryzoborus nuttingi",
    "commonName":"Nicaraguan Seed-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oxypogon guerinii",
    "commonName":"Bearded Helmetcrest",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Oxyruncus cristatus",
    "commonName":"Sharpbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Oxyura jamaicensis",
    "commonName":"Ruddy Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Oxyura vittata",
    "commonName":"Lake Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Pachycephala flavifrons",
    "commonName":"Samoan Whistler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachycephala graeffii",
    "commonName":"Fiji Whistler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachycephala jacquinoti",
    "commonName":"Tongan Whistler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachycephala vitiensis",
    "commonName":"White-throated Whistler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyptila belcheri",
    "commonName":"Slender-billed Prion",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pachyptila crassirostris",
    "commonName":"Fulmar Prion",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pachyptila desolata",
    "commonName":"Antarctic Prion",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pachyptila turtur",
    "commonName":"Fairy Prion",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pachyptila vittata",
    "commonName":"Broad-billed Prion",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pachyramphus aglaiae",
    "commonName":"Rose-throated Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus albogriseus",
    "commonName":"Black-and-white Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus castaneus",
    "commonName":"Chestnut-crowned Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus cinnamomeus",
    "commonName":"Cinnamon Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus homochrous",
    "commonName":"One-colored Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus major",
    "commonName":"Gray-collared Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus marginatus",
    "commonName":"Black-capped Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus minor",
    "commonName":"Pink-throated Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus niger",
    "commonName":"Jamaican Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus polychopterus",
    "commonName":"White-winged Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus rufus",
    "commonName":"Cinereous Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus spodiurus",
    "commonName":"Slaty Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus surinamus",
    "commonName":"Glossy-backed Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus validus",
    "commonName":"Crested Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus versicolor",
    "commonName":"Barred Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pachyramphus viridis",
    "commonName":"Green-backed Becard",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pagodroma nivea",
    "commonName":"Snow Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pagophila eburnea",
    "commonName":"Ivory Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Palmeria dolei",
    "commonName":"Akohekohe",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pandion haliaetus",
    "commonName":"Osprey",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Panterpe insignis",
    "commonName":"Fiery-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Panyptila cayennensis",
    "commonName":"Lesser Swallow-tailed Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Panyptila sanctihieronymi",
    "commonName":"Great Swallow-tailed Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Parabuteo leucorrhous",
    "commonName":"White-rumped Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Parabuteo unicinctus",
    "commonName":"Harris's Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Pardirallus maculatus",
    "commonName":"Spotted Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Pardirallus nigricans",
    "commonName":"Blackish Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Pardirallus sanguinolentus",
    "commonName":"Plumbeous Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Parkerthraustes humeralis",
    "commonName":"Yellow-shouldered Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Parkesia motacilla",
    "commonName":"Louisiana Waterthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Parkesia noveboracensis",
    "commonName":"Northern Waterthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroaria baeri",
    "commonName":"Crimson-fronted Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroaria capitata",
    "commonName":"Yellow-billed Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroaria coronata",
    "commonName":"Red-crested Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroaria dominicana",
    "commonName":"Red-cowled Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroaria gularis",
    "commonName":"Red-capped Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroaria nigrogenis",
    "commonName":"Masked Cardinal",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Paroreomyza montana",
    "commonName":"Maui Alauahio",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Parus major",
    "commonName":"Great Tit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passer domesticus",
    "commonName":"House Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passer montanus",
    "commonName":"Eurasian Tree Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerculus sandwichensis",
    "commonName":"Savannah Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerella iliaca",
    "commonName":"Fox Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina amoena",
    "commonName":"Lazuli Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina caerulea",
    "commonName":"Blue Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina ciris",
    "commonName":"Painted Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina cyanea",
    "commonName":"Indigo Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina leclancherii",
    "commonName":"Orange-breasted Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina rositae",
    "commonName":"Rose-bellied Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Passerina versicolor",
    "commonName":"Varied Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Patagioenas araucana",
    "commonName":"Chilean Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas caribaea",
    "commonName":"Ring-tailed Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas cayennensis",
    "commonName":"Pale-vented Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas corensis",
    "commonName":"Bare-eyed Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas fasciata",
    "commonName":"Band-tailed Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas flavirostris",
    "commonName":"Red-billed Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas goodsoni",
    "commonName":"Dusky Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas inornata",
    "commonName":"Plain Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas leucocephala",
    "commonName":"White-crowned Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas maculosa",
    "commonName":"Spot-winged Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas nigrirostris",
    "commonName":"Short-billed Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas oenops",
    "commonName":"Peruvian Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas picazuro",
    "commonName":"Picazuro Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas plumbea",
    "commonName":"Plumbeous Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas speciosa",
    "commonName":"Scaled Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas squamosa",
    "commonName":"Scaly-naped Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagioenas subvinacea",
    "commonName":"Ruddy Pigeon",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Patagona gigas",
    "commonName":"Giant Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Pauxi koepckeae",
    "commonName":"Sira Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pauxi pauxi",
    "commonName":"Helmeted Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pauxi unicornis",
    "commonName":"Horned Curassow",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pavo cristatus",
    "commonName":"Indian Peafowl",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pelagodroma marina",
    "commonName":"White-faced Storm-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pelecanoides garnotii",
    "commonName":"Peruvian Diving-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pelecanoides georgicus",
    "commonName":"South Georgia Diving-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pelecanoides magellani",
    "commonName":"Magellanic Diving-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pelecanoides urinatrix",
    "commonName":"Common Diving-Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pelecanus erythrorhynchos",
    "commonName":"American White Pelican",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Pelecanus occidentalis",
    "commonName":"Brown Pelican",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Pelecanus thagus",
    "commonName":"Peruvian Pelican",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Penelope albipennis",
    "commonName":"White-winged Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope argyrotis",
    "commonName":"Band-tailed Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope barbata",
    "commonName":"Bearded Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope dabbenei",
    "commonName":"Red-faced Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope jacquacu",
    "commonName":"Spix's Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope jacucaca",
    "commonName":"White-browed Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope marail",
    "commonName":"Marail Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope montagnii",
    "commonName":"Andean Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope obscura",
    "commonName":"Dusky-legged Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope ochrogaster",
    "commonName":"Chestnut-bellied Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope ortoni",
    "commonName":"Baudo Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope perspicax",
    "commonName":"Cauca Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope pileata",
    "commonName":"White-crested Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope purpurascens",
    "commonName":"Crested Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelope superciliaris",
    "commonName":"Rusty-margined Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Penelopina nigra",
    "commonName":"Highland Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Percnostola arenarum",
    "commonName":"Allpahuayo Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Percnostola lophotes",
    "commonName":"White-lined Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Percnostola rufifrons",
    "commonName":"Black-headed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Perdix perdix",
    "commonName":"Gray Partridge",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Periporphyrus erythromelas",
    "commonName":"Red-and-black Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Perisoreus canadensis",
    "commonName":"Gray Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Perissocephalus tricolor",
    "commonName":"Capuchinbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Petrochelidon fulva",
    "commonName":"Cave Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Petrochelidon pyrrhonota",
    "commonName":"Cliff Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Petrochelidon rufocollaris",
    "commonName":"Chestnut-collared Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Petroica macrocephala",
    "commonName":"Tomtit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Petroica multicolor",
    "commonName":"Pacific Robin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Petroica traversi",
    "commonName":"Chatham Robin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea aestivalis",
    "commonName":"Bachman's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea botterii",
    "commonName":"Botteri's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea carpalis",
    "commonName":"Rufous-winged Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea cassinii",
    "commonName":"Cassin's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea humeralis",
    "commonName":"Black-chested Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea mystacalis",
    "commonName":"Bridled Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea ruficauda",
    "commonName":"Stripe-headed Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucaea sumichrasti",
    "commonName":"Cinnamon-tailed Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Peucedramus taeniatus",
    "commonName":"Olive Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pezopetes capitalis",
    "commonName":"Large-footed Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus dorsalis",
    "commonName":"Chestnut-backed Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus erythrophthalmus",
    "commonName":"Orange-eyed Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus ferrugineigula",
    "commonName":"Orange-breasted Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus maculipectus",
    "commonName":"Spot-breasted Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus ruber",
    "commonName":"Greater Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus rufifrons",
    "commonName":"Rufous-fronted Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus sibilatrix",
    "commonName":"Little Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus striaticeps",
    "commonName":"Streak-fronted Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phacellodomus striaticollis",
    "commonName":"Freckle-breasted Thornbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phaenicophilus palmarum",
    "commonName":"Black-crowned Palm-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phaenicophilus poliocephalus",
    "commonName":"Gray-crowned Palm-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phaenostictus mcleannani",
    "commonName":"Ocellated Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phaeochroa cuvierii",
    "commonName":"Scaly-breasted Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaeomyias murina",
    "commonName":"Mouse-colored Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phaethon aethereus",
    "commonName":"Red-billed Tropicbird",
    "orderName":"Phaethontiformes"
  },
  {
    "sciName":"Phaethon lepturus",
    "commonName":"White-tailed Tropicbird",
    "orderName":"Phaethontiformes"
  },
  {
    "sciName":"Phaethon rubricauda",
    "commonName":"Red-tailed Tropicbird",
    "orderName":"Phaethontiformes"
  },
  {
    "sciName":"Phaethornis aethopyga",
    "commonName":"Tapajos Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis anthophilus",
    "commonName":"Pale-bellied Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis atrimentalis",
    "commonName":"Black-throated Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis augusti",
    "commonName":"Sooty-capped Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis bourcieri",
    "commonName":"Straight-billed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis eurynome",
    "commonName":"Scale-throated Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis griseogularis",
    "commonName":"Gray-chinned Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis guy",
    "commonName":"Green Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis hispidus",
    "commonName":"White-bearded Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis idaliae",
    "commonName":"Minute Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis koepckeae",
    "commonName":"Koepcke's Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis longirostris",
    "commonName":"Long-billed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis longuemareus",
    "commonName":"Little Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis malaris",
    "commonName":"Great-billed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis nattereri",
    "commonName":"Cinnamon-throated Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis philippii",
    "commonName":"Needle-billed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis pretrei",
    "commonName":"Planalto Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis ruber",
    "commonName":"Reddish Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis rupurumii",
    "commonName":"Streak-throated Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis squalidus",
    "commonName":"Dusky-throated Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis striigularis",
    "commonName":"Stripe-throated Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis stuarti",
    "commonName":"White-browed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis subochraceus",
    "commonName":"Buff-bellied Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis superciliosus",
    "commonName":"Long-tailed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis syrmatophorus",
    "commonName":"Tawny-bellied Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaethornis yaruqui",
    "commonName":"White-whiskered Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phaetusa simplex",
    "commonName":"Large-billed Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Phainopepla nitens",
    "commonName":"Phainopepla",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phainoptila melanoxantha",
    "commonName":"Black-and-yellow Silky-flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phalacrocorax atriceps",
    "commonName":"Imperial Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax auritus",
    "commonName":"Double-crested Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax bougainvillii",
    "commonName":"Guanay Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax bransfieldensis",
    "commonName":"Antarctic Shag",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax brasilianus",
    "commonName":"Neotropic Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax carbo",
    "commonName":"Great Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax featherstoni",
    "commonName":"Pitt Island Shag",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax gaimardi",
    "commonName":"Red-legged Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax georgianus",
    "commonName":"South Georgia Shag",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax harrisi",
    "commonName":"Flightless Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax magellanicus",
    "commonName":"Magellanic Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax onslowi",
    "commonName":"Chatham Islands Shag",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax pelagicus",
    "commonName":"Pelagic Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax penicillatus",
    "commonName":"Brandt's Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax sulcirostris",
    "commonName":"Little Black Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalacrocorax urile",
    "commonName":"Red-faced Cormorant",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Phalaenoptilus nuttallii",
    "commonName":"Common Poorwill",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Phalaropus fulicarius",
    "commonName":"Red Phalarope",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Phalaropus lobatus",
    "commonName":"Red-necked Phalarope",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Phalaropus tricolor",
    "commonName":"Wilson's Phalarope",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Phalcoboenus albogularis",
    "commonName":"White-throated Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Phalcoboenus australis",
    "commonName":"Striated Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Phalcoboenus carunculatus",
    "commonName":"Carunculated Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Phalcoboenus megalopterus",
    "commonName":"Mountain Caracara",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Pharomachrus antisianus",
    "commonName":"Crested Quetzal",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Pharomachrus auriceps",
    "commonName":"Golden-headed Quetzal",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Pharomachrus fulgidus",
    "commonName":"White-tipped Quetzal",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Pharomachrus mocinno",
    "commonName":"Resplendent Quetzal",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Pharomachrus pavoninus",
    "commonName":"Pavonine Quetzal",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Phasianus colchicus",
    "commonName":"Ring-necked Pheasant",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Phegornis mitchellii",
    "commonName":"Diademed Sandpiper-Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Phelpsia inornata",
    "commonName":"White-bearded Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheucticus aureoventris",
    "commonName":"Black-backed Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheucticus chrysogaster",
    "commonName":"Golden-bellied Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheucticus chrysopeplus",
    "commonName":"Yellow Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheucticus ludovicianus",
    "commonName":"Rose-breasted Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheucticus melanocephalus",
    "commonName":"Black-headed Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheucticus tibialis",
    "commonName":"Black-thighed Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius atrogularis",
    "commonName":"Black-throated Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius coraya",
    "commonName":"Coraya Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius eisenmanni",
    "commonName":"Inca Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius euophrys",
    "commonName":"Plain-tailed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius fasciatoventris",
    "commonName":"Black-bellied Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius felix",
    "commonName":"Happy Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius genibarbis",
    "commonName":"Moustached Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius maculipectus",
    "commonName":"Spot-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius mystacalis",
    "commonName":"Whiskered Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius rutilus",
    "commonName":"Rufous-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius sclateri",
    "commonName":"Speckle-breasted Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pheugopedius spadix",
    "commonName":"Sooty-headed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phibalura flavirostris",
    "commonName":"Swallow-tailed Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phigys solitarius",
    "commonName":"Collared Lory",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Philortyx fasciatus",
    "commonName":"Banded Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Philydor atricapillus",
    "commonName":"Black-capped Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Philydor erythrocercum",
    "commonName":"Rufous-rumped Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Philydor erythropterum",
    "commonName":"Chestnut-winged Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Philydor fuscipenne",
    "commonName":"Slaty-winged Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Philydor pyrrhodes",
    "commonName":"Cinnamon-rumped Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Philydor rufum",
    "commonName":"Buff-fronted Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phimosus infuscatus",
    "commonName":"Bare-faced Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Phlegopsis borbae",
    "commonName":"Pale-faced Bare-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phlegopsis erythroptera",
    "commonName":"Reddish-winged Bare-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phlegopsis nigromaculata",
    "commonName":"Black-spotted Bare-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phleocryptes melanops",
    "commonName":"Wren-like Rushbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phlogophilus harterti",
    "commonName":"Peruvian Piedtail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phlogophilus hemileucurus",
    "commonName":"Ecuadorian Piedtail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Phoebastria albatrus",
    "commonName":"Short-tailed Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Phoebastria immutabilis",
    "commonName":"Laysan Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Phoebastria irrorata",
    "commonName":"Waved Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Phoebastria nigripes",
    "commonName":"Black-footed Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Phoebetria fusca",
    "commonName":"Sooty Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Phoebetria palpebrata",
    "commonName":"Light-mantled Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Phoenicircus carnifex",
    "commonName":"Guianan Red-Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phoenicircus nigricollis",
    "commonName":"Black-necked Red-Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phoenicoparrus andinus",
    "commonName":"Andean Flamingo",
    "orderName":"Phoenicopteriformes"
  },
  {
    "sciName":"Phoenicoparrus jamesi",
    "commonName":"James's Flamingo",
    "orderName":"Phoenicopteriformes"
  },
  {
    "sciName":"Phoenicopterus chilensis",
    "commonName":"Chilean Flamingo",
    "orderName":"Phoenicopteriformes"
  },
  {
    "sciName":"Phoenicopterus ruber",
    "commonName":"American Flamingo",
    "orderName":"Phoenicopteriformes"
  },
  {
    "sciName":"Phoenicurus phoenicurus",
    "commonName":"Common Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus alaudinus",
    "commonName":"Band-tailed Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus atriceps",
    "commonName":"Black-hooded Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus carbonarius",
    "commonName":"Carbonated Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus dorsalis",
    "commonName":"Red-backed Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus erythronotus",
    "commonName":"White-throated Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus fruticeti",
    "commonName":"Mourning Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus gayi",
    "commonName":"Gray-hooded Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus patagonicus",
    "commonName":"Patagonian Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus plebejus",
    "commonName":"Ash-breasted Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus punensis",
    "commonName":"Peruvian Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phrygilus unicolor",
    "commonName":"Plumbeous Sierra-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias burmeisteri",
    "commonName":"Rough-legged Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias cinereiceps",
    "commonName":"Ashy-headed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias fasciatus",
    "commonName":"Planalto Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias griseiceps",
    "commonName":"Sooty-headed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias griseocapilla",
    "commonName":"Gray-capped Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias nigrocapillus",
    "commonName":"Black-capped Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias plumbeiceps",
    "commonName":"Plumbeous-crowned Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias reiseri",
    "commonName":"Reiser's Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias sclateri",
    "commonName":"Sclater's Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias urichi",
    "commonName":"Urich's Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias uropygialis",
    "commonName":"Tawny-rumped Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias virescens",
    "commonName":"Greenish Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phyllomyias weedeni",
    "commonName":"Yungas Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes beckeri",
    "commonName":"Bahia Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes ceciliae",
    "commonName":"Alagoas Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes chapmani",
    "commonName":"Chapman's Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes difficilis",
    "commonName":"Serra do Mar Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes eximius",
    "commonName":"Southern Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes flaviventris",
    "commonName":"Rufous-lored Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes flavovirens",
    "commonName":"Yellow-green Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes gualaquizae",
    "commonName":"Ecuadorian Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes kronei",
    "commonName":"Restinga Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes lanyoni",
    "commonName":"Antioquia Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes nigrifrons",
    "commonName":"Black-fronted Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes ophthalmicus",
    "commonName":"Marble-faced Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes orbitalis",
    "commonName":"Spectacled Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes oustaleti",
    "commonName":"Oustalet's Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes parkeri",
    "commonName":"Cinnamon-faced Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes paulista",
    "commonName":"Sao Paulo Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes poecilotis",
    "commonName":"Variegated Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes roquettei",
    "commonName":"Minas Gerais Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes superciliaris",
    "commonName":"Rufous-browed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes sylviolus",
    "commonName":"Bay-ringed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes venezuelanus",
    "commonName":"Venezuelan Bristle-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes ventralis",
    "commonName":"Mottle-cheeked Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscartes virescens",
    "commonName":"Olive-green Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscopus borealis",
    "commonName":"Arctic Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscopus collybita",
    "commonName":"Common Chiffchaff",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscopus fuscatus",
    "commonName":"Dusky Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscopus inornatus",
    "commonName":"Yellow-browed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phylloscopus trochilus",
    "commonName":"Willow Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phytotoma raimondii",
    "commonName":"Peruvian Plantcutter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phytotoma rara",
    "commonName":"Rufous-tailed Plantcutter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Phytotoma rutila",
    "commonName":"White-tipped Plantcutter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piaya cayana",
    "commonName":"Squirrel Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Piaya melanogaster",
    "commonName":"Black-bellied Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Pica hudsonia",
    "commonName":"Black-billed Magpie",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pica nuttalli",
    "commonName":"Yellow-billed Magpie",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Picoides albolarvatus",
    "commonName":"White-headed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides arcticus",
    "commonName":"Black-backed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides arizonae",
    "commonName":"Arizona Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides borealis",
    "commonName":"Red-cockaded Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides dorsalis",
    "commonName":"American Three-toed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides fumigatus",
    "commonName":"Smoky-brown Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides nuttallii",
    "commonName":"Nuttall's Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides pubescens",
    "commonName":"Downy Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides scalaris",
    "commonName":"Ladder-backed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides stricklandi",
    "commonName":"Strickland's Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picoides villosus",
    "commonName":"Hairy Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus aurulentus",
    "commonName":"White-browed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus callopterus",
    "commonName":"Stripe-cheeked Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus chrysochloros",
    "commonName":"Golden-green Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus flavigula",
    "commonName":"Yellow-throated Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus leucolaemus",
    "commonName":"White-throated Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus litae",
    "commonName":"Lita Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piculus simplex",
    "commonName":"Rufous-winged Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus albosquamatus",
    "commonName":"White-wedged Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus aurifrons",
    "commonName":"Bar-breasted Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus castelnau",
    "commonName":"Plain-breasted Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus cinnamomeus",
    "commonName":"Chestnut Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus cirratus",
    "commonName":"White-barred Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus dorbignyanus",
    "commonName":"Ocellated Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus exilis",
    "commonName":"Golden-spangled Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus fulvescens",
    "commonName":"Tawny Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus granadensis",
    "commonName":"Grayish Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus lafresnayi",
    "commonName":"Lafresnaye's Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus limae",
    "commonName":"Ochraceous Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus minutissimus",
    "commonName":"Arrowhead Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus nebulosus",
    "commonName":"Mottled Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus olivaceus",
    "commonName":"Olivaceous Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus pumilus",
    "commonName":"Orinoco Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus pygmaeus",
    "commonName":"Spotted Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus rufiventris",
    "commonName":"Rufous-breasted Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus sclateri",
    "commonName":"Ecuadorian Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus spilogaster",
    "commonName":"White-bellied Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus squamulatus",
    "commonName":"Scaled Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus steindachneri",
    "commonName":"Speckle-chested Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus subtilis",
    "commonName":"Fine-barred Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus temminckii",
    "commonName":"Ochre-collared Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Picumnus varzeae",
    "commonName":"Varzea Piculet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Piezorina cinerea",
    "commonName":"Cinereous Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pilherodius pileatus",
    "commonName":"Capped Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Pinaroloxias inornata",
    "commonName":"Cocos Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pinicola enucleator",
    "commonName":"Pine Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pionites leucogaster",
    "commonName":"White-bellied Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionites melanocephalus",
    "commonName":"Black-headed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionopsitta pileata",
    "commonName":"Pileated Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus chalcopterus",
    "commonName":"Bronze-winged Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus fuscus",
    "commonName":"Dusky Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus maximiliani",
    "commonName":"Scaly-headed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus menstruus",
    "commonName":"Blue-headed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus senilis",
    "commonName":"White-crowned Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus sordidus",
    "commonName":"Red-billed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pionus tumultuosus",
    "commonName":"Speckle-faced Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pipile cujubi",
    "commonName":"Red-throated Piping-Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pipile cumanensis",
    "commonName":"Blue-throated Piping-Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pipile jacutinga",
    "commonName":"Black-fronted Piping-Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pipile pipile",
    "commonName":"Trinidad Piping-Guan",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Pipilo chlorurus",
    "commonName":"Green-tailed Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipilo erythrophthalmus",
    "commonName":"Eastern Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipilo maculatus",
    "commonName":"Spotted Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipilo ocai",
    "commonName":"Collared Towhee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipra aureola",
    "commonName":"Crimson-hooded Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipra fasciicauda",
    "commonName":"Band-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipra filicauda",
    "commonName":"Wire-tailed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipraeidea bonariensis",
    "commonName":"Blue-and-yellow Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipraeidea melanonota",
    "commonName":"Fawn-breasted Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola arcuata",
    "commonName":"Barred Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola aureopectus",
    "commonName":"Golden-breasted Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola chlorolepidota",
    "commonName":"Fiery-throated Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola formosa",
    "commonName":"Handsome Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola frontalis",
    "commonName":"Scarlet-breasted Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola intermedia",
    "commonName":"Band-tailed Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola jucunda",
    "commonName":"Orange-breasted Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola lubomirskii",
    "commonName":"Black-chested Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola pulchra",
    "commonName":"Masked Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola riefferii",
    "commonName":"Green-and-black Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pipreola whitelyi",
    "commonName":"Red-banded Fruiteater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piprites chloris",
    "commonName":"Wing-barred Piprites",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piprites griseiceps",
    "commonName":"Gray-headed Piprites",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piprites pileata",
    "commonName":"Black-capped Piprites",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga bidentata",
    "commonName":"Flame-colored Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga erythrocephala",
    "commonName":"Red-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga flava",
    "commonName":"Hepatic Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga leucoptera",
    "commonName":"White-winged Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga ludoviciana",
    "commonName":"Western Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga olivacea",
    "commonName":"Scarlet Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga roseogularis",
    "commonName":"Rose-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga rubra",
    "commonName":"Summer Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Piranga rubriceps",
    "commonName":"Red-hooded Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pitangus lictor",
    "commonName":"Lesser Kiskadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pitangus sulphuratus",
    "commonName":"Great Kiskadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pithys albifrons",
    "commonName":"White-plumed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pittasoma michleri",
    "commonName":"Black-crowned Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pittasoma rufopileatum",
    "commonName":"Rufous-crowned Antpitta",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platalea ajaja",
    "commonName":"Roseate Spoonbill",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Platalea leucorodia",
    "commonName":"Eurasian Spoonbill",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Platycercus eximius",
    "commonName":"Eastern Rosella",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Platyrinchus cancrominus",
    "commonName":"Stub-tailed Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyrinchus coronatus",
    "commonName":"Golden-crowned Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyrinchus flavigularis",
    "commonName":"Yellow-throated Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyrinchus leucoryphus",
    "commonName":"Russet-winged Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyrinchus mystaceus",
    "commonName":"White-throated Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyrinchus platyrhynchos",
    "commonName":"White-crested Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyrinchus saturatus",
    "commonName":"Cinnamon-crested Spadebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Platyspiza crassirostris",
    "commonName":"Vegetarian Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Plectrophenax hyperboreus",
    "commonName":"McKay's Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Plectrophenax nivalis",
    "commonName":"Snow Bunting",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Plegadis chihi",
    "commonName":"White-faced Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Plegadis falcinellus",
    "commonName":"Glossy Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Plegadis ridgwayi",
    "commonName":"Puna Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Ploceus cucullatus",
    "commonName":"Village Weaver",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pluvialis apricaria",
    "commonName":"European Golden-Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Pluvialis dominica",
    "commonName":"American Golden-Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Pluvialis fulva",
    "commonName":"Pacific Golden-Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Pluvialis squatarola",
    "commonName":"Black-bellied Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Pluvianellus socialis",
    "commonName":"Magellanic Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Podiceps auritus",
    "commonName":"Horned Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podiceps gallardoi",
    "commonName":"Hooded Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podiceps grisegena",
    "commonName":"Red-necked Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podiceps major",
    "commonName":"Great Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podiceps nigricollis",
    "commonName":"Eared Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podiceps occipitalis",
    "commonName":"Silvery Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podiceps taczanowskii",
    "commonName":"Junin Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Podilymbus podiceps",
    "commonName":"Pied-billed Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Poecile atricapillus",
    "commonName":"Black-capped Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecile carolinensis",
    "commonName":"Carolina Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecile cinctus",
    "commonName":"Gray-headed Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecile gambeli",
    "commonName":"Mountain Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecile hudsonicus",
    "commonName":"Boreal Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecile rufescens",
    "commonName":"Chestnut-backed Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecile sclateri",
    "commonName":"Mexican Chickadee",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus albifacies",
    "commonName":"White-cheeked Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus calopterus",
    "commonName":"Golden-winged Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus capitalis",
    "commonName":"Black-and-white Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus fumifrons",
    "commonName":"Smoky-fronted Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus latirostris",
    "commonName":"Rusty-fronted Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus luluae",
    "commonName":"Johnson's Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus plumbeiceps",
    "commonName":"Ochre-faced Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus pulchellus",
    "commonName":"Black-backed Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus ruficeps",
    "commonName":"Rufous-crowned Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus russatus",
    "commonName":"Ruddy Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus senex",
    "commonName":"Buff-cheeked Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poecilotriccus sylvia",
    "commonName":"Slate-headed Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poephila cincta",
    "commonName":"Black-throated Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila albiloris",
    "commonName":"White-lored Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila caerulea",
    "commonName":"Blue-gray Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila californica",
    "commonName":"California Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila clementsi",
    "commonName":"Iquitos Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila dumicola",
    "commonName":"Masked Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila guianensis",
    "commonName":"Guianan Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila lactea",
    "commonName":"Creamy-bellied Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila lembeyei",
    "commonName":"Cuban Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila melanura",
    "commonName":"Black-tailed Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila nigriceps",
    "commonName":"Black-capped Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila plumbea",
    "commonName":"Tropical Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioptila schistaceigula",
    "commonName":"Slate-throated Gnatcatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polioxolmis rufipennis",
    "commonName":"Rufous-webbed Bush-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polyonymus caroli",
    "commonName":"Bronze-tailed Comet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Polysticta stelleri",
    "commonName":"Steller's Eider",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Polystictus pectoralis",
    "commonName":"Bearded Tachuri",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polystictus superciliaris",
    "commonName":"Gray-backed Tachuri",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Polytmus guainumbi",
    "commonName":"White-tailed Goldenthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Polytmus milleri",
    "commonName":"Tepui Goldenthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Polytmus theresiae",
    "commonName":"Green-tailed Goldenthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Pomarea dimidiata",
    "commonName":"Rarotonga Monarch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pomarea nigra",
    "commonName":"Tahiti Monarch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pooecetes gramineus",
    "commonName":"Vesper Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza alticola",
    "commonName":"Plain-tailed Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza boliviana",
    "commonName":"Bolivian Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza cabanisi",
    "commonName":"Gray-throated Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza caesar",
    "commonName":"Chestnut-breasted Mountain-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza cinerea",
    "commonName":"Cinereous Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza erythrophrys",
    "commonName":"Rusty-browed Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza hispaniolensis",
    "commonName":"Collared Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza hypochondria",
    "commonName":"Rufous-sided Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza lateralis",
    "commonName":"Buff-throated Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza melanoleuca",
    "commonName":"Black-capped Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza nigrorufa",
    "commonName":"Black-and-rufous Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza ornata",
    "commonName":"Cinnamon Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza rubecula",
    "commonName":"Rufous-breasted Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza thoracica",
    "commonName":"Bay-chested Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Poospiza torquata",
    "commonName":"Ringed Warbling-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Porphyrio flavirostris",
    "commonName":"Azure Gallinule",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porphyrio martinicus",
    "commonName":"Purple Gallinule",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porphyrio porphyrio",
    "commonName":"Purple Swamphen",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porphyrolaema porphyrolaema",
    "commonName":"Purple-throated Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Porphyrospiza caerulescens",
    "commonName":"Blue Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Porzana albicollis",
    "commonName":"Ash-throated Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porzana atra",
    "commonName":"Henderson Island Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porzana carolina",
    "commonName":"Sora",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porzana flaviventer",
    "commonName":"Yellow-breasted Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porzana spiloptera",
    "commonName":"Dot-winged Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Porzana tabuensis",
    "commonName":"Spotless Crake",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Premnoplex brunnescens",
    "commonName":"Spotted Barbtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Premnoplex tatei",
    "commonName":"White-throated Barbtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Premnornis guttuliger",
    "commonName":"Rusty-winged Barbtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Primolius auricollis",
    "commonName":"Yellow-collared Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Primolius couloni",
    "commonName":"Blue-headed Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Primolius maracana",
    "commonName":"Blue-winged Macaw",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Priotelus roseigaster",
    "commonName":"Hispaniolan Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Priotelus temnurus",
    "commonName":"Cuban Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Procellaria aequinoctialis",
    "commonName":"White-chinned Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Procellaria cinerea",
    "commonName":"Gray Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Procellaria parkinsoni",
    "commonName":"Parkinson's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Procellaria westlandica",
    "commonName":"Westland Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Procelsterna albivitta",
    "commonName":"Gray Noddy",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Procelsterna cerulea",
    "commonName":"Blue-gray Noddy",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Procnias albus",
    "commonName":"White Bellbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Procnias averano",
    "commonName":"Bearded Bellbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Procnias nudicollis",
    "commonName":"Bare-throated Bellbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Procnias tricarunculatus",
    "commonName":"Three-wattled Bellbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne chalybea",
    "commonName":"Gray-breasted Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne cryptoleuca",
    "commonName":"Cuban Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne dominicensis",
    "commonName":"Caribbean Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne elegans",
    "commonName":"Southern Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne modesta",
    "commonName":"Galapagos Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne murphyi",
    "commonName":"Peruvian Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne sinaloae",
    "commonName":"Sinaloa Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne subis",
    "commonName":"Purple Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Progne tapera",
    "commonName":"Brown-chested Martin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Prosopeia tabuensis",
    "commonName":"Red Shining-Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Prosthemadera novaeseelandiae",
    "commonName":"Tui",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Protonotaria citrea",
    "commonName":"Prothonotary Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Prunella modularis",
    "commonName":"Dunnock",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Prunella montanella",
    "commonName":"Siberian Accentor",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psaltriparus minimus",
    "commonName":"Bushtit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius angustifrons",
    "commonName":"Russet-backed Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius atrovirens",
    "commonName":"Dusky-green Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius bifasciatus",
    "commonName":"Olive Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius cassini",
    "commonName":"Baudo Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius decumanus",
    "commonName":"Crested Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius guatimozinus",
    "commonName":"Black Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius montezuma",
    "commonName":"Montezuma Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius viridis",
    "commonName":"Green Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psarocolius wagleri",
    "commonName":"Chestnut-headed Oropendola",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pselliophorus luteoviridis",
    "commonName":"Yellow-green Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pselliophorus tibialis",
    "commonName":"Yellow-thighed Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudasthenes cactorum",
    "commonName":"Cactus Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudasthenes humicola",
    "commonName":"Dusky-tailed Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudasthenes patagonica",
    "commonName":"Patagonian Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudasthenes steinbachi",
    "commonName":"Steinbach's Canastero",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudastur albicollis",
    "commonName":"White Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Pseudastur occidentalis",
    "commonName":"Gray-backed Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Pseudastur polionotus",
    "commonName":"Mantled Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Pseudelaenia leucospodia",
    "commonName":"Gray-and-white Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudobulweria rostrata",
    "commonName":"Tahiti Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pseudocolaptes boissonneautii",
    "commonName":"Streaked Tuftedcheek",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudocolaptes lawrencii",
    "commonName":"Buffy Tuftedcheek",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudocolopteryx acutipennis",
    "commonName":"Subtropical Doradito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudocolopteryx citreola",
    "commonName":"Ticking Doradito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudocolopteryx dinelliana",
    "commonName":"Dinelli's Doradito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudocolopteryx flaviventris",
    "commonName":"Warbling Doradito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudocolopteryx sclateri",
    "commonName":"Crested Doradito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudoleistes guirahuro",
    "commonName":"Yellow-rumped Marshbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudoleistes virescens",
    "commonName":"Brown-and-yellow Marshbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudonestor xanthophrys",
    "commonName":"Maui Parrotbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudoscops clamator",
    "commonName":"Striped Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Pseudoscops grammicus",
    "commonName":"Jamaican Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Pseudoseisura cristata",
    "commonName":"Caatinga Cacholote",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudoseisura gutturalis",
    "commonName":"White-throated Cacholote",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudoseisura lophotes",
    "commonName":"Brown Cacholote",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudoseisura unirufa",
    "commonName":"Rufous Cacholote",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudotriccus pelzelni",
    "commonName":"Bronze-olive Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudotriccus ruficeps",
    "commonName":"Rufous-headed Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pseudotriccus simplex",
    "commonName":"Hazel-fronted Pygmy-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psilopsiagon aurifrons",
    "commonName":"Mountain Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Psilopsiagon aymara",
    "commonName":"Gray-hooded Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Psilorhamphus guttatus",
    "commonName":"Spotted Bamboowren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psilorhinus morio",
    "commonName":"Brown Jay",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Psiloscops flammeolus",
    "commonName":"Flammulated Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Psittacula krameri",
    "commonName":"Rose-ringed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Psophia crepitans",
    "commonName":"Gray-winged Trumpeter",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Psophia leucoptera",
    "commonName":"Pale-winged Trumpeter",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Psophia viridis",
    "commonName":"Dark-winged Trumpeter",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Pterocles exustus",
    "commonName":"Chestnut-bellied Sandgrouse",
    "orderName":"Pterocliformes"
  },
  {
    "sciName":"Pterodroma alba",
    "commonName":"Phoenix Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma arminjoniana",
    "commonName":"Herald Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma atrata",
    "commonName":"Henderson Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma axillaris",
    "commonName":"Chatham Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma brevipes",
    "commonName":"Collared Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma cahow",
    "commonName":"Bermuda Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma cervicalis",
    "commonName":"White-necked Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma cookii",
    "commonName":"Cook's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma defilippiana",
    "commonName":"Masatierra Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma externa",
    "commonName":"Juan Fernandez Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma feae",
    "commonName":"Fea's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma hasitata",
    "commonName":"Black-capped Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma hypoleuca",
    "commonName":"Bonin Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma incerta",
    "commonName":"Atlantic Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma inexpectata",
    "commonName":"Mottled Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma lessonii",
    "commonName":"White-headed Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma leucoptera",
    "commonName":"Gould's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma longirostris",
    "commonName":"Stejneger's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma macroptera",
    "commonName":"Great-winged Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma madeira",
    "commonName":"Zino's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma magentae",
    "commonName":"Magenta Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma mollis",
    "commonName":"Soft-plumaged Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma neglecta",
    "commonName":"Kermadec Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma nigripennis",
    "commonName":"Black-winged Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma phaeopygia",
    "commonName":"Galapagos Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma sandwichensis",
    "commonName":"Hawaiian Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma solandri",
    "commonName":"Providence Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pterodroma ultima",
    "commonName":"Murphy's Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pteroglossus aracari",
    "commonName":"Black-necked Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus azara",
    "commonName":"Ivory-billed Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus bailloni",
    "commonName":"Saffron Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus beauharnaesii",
    "commonName":"Curl-crested Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus bitorquatus",
    "commonName":"Red-necked Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus castanotis",
    "commonName":"Chestnut-eared Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus frantzii",
    "commonName":"Fiery-billed Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus inscriptus",
    "commonName":"Lettered Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus pluricinctus",
    "commonName":"Many-banded Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus torquatus",
    "commonName":"Collared Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pteroglossus viridis",
    "commonName":"Green Aracari",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Pterophanes cyanopterus",
    "commonName":"Great Sapphirewing",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Pteroptochos castaneus",
    "commonName":"Chestnut-throated Huet-huet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pteroptochos megapodius",
    "commonName":"Moustached Turca",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pteroptochos tarnii",
    "commonName":"Black-throated Huet-huet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ptilinopus insularis",
    "commonName":"Henderson Island Fruit-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ptilinopus perousii",
    "commonName":"Many-colored Fruit-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ptilinopus porphyraceus",
    "commonName":"Crimson-crowned Fruit-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ptilinopus purpuratus",
    "commonName":"Gray-green Fruit-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ptilinopus rarotongensis",
    "commonName":"Cook Islands Fruit-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ptilinopus victor",
    "commonName":"Orange Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Ptilogonys caudatus",
    "commonName":"Long-tailed Silky-flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ptilogonys cinereus",
    "commonName":"Gray Silky-flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ptychoramphus aleuticus",
    "commonName":"Cassin's Auklet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Puffinus assimilis",
    "commonName":"Little Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus auricularis",
    "commonName":"Townsend's Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus bailloni",
    "commonName":"Tropical Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus baroli",
    "commonName":"Barolo Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus bulleri",
    "commonName":"Buller's Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus carneipes",
    "commonName":"Flesh-footed Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus creatopus",
    "commonName":"Pink-footed Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus gravis",
    "commonName":"Great Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus griseus",
    "commonName":"Sooty Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus lherminieri",
    "commonName":"Audubon's Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus nativitatis",
    "commonName":"Christmas Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus opisthomelas",
    "commonName":"Black-vented Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus pacificus",
    "commonName":"Wedge-tailed Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus puffinus",
    "commonName":"Manx Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus subalaris",
    "commonName":"Galapagos Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Puffinus tenuirostris",
    "commonName":"Short-tailed Shearwater",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Pulsatrix koeniswaldiana",
    "commonName":"Tawny-browed Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Pulsatrix melanota",
    "commonName":"Band-bellied Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Pulsatrix perspicillata",
    "commonName":"Spectacled Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Pycnonotus cafer",
    "commonName":"Red-vented Bulbul",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pycnonotus jocosus",
    "commonName":"Red-whiskered Bulbul",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pygarrhichas albogularis",
    "commonName":"White-throated Treerunner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pygiptila stellaris",
    "commonName":"Spot-winged Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pygochelidon cyanoleuca",
    "commonName":"Blue-and-white Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pygochelidon melanoleuca",
    "commonName":"Black-collared Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pygoscelis adeliae",
    "commonName":"Adelie Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Pygoscelis antarcticus",
    "commonName":"Chinstrap Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Pygoscelis papua",
    "commonName":"Gentoo Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Pyriglena atra",
    "commonName":"Fringe-backed Fire-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyriglena leuconota",
    "commonName":"White-backed Fire-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyriglena leucoptera",
    "commonName":"White-shouldered Fire-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyrilia aurantiocephala",
    "commonName":"Bald Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrilia barrabandi",
    "commonName":"Orange-cheeked Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrilia caica",
    "commonName":"Caica Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrilia haematotis",
    "commonName":"Brown-hooded Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrilia pulchra",
    "commonName":"Rose-faced Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrilia pyrilia",
    "commonName":"Saffron-headed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrilia vulturina",
    "commonName":"Vulturine Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrocephalus rubinus",
    "commonName":"Vermilion Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyroderus scutatus",
    "commonName":"Red-ruffed Fruitcrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyrrhocoma ruficeps",
    "commonName":"Chestnut-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyrrhomyias cinnamomeus",
    "commonName":"Cinnamon Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyrrhula pyrrhula",
    "commonName":"Eurasian Bullfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Pyrrhura albipectus",
    "commonName":"White-necked Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura amazonum",
    "commonName":"Santarem Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura calliptera",
    "commonName":"Brown-breasted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura cruentata",
    "commonName":"Ochre-marked Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura devillei",
    "commonName":"Blaze-winged Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura egregia",
    "commonName":"Fiery-shouldered Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura frontalis",
    "commonName":"Maroon-bellied Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura griseipectus",
    "commonName":"Gray-breasted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura hoematotis",
    "commonName":"Red-eared Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura hoffmanni",
    "commonName":"Sulphur-winged Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura lepida",
    "commonName":"Pearly Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura leucotis",
    "commonName":"Maroon-faced Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura lucianii",
    "commonName":"Bonaparte's Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura melanura",
    "commonName":"Maroon-tailed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura molinae",
    "commonName":"Green-cheeked Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura orcesi",
    "commonName":"El Oro Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura perlata",
    "commonName":"Crimson-bellied Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura pfrimeri",
    "commonName":"Pfrimer's Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura picta",
    "commonName":"Painted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura rhodocephala",
    "commonName":"Rose-headed Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura roseifrons",
    "commonName":"Rose-fronted Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura rupicola",
    "commonName":"Black-capped Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Pyrrhura viridicata",
    "commonName":"Santa Marta Parakeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Querula purpurata",
    "commonName":"Purple-throated Fruitcrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Quiscalus lugubris",
    "commonName":"Carib Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Quiscalus major",
    "commonName":"Boat-tailed Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Quiscalus mexicanus",
    "commonName":"Great-tailed Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Quiscalus nicaraguensis",
    "commonName":"Nicaraguan Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Quiscalus niger",
    "commonName":"Greater Antillean Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Quiscalus quiscula",
    "commonName":"Common Grackle",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rallus antarcticus",
    "commonName":"Austral Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Rallus elegans",
    "commonName":"King Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Rallus limicola",
    "commonName":"Virginia Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Rallus longirostris",
    "commonName":"Clapper Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Rallus semiplumbeus",
    "commonName":"Bogota Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Rallus wetmorei",
    "commonName":"Plain-flanked Rail",
    "orderName":"Gruiformes"
  },
  {
    "sciName":"Ramphastos ambiguus",
    "commonName":"Black-mandibled Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphastos brevis",
    "commonName":"Choco Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphastos dicolorus",
    "commonName":"Red-breasted Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphastos sulfuratus",
    "commonName":"Keel-billed Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphastos toco",
    "commonName":"Toco Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphastos tucanus",
    "commonName":"White-throated Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphastos vitellinus",
    "commonName":"Channel-billed Toucan",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Ramphocaenus melanurus",
    "commonName":"Long-billed Gnatwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus bresilius",
    "commonName":"Brazilian Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus carbo",
    "commonName":"Silver-beaked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus costaricensis",
    "commonName":"Cherrie's Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus dimidiatus",
    "commonName":"Crimson-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus flammigerus",
    "commonName":"Flame-rumped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus melanogaster",
    "commonName":"Black-bellied Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus nigrogularis",
    "commonName":"Masked Crimson Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus passerinii",
    "commonName":"Passerini's Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocelus sanguinolentus",
    "commonName":"Crimson-collared Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphocinclus brachyurus",
    "commonName":"White-breasted Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphodon naevius",
    "commonName":"Saw-billed Hermit",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Ramphomicron dorsale",
    "commonName":"Black-backed Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Ramphomicron microrhynchum",
    "commonName":"Purple-backed Thornbill",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Ramphotrigon fuscicauda",
    "commonName":"Dusky-tailed Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphotrigon megacephalum",
    "commonName":"Large-headed Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ramphotrigon ruficauda",
    "commonName":"Rufous-tailed Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Recurvirostra americana",
    "commonName":"American Avocet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Recurvirostra andina",
    "commonName":"Andean Avocet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Regulus calendula",
    "commonName":"Ruby-crowned Kinglet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Regulus satrapa",
    "commonName":"Golden-crowned Kinglet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhea americana",
    "commonName":"Greater Rhea",
    "orderName":"Struthioniformes"
  },
  {
    "sciName":"Rhea pennata",
    "commonName":"Lesser Rhea",
    "orderName":"Struthioniformes"
  },
  {
    "sciName":"Rhegmatorhina berlepschi",
    "commonName":"Harlequin Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhegmatorhina cristata",
    "commonName":"Chestnut-crested Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhegmatorhina gymnops",
    "commonName":"Bare-eyed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhegmatorhina hoffmannsi",
    "commonName":"White-breasted Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhegmatorhina melanosticta",
    "commonName":"Hairy-crested Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhinocrypta lanceolata",
    "commonName":"Crested Gallito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhipidura fuliginosa",
    "commonName":"New Zealand Fantail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhipidura nebulosa",
    "commonName":"Samoan Fantail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhipidura verreauxi",
    "commonName":"Streaked Fantail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhodinocichla rosea",
    "commonName":"Rosy Thrush-Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhodopis vesper",
    "commonName":"Oasis Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Rhodospingus cruentus",
    "commonName":"Crimson-breasted Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhodostethia rosea",
    "commonName":"Ross's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Rhodothraupis celaeno",
    "commonName":"Crimson-collared Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhopias gularis",
    "commonName":"Star-throated Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhopornis ardesiacus",
    "commonName":"Slender Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchocyclus brevirostris",
    "commonName":"Eye-ringed Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchocyclus fulvipectus",
    "commonName":"Fulvous-breasted Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchocyclus olivaceus",
    "commonName":"Olivaceous Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchocyclus pacificus",
    "commonName":"Pacific Flatbill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchophanes mccownii",
    "commonName":"McCown's Longspur",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchopsitta pachyrhyncha",
    "commonName":"Thick-billed Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Rhynchopsitta terrisi",
    "commonName":"Maroon-fronted Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Rhynchortyx cinctus",
    "commonName":"Tawny-faced Quail",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Rhynchospiza stolzmanni",
    "commonName":"Tumbes Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchospiza strigiceps",
    "commonName":"Stripe-capped Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhynchotus maculicollis",
    "commonName":"Huayco Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Rhynchotus rufescens",
    "commonName":"Red-winged Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Rhytipterna holerythra",
    "commonName":"Rufous Mourner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhytipterna immunda",
    "commonName":"Pale-bellied Mourner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rhytipterna simplex",
    "commonName":"Grayish Mourner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Ridgwayia pinicola",
    "commonName":"Aztec Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Riparia riparia",
    "commonName":"Bank Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rissa brevirostris",
    "commonName":"Red-legged Kittiwake",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Rissa tridactyla",
    "commonName":"Black-legged Kittiwake",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Rollandia microptera",
    "commonName":"Titicaca Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Rollandia rolland",
    "commonName":"White-tufted Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Roraimia adusta",
    "commonName":"Roraiman Barbtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rostrhamus sociabilis",
    "commonName":"Snail Kite",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Rupicola peruvianus",
    "commonName":"Andean Cock-of-the-rock",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rupicola rupicola",
    "commonName":"Guianan Cock-of-the-rock",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Rupornis magnirostris",
    "commonName":"Roadside Hawk",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Rynchops niger",
    "commonName":"Black Skimmer",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sakesphorus canadensis",
    "commonName":"Black-crested Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sakesphorus cristatus",
    "commonName":"Silvery-cheeked Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sakesphorus luctuosus",
    "commonName":"Glossy Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Salpinctes obsoletus",
    "commonName":"Rock Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator albicollis",
    "commonName":"Lesser Antillean Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator atriceps",
    "commonName":"Black-headed Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator atricollis",
    "commonName":"Black-throated Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator atripennis",
    "commonName":"Black-winged Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator aurantiirostris",
    "commonName":"Golden-billed Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator cinctus",
    "commonName":"Masked Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator coerulescens",
    "commonName":"Grayish Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator fuliginosus",
    "commonName":"Black-throated Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator grossus",
    "commonName":"Slate-colored Grosbeak",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator maxillosus",
    "commonName":"Thick-billed Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator maximus",
    "commonName":"Buff-throated Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator nigriceps",
    "commonName":"Black-cowled Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator orenocensis",
    "commonName":"Orinocan Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator rufiventris",
    "commonName":"Rufous-bellied Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator similis",
    "commonName":"Green-winged Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltator striatipectus",
    "commonName":"Streaked Saltator",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saltatricula multicolor",
    "commonName":"Many-colored Chaco Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sapayoa aenigma",
    "commonName":"Sapayoa",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sappho sparganura",
    "commonName":"Red-tailed Comet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Sarcoramphus papa",
    "commonName":"King Vulture",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Sarkidiornis melanotos",
    "commonName":"Comb Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Satrapa icterophrys",
    "commonName":"Yellow-browed Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Saxicola maurus",
    "commonName":"Siberian Stonechat",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sayornis nigricans",
    "commonName":"Black Phoebe",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sayornis phoebe",
    "commonName":"Eastern Phoebe",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sayornis saya",
    "commonName":"Say's Phoebe",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scelorchilus albicollis",
    "commonName":"White-throated Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scelorchilus rubecula",
    "commonName":"Chucao Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis aenea",
    "commonName":"Foothill Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis major",
    "commonName":"Varzea Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis olivacea",
    "commonName":"Olivaceous Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis stenorhyncha",
    "commonName":"Russet-winged Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis turdina",
    "commonName":"Brown-winged Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis veraepacis",
    "commonName":"Northern Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schiffornis virescens",
    "commonName":"Greenish Schiffornis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistes geoffroyi",
    "commonName":"Wedge-billed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Schistochlamys melanopis",
    "commonName":"Black-faced Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistochlamys ruficapillus",
    "commonName":"Cinnamon Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistocichla brunneiceps",
    "commonName":"Brownish-headed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistocichla caurensis",
    "commonName":"Caura Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistocichla humaythae",
    "commonName":"Humaita Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistocichla leucostigma",
    "commonName":"Spot-winged Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistocichla rufifacies",
    "commonName":"Rufous-faced Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schistocichla schistacea",
    "commonName":"Slate-colored Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Schoeniophylax phryganophilus",
    "commonName":"Chotoy Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclateria naevia",
    "commonName":"Silvered Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclerurus albigularis",
    "commonName":"Gray-throated Leaftosser",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclerurus caudacutus",
    "commonName":"Black-tailed Leaftosser",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclerurus guatemalensis",
    "commonName":"Scaly-throated Leaftosser",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclerurus mexicanus",
    "commonName":"Tawny-throated Leaftosser",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclerurus rufigularis",
    "commonName":"Short-billed Leaftosser",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sclerurus scansor",
    "commonName":"Rufous-breasted Leaftosser",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scolopax minor",
    "commonName":"American Woodcock",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Scolopax rusticola",
    "commonName":"Eurasian Woodcock",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Scytalopus acutirostris",
    "commonName":"Tschudi's Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus affinis",
    "commonName":"Ancash Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus altirostris",
    "commonName":"Neblina Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus argentifrons",
    "commonName":"Silvery-fronted Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus atratus",
    "commonName":"White-crowned Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus bolivianus",
    "commonName":"Bolivian Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus canus",
    "commonName":"Paramillo Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus caracae",
    "commonName":"Caracas Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus chocoensis",
    "commonName":"Choco Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus diamantinensis",
    "commonName":"Diamantina Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus femoralis",
    "commonName":"Rufous-vented Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus fuscus",
    "commonName":"Dusky Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus griseicollis",
    "commonName":"Pale-bellied Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus iraiensis",
    "commonName":"Marsh Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus latebricola",
    "commonName":"Brown-rumped Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus latrans",
    "commonName":"Blackish Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus macropus",
    "commonName":"Large-footed Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus magellanicus",
    "commonName":"Magellanic Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus meridanus",
    "commonName":"Merida Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus micropterus",
    "commonName":"Long-tailed Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus novacapitalis",
    "commonName":"Brasilia Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus opacus",
    "commonName":"Paramo Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus pachecoi",
    "commonName":"Planalto Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus parkeri",
    "commonName":"Chusquea Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus parvirostris",
    "commonName":"Trilling Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus robbinsi",
    "commonName":"Ecuadorian Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus rodriguezi",
    "commonName":"Upper Magdalena Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus sanctaemartae",
    "commonName":"Santa Marta Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus schulenbergi",
    "commonName":"Diademed Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus simonsi",
    "commonName":"Puna Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus speluncae",
    "commonName":"Mouse-colored Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus spillmanni",
    "commonName":"Spillmann's Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus stilesi",
    "commonName":"Stiles's Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus superciliaris",
    "commonName":"White-browed Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus unicolor",
    "commonName":"Unicolored Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus urubambae",
    "commonName":"Vilcabamba Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus vicinior",
    "commonName":"Nari?o Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Scytalopus zimmeri",
    "commonName":"Zimmer's Tapaculo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Seiurus aurocapilla",
    "commonName":"Ovenbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Selasphorus ardens",
    "commonName":"Glow-throated Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selasphorus calliope",
    "commonName":"Calliope Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selasphorus flammula",
    "commonName":"Volcano Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selasphorus platycercus",
    "commonName":"Broad-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selasphorus rufus",
    "commonName":"Rufous Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selasphorus sasin",
    "commonName":"Allen's Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selasphorus scintilla",
    "commonName":"Scintillant Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Selenidera gouldii",
    "commonName":"Gould's Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Selenidera maculirostris",
    "commonName":"Spot-billed Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Selenidera nattereri",
    "commonName":"Tawny-tufted Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Selenidera piperivora",
    "commonName":"Guianan Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Selenidera reinwardtii",
    "commonName":"Golden-collared Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Selenidera spectabilis",
    "commonName":"Yellow-eared Toucanet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Semnornis frantzii",
    "commonName":"Prong-billed Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Semnornis ramphastinus",
    "commonName":"Toucan Barbet",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Sephanoides fernandensis",
    "commonName":"Juan Fernandez Firecrown",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Sephanoides sephaniodes",
    "commonName":"Green-backed Firecrown",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Sericossypha albocristata",
    "commonName":"White-capped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serinus canaria",
    "commonName":"Island Canary",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serinus mozambicus",
    "commonName":"Yellow-fronted Canary",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serpophaga cinerea",
    "commonName":"Torrent Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serpophaga griseicapilla",
    "commonName":"Straneck's Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serpophaga hypoleuca",
    "commonName":"River Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serpophaga munda",
    "commonName":"White-bellied Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serpophaga nigricans",
    "commonName":"Sooty Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Serpophaga subcristata",
    "commonName":"White-crested Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setopagis heterurus",
    "commonName":"Todd's Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Setopagis parvulus",
    "commonName":"Little Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Setopagis whitelyi",
    "commonName":"Roraiman Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Setophaga adelaidae",
    "commonName":"Adelaide's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga americana",
    "commonName":"Northern Parula",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga angelae",
    "commonName":"Elfin-woods Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga caerulescens",
    "commonName":"Black-throated Blue Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga castanea",
    "commonName":"Bay-breasted Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga cerulea",
    "commonName":"Cerulean Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga chrysoparia",
    "commonName":"Golden-cheeked Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga citrina",
    "commonName":"Hooded Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga coronata",
    "commonName":"Yellow-rumped Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga delicata",
    "commonName":"St. Lucia Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga discolor",
    "commonName":"Prairie Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga dominica",
    "commonName":"Yellow-throated Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga flavescens",
    "commonName":"Bahama Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga fusca",
    "commonName":"Blackburnian Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga graciae",
    "commonName":"Grace's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga kirtlandii",
    "commonName":"Kirtland's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga magnolia",
    "commonName":"Magnolia Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga nigrescens",
    "commonName":"Black-throated Gray Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga occidentalis",
    "commonName":"Hermit Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga palmarum",
    "commonName":"Palm Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga pensylvanica",
    "commonName":"Chestnut-sided Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga petechia",
    "commonName":"Yellow Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga pharetra",
    "commonName":"Arrowhead Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga pinus",
    "commonName":"Pine Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga pitiayumi",
    "commonName":"Tropical Parula",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga pityophila",
    "commonName":"Olive-capped Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga plumbea",
    "commonName":"Plumbeous Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga ruticilla",
    "commonName":"American Redstart",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga striata",
    "commonName":"Blackpoll Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga subita",
    "commonName":"Barbuda Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga tigrina",
    "commonName":"Cape May Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga townsendi",
    "commonName":"Townsend's Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga virens",
    "commonName":"Black-throated Green Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Setophaga vitellina",
    "commonName":"Vitelline Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sialia currucoides",
    "commonName":"Mountain Bluebird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sialia mexicana",
    "commonName":"Western Bluebird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sialia sialis",
    "commonName":"Eastern Bluebird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis auriventris",
    "commonName":"Greater Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis citrina",
    "commonName":"Stripe-tailed Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis columbiana",
    "commonName":"Orange-fronted Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis flaveola",
    "commonName":"Saffron Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis lebruni",
    "commonName":"Patagonian Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis lutea",
    "commonName":"Puna Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis luteocephala",
    "commonName":"Citron-headed Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis luteola",
    "commonName":"Grassland Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis mendozae",
    "commonName":"Monte Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis olivascens",
    "commonName":"Greenish Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis raimondii",
    "commonName":"Raimondi's Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis taczanowskii",
    "commonName":"Sulphur-throated Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sicalis uropygialis",
    "commonName":"Bright-rumped Yellow-Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Siphonorhis brewsteri",
    "commonName":"Least Pauraque",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Siptornis striaticollis",
    "commonName":"Spectacled Prickletail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sirystes sibilator",
    "commonName":"Sirystes",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sitta canadensis",
    "commonName":"Red-breasted Nuthatch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sitta carolinensis",
    "commonName":"White-breasted Nuthatch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sitta pusilla",
    "commonName":"Brown-headed Nuthatch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sitta pygmaea",
    "commonName":"Pygmy Nuthatch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sittasomus griseicapillus",
    "commonName":"Olivaceous Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Snowornis cryptolophus",
    "commonName":"Olivaceous Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Snowornis subalaris",
    "commonName":"Gray-tailed Piha",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Somateria fischeri",
    "commonName":"Spectacled Eider",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Somateria mollissima",
    "commonName":"Common Eider",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Somateria spectabilis",
    "commonName":"King Eider",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Spartonoica maluroides",
    "commonName":"Bay-capped Wren-Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Speculanas specularis",
    "commonName":"Spectacled Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Spermestes cucullatus",
    "commonName":"Bronze Mannikin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spheniscus humboldti",
    "commonName":"Humboldt Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Spheniscus magellanicus",
    "commonName":"Magellanic Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Spheniscus mendiculus",
    "commonName":"Galapagos Penguin",
    "orderName":"Sphenisciformes"
  },
  {
    "sciName":"Sphyrapicus nuchalis",
    "commonName":"Red-naped Sapsucker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Sphyrapicus ruber",
    "commonName":"Red-breasted Sapsucker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Sphyrapicus thyroideus",
    "commonName":"Williamson's Sapsucker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Sphyrapicus varius",
    "commonName":"Yellow-bellied Sapsucker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Spindalis dominicensis",
    "commonName":"Hispaniolan Spindalis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spindalis nigricephala",
    "commonName":"Jamaican Spindalis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spindalis portoricensis",
    "commonName":"Puerto Rican Spindalis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spindalis zena",
    "commonName":"Western Spindalis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus atratus",
    "commonName":"Black Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus atriceps",
    "commonName":"Black-capped Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus barbatus",
    "commonName":"Black-chinned Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus crassirostris",
    "commonName":"Thick-billed Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus cucullatus",
    "commonName":"Red Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus dominicensis",
    "commonName":"Antillean Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus lawrencei",
    "commonName":"Lawrence's Goldfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus magellanicus",
    "commonName":"Hooded Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus notatus",
    "commonName":"Black-headed Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus olivaceus",
    "commonName":"Olivaceous Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus pinus",
    "commonName":"Pine Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus psaltria",
    "commonName":"Lesser Goldfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus siemiradzkii",
    "commonName":"Saffron Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus spinescens",
    "commonName":"Andean Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus tristis",
    "commonName":"American Goldfinch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus uropygialis",
    "commonName":"Yellow-rumped Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus xanthogastrus",
    "commonName":"Yellow-bellied Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spinus yarrellii",
    "commonName":"Yellow-faced Siskin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spiza americana",
    "commonName":"Dickcissel",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizaetus isidori",
    "commonName":"Black-and-chestnut Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Spizaetus melanoleucus",
    "commonName":"Black-and-white Hawk-Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Spizaetus ornatus",
    "commonName":"Ornate Hawk-Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Spizaetus tyrannus",
    "commonName":"Black Hawk-Eagle",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Spizella arborea",
    "commonName":"American Tree Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizella atrogularis",
    "commonName":"Black-chinned Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizella breweri",
    "commonName":"Brewer's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizella pallida",
    "commonName":"Clay-colored Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizella passerina",
    "commonName":"Chipping Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizella pusilla",
    "commonName":"Field Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spizella wortheni",
    "commonName":"Worthen's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Spiziapteryx circumcincta",
    "commonName":"Spot-winged Falconet",
    "orderName":"Falconiformes"
  },
  {
    "sciName":"Sporophila albogularis",
    "commonName":"White-throated Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila americana",
    "commonName":"Wing-barred Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila ardesiaca",
    "commonName":"Dubois's Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila bouvreuil",
    "commonName":"Copper Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila bouvronides",
    "commonName":"Lesson's Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila caerulescens",
    "commonName":"Double-collared Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila castaneiventris",
    "commonName":"Chestnut-bellied Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila cinnamomea",
    "commonName":"Chestnut Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila collaris",
    "commonName":"Rusty-collared Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila corvina",
    "commonName":"Variable Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila falcirostris",
    "commonName":"Temminck's Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila frontalis",
    "commonName":"Buffy-fronted Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila hypochroma",
    "commonName":"Rufous-rumped Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila hypoxantha",
    "commonName":"Tawny-bellied Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila intermedia",
    "commonName":"Gray Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila leucoptera",
    "commonName":"White-bellied Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila lineola",
    "commonName":"Lined Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila luctuosa",
    "commonName":"Black-and-white Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila melanogaster",
    "commonName":"Black-bellied Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila minuta",
    "commonName":"Ruddy-breasted Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila murallae",
    "commonName":"Caqueta Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila nigricollis",
    "commonName":"Yellow-bellied Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila nigrorufa",
    "commonName":"Black-and-tawny Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila palustris",
    "commonName":"Marsh Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila peruviana",
    "commonName":"Parrot-billed Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila pileata",
    "commonName":"Pearly-bellied Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila plumbea",
    "commonName":"Plumbeous Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila ruficollis",
    "commonName":"Dark-throated Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila schistacea",
    "commonName":"Slate-colored Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila simplex",
    "commonName":"Drab Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila telasco",
    "commonName":"Chestnut-throated Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sporophila torqueola",
    "commonName":"White-collared Seedeater",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Starnoenas cyanocephala",
    "commonName":"Blue-headed Quail-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Steatornis caripensis",
    "commonName":"Oilbird",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Stelgidopteryx ruficollis",
    "commonName":"Southern Rough-winged Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Stelgidopteryx serripennis",
    "commonName":"Northern Rough-winged Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Stephanophorus diadematus",
    "commonName":"Diademed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Stephanoxis lalandi",
    "commonName":"Plovercrest",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Stercorarius antarcticus",
    "commonName":"Brown Skua",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stercorarius chilensis",
    "commonName":"Chilean Skua",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stercorarius longicaudus",
    "commonName":"Long-tailed Jaeger",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stercorarius maccormicki",
    "commonName":"South Polar Skua",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stercorarius parasiticus",
    "commonName":"Parasitic Jaeger",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stercorarius pomarinus",
    "commonName":"Pomarine Jaeger",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stercorarius skua",
    "commonName":"Great Skua",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna dougallii",
    "commonName":"Roseate Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna forsteri",
    "commonName":"Forster's Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna hirundinacea",
    "commonName":"South American Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna hirundo",
    "commonName":"Common Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna paradisaea",
    "commonName":"Arctic Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna striata",
    "commonName":"White-fronted Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna sumatrana",
    "commonName":"Black-naped Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna trudeaui",
    "commonName":"Snowy-crowned Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sterna vittata",
    "commonName":"Antarctic Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sternoclyta cyanopectus",
    "commonName":"Violet-chested Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Sternula albifrons",
    "commonName":"Little Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sternula antillarum",
    "commonName":"Least Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sternula lorata",
    "commonName":"Peruvian Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sternula nereis",
    "commonName":"Fairy Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Sternula superciliaris",
    "commonName":"Yellow-billed Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Stigmatura budytoides",
    "commonName":"Greater Wagtail-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Stigmatura napensis",
    "commonName":"Lesser Wagtail-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Streptopelia chinensis",
    "commonName":"Spotted Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Streptopelia decaocto",
    "commonName":"Eurasian Collared-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Streptopelia orientalis",
    "commonName":"Oriental Turtle-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Streptopelia roseogrisea",
    "commonName":"African Collared-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Streptoprocne biscutata",
    "commonName":"Biscutate Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Streptoprocne phelpsi",
    "commonName":"Tepui Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Streptoprocne rutila",
    "commonName":"Chestnut-collared Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Streptoprocne semicollaris",
    "commonName":"White-naped Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Streptoprocne zonaris",
    "commonName":"White-collared Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Strix chacoensis",
    "commonName":"Chaco Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Strix fulvescens",
    "commonName":"Fulvous Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Strix hylophila",
    "commonName":"Rusty-barred Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Strix nebulosa",
    "commonName":"Great Gray Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Strix occidentalis",
    "commonName":"Spotted Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Strix rufipes",
    "commonName":"Rufous-legged Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Strix varia",
    "commonName":"Barred Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Sturnella bellicosa",
    "commonName":"Peruvian Meadowlark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnella defilippii",
    "commonName":"Pampas Meadowlark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnella loyca",
    "commonName":"Long-tailed Meadowlark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnella magna",
    "commonName":"Eastern Meadowlark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnella militaris",
    "commonName":"Red-breasted Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnella neglecta",
    "commonName":"Western Meadowlark",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnella superciliaris",
    "commonName":"White-browed Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sturnus vulgaris",
    "commonName":"European Starling",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Stymphalornis acutirostris",
    "commonName":"Parana Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sublegatus arenarum",
    "commonName":"Northern Scrub-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sublegatus modestus",
    "commonName":"Southern Scrub-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sublegatus obscurior",
    "commonName":"Amazonian Scrub-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Suiriri islerorum",
    "commonName":"Chapada Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Suiriri suiriri",
    "commonName":"Suiriri Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sula dactylatra",
    "commonName":"Masked Booby",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Sula granti",
    "commonName":"Nazca Booby",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Sula leucogaster",
    "commonName":"Brown Booby",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Sula nebouxii",
    "commonName":"Blue-footed Booby",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Sula sula",
    "commonName":"Red-footed Booby",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Sula variegata",
    "commonName":"Peruvian Booby",
    "orderName":"Suliformes"
  },
  {
    "sciName":"Surnia ulula",
    "commonName":"Northern Hawk Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Sylvia atricapilla",
    "commonName":"Blackcap",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Sylviorthorhynchus desmursii",
    "commonName":"Des Murs's Wiretail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis albescens",
    "commonName":"Pale-breasted Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis albigularis",
    "commonName":"Dark-breasted Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis albilora",
    "commonName":"White-lored Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis azarae",
    "commonName":"Azara's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis beverlyae",
    "commonName":"Rio Orinoco Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis brachyura",
    "commonName":"Slaty Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis cabanisi",
    "commonName":"Cabanis's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis candei",
    "commonName":"White-whiskered Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis castanea",
    "commonName":"Black-throated Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis cherriei",
    "commonName":"Chestnut-throated Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis cinerascens",
    "commonName":"Gray-bellied Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis cinnamomea",
    "commonName":"Stripe-breasted Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis courseni",
    "commonName":"Apurimac Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis erythrothorax",
    "commonName":"Rufous-breasted Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis frontalis",
    "commonName":"Sooty-fronted Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis fuscorufa",
    "commonName":"Rusty-headed Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis gujanensis",
    "commonName":"Plain-crowned Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis hellmayri",
    "commonName":"Red-shouldered Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis hypochondriaca",
    "commonName":"Great Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis hypospodia",
    "commonName":"Cinereous-breasted Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis infuscata",
    "commonName":"Pinto's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis kollari",
    "commonName":"Hoary-throated Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis macconnelli",
    "commonName":"McConnell's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis maranonica",
    "commonName":"Mara?on Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis moesta",
    "commonName":"Dusky Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis propinqua",
    "commonName":"White-bellied Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis ruficapilla",
    "commonName":"Rufous-capped Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis rutilans",
    "commonName":"Ruddy Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis scutata",
    "commonName":"Ochre-cheeked Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis spixi",
    "commonName":"Spix's Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis stictothorax",
    "commonName":"Necklaced Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis subpudica",
    "commonName":"Silvery-throated Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis tithys",
    "commonName":"Blackish-headed Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis unirufa",
    "commonName":"Rufous Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis whitneyi",
    "commonName":"Bahia Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synallaxis zimmeri",
    "commonName":"Russet-bellied Spinetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla dimidiata",
    "commonName":"Russet-mantled Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla guttulata",
    "commonName":"Guttulate Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla roraimae",
    "commonName":"White-throated Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla ruficollis",
    "commonName":"Rufous-necked Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla rufosuperciliata",
    "commonName":"Buff-browed Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla striatus",
    "commonName":"Bolivian Recurvebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla subalaris",
    "commonName":"Lineated Foliage-gleaner",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Syndactyla ucayalae",
    "commonName":"Peruvian Recurvebill",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Synthliboramphus antiquus",
    "commonName":"Ancient Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Synthliboramphus craveri",
    "commonName":"Craveri's Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Synthliboramphus hypoleucus",
    "commonName":"Guadalupe Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Synthliboramphus scrippsi",
    "commonName":"Scripps's Murrelet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Syrigma sibilatrix",
    "commonName":"Whistling Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Systellura longirostris",
    "commonName":"Band-winged Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Tachornis furcata",
    "commonName":"Pygmy Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Tachornis phoenicobia",
    "commonName":"Antillean Palm-Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Tachornis squamata",
    "commonName":"Fork-tailed Palm-Swift",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Tachuris rubrigastra",
    "commonName":"Many-colored Rush Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachybaptus dominicus",
    "commonName":"Least Grebe",
    "orderName":"Podicipediformes"
  },
  {
    "sciName":"Tachycineta albilinea",
    "commonName":"Mangrove Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta albiventer",
    "commonName":"White-winged Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta bicolor",
    "commonName":"Tree Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta cyaneoviridis",
    "commonName":"Bahama Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta euchrysea",
    "commonName":"Golden Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta leucorrhoa",
    "commonName":"White-rumped Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta meyeni",
    "commonName":"Chilean Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta stolzmanni",
    "commonName":"Tumbes Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachycineta thalassina",
    "commonName":"Violet-green Swallow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyeres brachypterus",
    "commonName":"Falkland Steamer-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Tachyeres leucocephalus",
    "commonName":"White-headed Steamer-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Tachyeres patachonicus",
    "commonName":"Flying Steamer-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Tachyeres pteneres",
    "commonName":"Flightless Steamer-Duck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Tachyphonus coronatus",
    "commonName":"Ruby-crowned Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus cristatus",
    "commonName":"Flame-crested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus delatrii",
    "commonName":"Tawny-crested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus luctuosus",
    "commonName":"White-shouldered Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus phoenicius",
    "commonName":"Red-shouldered Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus rufiventer",
    "commonName":"Yellow-crested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus rufus",
    "commonName":"White-lined Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tachyphonus surinamus",
    "commonName":"Fulvous-crested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tadorna cana",
    "commonName":"South African Shelduck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Tadorna ferruginea",
    "commonName":"Ruddy Shelduck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Tadorna tadorna",
    "commonName":"Common Shelduck",
    "orderName":"Anseriformes"
  },
  {
    "sciName":"Taeniotriccus andrei",
    "commonName":"Black-chested Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara argyrofenges",
    "commonName":"Green-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara arthus",
    "commonName":"Golden Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cabanisi",
    "commonName":"Azure-rumped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara callophrys",
    "commonName":"Opal-crowned Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cayana",
    "commonName":"Burnished-buff Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara chilensis",
    "commonName":"Paradise Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara chrysotis",
    "commonName":"Golden-eared Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cucullata",
    "commonName":"Lesser Antillean Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cyanicollis",
    "commonName":"Blue-necked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cyanocephala",
    "commonName":"Red-necked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cyanoptera",
    "commonName":"Black-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cyanotis",
    "commonName":"Blue-browed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara cyanoventris",
    "commonName":"Gilt-edged Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara desmaresti",
    "commonName":"Brassy-breasted Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara dowii",
    "commonName":"Spangle-cheeked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara fastuosa",
    "commonName":"Seven-colored Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara florida",
    "commonName":"Emerald Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara fucosa",
    "commonName":"Green-naped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara guttata",
    "commonName":"Speckled Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara gyrola",
    "commonName":"Bay-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara heinei",
    "commonName":"Black-capped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara icterocephala",
    "commonName":"Silver-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara inornata",
    "commonName":"Plain-colored Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara johannae",
    "commonName":"Blue-whiskered Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara labradorides",
    "commonName":"Metallic-green Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara larvata",
    "commonName":"Golden-hooded Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara lavinia",
    "commonName":"Rufous-winged Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara mexicana",
    "commonName":"Turquoise Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara meyerdeschauenseei",
    "commonName":"Green-capped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara nigrocincta",
    "commonName":"Masked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara nigroviridis",
    "commonName":"Beryl-spangled Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara palmeri",
    "commonName":"Gray-and-gold Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara parzudakii",
    "commonName":"Flame-faced Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara peruviana",
    "commonName":"Black-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara phillipsi",
    "commonName":"Sira Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara preciosa",
    "commonName":"Chestnut-backed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara punctata",
    "commonName":"Spotted Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara ruficervix",
    "commonName":"Golden-naped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara rufigenis",
    "commonName":"Rufous-cheeked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara rufigula",
    "commonName":"Rufous-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara schrankii",
    "commonName":"Green-and-gold Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara seledon",
    "commonName":"Green-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara varia",
    "commonName":"Dotted Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara vassorii",
    "commonName":"Blue-and-black Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara velia",
    "commonName":"Opal-rumped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara viridicollis",
    "commonName":"Silvery Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara vitriolina",
    "commonName":"Scrub Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara xanthocephala",
    "commonName":"Saffron-crowned Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tangara xanthogastra",
    "commonName":"Yellow-bellied Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Taoniscus nanus",
    "commonName":"Dwarf Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tapera naevia",
    "commonName":"Striped Cuckoo",
    "orderName":"Cuculiformes"
  },
  {
    "sciName":"Taphrolesbia griseiventris",
    "commonName":"Gray-bellied Comet",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Taphrospilus hypostictus",
    "commonName":"Many-spotted Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Taraba major",
    "commonName":"Great Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tarphonomus certhioides",
    "commonName":"Chaco Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tarphonomus harterti",
    "commonName":"Bolivian Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tarsiger cyanurus",
    "commonName":"Red-flanked Bluetail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Teledromas fuscus",
    "commonName":"Sandy Gallito",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Telespiza cantans",
    "commonName":"Laysan Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Telespiza ultima",
    "commonName":"Nihoa Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Terenotriccus erythrurus",
    "commonName":"Ruddy-tailed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Terenura maculata",
    "commonName":"Streak-capped Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Terenura sicki",
    "commonName":"Orange-bellied Antwren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Teretistris fernandinae",
    "commonName":"Yellow-headed Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Teretistris fornsi",
    "commonName":"Oriente Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tersina viridis",
    "commonName":"Swallow Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tetraogallus himalayensis",
    "commonName":"Himalayan Snowcock",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Thalassarche bulleri",
    "commonName":"Buller's Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalassarche cauta",
    "commonName":"White-capped Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalassarche chlororhynchos",
    "commonName":"Yellow-nosed Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalassarche chrysostoma",
    "commonName":"Gray-headed Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalassarche eremita",
    "commonName":"Chatham Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalassarche melanophris",
    "commonName":"Black-browed Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalassarche salvini",
    "commonName":"Salvin's Albatross",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalasseus bergii",
    "commonName":"Great Crested Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thalasseus elegans",
    "commonName":"Elegant Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thalasseus maximus",
    "commonName":"Royal Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thalasseus sandvicensis",
    "commonName":"Sandwich Tern",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thalassoica antarctica",
    "commonName":"Antarctic Petrel",
    "orderName":"Procellariiformes"
  },
  {
    "sciName":"Thalurania colombica",
    "commonName":"Crowned Woodnymph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Thalurania furcata",
    "commonName":"Fork-tailed Woodnymph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Thalurania glaucopis",
    "commonName":"Violet-capped Woodnymph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Thalurania ridgwayi",
    "commonName":"Mexican Woodnymph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Thalurania watertonii",
    "commonName":"Long-tailed Woodnymph",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Thamnistes anabatinus",
    "commonName":"Russet Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnomanes ardesiacus",
    "commonName":"Dusky-throated Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnomanes caesius",
    "commonName":"Cinereous Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnomanes saturninus",
    "commonName":"Saturnine Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnomanes schistogynus",
    "commonName":"Bluish-slate Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus aethiops",
    "commonName":"White-shouldered Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus amazonicus",
    "commonName":"Amazonian Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus ambiguus",
    "commonName":"Sooretama Slaty-Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus aroyae",
    "commonName":"Upland Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus atrinucha",
    "commonName":"Black-crowned Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus bernardi",
    "commonName":"Collared Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus bridgesi",
    "commonName":"Black-hooded Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus caerulescens",
    "commonName":"Variable Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus cryptoleucus",
    "commonName":"Castelnau's Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus divisorius",
    "commonName":"Acre Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus doliatus",
    "commonName":"Barred Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus insignis",
    "commonName":"Streak-backed Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus melanonotus",
    "commonName":"Black-backed Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus melanothorax",
    "commonName":"Band-tailed Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus multistriatus",
    "commonName":"Bar-crested Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus murinus",
    "commonName":"Mouse-colored Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus nigriceps",
    "commonName":"Black Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus nigrocinereus",
    "commonName":"Blackish-gray Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus palliatus",
    "commonName":"Chestnut-backed Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus pelzelni",
    "commonName":"Planalto Slaty-Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus praecox",
    "commonName":"Cocha Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus punctatus",
    "commonName":"Northern Slaty-Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus ruficapillus",
    "commonName":"Rufous-capped Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus schistaceus",
    "commonName":"Plain-winged Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus stictocephalus",
    "commonName":"Natterer's Slaty-Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus sticturus",
    "commonName":"Bolivian Slaty-Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus tenuepunctatus",
    "commonName":"Lined Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus torquatus",
    "commonName":"Rufous-winged Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus unicolor",
    "commonName":"Uniform Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thamnophilus zarumae",
    "commonName":"Chapman's Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thaumastura cora",
    "commonName":"Peruvian Sheartail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Theristicus caerulescens",
    "commonName":"Plumbeous Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Theristicus caudatus",
    "commonName":"Buff-necked Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Theristicus melanopis",
    "commonName":"Black-faced Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Thinocorus orbignyianus",
    "commonName":"Gray-breasted Seedsnipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thinocorus rumicivorus",
    "commonName":"Least Seedsnipe",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thinornis novaeseelandiae",
    "commonName":"Shore Plover",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Thlypopsis fulviceps",
    "commonName":"Fulvous-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thlypopsis inornata",
    "commonName":"Buff-bellied Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thlypopsis ornata",
    "commonName":"Rufous-chested Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thlypopsis pectoralis",
    "commonName":"Brown-flanked Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thlypopsis ruficeps",
    "commonName":"Rust-and-yellow Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thlypopsis sordida",
    "commonName":"Orange-headed Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis abbas",
    "commonName":"Yellow-winged Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis cyanocephala",
    "commonName":"Blue-capped Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis cyanoptera",
    "commonName":"Azure-shouldered Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis episcopus",
    "commonName":"Blue-gray Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis glaucocolpa",
    "commonName":"Glaucous Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis ornata",
    "commonName":"Golden-chevroned Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis palmarum",
    "commonName":"Palm Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thraupis sayaca",
    "commonName":"Sayaca Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Threnetes leucurus",
    "commonName":"Pale-tailed Barbthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Threnetes ruckeri",
    "commonName":"Band-tailed Barbthroat",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Threskiornis aethiopicus",
    "commonName":"Sacred Ibis",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Thripadectes flammulatus",
    "commonName":"Flammulated Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripadectes holostictus",
    "commonName":"Striped Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripadectes ignobilis",
    "commonName":"Uniform Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripadectes melanorhynchus",
    "commonName":"Black-billed Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripadectes rufobrunneus",
    "commonName":"Streak-breasted Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripadectes scrutator",
    "commonName":"Rufous-backed Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripadectes virgaticeps",
    "commonName":"Streak-capped Treehunter",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripophaga amacurensis",
    "commonName":"Delta Amacuro Softtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripophaga berlepschi",
    "commonName":"Russet-mantled Softtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripophaga cherriei",
    "commonName":"Orinoco Softtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripophaga fusciceps",
    "commonName":"Plain Softtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thripophaga macroura",
    "commonName":"Striated Softtail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryomanes bewickii",
    "commonName":"Bewick's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryophilus nicefori",
    "commonName":"Niceforo's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryophilus pleurostictus",
    "commonName":"Banded Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryophilus rufalbus",
    "commonName":"Rufous-and-white Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryophilus sernai",
    "commonName":"Antioquia Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryophilus sinaloa",
    "commonName":"Sinaloa Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryorchilus browni",
    "commonName":"Timberline Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Thryothorus ludovicianus",
    "commonName":"Carolina Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tiaris bicolor",
    "commonName":"Black-faced Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tiaris canorus",
    "commonName":"Cuban Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tiaris fuliginosus",
    "commonName":"Sooty Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tiaris obscurus",
    "commonName":"Dull-colored Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tiaris olivaceus",
    "commonName":"Yellow-faced Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tigrisoma fasciatum",
    "commonName":"Fasciated Tiger-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Tigrisoma lineatum",
    "commonName":"Rufescent Tiger-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Tigrisoma mexicanum",
    "commonName":"Bare-throated Tiger-Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Tijuca atra",
    "commonName":"Black-and-gold Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tijuca condita",
    "commonName":"Gray-winged Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tilmatura dupontii",
    "commonName":"Sparkling-tailed Hummingbird",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Tinamotis ingoufi",
    "commonName":"Patagonian Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tinamotis pentlandii",
    "commonName":"Puna Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tinamus guttatus",
    "commonName":"White-throated Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tinamus major",
    "commonName":"Great Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tinamus osgoodi",
    "commonName":"Black Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tinamus solitarius",
    "commonName":"Solitary Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tinamus tao",
    "commonName":"Gray Tinamou",
    "orderName":"Tinamiformes"
  },
  {
    "sciName":"Tityra cayana",
    "commonName":"Black-tailed Tityra",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tityra inquisitor",
    "commonName":"Black-crowned Tityra",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tityra semifasciata",
    "commonName":"Masked Tityra",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todiramphus chloris",
    "commonName":"Collared Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todiramphus recurvirostris",
    "commonName":"Flat-billed Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todiramphus ruficollaris",
    "commonName":"Mangaia Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todiramphus tutus",
    "commonName":"Chattering Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todiramphus veneratus",
    "commonName":"Tahiti Kingfisher",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todirostrum chrysocrotaphum",
    "commonName":"Yellow-browed Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todirostrum cinereum",
    "commonName":"Common Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todirostrum maculatum",
    "commonName":"Spotted Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todirostrum nigriceps",
    "commonName":"Black-headed Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todirostrum pictum",
    "commonName":"Painted Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todirostrum poliocephalum",
    "commonName":"Gray-headed Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todirostrum viridanum",
    "commonName":"Maracaibo Tody-Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Todus angustirostris",
    "commonName":"Narrow-billed Tody",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todus mexicanus",
    "commonName":"Puerto Rican Tody",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todus multicolor",
    "commonName":"Cuban Tody",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todus subulatus",
    "commonName":"Broad-billed Tody",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Todus todus",
    "commonName":"Jamaican Tody",
    "orderName":"Coraciiformes"
  },
  {
    "sciName":"Tolmomyias assimilis",
    "commonName":"Yellow-margined Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tolmomyias flaviventris",
    "commonName":"Yellow-breasted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tolmomyias poliocephalus",
    "commonName":"Gray-crowned Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tolmomyias sulphurescens",
    "commonName":"Yellow-olive Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tolmomyias traylori",
    "commonName":"Orange-eyed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Topaza pella",
    "commonName":"Crimson Topaz",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Topaza pyra",
    "commonName":"Fiery Topaz",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Torreornis inexpectata",
    "commonName":"Zapata Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Touit batavicus",
    "commonName":"Lilac-tailed Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit costaricensis",
    "commonName":"Red-fronted Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit dilectissimus",
    "commonName":"Blue-fronted Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit huetii",
    "commonName":"Scarlet-shouldered Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit melanonotus",
    "commonName":"Brown-backed Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit purpuratus",
    "commonName":"Sapphire-rumped Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit stictopterus",
    "commonName":"Spot-winged Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Touit surdus",
    "commonName":"Golden-tailed Parrotlet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Toxostoma bendirei",
    "commonName":"Bendire's Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma cinereum",
    "commonName":"Gray Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma crissale",
    "commonName":"Crissal Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma curvirostre",
    "commonName":"Curve-billed Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma guttatum",
    "commonName":"Cozumel Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma lecontei",
    "commonName":"Le Conte's Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma longirostre",
    "commonName":"Long-billed Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma ocellatum",
    "commonName":"Ocellated Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma redivivum",
    "commonName":"California Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Toxostoma rufum",
    "commonName":"Brown Thrasher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Trichothraupis melanops",
    "commonName":"Black-goggled Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Triclaria malachitacea",
    "commonName":"Blue-bellied Parrot",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Tringa brevipes",
    "commonName":"Gray-tailed Tattler",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa erythropus",
    "commonName":"Spotted Redshank",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa flavipes",
    "commonName":"Lesser Yellowlegs",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa glareola",
    "commonName":"Wood Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa incana",
    "commonName":"Wandering Tattler",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa melanoleuca",
    "commonName":"Greater Yellowlegs",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa nebularia",
    "commonName":"Common Greenshank",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa ochropus",
    "commonName":"Green Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa semipalmata",
    "commonName":"Willet",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa solitaria",
    "commonName":"Solitary Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Tringa stagnatilis",
    "commonName":"Marsh Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Trochilus polytmus",
    "commonName":"Streamertail",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Troglodytes aedon",
    "commonName":"House Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes cobbi",
    "commonName":"Cobb's Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes hiemalis",
    "commonName":"Winter Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes ochraceus",
    "commonName":"Ochraceous Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes pacificus",
    "commonName":"Pacific Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes rufociliatus",
    "commonName":"Rufous-browed Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes rufulus",
    "commonName":"Tepui Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes sissonii",
    "commonName":"Socorro Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Troglodytes solstitialis",
    "commonName":"Mountain Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Trogon aurantiiventris",
    "commonName":"Orange-bellied Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon bairdii",
    "commonName":"Baird's Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon caligatus",
    "commonName":"Gartered Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon chionurus",
    "commonName":"White-tailed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon citreolus",
    "commonName":"Citreoline Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon clathratus",
    "commonName":"Lattice-tailed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon collaris",
    "commonName":"Collared Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon comptus",
    "commonName":"Blue-tailed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon curucui",
    "commonName":"Blue-crowned Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon elegans",
    "commonName":"Elegant Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon massena",
    "commonName":"Slaty-tailed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon melanocephalus",
    "commonName":"Black-headed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon melanurus",
    "commonName":"Black-tailed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon mesurus",
    "commonName":"Ecuadorian Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon mexicanus",
    "commonName":"Mountain Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon personatus",
    "commonName":"Masked Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon ramonianus",
    "commonName":"Amazonian Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon rufus",
    "commonName":"Black-throated Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon surrucura",
    "commonName":"Surucua Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon violaceus",
    "commonName":"Guianan Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Trogon viridis",
    "commonName":"Green-backed Trogon",
    "orderName":"Trogoniformes"
  },
  {
    "sciName":"Tumbezia salvini",
    "commonName":"Tumbes Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus albicollis",
    "commonName":"White-necked Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus amaurochalinus",
    "commonName":"Creamy-bellied Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus assimilis",
    "commonName":"White-throated Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus aurantius",
    "commonName":"White-chinned Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus chiguanco",
    "commonName":"Chiguanco Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus eunomus",
    "commonName":"Dusky Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus falcklandii",
    "commonName":"Austral Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus flavipes",
    "commonName":"Yellow-legged Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus fulviventris",
    "commonName":"Chestnut-bellied Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus fumigatus",
    "commonName":"Cocoa Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus fuscater",
    "commonName":"Great Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus grayi",
    "commonName":"Clay-colored Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus haplochrous",
    "commonName":"Unicolored Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus hauxwelli",
    "commonName":"Hauxwell's Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus ignobilis",
    "commonName":"Black-billed Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus iliacus",
    "commonName":"Redwing",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus infuscatus",
    "commonName":"Black Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus jamaicensis",
    "commonName":"White-eyed Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus lawrencii",
    "commonName":"Lawrence's Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus leucomelas",
    "commonName":"Pale-breasted Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus leucops",
    "commonName":"Pale-eyed Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus lherminieri",
    "commonName":"Forest Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus maculirostris",
    "commonName":"Ecuadorian Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus maranonicus",
    "commonName":"Mara?on Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus merula",
    "commonName":"Eurasian Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus migratorius",
    "commonName":"American Robin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus naumanni",
    "commonName":"Naumann's Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus nigrescens",
    "commonName":"Sooty Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus nigriceps",
    "commonName":"Slaty Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus nudigenis",
    "commonName":"Spectacled Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus obscurus",
    "commonName":"Eyebrowed Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus obsoletus",
    "commonName":"Pale-vented Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus olivater",
    "commonName":"Black-hooded Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus philomelos",
    "commonName":"Song Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus pilaris",
    "commonName":"Fieldfare",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus plebejus",
    "commonName":"Mountain Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus plumbeus",
    "commonName":"Red-legged Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus poliocephalus",
    "commonName":"Island Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus reevei",
    "commonName":"Plumbeous-backed Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus rufitorques",
    "commonName":"Rufous-collared Robin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus rufiventris",
    "commonName":"Rufous-bellied Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus rufopalliatus",
    "commonName":"Rufous-backed Robin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus sanchezorum",
    "commonName":"Varzea Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus serranus",
    "commonName":"Glossy-black Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Turdus swalesi",
    "commonName":"La Selle Thrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tympanuchus cupido",
    "commonName":"Greater Prairie-Chicken",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Tympanuchus pallidicinctus",
    "commonName":"Lesser Prairie-Chicken",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Tympanuchus phasianellus",
    "commonName":"Sharp-tailed Grouse",
    "orderName":"Galliformes"
  },
  {
    "sciName":"Tyranneutes stolzmanni",
    "commonName":"Dwarf Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyranneutes virescens",
    "commonName":"Tiny Tyrant-Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannopsis sulphurea",
    "commonName":"Sulphury Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannulus elatus",
    "commonName":"Yellow-crowned Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus albogularis",
    "commonName":"White-throated Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus caudifasciatus",
    "commonName":"Loggerhead Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus couchii",
    "commonName":"Couch's Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus crassirostris",
    "commonName":"Thick-billed Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus cubensis",
    "commonName":"Giant Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus dominicensis",
    "commonName":"Gray Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus forficatus",
    "commonName":"Scissor-tailed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus melancholicus",
    "commonName":"Tropical Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus niveigularis",
    "commonName":"Snowy-throated Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus savana",
    "commonName":"Fork-tailed Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus tyrannus",
    "commonName":"Eastern Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus verticalis",
    "commonName":"Western Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyrannus vociferans",
    "commonName":"Cassin's Kingbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Tyto alba",
    "commonName":"Barn Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Tyto glaucops",
    "commonName":"Ashy-faced Owl",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Upucerthia albigula",
    "commonName":"White-throated Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Upucerthia dumetaria",
    "commonName":"Scale-throated Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Upucerthia jelskii",
    "commonName":"Plain-breasted Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Upucerthia saturatior",
    "commonName":"Patagonian Forest Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Upucerthia validirostris",
    "commonName":"Buff-breasted Earthcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Uraeginthus bengalus",
    "commonName":"Red-cheeked Cordonbleu",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Uria aalge",
    "commonName":"Common Murre",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Uria lomvia",
    "commonName":"Thick-billed Murre",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Urochroa bougueri",
    "commonName":"White-tailed Hillstar",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Uromyias agilis",
    "commonName":"Agile Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Uromyias agraphia",
    "commonName":"Unstreaked Tit-Tyrant",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Uropelia campestris",
    "commonName":"Long-tailed Ground-Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Uropsalis lyra",
    "commonName":"Lyre-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Uropsalis segmentata",
    "commonName":"Swallow-tailed Nightjar",
    "orderName":"Caprimulgiformes"
  },
  {
    "sciName":"Uropsila leucogastra",
    "commonName":"White-bellied Wren",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Urosticte benjamini",
    "commonName":"Purple-bibbed Whitetip",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Urosticte ruficrissa",
    "commonName":"Rufous-vented Whitetip",
    "orderName":"Apodiformes"
  },
  {
    "sciName":"Urothraupis stolzmanni",
    "commonName":"Black-backed Bush Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vanellus cayanus",
    "commonName":"Pied Lapwing",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Vanellus chilensis",
    "commonName":"Southern Lapwing",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Vanellus miles",
    "commonName":"Masked Lapwing",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Vanellus resplendens",
    "commonName":"Andean Lapwing",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Vanellus vanellus",
    "commonName":"Northern Lapwing",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Veniliornis affinis",
    "commonName":"Red-stained Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis callonotus",
    "commonName":"Scarlet-backed Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis cassini",
    "commonName":"Golden-collared Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis chocoensis",
    "commonName":"Choco Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis dignus",
    "commonName":"Yellow-vented Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis frontalis",
    "commonName":"Dot-fronted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis kirkii",
    "commonName":"Red-rumped Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis lignarius",
    "commonName":"Striped Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis maculifrons",
    "commonName":"Yellow-eared Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis mixtus",
    "commonName":"Checkered Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis nigriceps",
    "commonName":"Bar-bellied Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis passerinus",
    "commonName":"Little Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis sanguineus",
    "commonName":"Blood-colored Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Veniliornis spilogaster",
    "commonName":"White-spotted Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Vermivora chrysoptera",
    "commonName":"Golden-winged Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vermivora cyanoptera",
    "commonName":"Blue-winged Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vestiaria coccinea",
    "commonName":"Iiwi",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vidua macroura",
    "commonName":"Pin-tailed Whydah",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vini australis",
    "commonName":"Blue-crowned Lorikeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Vini kuhlii",
    "commonName":"Kuhl's Lorikeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Vini peruviana",
    "commonName":"Blue Lorikeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Vini stepheni",
    "commonName":"Stephen's Lorikeet",
    "orderName":"Psittaciformes"
  },
  {
    "sciName":"Vireo altiloquus",
    "commonName":"Black-whiskered Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo atricapilla",
    "commonName":"Black-capped Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo bairdi",
    "commonName":"Cozumel Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo bellii",
    "commonName":"Bell's Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo brevipennis",
    "commonName":"Slaty Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo carmioli",
    "commonName":"Yellow-winged Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo cassinii",
    "commonName":"Cassin's Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo crassirostris",
    "commonName":"Thick-billed Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo flavifrons",
    "commonName":"Yellow-throated Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo flavoviridis",
    "commonName":"Yellow-green Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo gilvus",
    "commonName":"Warbling Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo gracilirostris",
    "commonName":"Noronha Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo griseus",
    "commonName":"White-eyed Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo gundlachii",
    "commonName":"Cuban Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo huttoni",
    "commonName":"Hutton's Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo hypochryseus",
    "commonName":"Golden Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo latimeri",
    "commonName":"Puerto Rican Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo leucophrys",
    "commonName":"Brown-capped Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo magister",
    "commonName":"Yucatan Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo masteri",
    "commonName":"Choco Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo modestus",
    "commonName":"Jamaican Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo nanus",
    "commonName":"Flat-billed Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo nelsoni",
    "commonName":"Dwarf Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo olivaceus",
    "commonName":"Red-eyed Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo osburni",
    "commonName":"Blue Mountain Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo pallens",
    "commonName":"Mangrove Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo philadelphicus",
    "commonName":"Philadelphia Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo plumbeus",
    "commonName":"Plumbeous Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo solitarius",
    "commonName":"Blue-headed Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireo vicinior",
    "commonName":"Gray Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireolanius eximius",
    "commonName":"Yellow-browed Shrike-Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireolanius leucotis",
    "commonName":"Slaty-capped Shrike-Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireolanius melitophrys",
    "commonName":"Chestnut-sided Shrike-Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vireolanius pulchellus",
    "commonName":"Green Shrike-Vireo",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Volatinia jacarina",
    "commonName":"Blue-black Grassquit",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Vultur gryphus",
    "commonName":"Andean Condor",
    "orderName":"Accipitriformes"
  },
  {
    "sciName":"Wetmorethraupis sterrhopteron",
    "commonName":"Orange-throated Tanager",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Willisornis poecilinotus",
    "commonName":"Common Scale-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Willisornis vidua",
    "commonName":"Xingu Scale-backed Antbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xanthocephalus xanthocephalus",
    "commonName":"Yellow-headed Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xanthopsar flavus",
    "commonName":"Saffron-cowled Blackbird",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xema sabini",
    "commonName":"Sabine's Gull",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Xenerpestes minlosi",
    "commonName":"Double-banded Graytail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenerpestes singularis",
    "commonName":"Equatorial Graytail",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenodacnis parina",
    "commonName":"Tit-like Dacnis",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenoglaux loweryi",
    "commonName":"Long-whiskered Owlet",
    "orderName":"Strigiformes"
  },
  {
    "sciName":"Xenoligea montana",
    "commonName":"White-winged Warbler",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenopipo atronitens",
    "commonName":"Black Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenopipo flavicapilla",
    "commonName":"Yellow-headed Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenopipo holochlora",
    "commonName":"Green Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenopipo unicolor",
    "commonName":"Jet Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenopipo uniformis",
    "commonName":"Olive Manakin",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenops minutus",
    "commonName":"Plain Xenops",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenops rutilans",
    "commonName":"Streaked Xenops",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenops tenuirostris",
    "commonName":"Slender-billed Xenops",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenopsaris albinucha",
    "commonName":"White-naped Xenopsaris",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenornis setifrons",
    "commonName":"Spiny-faced Antshrike",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenospingus concolor",
    "commonName":"Slender-billed Finch",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenospiza baileyi",
    "commonName":"Sierra Madre Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenotriccus callizonus",
    "commonName":"Belted Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenotriccus mexicanus",
    "commonName":"Pileated Flycatcher",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xenus cinereus",
    "commonName":"Terek Sandpiper",
    "orderName":"Charadriiformes"
  },
  {
    "sciName":"Xiphidiopicus percussus",
    "commonName":"Cuban Green Woodpecker",
    "orderName":"Piciformes"
  },
  {
    "sciName":"Xiphocolaptes albicollis",
    "commonName":"White-throated Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphocolaptes falcirostris",
    "commonName":"Moustached Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphocolaptes major",
    "commonName":"Great Rufous Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphocolaptes promeropirhynchus",
    "commonName":"Strong-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xipholena atropurpurea",
    "commonName":"White-winged Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xipholena lamellipennis",
    "commonName":"White-tailed Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xipholena punicea",
    "commonName":"Pompadour Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus elegans",
    "commonName":"Elegant Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus erythropygius",
    "commonName":"Spotted Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus flavigaster",
    "commonName":"Ivory-billed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus fuscus",
    "commonName":"Lesser Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus guttatus",
    "commonName":"Buff-throated Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus lachrymosus",
    "commonName":"Black-striped Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus obsoletus",
    "commonName":"Striped Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus ocellatus",
    "commonName":"Ocellated Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus pardalotus",
    "commonName":"Chestnut-rumped Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus spixii",
    "commonName":"Spix's Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus susurrans",
    "commonName":"Cocoa Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xiphorhynchus triangularis",
    "commonName":"Olive-backed Woodcreeper",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis cinereus",
    "commonName":"Gray Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis coronatus",
    "commonName":"Black-crowned Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis dominicanus",
    "commonName":"Black-and-white Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis irupero",
    "commonName":"White Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis pyrope",
    "commonName":"Fire-eyed Diucon",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis rubetra",
    "commonName":"Rusty-backed Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis salinarum",
    "commonName":"Salinas Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Xolmis velatus",
    "commonName":"White-rumped Monjita",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zaratornis stresemanni",
    "commonName":"White-cheeked Cotinga",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zebrilus undulatus",
    "commonName":"Zigzag Heron",
    "orderName":"Pelecaniformes"
  },
  {
    "sciName":"Zeledonia coronata",
    "commonName":"Wrenthrush",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zenaida asiatica",
    "commonName":"White-winged Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Zenaida auriculata",
    "commonName":"Eared Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Zenaida aurita",
    "commonName":"Zenaida Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Zenaida galapagoensis",
    "commonName":"Galapagos Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Zenaida macroura",
    "commonName":"Mourning Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Zenaida meloda",
    "commonName":"West Peruvian Dove",
    "orderName":"Columbiformes"
  },
  {
    "sciName":"Zimmerius acer",
    "commonName":"Guianan Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius albigularis",
    "commonName":"Choco Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius bolivianus",
    "commonName":"Bolivian Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius chrysops",
    "commonName":"Golden-faced Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius cinereicapilla",
    "commonName":"Red-billed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius gracilipes",
    "commonName":"Slender-footed Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius vilissimus",
    "commonName":"Paltry Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius villarejoi",
    "commonName":"Mishana Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zimmerius viridiflavus",
    "commonName":"Peruvian Tyrannulet",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zonotrichia albicollis",
    "commonName":"White-throated Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zonotrichia atricapilla",
    "commonName":"Golden-crowned Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zonotrichia capensis",
    "commonName":"Rufous-collared Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zonotrichia leucophrys",
    "commonName":"White-crowned Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zonotrichia querula",
    "commonName":"Harris's Sparrow",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zosterops explorator",
    "commonName":"Layard's White-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zosterops japonicus",
    "commonName":"Japanese White-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zosterops lateralis",
    "commonName":"Silver-eye",
    "orderName":"Passeriformes"
  },
  {
    "sciName":"Zosterops samoensis",
    "commonName":"Samoan White-eye",
    "orderName":"Passeriformes"
  }
];

function seedBirds (arr) {
  Bird.delete().run()
  .then(function(){
    Bird.save(arr)
      .then(function() {
        console.log(arr.length, "birds created");
      });
  });
}

seedBirds(birds);
