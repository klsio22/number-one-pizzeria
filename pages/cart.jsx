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
                <th>Produto</th>
                <th>Nome</th>
                <th>Extras</th>
                <th>Preço</th>
                <th>Quantidade</th>
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
                    Ingredientes duplos, molho picante
                  </span>
                </td>
                <td>
                  <span className={styles.price}>R$19.00</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>R$39.00</span>
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
                  Ingredientes duplos, molho picante
                  </span>
                </td>
                <td>
                  <span className={styles.price}>R$19.00</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>R$39.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.h2}>TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>R$79.60
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Desconto:</b>R$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>R$79.60
            </div>
            <a href={'/orders/21'}>
              <button className={styles.button}>Saindo agora!</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
