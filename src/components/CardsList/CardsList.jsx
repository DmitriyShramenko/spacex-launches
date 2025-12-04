import { useEffect, useReducer } from "react";
import { SimpleGrid } from '@mantine/core';
import LaunchCard from "../LaunchCard/LaunchCard";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function CardsList() {

  const [{ items, loading, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: 'FETCH_START' });

        const res = await fetch('https://api.spacexdata.com/v3/launches?launch_year=2020');
        if (!res.ok) {
          throw new Error('Ошибка загрузки');
        }
        const data = await res.json();

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "FETCH_ERROR", payload: e.message });
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!items.length) return <div>Ничего не найдено</div>;

  return (
    <SimpleGrid cols={3} verticalSpacing="md">
      {items.map((launch, index) => (
        <LaunchCard key={index} launch={launch} />
      ))}
    </SimpleGrid >
  );
};

export default CardsList;