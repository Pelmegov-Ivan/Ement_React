import classes from "./Discount.module.css";
function Discount() {
  return (
    <div className={classes.discount}>
      <div className={classes.div}>
        <h1 className={classes.h1}>Скидка 40% до 30 июня</h1>
        <p className={classes.p}>
          Успейте приобрести курс по выгодной цене! Вы можете забронировать
          место на курсе со скидкой, а остальную сумму оплатить в рассрочку на
          12 или 24 месяца.
        </p>

        <button className={classes.button}>Купить курс</button>
      </div>
    </div>
  );
}
export default Discount;
