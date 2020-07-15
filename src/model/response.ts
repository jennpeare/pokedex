export interface PokedexResponse<T> {
  loading: boolean
  data?: T,
  error?: Error
}