const express = require('express');
const cors = require('cors');  // Import the CORS package
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Array of 100 fortunes
const fortunes = [
    "A great adventure awaits you, stay prepared!",
    "The universe is aligned in your favor today.",
    "Someone close to you will surprise you with a kind gesture soon.",
    "Your hard work is about to pay off in unexpected ways.",
    "A positive change in your career path is coming.",
    "Be cautious of new opportunities; not all that glitters is gold.",
    "A new friendship will bloom unexpectedly.",
    "Your creativity will flourish in the coming days.",
    "A long-lost opportunity will be presented to you again.",
    "Don't fear change; it will lead you to better things.",
    "Keep your eyes open; a hidden talent is waiting to be discovered.",
    "Love will find you in the most unexpected of places.",
    "Trust your instincts; they are guiding you correctly.",
    "Your patience will soon be rewarded.",
    "An old friend will reach out to you soon.",
    "Don't hesitate to ask for help when you need it.",
    "A new chapter of your life begins in the next few days.",
    "A journey, both physical and spiritual, is ahead of you.",
    "Something you've been waiting for will come to you shortly.",
    "Your ability to adapt will be your greatest strength.",
    "Someone in your life may need your support, offer it freely.",
    "Be ready for a financial opportunity that will arrive unexpectedly.",
    "It’s time to follow your dreams, they’re closer than you think.",
    "A situation that has been troubling you will soon resolve.",
    "Trust your heart to guide you in relationships.",
    "A long-overdue conversation will bring you peace.",
    "Luck is on your side today, take a chance!",
    "The answer you seek will come when you least expect it.",
    "You will find peace in a place you least thought possible.",
    "An unexpected gift is in your near future.",
    "Change is on the horizon, and it will be good for you.",
    "Pay attention to your dreams; they hold valuable messages.",
    "Be open to new ideas and new people entering your life.",
    "You will soon gain clarity on a situation that has been unclear.",
    "Someone new will offer you advice that will change your perspective.",
    "Your confidence will open doors that once seemed closed.",
    "A small act of kindness will have a big impact on someone’s life.",
    "Your perseverance will soon be rewarded in ways you can’t imagine.",
    "The future looks bright for those who embrace new beginnings.",
    "You’re closer to your goal than you realize. Keep going.",
    "A new opportunity will present itself through a casual encounter.",
    "Don’t be afraid to speak your mind; your voice is needed.",
    "Your intuition will lead you to where you need to be next.",
    "A new passion will emerge in your life, follow it wholeheartedly.",
    "Someone will soon reveal their true feelings for you.",
    "You will soon receive a message that changes everything.",
    "You are being watched over by unseen forces, trust in that.",
    "Your self-belief will take you to great heights.",
    "Someone from your past will play a significant role in your future.",
    "Trust the timing of your life; everything is unfolding as it should.",
    "A breakthrough in a challenging situation is just around the corner.",
    "Your dedication to others will soon come back to you tenfold.",
    "You are on the right path, don’t stray from it.",
    "Something you've been working towards will soon manifest.",
    "Your next big opportunity will come through a chance encounter.",
    "Your emotional strength will guide you through a difficult time.",
    "Great things come to those who wait—and you've been patient.",
    "A fresh start will be exactly what you need right now.",
    "The power to create your future lies within you.",
    "You will soon receive a compliment that will boost your confidence.",
    "A relationship in your life will flourish if nurtured with care.",
    "Expect a pleasant surprise from someone you least expect.",
    "You will find yourself in a situation that challenges your growth.",
    "You will soon be presented with a choice that will change your life.",
    "A past mistake will soon bring you valuable lessons.",
    "Keep your heart open—love is closer than you think.",
    "An unexpected visit from an old friend will warm your heart.",
    "Your efforts to heal from past wounds are paying off.",
    "Good news will arrive through a letter or email.",
    "Your inner strength is your greatest asset—don’t underestimate it.",
    "A moment of stillness will bring clarity to a difficult decision.",
    "Someone will soon show you a side of themselves you’ve never seen.",
    "A piece of advice from an elder will be incredibly useful.",
    "You will find balance in your life soon, bringing you peace.",
    "You are on the verge of a major personal transformation.",
    "Your financial situation will improve in surprising ways.",
    "A new hobby will bring joy and balance into your life.",
    "The universe has heard your prayers; trust in the process.",
    "Be open to the unexpected; it may lead you to exactly what you need.",
    "You will soon achieve something that will make you very proud.",
    "A burst of creative energy will lead to a new project.",
    "Someone will soon express their admiration for you.",
    "A new friendship will blossom into something more meaningful.",
    "Trust your gut—it will guide you to where you need to be.",
    "You will soon have the opportunity to help someone in need.",
    "Your ability to stay calm under pressure will serve you well.",
    "A long-awaited reunion is about to take place.",
    "The hard work you’ve put in will soon bear fruit.",
    "An unexpected windfall is coming your way.",
    "The end of a chapter is the beginning of a new and exciting one.",
    "Your dream job is just around the corner—keep looking.",
    "A new and exciting chapter is about to begin in your love life.",
    "Keep your positive attitude—it will attract good things.",
    "You will soon experience a moment of serendipity that will change your direction.",
    "Your creativity will solve a problem that others cannot.",
    "A period of rest and reflection will bring you clarity and peace.",
    "Be kind to yourself; you've been doing your best.",
    "A new opportunity to learn something exciting is on the way.",
    "A major shift is coming in your life—embrace it with open arms.",
    "The time to make a big decision is coming soon; trust in yourself."
];

// Endpoint to get a random fortune
app.get('/fortune', (req, res) => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    res.json({ fortune: randomFortune });
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
