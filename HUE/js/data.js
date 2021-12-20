/*
 치어리더, 0
 Yes맨, 1
 아티스트, 2
 아이돌, 3
 어린이, 4
 삐에로, 5
 쭈그리, 6
 천사, 7
 리더, 8
 4차원, 9
 지박령, 10
 계략가, 11
*/

const qnaList = [
  {
    q: '1. 아침에 일어나서 본인의 방이 더러운 걸 확인한 부캐!',
    a: [
      { answer: 'a. 바로 치운다.', type: [1, 2, 6, 8, 11] },
      { answer: 'b. 그냥 내버려 둔다.', type: [0, 4, 10] },
      { answer: 'c. 한쪽으로 몰아둔다.', type: [3, 5, 7, 9] },
    ]
  },
  {
    q: '2. 거실로 나와 아침을 준비해보자! 무슨 음식을 만들까?',
    a: [
      { answer: 'a.  완전 전문가 스타일! 한 끼도 놓칠 수 없어.', type: [2, 3, 5, 8, 9, 11] },
      { answer: 'b. 김이랑 김치랑 밥만 있음 됐지 뭐.', type: [0, 4, 6, 7] },
      { answer: 'c. 언제 다 하냐... 귀찮으니까 안 먹을래.', type: [1, 10] },
    ]
  },
  {
    q: '3. 나갈 준비를 해야 하는 부캐. 샤워를 하며 노래를 듣는데..',
    a: [
      { answer: 'a. 내적댄스 유발하는 신나는 노래', type: [0, 3, 4, 5, 9] },
      { answer: 'b. 지금 이곳이 바로 오페라하우스! 분위기 넘치는 클래식', type: [2, 8, 11] },
      { answer: 'c. 노래? 그게 뭐야 그냥 씻자.', type: [1, 6, 7, 10] }
    ]
  },
  {
    q: '4. 씻고 나와 옷을 고르는 부캐. 어떤 스타일로 코디할까?',
    a: [
      { answer: 'a. 완전 꾸 꾸 꾸!! 냅다 화려하게 입자.', type: [0, 2, 3, 4, 5] },
      { answer: 'b. 심플 이즈 베스트! 간단한 게 최고야.', type: [1, 7, 8, 11] },
      { answer: 'c. 패션은 내 길이 아니다. 아무거나 집어입자.', type: [6, 9, 10] },
    ]
  },
  {
    q: '5. 밖으로 나온 부캐 어디부터 갈까?',
    a: [
      { answer: 'a. 미리 가기로 계획했던 곳', type: [2, 3, 7, 8, 11] },
      { answer: 'b. 옆에 새로 생긴 카페', type: [0, 5, 9, 10]},
      { answer: 'c. 가기로 정해둔 곳 중 아무 곳이나 좋아', type: [1, 4, 6] },
    ]
  },
  {
    q: '6. 길을 가다 전단지를 나눠주는 사람을 만난 부캐 (ex - 100, 200일)',
    a: [
      { answer: 'a. 어쩔 수 없이 받는다.', type: [1, 6, 7, 10] },
      { answer: 'b. 못 본 척 그냥 지나간다.', type: [0, 2, 8, 11] },
      { answer: 'c. 무슨 전단지일까?! 일부러 가까이 가서 받는다.', type: [3, 4, 5, 9] },
    ]
  },
  {
    q: '7. 카페에 가서 음료를 주문한 부캐. 어? 메뉴가 잘못 나왔네..',
    a: [
      { answer: 'a. 말하고 다시 바꿔 먹는다.', type: [2, 3, 8, 11] },
      { answer: 'b. 이미 나온 거 뭐... 맛있어 보이니 그냥 먹자.', type: [1, 5, 6, 7, 9, 10] },
      { answer: 'c. 잘못 나온 지도 모른다.', type: [0, 4] },
    ]
  },
  {
    q: '8. 집에 들어오자마자 친구에게 오는 연락..! 농구를 하자는데..',
    a: [
      { answer: 'a. 나간다.', type: [0, 1, 3, 4, 5, 8] },
      { answer: 'b. 그냥 안 나간다.', type: [2, 9, 10, 11] },
      { answer: 'c. 그럴 리 없다.', type: [6, 7] },
    ]
  },
  {
    q: '9. 유튜브를 보다 보니 훌쩍 두 시간이 지나버린.. 이때 부캐의 반응은?',
    a: [
      { answer: 'a. 그럴 수 있지, 얼른 남은 일 해야겠다', type: [2, 8, 11] },
      { answer: 'b. 난 틀렸어..', type: [1, 6, 7] },
      { answer: 'c. 벌써 시간이.. 어쩌지.. 어? ○○이 직캠떴네??? 이건 봐야지...', type: [0, 3, 4, 5, 9, 10] },
    ]
  },
  {
    q: '10. 늦은 저녁, 배가 고파진 부캐!',
    a: [
      { answer: 'a. 이미 물부터 올리고 있다.', type: [0, 2, 3, 4, 10, 11] },
      { answer: 'b. 그래도 시간이 늦었으니까..', type: [1, 6, 7, 8] },
      { answer: 'c. 거울에 대고 가위바위보를 해서 이긴 자의 말을 따른다.', type: [5, 9] },
    ]
  },
  {
    q: '11. 누워있었더니 잠이 오는 부캐, 전등을 꺼야하는데..!',
    a: [
      { answer: 'a. 일어나서 끄고 오자.', type: [1, 6, 7, 8, 11] },
      { answer: 'b. 물건을 던져 스위치 끄기를 시도한다.', type: [0, 3, 4, 5, 10] },
      { answer: 'c. 엎드려 누워 잠든다.', type: [2, 9] },
    ]
  },
  {
    q: '12. 잘 준비를 마친 부캐, 그런데 갑자기 내일 오전까지 마감인 일이 떠오르는데..',
    a: [
      { answer: 'a. 그래도 해두고 자는 게 마음이 편하지..', type: [1, 6, 7, 8, 11] },
      { answer: 'b. 내일의 내가 해결한다!', type: [0, 3, 4, 5, 10] },
      { answer: 'c. 사실 내일이 마감일이라는 건 거짓말이 아닐까?', type: [2, 9] },
    ]
  }
]

