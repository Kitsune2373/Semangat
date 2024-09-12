document.getElementById('motivationButton').addEventListener('click', function() {
  const messageElement = document.getElementById('motivationalMessage');
  const messages = [
    {
      id: 1,
      indonesian: "Humaira, tetap semangat! Setiap langkah kecil membawa kita lebih dekat ke tujuan.",
      english: "Humaira, keep pushing forward! Every small step brings us closer to our goals."
    },
    {
      id: 2,
      indonesian: "Kerja keras itu penting, tapi jangan lupa istirahat. Pikiran yang segar akan membuatmu lebih produktif.",
      english: "Hard work is important, but don’t forget to rest. A refreshed mind will make you more productive."
    },
    {
      id: 3,
      indonesian: "Semangat terus, Humaira! Kerja kerasmu akan membuahkan hasil yang luar biasa.",
      english: "Keep up the great energy, Humaira! Your hard work will lead to amazing results."
    },
    {
      id: 4,
      indonesian: "Jangan lupa, menjaga kesehatan adalah bagian dari sukses. Tetap fit untuk menghadapi tantangan ke depan.",
      english: "Remember, staying healthy is part of success. Stay fit to face future challenges."
    },
    {
      id: 5,
      indonesian: "Jangan berhenti di sini, Humaira. Kesuksesanmu sudah dekat, teruslah berusaha!",
      english: "Don’t stop here, Humaira. Your success is near, keep pushing!"
    },
    {
      id: 6,
      indonesian: "Istirahat sejenak akan memberi energi untuk lebih produktif. Jangan lupa beri waktu untuk dirimu sendiri.",
      english: "A short break will give you the energy to be more productive. Don’t forget to give yourself some time."
    },
    {
      id: 7,
      indonesian: "Humaira, kamu sudah berjalan jauh! Teruskan perjuanganmu, hasil besar menunggumu.",
      english: "Humaira, you’ve come so far! Keep going, big results are waiting for you."
    },
    {
      id: 8,
      indonesian: "Kerja keras hebat, tapi jangan lupa untuk tetap sehat. Kesehatan adalah kunci untuk sukses jangka panjang.",
      english: "Hard work is great, but don’t forget to stay healthy. Health is the key to long-term success."
    },
    {
      id: 9,
      indonesian: "Jangan lupakan keseimbangan antara kerja dan istirahat. Itu akan membantumu tetap fokus dan kuat.",
      english: "Don’t forget the balance between work and rest. It will help you stay focused and strong."
    },
    {
      id: 10,
      indonesian: "Semangat terus, tapi jangan lupa jaga kesehatan. Kamu butuh kekuatan untuk terus maju.",
      english: "Keep going, but don’t forget to take care of your health. You need strength to keep moving forward."
    },
    {
      id: 11,
      indonesian: "Humaira, kerja keras dan fokus luar biasa, tapi ingat untuk mengisi energi dengan istirahat yang cukup.",
      english: "Humaira, hard work and focus are great, but remember to recharge with enough rest."
    },
    {
      id: 12,
      indonesian: "Setiap hari adalah kesempatan baru untuk mencapai hal-hal hebat. Jangan lupa untuk menjaga tubuh dan pikiran tetap sehat.",
      english: "Every day is a new opportunity to achieve great things. Don’t forget to keep your body and mind healthy."
    }
  ];

  // Generate a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // Display the message in both languages
  messageElement.innerHTML = `<p>${randomMessage.indonesian}</p><p>${randomMessage.english}</p>`;
  messageElement.classList.remove('hidden');
  messageElement.classList.add('message-display');

  // Mulai putar musik setelah tombol ditekan
  const audio = document.getElementById('backgroundMusic');
  audio.play();
});
