import React, { Component } from 'react';
import styles from '/styles/Cart.module.scss';
import Image from 'next/image';
export default class cart extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>

              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgConteiner}>
                    <Image
                      src='/img/pizza.png'
                      alt='Photo Page'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>Carolzo</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredients , spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$19.00</span>
                </td>
                <td>
                  <span className={styles.quantity}>$2</span>
                </td>
                <td>
                  <span className={styles.total}>$39.00</span>
                </td>
              </tr>

              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgConteiner}>
                    <Image
                      src='/img/pizza.png'
                      alt='Photo Page'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>Carolzo</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredients , spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$19.00</span>
                </td>
                <td>
                  <span className={styles.quantity}>$2</span>
                </td>
                <td>
                  <span className={styles.total}>$39.00</span>
                </td>
              </tr>
            </tbody>
          </table>
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
            <a href={'/orders/21'}>
              <button className={styles.button}>Checkout Now!</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
