import Mountain1 from "../assets/macedonia1.jpeg";
import Mountain2 from "../assets/macedonia2.JPEG";
import Mountain3 from "../assets/matka.jpeg";
import Mountain4 from "../assets/matka1.JPEG";
import Mountain5 from "../assets/ohrid.jpeg";
import Mountain6 from "../assets/ohrid1.jpeg";
import Mountain7 from "../assets/bitola.jpeg";
import Mountain8 from "../assets/bitola1.JPEG";

import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Kuzey Makedonya</h1>
      <p>Balkanlardaki Bir Türk Esintisi : Kuzey Makedonya</p>
      <DestinationData
        className="first-des"
        heading="Üsküp , Kuzey Makedonya"
        text="Üsküp, Kuzey Makedonya'nın başkenti ve en büyük kentidir.
        Ülkenin politik, kültürel, ekonomik ve akademik merkezi olan kent,
        ortasından geçen Vardar Nehri tarafından ikiye ayrılır. Konumu dolayısıyla
        birçok farklı etnik grubun bir arada yaşadığı bir şehirdir.
        Yaklaşık olarak 6 ayımı geçirdiğim Üsküp'te birçok farklı kültürü
        tanıma imkanı elde ettim. Şehrin her yerinde görebileceğiniz birbirinden
        güzel heykelleri, Osmanlı'nın ve Türk kültürünün etkilerini görebileceğiniz bir şehir."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Matka , Kuzey Makedonya"
        text="Matka, Makedonya'nın başkenti Üsküp'ün batısında bulunan,
        bir kanyondur. Yaklaşık 500 hektar alan kaplayan Matka, Kuzey
        Makedonya'nın en popüler açık hava istikametlerinden biridir
        ve ayrıca içinde birkaç manastır bulunur. Matka Kanyonu içindeki
        Matka Gölü ülkedeki en eski yapay göldür.
        Bir hafta sonu arkadaşlarım ile gittiğim Matka'da çok fazla eğlendim.
        Kanyon'un etrafını turlayan patika yolda yürüyüş yaparak mağaralara ulaştık.
        Daha sonrasında ise kano yaparak günümüzü sonlandırdık."
        img1={Mountain3}
        img2={Mountain4}
      />

      <DestinationData
        className="first-des"
        heading="Ohri , Kuzey Makedonya"
        text="Ohri, yaklaşık 42.000 kişilik nüfusu ile Kuzey Makedonya'nın en büyük sekizinci
        kentidir. Ülkenin güneybatısında, Ohri Gölü'nün kenarında, Arnavutluk 
        sınırına gayet yakın bir konumda bulunmaktadır. Turizm kenti olarak tanınan
        Ohri, iyi muhafaza edilmiş eski kenti, Orta Çağ dönemine dayanan hisarları,
        kiliseleri, manastırları ve camiileri ile birçok yabancıyı kendine çekmektedir."
        img1={Mountain6}
        img2={Mountain5}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Manastır , Kuzey Makedonya"
        text="Manastır, Kuzey Makedonya'nın güneybatısında yer alan ülkenin
        en büyük ikinci şehridir. Manastır'ın adını Grekçe 'Monastiri adından
        aldığı düşünülmektedir. Şehrin Türkçe ve Arnavutça adları bu şekilden
        gelişmiştir. Şehrin Makedonca adı ise Bitola'dır."
        img1={Mountain7}
        img2={Mountain8}
      />
    </div>
  );
};

export default Destination;