const infoList = [
  {
    name: '똥꼬 발랄! 분위기 메이커 치어리더',
    desc: '생기발랄한 성격으로 분위기를 밝게 만들 줄 아는 당신의 부캐! 아무리 망한 만남자리에도 당신의 부캐가 있다면 파뤼투나잇~!! 다만 공과사를 구분 못하고 아무 때나 나서는 건 절대로 금물이라구~'
  },
  {
    name: '상냥 친절! 거절을 잘 못하는 Yes맨',
    desc: 'Yes~ Yes, Yes.. 남들에게 참 좋은 사람인 당신의 부캐! 어떤 부탁도 OK하는 당신은 최고의 의리파! 네 부캐의 사전엔 no같은 건 없어! 하지만 너무 yes만 외치다가 네가 피해를 입을수도 있으니 무리한 부탁은 거절하는 용기가 필요해!'
  },
  {
    name: '시크 도도! 나만의 세상을 펼치는 아티스트',
    desc: '도도한 고양이 같으면서도 네 부캐만의 세상이 있는 아주 철학적이고 시크한 캐릭터구나! 팔랑귀가 아니라 사람들이 너한테 조언을 자주 구하기도 해. 하지만 너무 날카롭게 사람을 대하다가 갈등이 생길수도 있으니 조심하렴!'
  },
  {
    name: '인기 절정! 모두 자신을 보게 하는 아이돌',
    desc: '여기가 네 부캐의 무대? 뭘 해도 사람들이 너의 부캐에게 집중하게 만드는 매력만점의 성격이네! 인기만점이라 어딜가든 이쁨받는 건 정말 멋진 것 같아. 인기를 누리는 건 좋지만 언제나 자만은 금물!'
  },
  {
    name: '장난 많음! 노는 게 제일 좋아 어린이',
    desc: '장난치고 노는 게 제일 좋은 네 부캐. 뭔가 펭귄 캐릭터 누가 생각나네~! 가끔은 어리광도 부리는 성격 덕분에 사람들에게 귀여움을 받기도 해! 장난끼도 많아 사람들의 웃음을 주기도 하지. 하지만 지나친 장난은 상대방에게 불쾌감을 줄 수도 있으니 조심조심!'
  },
  {
    name: '재치 가득! 사람들을 웃기는 극외향형 삐에로',
    desc: 'MBTI가 혹시 EEEE야? 네 옆에 10분만 있어도 사람들의 웃음이 끊기질 않네. 네 옆에 가면 우울하던 사람도 웃음이 나올 것 같아! 극내향적인 사람은 외향적인 네 모습을 부러워하기도 해. 그치만.. 아재개그로 사람을 웃기려다 오히려 분위기가 싸해질수도 있으니 조심하렴!'
  },
  {
    name: '조용 소심! 혼자만의 시간을 가지는 쭈그리',
    desc: '어머.. 네 부캐는 혼자만의 시간을 갖는 걸 좋아하는구나! 본인 의견을 주장하는 걸 그닥 좋아하지 않고.. 어딜 가도 구석진 곳에 있길 좋아하고! 맞지? 때론 소심함이 네 걱정거리로 자리잡기도 하지만, 사람이 어떻게 다 외향적이겠어 그치? 소심한 것 또한 너의 매력! 하지만 꼭 나서야할 때는 네 의견을 말해줘!'
  },
  {
    name: '덜덜 무셔! 새로운 것에 겁이 많은 천사',
    desc: '남을 돕길 좋아하지만 새로운 시도에는 겁이 많아 뒤에서 백업해주는 걸 좋아하는 당신의 부캐! 사람들에게 천사라고 불릴만큼 아주 착한 성격을 갖고 있어. 때론 새로운 시도를 두려워 하는 성격 탓에 무뚝뚝하다고 느낄 때도 있지만.. 다들 네가 좋은 사람이라는 걸 알고 있지! 그래도 이왕 도와주는 거 조금은 생색 내도 괜찮지 않을까?'
  },
  {
    name: '듬직 대범! 눈치 빠른 리더',
    desc: '뭐지…! 이 포스? 공동체를 이끄는 대범함과 듬직함을 가진 네 부캐! 어딜가도 사회성 좋단 소리 많이 듣겠네~! 사람들 눈치도 잘 읽어서 갈등의 타협점을 잘 찾기도 해. 정말 멋진걸?? 하지만 때론 네 포스에 놀라 쭈그리가 되는 사람도 있으니 조심하라구!'
  },
  {
    name: '엉뚱 기발! 호기심 가득한 4차원 캐릭터',
    desc: '어디로 튈지 모르는 당신의 부캐!  남들은 감히 생각하지도 못할 방향으로 움직이는구나. 네 부캐는 아마 창의적인 일을 할 때 가장 빛날 것 같네! 그치만.. 너무 이곳저곳으로 튀는 성격 때문에 당황하는 사람들도 있으니 가끔은 주변을 살펴봐줘!'
  },
  {
    name: '여유 가득! 느긋한 삶을 사는 방구석 지박령',
    desc: '뭐야!! 냅다 방에 누워있는 이 부캐를 봐!! 정말 자유로워!!!! 네 부캐는 느긋한 삶을 즐기는 방구석 지박령이구나. 바쁘디 바쁜 현대사회에서 보기 드문 캐릭터야! 하지만 가끔은 해야할 일을 잊고 여유만 부리다 할일을 놓치는 경우도 있으니 조심해!'
  },
  {
    name: '꼼꼼 치밀! 똑똑하고 빈틈없는 계략가',
    desc: '우리 부캐는 다 계획이 있구나..? 방학숙제로 하루계획세우는 거 나오면 누구보다 잘할 네 부캐! 계획적이라서 업무를 볼 땐 누구보다 체계적이야. 하지만 가끔은 너무 딱딱하단 이야기를 들을 때도 있어. 자유로운 친구와 같이 여행을 가면 피곤할수도 있으니 주의하렴!'
  },
]
