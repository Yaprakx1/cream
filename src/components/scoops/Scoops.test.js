import { findAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Scoops from "./scoops";
import  userEvent  from "@testing-library/user-event";

test("apiden gelen veriler ekrana basılır ", async () => {
  render(<Scoops />);

  const user = userEvent()

  //resimleri çek
  const images = await screen.findAllByRole("img", { name: cesit });

  // gelen reimlerin sayısı
  expect(images) = toHaveLength(4);
});
 
test('dondurma çeşitlerinde ekleme ve sıfırlamaya göre total değişimi',async() => {
  render(<Scoops />)

  const total = screen.getByRole('heading',{name:/cesitler Ücreti: /i})
   const addBtns = await screen.findAllByRole('button',{name:'ekle'})
   const clearBtns = await screen.findAllByRole('button',{name:sıfırla,})

   await user.click(addBtns[0])
   expect(total).toHaveTextContent('3')

    // vanillanın ekle butonuna çift tıklama
  await user.dblClick(addBtns[1]);

  expect(total).toHaveTextContent('9');

  // vanilnan temizleme butonuna tıklama
  await user.click(clearBtns[1]);

  expect(total).toHaveTextContent('3');

})