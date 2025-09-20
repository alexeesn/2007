const holidayData = {
  "1-1": {
    title: "New Year's Day",
    desc: "Celebration of the first day of the Gregorian calendar year, marked with family gatherings, fireworks, and festive traditions.",
    img: "asset/newyear.jpg"
  },
  "4-5": {
    title: "Maunday Thursday",
    desc: "Part of Holy Week, commemorating the Last Supper of Jesus Christ with His disciples.",
    img: "asset/maundy thurs.jpg"
  },
  "4-6": {
    title: "Good Friday",
    desc: "Observed as the crucifixion and death of Jesus Christ, a solemn day for Christians.",
    img: "asset/good fri.jpg"
  },
  "4-9": {
    title: "Araw ng Kagitingan",
    desc: "Honors the heroism of Filipino and American soldiers who fought during World War II, particularly the Fall of Bataan in 1942.",
    img: "asset/araw ng kagitingan.jpg"
  },
  "5-1": {
    title: "Labor Day",
    desc: "Celebration of the economic and social achievements of workers, with rallies and parades advocating for workers' rights.",
    img: "asset/labor day.jpg"
  },
  "6-12": {
    title: "Independence Day",
    desc: "Philippine Independence Day celebration.",
    img: "asset/independence day.jpg"
  },
  "8-27": {
    title: "National Heroes Day",
    desc: "Honoring all Filipino heroes who have contributed to the nation's freedom and development.",
    img: "asset/national heroes day.jpg"
  },
  "11-30": {
    title: "Bonifacio Day",
    desc: "Commemorating the birth of Andrés Bonifacio, a Filipino revolutionary leader and the founder of the Katipunan.",
    img: "asset/bonifacio day.jpg"
  },
  "12-25": {
    title: "Christmas Day",
    desc: "Celebration of the birth of Jesus Christ, one of the most important holidays in the Philippines ",
    img: "asset/xmass.jpg"
  },
  "12-30": {
    title: "Rizal Day",
    desc: "Commemorating the life of Dr. José Rizal.",
    img: "asset/portrait of José Rizal.jpg"
  }
};

const popupBg = document.getElementById("popup-bg");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");

// Add click listeners to all holiday cells
document.querySelectorAll(".holiday").forEach(cell => {
  cell.addEventListener("click", () => {
    const month = cell.closest("table").querySelector("caption").textContent;
    const day = cell.textContent.trim();

    // convert month to number
    const monthNum = new Date(`${month} 1, 2007`).getMonth() + 1;
    const key = `${monthNum}-${day}`;

    if (holidayData[key]) {
      popupTitle.textContent = holidayData[key].title;
      popupDesc.textContent = holidayData[key].desc;
      popupImg.src = holidayData[key].img;
    } else {
      popupTitle.textContent = "No Data";
      popupDesc.textContent = "No holiday info available.";
      popupImg.src = "https://via.placeholder.com/400x200?text=No+Info";
    }

    popupBg.style.display = "flex";
  });
});

// Close popup
function closePopup() {
  popupBg.style.display = "none";
}

