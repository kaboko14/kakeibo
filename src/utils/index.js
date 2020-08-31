export const sortItems = items => {
  items.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    if (a.id > b.id) return -1
    if (a.id < b.id) return 1
  })
}

export const getItemId = items => {
  console.log(items)
  return items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1
}
