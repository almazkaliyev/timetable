import db from './firebase';

export const getLists = () => {
  return db.collection('lists')
    .orderBy('index')
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    });
};

export const getEvents = () => {
  return db.collection('events')
    .orderBy('listId')
    .orderBy('startTime')
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    });
};

export const getEventsByListId = (listId) => {
  return db.collection('events')
    .where('listId', '==', listId)
    .orderBy('startTime')
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    });
};

export const createEvent = (data) => {
  return db.collection('events')
    .add({ ...data })
    .then(docRef => docRef.get())
    .then(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
};

export const updateEvent = (eventId, data) => {
  return db.collection('events')
    .doc(eventId)
    .update(data)
    .then(() => ({
      id: eventId,
      ...data,
    }));
};

export const deleteEvent = (eventId) => {
  return db.collection('events')
    .doc(eventId)
    .delete()
    .then(() => eventId);
};
