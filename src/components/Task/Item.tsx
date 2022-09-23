import { Task } from '../../types';

export interface ItemProps {
  /** 태스크 정보 */
  task: Task;

  /** 완료 콜백 */
  onComplete: (id: number) => void;

  /** 고정 콜백 */
  onFavorite: (id: number) => void;
}

const styles = {
  wrapper: {
    display: 'flex',
    height: '3rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f6f8fa',
    borderRadius: '10px',
    marginBottom: '0.5rem',
    padding: '0 0.5rem',
    border: '1px solid #d0d7de',
  },

  doing: {
    textDecorationLine: 'none',
    color: '#000',
  },
  complete: {
    textDecorationLine: 'line-through',
    color: '#cdcdcd',
  },
};

const Item = ({
  task: { id, title, isComplete, isFavorite },
  onComplete,
  onFavorite,
}: ItemProps) => (
  <div style={styles.wrapper}>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => onComplete(id)}
    />
    <span style={isComplete ? styles.complete : styles.doing}>{title}</span>

    <input
      type="checkbox"
      checked={isFavorite}
      onChange={() => onFavorite(id)}
    />
  </div>
);

export default Item;
