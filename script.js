document.getElementById('motivationButton').addEventListener('click', function() {
  const messageElement = document.getElementById('motivationalMessage');
  const messages = [
    {
      id: 1,
      indonesian: "Tetap fokus dan semangat, Humaira. Setiap usaha kecil membawa hasil besar.",
      english: "Stay focused and motivated, Humaira. Every small effort leads to big results."
    },
    {
      id: 2,
      indonesian: "Ingat, langkah-langkah kecil menuju kesuksesan besar. Terus maju, Humaira.",
      english: "Remember, small steps lead to big success. Keep moving forward, Humaira."
    },
    {
      id: 3,
      indonesian: "Tidak ada yang mudah, tapi usaha keras selalu membawa hasil. Kamu bisa, Humaira!",
      english: "Nothing is easy, but hard work always pays off. You got this, Humaira!"
    },
    {
      id: 4,
      indonesian: "Setiap tantangan adalah kesempatan untuk tumbuh. Teruslah berjuang, Humaira.",
      english: "Every challenge is a chance to grow. Keep pushing, Humaira."
    },
    {
      id: 5,
      indonesian: "Satu hari penuh usaha lebih baik daripada seribu hari tanpa tujuan. Tetap semangat, Humaira.",
      english: "One day of effort is better than a thousand days without purpose. Keep going, Humaira."
    },
    {
      id: 6,
      indonesian: "Keberhasilan datang pada mereka yang tidak menyerah. Tetap kuat, Humaira.",
      english: "Success comes to those who don't give up. Stay strong, Humaira."
    },
    {
      id: 7,
      indonesian: "Hari ini mungkin berat, tapi setiap langkah adalah bagian dari perjalananmu. Kamu mampu, Humaira!",
      english: "Today might be tough, but every step is part of your journey. You can do it, Humaira!"
    },
    {
      id: 8,
      indonesian: "Jangan menyerah sekarang, Humaira. Teruslah melangkah dan percayalah pada proses.",
      english: "Don’t give up now, Humaira. Keep moving and trust the process."
    }
  ];

  // Generate a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // Display the message in both languages
  messageElement.innerHTML = `<p>${randomMessage.indonesian}</p><p>${randomMessage.english}</p>`;
  messageElement.classList.remove('hidden');
  messageElement.classList.add('message-display');
});
