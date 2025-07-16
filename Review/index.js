document.addEventListener('DOMContentLoaded',function(){
    let reviews=[
        {
            id:1,
            name: 'Susan',
            job: 'web developer',
            text: `바닥에서 지닌다 정적에 옵니다 한 글쎄 두 쪽, 시각의 정면성에서 실시합니다. 
                    나지 다른 감각적의 통역의 근데 걱정스럽어서 한 나의, 자체를 되다. 이용하더라면 않고 
                    하여서 생활에 매우 아씨가 단체의 고대를 위하게 특별으로 살아요. 나는 살 들어온 경쟁하기 
                    아는 모읍니다. 신선할 속상한 선물에 명시되다 가지런히, 시스템은 꾐일 매입하다. 따라서 
                    느긋해하고 자기는 답해지어 문화론으로 석사는 젊음으로 감각은 중등을 든가.
                    `
        },
        {
            id:2,
            name: 'Minguk',
            job: 'UI designer',
            text: `장관의 오월의 국민은 않아 소재에 보이게 승격은 만연을 거론되다. 
                    다양하기 그러나 지도가 아무리 전시회의 금지되어야 많다. 
                    영하의 허사로 전시회로 절반을 같고 전 파괴에 왕복의 국회로 있다. 
                    "이른 알코올은 선두만, 관련한 선진국의 없고 느는 못하던 무리하다"
                    `
        },
        {
            id:3,
            name: 'John',
            job: 'Math Teacher',
            text: `판정하여 및 일월인 미래를 발전적 캐다. 수 서곡에 구성이지 
                    교체를 정부에 정치권의, 들어서기 위하다. 기관도 신뢰와 불평불만을 
                    결과의 계급은 아직 다시 동의한 근로자를 대한 열다. 
                    "비디오를 체면의, 금지의 찾으나 나타나게 대한 청소년을 있다 있다"
                    `
        }
    ];
    function getRandom(){
        return Math.floor(Math.random() * (reviews.length));
    }
    let Idx=0;
    let currentId=reviews[Idx].id;
    let Name=document.getElementById('name');
    let Job=document.getElementById('job');
    let Text=document.getElementById('text');

    const prev=document.getElementById('prev');
    const next=document.getElementById('next');
    const random=document.getElementById('random');
    prev.addEventListener('click',function(){
        if(Idx-1 < 0){
            Idx=reviews.length;
        }
        else{
            Idx=Idx-1;
        }
        Name.textContent=reviews[Idx].name;
        Job.textContent=reviews[Idx].job;
        Text.textContent=reviews[Idx].text;
    });
    next.addEventListener('click',function(){
        if(Idx>reviews.length-1){
            Idx=0;
        }
        else{
            Idx=Idx+1;
        }
        Name.textContent=reviews[Idx].name;
        Job.textContent=reviews[Idx].job;
        Text.textContent=reviews[Idx].text;
    });
    random.addEventListener('click',function(){
        Idx=getRandom();
        Name.textContent=reviews[Idx].name;
        Job.textContent=reviews[Idx].job;
        Text.textContent=reviews[Idx].text;
    });
})