const htmlFile = () => {
  const body = document.body;
  body.innerHTML = `  <div>
    <label for="value">
      <textarea
        name="value"
        id=""
        cols="30"
        rows="6"
        readonly
        placeholder="Type in your Equation"
      ></textarea>
    </label>
    <table>
      <tbody>
        <tr>
          <td>
            <button
              type="submit"
              title="Clear"
              id="btn-clear"
            >
              C
            </button>
          </td>
          <td><button onclick=action("/") type="submit">/</button></td>
          <td><button onclick=action("*")  type="submit">X</button></td>
          <td><button type="submit"id="btn-delete">Del</button></td>
        </tr>
        <tr>
          <td><button onclick=action(7) type="submit">7</button></td>
          <td><button type="submit" onclick=action(8)>8</button></td>
          <td><button type="submit" onclick=action(9)>9</button></td>
          <td><button type="submit" onclick=action("-")>-</button></td>
        </tr>
        <tr>
          <td><button type="submit" onclick=action(4)>4</button></td>
          <td><button type="submit" onclick=action(5)>5</button></td>
          <td><button type="submit" onclick=action(6)>6</button></td>
          <td><button type="submit" onclick=action("+")>+</button></td>
        </tr>
        <tr>
          <td><button type="submit" onclick=action(1)>1</button></td>
          <td><button type="submit" onclick=action(2)>2</button></td>
          <td><button type="submit" onclick=action(3)>3</button></td>
          <td><button type="submit"id="btn-answer">Ans</button></td>
        </tr>
        <tr>
          <td><button type="submit" onclick=action("%")>%</button></td>
          <td><button type="submit" onclick=action(0)>0</button></td>
          <td><button type="submit" onclick=action(".")>.</button></td>
          <td><button type="submit"id="btn-equal">=</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  `;
};
htmlFile();

const clear = document.querySelector("#btn-clear");
const textarea = document.querySelector("textarea");
const deletion = document.querySelector("#btn-delete");
const answer = document.querySelector("#btn-answer");
const equal = document.querySelector("#btn-equal");
clear.addEventListener("click", () => {
  textarea.value = "";
});
const action = (value) => {
  textarea.value += value;
};
deletion.addEventListener("click", () => {
  let textVal = textarea.value;
  textarea.value = textVal.slice(0, -1);
});
equal.addEventListener("click", () => {
  textarea.value = eval(textarea.value);
  localStorage.setItem("ans", textarea.value);
});
answer.addEventListener("click", () => {
  textarea.value += localStorage.getItem("ans");
});
