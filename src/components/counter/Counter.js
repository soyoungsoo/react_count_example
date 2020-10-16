import React from "react";
import styles from './Counter.module.css';

export function Counter({increment, count}) {
    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={increment}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                {/*<button*/}
                    {/*className={styles.button}*/}
                    {/*aria-label="Decrement value"*/}
                    {/*onClick={() => dispatch(decrement())}*/}
                {/*>*/}
                    {/*-*/}
                {/*</button>*/}
            </div>
            <div className={styles.row}>
                {/*<input*/}
                    {/*className={styles.textbox}*/}
                    {/*aria-label="Set increment amount"*/}
                    {/*value={incrementAmount}*/}
                    {/*onChange={e => setIncrementAmount(e.target.value)}*/}
                {/*/>*/}
                {/*<button*/}
                    {/*className={styles.button}*/}
                    {/*onClick={() =>*/}
                        {/*dispatch(incrementByAmount(Number(incrementAmount) || 0))*/}
                    {/*}*/}
                {/*>*/}
                    {/*Add Amount*/}
                {/*</button>*/}
                {/*<button*/}
                    {/*className={styles.asyncButton}*/}
                    {/*onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}*/}
                {/*>*/}
                    {/*Add Async*/}
                {/*</button>*/}
            </div>
        </div>
    );
}
