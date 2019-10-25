export default function UpdateLoaded(payload) {
  // Oppdater om siden har lasted en gang
  return { type: "UPDATE_LOADED", payload }
}