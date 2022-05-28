import React, { useState } from 'react';
import store from 'store2';

export const localDb = () => {
  const [localFav, setLocalFav] = useState([]);

  console.log(localFav);
  store.set('favorites', { id: 'B74AK0MHxOA' });

  store.get('favorites') === null ? setLocalFav([]) : setLocalFav(store.get('favorites'));
};
