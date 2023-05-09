import $ from 'jquery';
import firstPro_1 from '../assets/ammie-ngo-WJzyp64NmyA-unsplash.jpg';
import firstPro_2 from '../assets/lex-sirikiat-J-4ozdP9EQ0-unsplash.jpg';
import firstPro_3 from '../assets/rifath-photoripey-TTskdZvyfns-unsplash copy.jpg';
import secondPro_1 from '../assets/alex-padurariu-tXYg4Zx7kSU-unsplash.jpg';
import secondPro_2 from '../assets/jessica-lewis-Am2kjOEKADs-unsplash.jpg';
import secondPro_3 from '../assets/tanaphong-toochinda-g0fpI-Dq-kQ-unsplash.jpg';
import thirdPro_1 from '../assets/akis-fisaris-2mZWydjhULk-unsplash.jpg';
import thirdPro_2 from '../assets/dex-ezekiel-SmQiXULsE0E-unsplash.jpg';
import thirdPro_3 from '../assets/ozgu-ozden-7X96RNhpxBc-unsplash.jpg';

const firstProductData = [firstPro_1, firstPro_2, firstPro_3];
const firstProductInfoData = {
  title: 'الكابتشينو (بالإيطالية: Cappuccino)',
  content:
    'هو نوع من أنواع القهوة التي يمزج معها الحليب وقد اخترعها الإيطاليون، توجد في المقاهي وتزين بأنواع من التزيينات مثل الرغوة أو الكريمة. قد تقدم في أكواب كبيرة، وتُزين أحيانا ببودرة الكاكاو ويقدم معها السكر. الكابتشينو غني بالسعرات الحرارية إذ إن كل كوب يحتوي على 300 سعرات حرارية تقريباً وذلك يعود إلى نسبة الكاربوهيدرات المرتفعة في الكريمة والسكر التي يحضّر منها.',
};
const secondProductData = [secondPro_1, secondPro_2, secondPro_3];
const secondProductInfoData = {
  title: 'القهوة السوداء',
  content:
    'القهوة مشروب يعد من بذور البن المحمصة، وينمو في أكثر من 70 بلداً. خصوصًا ضمن المناطق الاستوائية في أمريكا الشمالية والجنوبية وجنوب شرق آسيا وشبه القارة الهندية وأفريقيا. ويعتبر البن الأخضر هو ثاني أكثر السلع تداولاً في العالم بعد النفط الخام. ونظراً لاحتوائها على الكافيين، يمكن أن يكون للقهوة تأثير منبه للبشر. تعتبر القهوة في يومنا الحالي واحدة من المشروبات الأكثر شعبية في جميع أنحاء العالم.',
};
const thirdProductData = [thirdPro_1, thirdPro_2, thirdPro_3];
const thirdProductInfoData = {
  title: 'القهوة التركية',
  content:
    'هو نوع من القهوة تُعد باستخدام حبوب البن المطحونة بدقة شديدة دون تصفية. تشير القهوة التركية إلى طريقة لتخمير البن المطحون جيدًا. تعتبر أصناف أرابيكا هي الأفضل، ولكن يتم أيضًا استخدام روبوستا أو مزيج منهما. حيث تطحن الحبوب إلى مسحوق ناعم جدًا، والذي يترك في القهوة عند تقديمه. على الرغم من أن كلمة قهوة ذات أصل عربي، إلا أن ثقافة المقاهي قد ظهرت أيام الدولة العثمانية حينما كانت هذه هي الطريقة الرائجة لتحضير القهوة.',
};

const params = window.location.search;
function rightData(firstD, secondD, thirdD) {
  return params == '?=1' ? firstD : params === '?=2' ? secondD : thirdD;
}
function carouselItems() {
  let indicators = '';
  let carouselItems = '';
  const infoData = rightData(
    firstProductInfoData,
    secondProductInfoData,
    thirdProductInfoData
  );

  const data = rightData(firstProductData, secondProductData, thirdProductData);
  data.forEach((item, i) => {
    carouselItems += `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
     <img src="${item}" class="d-block w-100" alt="" /> </div>
        `;
    indicators += `<img src="${item}" class="${i === 0 ? 'active' : ''}" alt="" 
    data-bs-target="#carouselExample"
    data-bs-slide-to="${i}" 
    aria-current="true"
    aria-label="Slide ${i}">
        `;
  });
  const info = ` <div class="d-flex justify-content-between">
  <h5 class="card-title">${infoData.title}</h5><p>$50</p></div>
  <div>
  <p class="card-text">
  ${infoData.content}
  </p></div>`;
  return { carouselItems, info, indicators };
}

const children = carouselItems();
const pageColor = rightData('brown', 'black', 'gray');

$('#carousel-items-containers').append(children.carouselItems);
$(children.info).insertBefore('#add-cart-btn');

$('#product-indicators').append(children.indicators);
$('body').addClass(pageColor);
