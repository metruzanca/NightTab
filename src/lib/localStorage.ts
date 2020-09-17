const STORE_KEY = "nightTab"
const STORE_BACKUP_KEY = "nightTab-backup"
const THEME = "nightTabStyle"

export function loadConfig(){
  return localStorage.getItem(STORE_KEY)
}

export function saveConfig(object:object){
  return localStorage.setItem(STORE_KEY, JSON.stringify(object))
}