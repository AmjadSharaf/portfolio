
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
    im.innerHTML= " انا مطور ويب لدي خبرة في هذا المجال عام واحد امتلك معرفة في الفروند اند والباك اند  ";
    jpu.innerHTML= " أنا طالب هندسة معلوماتية في جامعة الجزيرة الخاصة، قسم البرمجيات. أنا في السنة الثالثة من الدراسة وحصلت على شهادة البكالوريا في عام 2019. لدي خبرة في لغات البرمجة مثل بايثون وجافا ودارت سي بلس بلس وجافا سكريبت وبي اتش بي. ";
    jpuuu.innerHTML="أنا قادر على تصميم وتطوير برامج وتطبيقات مبتكرة، ولدي معرفة بقواعد البيانات والقدرة على إنشاء وإدارة قواعد البيانات. أستطيع تحليل المشكلات وابتكار حلول فعالة. أنا أيضًا أتمتع بمهارات تواصل ممتازة وأستطيع العمل كفريق.";
    jpuuuu.innerHTML="حصلت على شهادة في الفول ستاك والشبكات، وحاليًا أشارك في مجتمع أكاديمي يسمى سيريان كيكز. أجيد اللغة الإنجليزية بشكل بسيط.";
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
    soon.innerHTML= "Up_coming certificates";
    cors.innerHTML= "Certificates and courses";
    jpu.innerHTML= "I am a computer engineering student at Al-Jazeera Private University, specializing in software. I am currently in my third year of study and obtained my baccalaureate certificate in 2019. I have experience in programming languages such as Python, Java, C++, JavaScript, and PHP.";
    im.innerHTML= "I'm Web Developer over than 1 year, I have a solid understanding of forondend and backend concepts";
    jpuuu.innerHTML=" I am capable of designing and developing innovative programs and applications. I have knowledge of databases and the ability to create and manage them. I can analyze problems and come up with effective solutions. I also possess excellent communication skills and can work well in a team.";
    jpuuuu.innerHTML="I have obtained a certificate in Full Stack and Networking, and I am currently involved in an academic community called Syrian Geeks. I have a basic proficiency in the English language. ";
    abut.innerHTML= "About me";
    coby.innerHTML= " coby rights";
    up.innerHTML= " Up_coming certificates ";

}

}