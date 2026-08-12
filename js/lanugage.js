
let arabic= document.getElementById("arabic");
let english= document.getElementById("english");
let home=document.getElementById("home");
let about=document.getElementById("about");
let serv=document.getElementById("serv");
let nn=document.getElementById("nn");
let hi=document.getElementById("hi");
let cv=document.getElementById("cv");
let im=document.getElementById("im");
let abut=document.getElementById("abut");
let jpu=document.getElementById("jpu");
let jpuuu= document.getElementById("jpuuu");
let jpuuuu= document.getElementById("jpuuuu");
let cors= document.getElementById("cors");
let soon= document.getElementById("soon");
let contact= document.getElementById("contact");
let conn= document.getElementById("conn");
let coby= document.getElementById("coby");
let up= document.getElementById("up");
arabic.onclick=()=>{
    setLanugage("arabic");
    localStorage.setItem("lang", "arabic")
};
english.onclick=()=>{
    setLanugage("english");
    localStorage.setItem("lang", "english")
};
onload =()=> {
    setLanugage(localStorage.getItem("lang"));
}
function setLanugage(getLanugage){
if (getLanugage=== "arabic"){
    home.innerHTML= "الصقحة الرئيسية";
    about.innerHTML= "حولي ";
    serv.innerHTML= "الشهادات والكورسات  ";
    nn.innerHTML= "أمجد شرف";
    hi.innerHTML= "مرحبا أنا";
    cv.innerHTML= "تحميل الملف الشخصي";
    abut.innerHTML= "حولي";
    contact.innerHTML= "للتواصل معي";
    conn.innerHTML= "للتواصل معي";
    soon.innerHTML= "الشهادات القادمة";
    im.innerHTML= " أنا مهندس معلوماتية لدي خبرة في مجال تطوير تطبيقات الموبايل عملت لدى شركة اوكافيا كمتدرب حصلت على شهادة في التدريب العملي وشهادة في برمجة التطبيقات   ";
    jpu.innerHTML= " أنا طالب هندسة معلوماتية في جامعة الجزيرة الخاصة، قسم البرمجيات.  لدي خبرة في برمجة التطبيقات وبرمجة الويب . ";
    jpuuu.innerHTML="لدي قدرة على تصميم وتطوير برامج وتطبيقات مبتكرة، ولدي معرفة بقواعد البيانات والقدرة على إنشاء وإدارة قواعد البيانات. أستطيع تحليل المشكلات وابتكار حلول فعالة. أنا أيضًا أتمتع بمهارات تواصل ممتازة وأستطيع العمل كفريق.";
    jpuuuu.innerHTML="حصلت على شهادة في الفول ستاك والشبكات وبرمجة التطبيقات باستخدام اطار العمل فلاتر ،عملت لدى شركة اوكافيا كمتدرب وشاركت  في مجتمع أكاديمي يسمى سيريان كيكز. أجيد اللغة الإنجليزية بشكل متوسط.";
    jpuuuu.innerHTML="انطلاقتي الحقيقة كانت عندما التحقت بشركة اوكافيا كمتدرب. هناك لم اتعلم فقط أدوات التطوير , بل تعلمت كيف تبنى التطبيقات في بية عمل حقيقية وكيف يحول المطور الفكرة الى منتج يستخدمه الالاف";
    cors.innerHTML= "الشهادات و الكورسات";
    coby.innerHTML= "حقوق النشر";
    up.innerHTML= "الشهادات القادمة ";

}else if(getLanugage==="english"){
    home.innerHTML= "Home";
    contact.innerHTML= "Contact me";
    conn.innerHTML= "Contact me";
    about.innerHTML= "About Me";
    serv.innerHTML= "Certificates and courses";
    nn.innerHTML= "Amjad Sharaf";
    hi.innerHTML= "Hi I'm";
    soon.innerHTML= "Projects";
    cors.innerHTML= "Certificates and courses";
    jpu.innerHTML= "I am a computer engineering student at Al-Jazeera Private University, specializing in software. ";
    im.innerHTML= "Flutter Developer and Mobile App Engineer ";
    jpuuu.innerHTML=" Passionate Flutter Developer whith experience in building scalable, high-proformance , and elegant cross-platform mobile application. ";
    jpuuuu.innerHTML="Skiled in State Management (Bloc, Cubit, provaider, Getx ) , clean Architecture, and RESTful API Integration. Experienced in integrating AI features, including implementing Mini RAG (Retrieval-Augmented Generation) systems using Python for interactive chatbots in Flutter apps. Strongly focused on UI/UX precision, animations, and clean, maintainable code ";
    abut.innerHTML= "About me";
    coby.innerHTML= " coby rights";
    up.innerHTML= " Up_coming certificates ";

}

}