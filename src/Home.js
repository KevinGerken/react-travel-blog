import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    
        return (
            <main>
            <article className="blog-tease">
              <h2>Vietnam</h2>
              <p className="date">7/5/2019</p>
              <img src="./images/vietnam.jpg" alt="..." />
              <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quia sint delectus fugit earum, cum recusandae, esse fugiat iure eius odio sapiente accusantium dolor, eligendi dignissimos qui enim dolorem unde.</span>
              <span>Necessitatibus eos ratione nulla eius, vel repudiandae corrupti nihil? Atque rem, necessitatibus excepturi iusto maiores harum itaque, animi natus ullam voluptas laboriosam voluptatum enim laborum, ad facere quaerat porro possimus?</span>
              <span>Temporibus eaque suscipit accusamus voluptatem aperiam fugiat hic libero laboriosam voluptatum quibusdam aut culpa perspiciatis tenetur dolor dolores qui eveniet nobis ipsa quod quaerat, eum officiis impedit obcaecati. Numquam, sapiente.</span>
              <span>Id expedita tenetur autem voluptatum aperiam veniam accusamus at dolorem tempore eum est, nihil pariatur fugiat dignissimos modi, doloribus animi eveniet dolorum officia nam, ipsum dicta. Voluptatibus, in laborum harum.</span>
              <span>Mollitia neque suscipit facere omnis dolorem ratione laudantium autem inventore amet alias vero, unde soluta, velit aliquid distinctio. Voluptas, accusamus ullam iure. Et, quae repudiandae possimus voluptatibus laboriosam nam iusto?</span></p>
              <p className="blog-link"><Link to="/article/1" >more...</Link>
              </p>
            </article>
            <article className="blog-tease">
              <h2>Singapore</h2>
              <p className="date">7/1/2019</p>
              <img src="./images/singapore.jpg" alt="..." />
              <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta error laboriosam quaerat, animi, necessitatibus neque libero consectetur enim recusandae mollitia asperiores dolores odit perspiciatis facilis. Possimus rem natus maiores molestias?</span>
              <span>Voluptatibus, quia. Assumenda quisquam nulla quia iste voluptatibus quibusdam libero consequuntur minus, omnis doloremque, esse ab, veniam cumque voluptatum amet distinctio qui ipsum reprehenderit nesciunt quis aperiam id atque quas.</span>
              <span>Magni quo vel culpa magnam nostrum eos quidem soluta, nemo tempore dolor, placeat quia maiores velit atque, iure ea aut. Expedita tenetur qui amet nemo, sapiente at dicta, accusamus error!</span></p>
              <p className="blog-link"><Link to="/article/2" >more...</Link>
              </p>
            </article>
            <article className="blog-tease">
              <h2>Thailand</h2>
              <p className="date">5/2/2019</p>
              <img src="images/thailand.jpg" alt="..." />
              <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, neque dolores quas facilis iure dolorum numquam, fugit explicabo deserunt tempore eveniet blanditiis. Numquam, et, iste magnam ex blanditiis totam eos?</span>
              <span>Molestias omnis vero porro esse, recusandae doloribus eum architecto provident animi iure asperiores dolores corporis nemo! Aspernatur dicta, quam ipsam dignissimos quaerat dolores pariatur, id sunt eos explicabo rem, assumenda.</span>
              <span>Iusto distinctio accusantium inventore nobis velit dolor ipsa magni illo porro, fugiat sequi, eaque nihil facilis magnam. Assumenda iure illum tempore commodi placeat facere, quos, distinctio recusandae error, asperiores fugiat!</span></p>
              <p className="blog-link"><Link to="/article/3" >more...</Link>
              </p>
            </article>
            <article className="blog-tease">
              <h2>Cambodia</h2>
              <p className="date">4/20/2019</p>
              <img src="images/cambodia.jpg" alt="..." />
              <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui pariatur ex esse accusantium cum iure delectus. Tempora ullam, culpa nemo fugiat maxime blanditiis repudiandae iste aut ad. Odit, inventore autem.</span><span>Tempora eos odit laudantium ad placeat omnis ex dolorem dignissimos, quia cum blanditiis nobis autem quasi, soluta tenetur modi! Natus soluta optio cumque provident, quis dolorem eum fuga molestias tenetur!</span></p>
              <p className="blog-link"><Link to="/article/4" >more...</Link>
              </p>
            </article>
          </main>
        )
    
}
