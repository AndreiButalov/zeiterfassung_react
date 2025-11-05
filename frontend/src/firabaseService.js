import { db, ref, set, push, get, update, remove } from "./firebase";

// 🔹 CREATE (Post)
export const createData = async (path, data) => {
  const newRef = push(ref(db, path));
  await set(newRef, data);
  return newRef.key; // gibt die neue ID zurück
};

// 🔹 READ (Get)
export const readData = async (path) => {
  const snapshot = await get(ref(db, path));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};

// 🔹 UPDATE (Edit)
export const updateData = async (path, newData) => {
  await update(ref(db, path), newData);
};

// 🔹 DELETE
export const deleteData = async (path) => {
  await remove(ref(db, path));
};
