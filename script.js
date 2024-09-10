document.getElementById('motivationButton').addEventListener('click', function() {
  const messageElement = document.getElementById('motivationalMessage');
  const messages = [
    {
      id: 1,
      indonesian: "Humaira, kerja kerasmu sangat berarti. Aku selalu bangga padamu. ❤️",
      english: "Humaira, your hard work means so much. I’m always proud of you. ❤️"
    },
    {
      id: 2,
      indonesian: "Humaira, kamu luar biasa dalam merawat orang lain. Jangan lupa, aku selalu di sini mendukungmu. 💪",
      english: "Humaira, you’re amazing at taking care of others. Don’t forget, I’m always here supporting you. 💪"
    },
    {
      id: 3,
      indonesian: "Humaira, aku tahu hari ini mungkin sulit, tapi cintaku selalu ada untukmu. Semangat terus! 💖",
      english: "Humaira, I know today might be tough, but my love is always with you. Keep going! 💖"
    },
    {
      id: 4,
      indonesian: "Humaira, kamu membuat perbedaan setiap hari. Aku cinta kamu lebih dari apapun. 🌟",
      english: "Humaira, you make a difference every day. I love you more than anything. 🌟"
    },
    {
      id: 5,
      indonesian: "Humaira, teruskan kerja hebatmu. Setiap usahamu membuatku semakin bangga. 😘",
      english: "Humaira, keep up the great work. Every effort you make makes me prouder. 😘"
    },
    {
      id: 6,
      indonesian: "Humaira, dedikasimu dalam merawat orang lain sangat menginspirasi. Aku selalu mendukungmu. 🌹",
      english: "Humaira, your dedication to caring for others is so inspiring. I’m always supporting you. 🌹"
    },
    {
      id: 7,
      indonesian: "Humaira, setiap senyumanmu membuat dunia ini lebih baik. Aku sangat mencintaimu. 💓",
      english: "Humaira, every smile you give makes the world a better place. I love you so much. 💓"
    },
    {
      id: 8,
      indonesian: "Humaira, jangan lupa untuk merawat dirimu juga. Aku ada di sini, mencintaimu. 🌺",
      english: "Humaira, don’t forget to take care of yourself too. I’m here, loving you. 🌺"
    },
    {
      id: 9,
      indonesian: "Humaira, semua kerja kerasmu membuktikan betapa luar biasanya kamu. Aku bangga padamu. 💫",
      english: "Humaira, all your hard work shows just how amazing you are. I’m proud of you. 💫"
    },
    {
      id: 10,
      indonesian: "Humaira, kamu adalah pahlawan bagi banyak orang. Dan bagi aku, kamu adalah segalanya. 💖",
      english: "Humaira, you’re a hero to many. And to me, you’re everything. 💖"
    },
    {
      id: 11,
      indonesian: "Humaira, semangatmu memberi kekuatan bagi orang lain dan untukku. Teruslah bersinar. 🌟",
      english: "Humaira, your spirit gives strength to others and to me. Keep shining. 🌟"
    },
    {
      id: 12,
      indonesian: "Humaira, aku tahu pekerjaanmu tidak mudah, tapi setiap usaha dan kasih sayangmu membuat perbedaan. 😘",
      english: "Humaira, I know your job isn’t easy, but every effort and love you give makes a difference. 😘"
    }
  ];

  // Generate a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // Display the message in both languages
  messageElement.innerHTML = `<p>${randomMessage.indonesian}</p><p>${randomMessage.english}</p>`;
  messageElement.classList.remove('hidden');
  messageElement.classList.add('message-display');
});
