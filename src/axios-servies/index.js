import axios from 'axios'
const API_URL = `https://eldenring.fanapis.com/api`

//? ------------------------------------ Ammo ----------------------------------

export const fetchAllAmmos = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/ammos?limit=20&page=${page}`)
    console.log(`fetchAllAmmos`, data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchAmmoById = async (ammoId) => {
  try {
    const { data } = await axios.get(`${API_URL}/ammos/${ammoId}`)
    console.log(`fetchAmmoById`, data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchAmmoByName = async (ammoName) => {
  const formattedName = ammoName.split(' ').join(`%20`)
  try {
    const { data } = await axios.get(`${API_URL}/ammos?name=${formattedName}`)
    console.log(`fetchAmmoByName`, data)
    return data
  } catch (err) {
    throw err
  }
}

//* ----------------------- Armours ----------------------------------------

export const fetchAllArmours = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/armors?limit=20&page=${page}`)
    console.log(`fetchAllArmours`, data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchArmourById = async (armourId) => {
  try {
    const { data } = await axios.get(`${API_URL}/armors/${armourId}`)
    console.log('fetchArmourById :>> ', data)
    return data
  } catch (err) {}
}

export const fetchAmourByName = async (amourName) => {
  const formattedName = amourName.split(' ').join(`%20`)
  try {
    const { data } = await axios.get(`${API_URL}/armors?name=${formattedName}`)
    console.log(`fetchAmourByName`, data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Ashes -------------------------------------

export const fetchAllAshes = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/ashes?limit=20&page=${page}`)
    console.log('fetchAllAshes :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchAshById = async (ashId) => {
  try {
    const { data } = await axios.get(`${API_URL}/ashes/${ashId}`)
    console.log('fetchAshById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchAshByName = async (ashName) => {
  const formattedName = ashName.split(' ').join(`%20`)
  try {
    const { data } = await axios.get(`${API_URL}/ashes?name=${formattedName}`)
    console.log('fetchAshByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Bosses -------------------------------------

export const fetchAllBosses = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/bosses?limit=20&page=${page}`)
    console.log('fetchAllBosses :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchBossById = async (bossId) => {
  try {
    const { data } = await axios.get(`${API_URL}/bosses/${bossId}`)
    console.log('fetchBossById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchBossByName = async (bossName) => {
  const formattedName = bossName.split(' ').join('%20')
  try {
    const { data } = await axios.get(`${API_URL}/bosses?name=${formattedName}`)
    console.log('fetchBossByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Classes -------------------------------------

export const fetchAllClasses = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/classes`)
    console.log('fetchAllClasses :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchClassById = async (classId) => {
  try {
    const { data } = await axios.get(`${API_URL}/classes/${classId}`)
    console.log('fetchClassById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchClassByName = async (className) => {
  try {
    const { data } = await axios.get(`${API_URL}/classes?name=${className}`)
    console.log('fetchClassByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Creatures -------------------------------------

export const fetchAllCreatures = async (page = 0) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/creatures?limit=20&page=${page}`
    )
    console.log('fetchAllCreatures :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchCreatureById = async (creatureId) => {
  try {
    const { data } = await axios.get(`${API_URL}/creatures/${creatureId}`)
    console.log('fetchCreatureById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchCreatureByName = async (creatureName) => {
  const formattedName = creatureName.split(' ').join('%20')
  try {
    const { data } = await axios.get(
      `${API_URL}/creatures?name=${formattedName}`
    )
    console.log('fetchCreatureByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Incantations -------------------------------------

export const fetchAllIncantations = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/incantations`)
    console.log('fetchAllIncantations :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchIncantationById = async (incantationId) => {
  try {
    const { data } = await axios.get(`${API_URL}/incantations/${incantationId}`)
    console.log('fetchIncantationById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchIncantationByName = async (incantationByName) => {
  const formattedName = incantationByName.split(' ').join('%20')
  try {
    const { data } = await axios.get(
      `${API_URL}/incantations?name=${formattedName}`
    )
    console.log('fetchIncantationByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Items -------------------------------------

export const fetchAllItems = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/items?limit=20&page=${page}`)
    console.log('fetchAllItems :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchItemById = async (itemId) => {
  try {
    const { data } = await axios.get(`${API_URL}/items/${itemId}`)
    console.log('fetchItemById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchItemByName = async (itemName) => {
  const formattedName = itemName.split(' ').join('%20')
  try {
    const { data } = await axios.get(`${API_URL}/items?name=${formattedName}`)
    console.log('fetchItemByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Locations -------------------------------------

export const fetchAllLocations = async (page = 0) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/locations?limit=20&page=${page}`
    )
    console.log('fetchAllLocations :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchLocationsById = async (locationId) => {
  try {
    const { data } = await axios.get(`${API_URL}/locations/${locationId}`)
    console.log(`fetchLocationsById -->`, data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchLocationsByName = async (locationName) => {
  const formattedName = locationName.split(' ').join('%20')
  try {
    const { data } = await axios.get(
      `${API_URL}/lcoations?name=${formattedName}`
    )
    console.log('fetchLocationsByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- NPCs -------------------------------------

export const fetchAllNpcs = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/npcs?limit=20&page=${page}`)
    console.log('fetchAllNpcs :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchNpcById = async (npcId) => {
  try {
    const { data } = await axios.get(`${API_URL}/npcs/${npcId}`)
    console.log('fetchNpcById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchNpcByName = async (npcName) => {
  try {
    const formattedName = npcName.split(' ').join('%20')
    const { data } = await axios.get(`${API_URL}/npcs?name=${formattedName}`)
    console.log('fetchNpcByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Shields -------------------------------------

export const fetchAllShields = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/shields?limit=20&page=${page}`)
    console.log('fetchAllShields :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchShieldById = async (shieldId) => {
  try {
    const { data } = await axios.get(`${API_URL}/shields/${shieldId}`)
    console.log('fetchShieldById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchShieldByName = async (shieldName) => {
  const formattedName = shieldName.split(' ').join('%20')
  try {
    const { data } = await axios.get(`${API_URL}/shields?name=${formattedName}`)
    console.log('fetchShieldByName', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Sorceries -------------------------------------

export const fetchAllSorceries = async (page = 0) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/sorceries?limit=20&page=${page}`
    )
    console.log('fetchAllSorceries :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchSorceryById = async (sorceryId) => {
  try {
    const { data } = await axios.get(`${API_URL}/sorceries/${sorceryId}`)
    console.log('fetchSorceriesById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchSorceryByName = async (sorceryName) => {
  const formattedName = sorceryName.split(' ').join('%20')
  try {
    const { data } = await axios.get(
      `${API_URL}/sorceries?name=${formattedName}`
    )
    console.log('fetchSorceryByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Spirits -------------------------------------

export const fetchAllSpirits = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/spirits?limit=20&page=${page}`)
    console.log('fetchAllSpirits :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchSpiritById = async (spiritId) => {
  try {
    const { data } = await axios.get(`${API_URL}/spirits/${spiritId}`)
    console.log('fetchSpiritById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchSpiritByName = async (spiritName) => {
  const formattedName = spiritName.split(' ').join('%20')
  try {
    const { data } = await axios.get(`${API_URL}/spirits?name=${formattedName}`)
    console.log('fetchSpiritByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Talismans -------------------------------------

export const fetchAllTalismans = async (page = 0) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/talismans?limit=20&page=${page}`
    )
    console.log('fetchAllTalismans :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchTalismanById = async (talismanId) => {
  try {
    const { data } = await axios.get(`${API_URL}/taslimans/${talismanId}`)
    console.log('fetchTalismanById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchTalismanByName = async (talismanName) => {
  const formattedName = talismanName.split(' ').join('%20')
  try {
    const { data } = await axios.get(
      `${API_URL}/talismans?name=${formattedName}`
    )
    console.log('fetchTalismanByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

// * --------------------------- Weapons -------------------------------------

export const fetchAllWeapons = async (page = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/weapons?limit=20&page=${page}`)
    console.log('fetchAllWeapons :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchWeaponById = async (weaponId) => {
  try {
    const { data } = await axios.get(`${API_URL}/weapons/${weaponId}`)
    console.log('fetchWeaponById :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}

export const fetchWeaponByName = async (weaponName) => {
  const formattedName = weaponName.split(' ').join('%20')
  try {
    const { data } = await axios.get(`${API_URL}/weapons?name=${formattedName}`)
    console.log('fetchWeaponByName :>> ', data)
    return data
  } catch (err) {
    throw err
  }
}
