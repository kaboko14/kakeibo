import moment from 'moment';

// 日付・IDでソート
export const sortItems = items => {
  items.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
  });
};

// 配列内の一番大きなID＋１の数字を返す
export const getItemId = items => {
  return items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
};

// オブジェクト内の一番大きなkey(ID)＋１の数字を返す
export const getObjectId = items => {
  const idList = Object.keys(items);
  return idList.reduce((maxId, id) => Math.max(maxId, id), 0) + 1;
};

// moment.jsで現在の日付を取得(YYYY-MM-DD)
export const getDate = () => {
  return moment().format('YYYY-MM-DD');
};

// 日付のフォーマット(YYYY-MM-DD => M/D(ddd))
moment.updateLocale('ja', {
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
});
export const formatDate = (date) => {
  const m = moment(date);
  return m.format('M/D(ddd)');
};
