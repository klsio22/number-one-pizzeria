import React from 'react';
import Image from 'next/image';
import styles from '/styles/Order.module.scss';

export default function Order() {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>

              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>23121329</span>
                </td>
                <td>
                  <span className={styles.name}>Jerson</span>
                </td>
                <td>
                  <span className={styles.address}>Elto st. 23-02 LA</span>
                </td>
                <td>
                  <span className={styles.total}>$38.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src='/img/paid.png' width={30} height={30} alt='payment' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                alt='Checked'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src='/img/bake.png' width={30} height={30} alt='baking' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                alt='Checked'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image
              src='/img/bike.png'
              width={30}
              height={30}
              alt='On the way'
            />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                alt='Checked'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image
              src='/img/delivered.png'
              width={30}
              height={30}
              alt='payment'
            />
            <span>Deliverd</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                alt='Checked'
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}
