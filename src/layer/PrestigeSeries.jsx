import React, { useState } from "react";

const PrestigeSeries = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" pt-9 ">
      <p
        className={`text-primary font-Poppins  leading-relaxed ${
          isExpanded ? "h-auto" : "h-[150px] overflow-hidden"
        }`}
      >
        MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, 
        the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile 
        to best fit their computing needs.
        <br /><br />
        There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, 
        increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
        <br /><br />
        Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for 
        various design work as well as for office tasks given that the screen can be adjusted for better clarity, color 
        accuracy,<br /> or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" 
        for which contrast is increased. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia in, nobis vitae perspiciatis consequuntur ipsum ipsam accusantium quidem, ad numquam fugit aspernatur dolorum! Tenetur perferendis cumque laborum quos non ipsum alias, dolorem necessitatibus blanditiis eos veniam vel saepe expedita odio sapiente incidunt qui eum. Ratione aliquam, qui blanditiis repudiandae perspiciatis error atque voluptas nihil tempore magni cumque laboriosam mollitia sit ipsa commodi, libero excepturi odit illo ex aperiam facilis iste quisquam ea. Commodi facere deserunt, distinctio deleniti eaque, quis libero minus fugiat tempora atque ipsa quo optio quas rerum. Natus, maxime veritatis. Aspernatur, reprehenderit hic! Voluptate perferendis facilis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quo sint fuga rem quia dolor tempore illo pariatur libero earum corporis consectetur perferendis, optio et qui sapiente accusamus veritatis eius labore ut. Ullam obcaecati sit provident nobis repudiandae delectus sint! Architecto esse excepturi facilis eius omnis consectetur molestias exercitationem, quo obcaecati quod, voluptas labore, laudantium quisquam suscipit quae nobis sapiente vel fugit quidem reiciendis? A iure minus laborum saepe nostrum suscipit quae. Sed, repellendus quasi sapiente repellat minus cumque unde, odit ipsum sint inventore praesentium laboriosam necessitatibus. Neque, error quos adipisci iusto praesentium quo vel. Accusantium pariatur, omnis ipsam error dolorum aperiam in atque qui ipsa numquam impedit rem eveniet hic cumque obcaecati fugit ratione perspiciatis, suscipit, nostrum ullam dolorem. Illo autem magnam soluta consectetur rem et quos voluptatum ipsam quam fugiat laudantium corporis enim non odit, debitis sit vero inventore, iure deserunt eligendi aut beatae. Deleniti, blanditiis. Magni, sint quis nam doloremque dolores excepturi cupiditate voluptas architecto impedit nulla quisquam id accusamus quae reiciendis ab distinctio? Provident, et, deleniti voluptas culpa laudantium consequatur quos ad quaerat blanditiis officia rerum facere recusandae repellat quidem voluptates laboriosam incidunt. Exercitationem id veniam, deserunt nam vel eius perspiciatis, harum provident corporis ratione ex illo quo quisquam fugiat! Earum minima voluptatibus officiis tempore sed, aliquid vel expedita sunt voluptatem non eveniet, iusto, consequuntur doloremque porro sint beatae consequatur velit cupiditate fugiat fuga libero pariatur? Non quidem dolore, maiores sequi minus, nihil vitae blanditiis repudiandae id suscipit officia ullam reprehenderit numquam cupiditate necessitatibus rerum. Architecto libero earum aspernatur, vitae est perspiciatis possimus beatae eos, obcaecati necessitatibus blanditiis similique quis dolorum maiores incidunt modi saepe quo sapiente ab. Ullam, repellendus. Id dignissimos, autem similique magni praesentium eaque quibusdam rerum dolore dolorem inventore ullam odit vel perspiciatis eligendi eius magnam quam, cupiditate totam cum? Dolores quos nostrum ipsum culpa libero? Omnis maiores dicta, nostrum mollitia beatae voluptas fugit corrupti perspiciatis sint magnam optio laudantium quam soluta tempora officia debitis impedit, qui culpa aspernatur totam autem facilis maxime quo ut. Itaque id non eius veniam ratione dolore eligendi architecto provident nam assumenda, optio sunt. Illum quisquam cupiditate corporis. Sit alias ipsa maiores, quibusdam esse asperiores repellendus error ipsam, sunt nesciunt ducimus maxime delectus aspernatur hic numquam modi nam quasi eligendi quidem reiciendis eius et! Numquam voluptas
      </p>
      <div className="mt-4 flex justify-center">
        <button
          onClick={toggleContent}
          className="px-6 py-2 font-Poppins text-primary  rounded-full border-2 border-primary hover:shadow-lg font-semibold r"
        >
          {isExpanded ? "Show Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default PrestigeSeries;

