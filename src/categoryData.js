// export const categoryData = {
//   // storeに移動予定
//   data () {
//     return {
//       categories: [
//         { id: 0, name: 'コンビニ', price: 150 },
//         { id: 1, name: 'スーパー', price: 2000 },
//         { id: 2, name: '外食', price: 1000 },
//         { id: 3, name: '自販機', price: 130 },
//         { id: 4, name: '消耗品', price: 200 }
//       ]
//     }
//   },
//   computed: {
//     categoryItems () {
//       return Object.assign([], this.categories)
//     },
//     buttonProperties () {
//       return this.categoryItems.map((item) => {
//         return {
//           id: item.id,
//           labelName: item.name,
//           labelPrice: `￥${item.price.toLocaleString()}`,
//           className: 'button-category'
//         }
//       })
//     }
//   }
// }
