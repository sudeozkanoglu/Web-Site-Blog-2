import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/sirbistan.JPEG";
import Trip2 from "../assets/bosna.JPEG";
import Trip3 from "../assets/karadag.JPEG";

function Trip() {
  return (
    <div className="trip">
      <h1>Gezdiğim Ülkeler</h1>
      <p>Kısa Bir Balkan Gezintisi ve Eğlencesi</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Sırbistan"
          text="Sırbistan, resmi adıyla Sırbistan Cumhuriyeti
          Güneydoğu Avrupa'da Panonya Ovası ile Balkanların kesişiminde 
          bulunan bir ülkedir. Başkenti ve en büyük şehri Belgrad'dır."
        />
        <TripData
          image={Trip2}
          heading="Bosna ve Hersek"
          text="Bosna - Hersek, kısa haliyle B&H, Balkanlarda bir ülkedir.
          Başkent ve en büyük şehir olan Saraybosna, birçok yüksek dağla 
          çevrilmiştir. Adını 'Horion Bosona'dan alır ve eski dilde iyi insanların
          bölgesi anlamına gelir."
        />
        <TripData
          image={Trip3}
          heading="Karadağ"
          text="Karadağ, Avrupa'nın güneydoğusunda Balkanların Adriyatik kıyısında
          bir ülkedir. Başkenti ve en büyük şehri Podgorica'dır. Ülkenin büyük
          çoğunluğunu Karadağlılar oluştursa da ülkede Sırplar en büyük azınlıktır.
          "
        />
      </div>
    </div>
  );
}
export default Trip;
