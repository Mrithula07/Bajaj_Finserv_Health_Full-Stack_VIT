const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const FULL_NAME = "Mrithulasree N";
const DOB = "07112004"; // ddmmyyyy
const EMAIL = "mrithulasree.n2022@vitstudent.ac.in";
const ROLL_NUMBER = "22BLC1225";

function processData(inputArr) {
  let odd = [];
  let even = [];
  let alphabets = [];
  let specials = [];
  let sum = 0;
  let concatStr = "";

  inputArr.forEach((item) => {
    if (/^-?\d+$/.test(item)) {
      let num = parseInt(item, 10);
      sum += num;
      if (num % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concatStr += item;
    } else {
      specials.push(item);
    }
  });

  // Reverse + alternating caps
  let reversed = concatStr.split("").reverse();
  let altCaps = reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  return {
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabets,
    special_characters: specials,
    sum: sum.toString(),
    concat_string: altCaps,
  };
}

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res
        .status(400)
        .json({ is_success: false, error: "Invalid input" });
    }

    const processed = processData(data);

    const formattedName = FULL_NAME.toLowerCase().replace(/\s+/g, "_");

    res.status(200).json({
      is_success: true,
      user_id: `${formattedName}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      ...processed,
    });
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
