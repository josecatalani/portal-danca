import { observable, action, computed } from 'mobx'
import { Event } from '../interfaces/event'

class AppStore {
  @observable
  searchQuery: string = ''

  @observable
  results: Event[] = []

  @observable
  isSearching: boolean = false

  @observable
  menuOpen: boolean = false

  @observable
  isFiltering: boolean = false

  @observable
  isLoadingMoreEvents: boolean = false

  @observable
  showNoResults: boolean = false

  @observable
  filters: Map<string, boolean> = new Map<string, boolean>();

  constructor() {
    this.filters.set('nearbyMe', false)
    this.filters.set('friendList', false)
    this.filters.set('filterByDate', false)
    this.filters.set('underAgePermitted', false)
  }

  @computed
  get hasEventsToShow() {
    return !this.isSearching && this.results && this.results.length > 0
  }

  @action
  onChangeQuery = (event: React.FormEvent<HTMLInputElement>) => {
    this.searchQuery = event.currentTarget.value
    this.isSearching = false
  }

  @action
  makeSearch = () => this.isSearching = true

  @action
  setFilteringKey = (key: string, value: boolean) => this.filters.set(key, value)

  getFilteringKey = (key: string) => this.filters.get(key)
}

export default AppStore;