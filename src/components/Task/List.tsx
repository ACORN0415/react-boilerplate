import React from 'react';
import { Task } from '../../types';
import Item from './Item';

export interface ListProps {
  /** 태스크 목록 */
  tasks: Task[];

  /** 로딩중 여부 */
  isLoading: boolean;

  /** 배경색 */
  background?: string;

  /** 완료 콜백 */
  onComplete: (id: number) => void;

  /** 고정 콜백 */
  onFavorite: (id: number) => void;
}

const styles = {
  wrapper: {
    width: '30rem',
    padding: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const List = ({
  tasks,
  isLoading,
  onComplete,
  onFavorite,
  background = '#eaf1f9',
}: ListProps) => {
  const isEmpty = !tasks.length;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ ...styles.wrapper, background }}>
      <div style={styles.header}>
        <span>완료</span>
        <span>제목</span>
        <span>고정</span>
      </div>
      <div style={styles.body as React.CSSProperties}>
        {isEmpty ? (
          <span>Empty...</span>
        ) : (
          tasks
            .sort(({ isFavorite: a }, { isFavorite: b }) => {
              if (a === b) {
                return 0;
              }
              if (a) {
                return -1;
              }
              return 1;
            })
            .map((task) => (
              <Item
                key={task.id}
                task={task}
                onComplete={(id) => onComplete(id)}
                onFavorite={(id) => onFavorite(id)}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default List;
