export type MenuItem = {
  id: string;
  name: string;
  size?: string;
  description?: string;
  defaultPrice: string; // formatted "00,00"
  priceLabel?: string; // override e.g. "50ml | 130ml"
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export type MenuPage = {
  id: string;
  title: string;
  sections: MenuSection[];
};

export const MENU: MenuPage[] = [
  {
    id: "quentes",
    title: "Bebidas Quentes",
    sections: [
      {
        id: "espressos",
        title: "Espressos & Cafés",
        items: [
          { id: "espresso-havanna", name: "Espresso Havanna - Blend Exclusivo", size: "50ml", description: "Blend desenvolvido pela 3 Corações exclusivamente para harmonizar com o Dulce de Leche Havanna. Originário do Cerrado Mineiro, com aroma e sabor floral, adocicado, com notas de chocolate e corpo denso e cremoso.", defaultPrice: "00,00" },
          { id: "espresso-doppio", name: "Espresso Doppio", size: "130ml", description: "Espresso Havanna em dose dupla.", defaultPrice: "00,00" },
          { id: "espresso-macchiato-50", name: "Espresso Macchiato 50ml", size: "50ml", description: "Espresso Havanna finalizado com espuma de leite.", defaultPrice: "00,00" },
          { id: "espresso-macchiato-130", name: "Espresso Macchiato 130ml", size: "130ml", description: "Espresso Havanna finalizado com espuma de leite.", defaultPrice: "00,00" },
          { id: "espresso-dulce", name: "Espresso com Dulce de Leche", size: "50ml", description: "Nosso Espresso, de blend exclusivo, acompanhado com Dulce de Leche e finalizado com raspas de limão.", defaultPrice: "00,00" },
          { id: "cafe-latte", name: "Café Latte", size: "130ml", description: "Tradicional café com leite vaporizado, feito com espresso Havanna. Finalizado com espuma de leite.", defaultPrice: "00,00" },
          { id: "cappuccino-italiano", name: "Cappuccino Italiano", size: "130ml", description: "Espresso Havanna com leite vaporizado. Finalizado com chocolate em pó.", defaultPrice: "00,00" },
          { id: "cappuccino-vienense", name: "Cappuccino Vienense", size: "240ml", description: "Espresso Havanna, leite vaporizado e creme de avelã. Finalizado com Chantilly e chocolate em pó.", defaultPrice: "00,00" },
          { id: "cappuccino-havanna", name: "Cappuccino Havanna", size: "130ml", description: "Espresso Havanna, leite vaporizado e muuuito dulce de leche Havanna. Finalizado com canela.", defaultPrice: "00,00" },
          { id: "3coracoes-cappuccino", name: "3 Corações Cappuccino", size: "160ml", description: "Cappuccino Doce de Leite Havanna 3 Corações. Duas doses.", defaultPrice: "00,00" },
          { id: "mocha-dulce", name: "Mocha com Dulce de Leche", size: "240ml", description: "Espresso Havanna com leite vaporizado e doce de leite.", defaultPrice: "00,00" },
          { id: "dulce-quente", name: "Dulce de Leche Quente", size: "240ml", description: "Leite e doce de leite Havanna. Finalizado com canela. Acompanha dose de Espresso.", defaultPrice: "00,00" },
          { id: "chocolate-quente", name: "Chocolate Quente", size: "150ml", description: "Leite e chocolate em pó. Finalizado com chocolate em pó.", defaultPrice: "00,00" },
          { id: "choco-havanna", name: "Choco Havanna", size: "130ml", description: "Nosso tradicional chocolate quente cremoso com muuuito dulce de leche Havanna.", defaultPrice: "00,00" },
          { id: "cha-importado", name: "Chá Importado", size: "150ml", description: "Sachê de chá Twinings. Diversos sabores.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "extras",
        title: "Extras",
        items: [
          { id: "extra-chantilly", name: "Chantilly", size: "35g", defaultPrice: "00,00" },
          { id: "extra-dulce", name: "Dulce de Leche", size: "50g", defaultPrice: "00,00" },
          { id: "extra-vegetal", name: "Leite Vegetal A Tal da Castanha", size: "50ml", defaultPrice: "00,00" },
        ],
      },
      {
        id: "para-levar-cafe",
        title: "Para Levar",
        items: [
          { id: "cafe-3c-moido", name: "Café 3 Corações Havanna Torrado e Moído", size: "250g", description: "Blend exclusivo Havanna. Sabor adocicado, com notas de chocolate, frutas amarelas e aroma intenso.", defaultPrice: "00,00" },
          { id: "cappuccino-capsulas", name: "Cappuccino Doce de Leite Havanna 3 Corações", size: "10 cápsulas", description: "Um cappuccino cremoso, que combina as notas de café com o tradicional Dulce de Leche Havanna.", defaultPrice: "00,00" },
        ],
      },
    ],
  },
  {
    id: "geladas",
    title: "Bebidas Geladas",
    sections: [
      {
        id: "basicas-geladas",
        title: "Refrescantes",
        items: [
          { id: "agua-sem-gas", name: "Água sem Gás", defaultPrice: "00,00" },
          { id: "agua-com-gas", name: "Água com Gás", defaultPrice: "00,00" },
          { id: "refrigerante", name: "Refrigerante", size: "350ml", defaultPrice: "00,00" },
          { id: "suco", name: "Suco", size: "300ml", description: "Feitos com polpa de fruta. Abacaxi, manga, maracujá e frutas vermelhas.", defaultPrice: "00,00" },
          { id: "soda-italiana", name: "Soda Italiana", size: "380ml", description: "Leve, gelada e gaseificada. Refrescante na medida certa. Framboesa e limão.", defaultPrice: "00,00" },
          { id: "cha-batido", name: "Chá Batido & Gelado", size: "480ml", description: "Jarra de chá gelado. Combinação delicada de sabor e frescor. Framboesa e limão.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "especiais-geladas",
        title: "Especiais Geladas",
        items: [
          { id: "alfajor-au-cafe", name: "Alfajor au Café", size: "200ml", description: "Sobremesa em forma de café: espresso, sorvete de creme, doce de leite, Alfajor Havanna de merengue e chantilly.", defaultPrice: "00,00" },
          { id: "cappuccino-helado", name: "Cappuccino Helado Dulce de Leche", size: "330ml", description: "Cápsula Cappuccino Doce de Leite, espresso, Doce de Leite Havanna e gelo. Finalizado com raspas de limão.", defaultPrice: "00,00" },
          { id: "havanna-shake-200", name: "Havanna Shake 200ml", size: "200ml", description: "Cremoso e indulgente: leite, espresso, Doce de Leite Havanna e cappuccino em pó. Finalizado com chantilly.", defaultPrice: "00,00" },
          { id: "havanna-shake-380", name: "Havanna Shake 380ml", size: "380ml", description: "Cremoso e indulgente: leite, espresso, Doce de Leite Havanna e cappuccino em pó. Finalizado com chantilly.", defaultPrice: "00,00" },
          { id: "latte-helado", name: "Latte Helado", size: "300ml", description: "O tradicional café com leite em versão gelada: espresso Havanna, leite e gelo.", defaultPrice: "00,00" },
          { id: "milkshake-choco", name: "Milk Shake de Chocolate com Dulce de Leche", size: "380ml", description: "Sorvete de creme, leite, chocolate e Doce de Leite Havanna. Finalizado com chantilly e calda de chocolate.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "vannaccinos",
        title: "Vannaccinos",
        subtitle: "A bebida gelada preferida da Havanna. Cremoso, indulgente e irresistível. Finalizados com chantilly e calda de doce de leite Havanna. 400ml — Sabores: Dulce de Leche, Chocolate com Dulce de Leche, Morango com Dulce de Leche.",
        items: [
          { id: "vannaccino-sem-cafe", name: "Vannaccino — Sem café", size: "400ml", defaultPrice: "00,00" },
          { id: "vannaccino-com-cafe", name: "Vannaccino — Com café", size: "400ml", defaultPrice: "00,00" },
          { id: "iced-yopro-sem", name: "Iced YoPRO com Dulce de Leche Zero — Sem café", size: "400ml", description: "YoPRO doce de leite Havanna, doce de leite zero adição de açúcares e gelo. 15g de proteínas.", defaultPrice: "00,00" },
          { id: "iced-yopro-com", name: "Iced YoPRO com Dulce de Leche Zero — Com café", size: "400ml", description: "YoPRO doce de leite Havanna, doce de leite zero adição de açúcares e gelo. 15g de proteínas.", defaultPrice: "00,00" },
          { id: "yopro-shake", name: "YoPRO Shake Proteico", size: "250ml", description: "15g de proteínas.", defaultPrice: "00,00" },
        ],
      },
    ],
  },
  {
    id: "salgados",
    title: "Clássicos & Especiais",
    sections: [
      {
        id: "argentinos",
        title: "Clássicos Argentinos",
        items: [
          { id: "empanadas", name: "Empanadas", size: "100g", description: "Carne suave, presunto e queijo, queijo com cebola.", defaultPrice: "00,00" },
          { id: "medialuna-doce", name: "Medialuna Doce", size: "2 un. 70g", description: "Acompanha doce de leite Havanna.", defaultPrice: "00,00" },
          { id: "medialuna-salgada", name: "Medialuna Salgada", size: "2 un. 70g", description: "Acompanha manteiga.", defaultPrice: "00,00" },
          { id: "medialuna-combo", name: "Medialuna Combo", size: "70g", description: "01 Medialuna salgada e 01 Medialuna doce. Acompanha manteiga e doce de leite Havanna.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "brasileiros",
        title: "Clássicos Brasileiros",
        items: [
          { id: "pdq-multigraos", name: "Pão de Queijo Multigrãos", size: "90g", defaultPrice: "00,00" },
          { id: "pdq-tradicional", name: "Pão de Queijo Tradicional", size: "70g", defaultPrice: "00,00" },
          { id: "pdq-recheado", name: "Pão de Queijo Recheado com Doce de Leite", size: "75g", defaultPrice: "00,00" },
          { id: "pdq-mini", name: "Mini Pão de Queijo — Porção 8 un.", size: "120g", defaultPrice: "00,00" },
          { id: "coxinha-frango", name: "Coxinha de Frango com Requeijão", size: "110g", description: "Recheio de frango desfiado e requeijão.", defaultPrice: "00,00" },
          { id: "coxinha-costela", name: "Coxinha de Costela com Requeijão", size: "110g", description: "Recheio de costela desfiada e requeijão.", defaultPrice: "00,00" },
          { id: "bauruzinho", name: "Bauruzinho de Presunto e Queijo", size: "130g", description: "Recheio de presunto e queijo.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "especiais-havanna",
        title: "Especiais Havanna",
        items: [
          { id: "croissant-serrano", name: "Croissant Serrano", size: "135g", description: "Croissant, presunto cru, muçarela de búfala e molho pesto.", defaultPrice: "00,00" },
          { id: "croissant-porteno", name: "Croissant Porteño", size: "148g", description: "Croissant, omelete, queijo muçarela, tomate assado e requeijão com creme de ricota.", defaultPrice: "00,00" },
          { id: "choripan", name: "Choripan", size: "235g", description: "Pão de hambúrguer com gergelim, hambúrguer de linguiça, creme de mostarda dijon, creme de muçarela e parmesão e molho campanha.", defaultPrice: "00,00" },
          { id: "croque", name: "Croque El Señor", size: "200g", description: "Pão de miga brioche, presunto, queijo muçarela, gruyère, requeijão e parmesão. Acompanha dois sabores de maionese.", defaultPrice: "00,00" },
          { id: "palermo", name: "Palermo Soho", size: "130g", description: "Pão de miga com presunto cozido, queijo prato e maionese.", defaultPrice: "00,00" },
          { id: "torrada-petropolis", name: "Torrada Petrópolis", size: "150g", description: "Pão de forma, requeijão, queijo parmesão e queijo muçarela.", defaultPrice: "00,00" },
        ],
      },
    ],
  },
  {
    id: "doces",
    title: "Doces",
    sections: [
      {
        id: "doces-fatia",
        title: "Doces (fatia)",
        items: [
          { id: "bolo-chocolatudo", name: "Bolo Chocolatudo", size: "140g", description: "Massa amanteigada 100% cacau, recheio com mousse de chocolate e cobertura de ganache.", defaultPrice: "00,00" },
          { id: "bolo-red-velvet", name: "Bolo Red Velvet", size: "170g", description: "Tradicional bolo americano com massa vermelha, recheado com doce de leite e cream cheese com café.", defaultPrice: "00,00" },
          { id: "brownie", name: "Brownie com Dulce de Leche", size: "185g", description: "Brownie de chocolate com doce de leite. Acompanha sorvete de creme.", defaultPrice: "00,00" },
          { id: "torta-havanna", name: "Torta Havanna", size: "120g", description: "Camadas de massa folhada intercaladas com doce de leite e cobertura de marshmallow.", defaultPrice: "00,00" },
          { id: "torta-havanna-zero", name: "Torta Havanna Zero", size: "120g", description: "Massa folhada com doce de leite zero adição de açúcares e cobertura de marshmallow.", defaultPrice: "00,00" },
          { id: "torta-chocolina", name: "Torta La Chocolina", size: "100g", description: "Tradicional torta argentina com camadas de biscoito de chocolate e doce de leite.", defaultPrice: "00,00" },
          { id: "churros", name: "Churros", description: "4 churros acompanhados do nosso tradicional doce de leite.", defaultPrice: "00,00" },
          { id: "cubanito-2", name: "Cubanito (2 un.)", description: "Casquinha de Waffle crocante recheada com muito doce de leite.", defaultPrice: "00,00" },
          { id: "cubanito-4", name: "Cubanito (4 un.)", description: "Casquinha de Waffle crocante recheada com muito doce de leite.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "tortas-levar",
        title: "Tortas para Levar",
        items: [
          { id: "bolo-chocolatudo-inteiro", name: "Bolo Chocolatudo (inteiro)", size: "1.4 kg", description: "Massa amanteigada 100% cacau, recheio com mousse de chocolate e cobertura ganache de chocolate ao leite.", defaultPrice: "000,00" },
          { id: "torta-havanna-inteira", name: "Torta Havanna (inteira)", size: "1.1 kg", description: "Camadas de massa folhada intercaladas com doce de leite e cobertura de marshmallow.", defaultPrice: "000,00" },
          { id: "torta-havanna-zero-inteira", name: "Torta Havanna Zero (inteira)", size: "1.1 kg", description: "Massa folhada com doce de leite zero adição de açúcares e cobertura de marshmallow.", defaultPrice: "000,00" },
        ],
      },
    ],
  },
  {
    id: "alfajores",
    title: "Alfajores & Para Levar",
    sections: [
      {
        id: "alfajor-solito",
        title: "Alfajor Solito",
        items: [
          { id: "alfajor-choco-leite", name: "Alfajor Solito — Chocolate ao Leite", size: "55g", defaultPrice: "00,00" },
          { id: "alfajor-choco-branco", name: "Alfajor Solito — Chocolate Branco", size: "55g", defaultPrice: "00,00" },
          { id: "alfajor-merengue", name: "Alfajor Solito — Merengue", size: "47g", defaultPrice: "00,00" },
          { id: "alfajor-nozes", name: "Alfajor Solito — Nozes", size: "55g", defaultPrice: "00,00" },
          { id: "alfajor-70cacao", name: "Alfajor Solito — 70% Cacao", size: "65g", defaultPrice: "00,00" },
          { id: "alfajor-mar-del-plata", name: "Alfajor Mar del Plata", size: "90g", description: "Recheado com duas camadas de doce de leite, cristais de sal marinho e cobertura de chocolate amargo 70% Cacao.", defaultPrice: "00,00" },
          { id: "alfajor-vegano", name: "Alfajor Vegano", size: "70g", description: "Trigo sarraceno, doce de leite com amêndoas e chocolate amargo 70% cacao.", defaultPrice: "00,00" },
          { id: "alfajor-super", name: "Alfajor Super Dulce de Leche", size: "70g", description: "Farinha e pedaços de amêndoas, doce de leite e cobertura de chocolate meio amargo.", defaultPrice: "00,00" },
          { id: "alfajor-sem-acucar", name: "Alfajor Sem Açúcar", size: "70g", description: "Doce de leite sem açúcar e chocolate amargo 70% cacao.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "potes",
        title: "Doce de Leite e Cremes",
        items: [
          { id: "dulce-zero-acucar", name: "Dulce de Leche Zero Açúcar", size: "Pote 420g", description: "O tradicional doce de leite Havanna na versão zero adição de açúcares.", defaultPrice: "00,00" },
          { id: "dulce-zero-lactose", name: "Dulce de Leche Zero Lactose", size: "Pote 420g", description: "Dulce de Leche zero lactose e zero açúcares.", defaultPrice: "00,00" },
          { id: "caramelo-salgado", name: "Caramelo Salgado Mar del Plata", size: "Pote 420g", description: "Doce de leite Havanna com toque de sal.", defaultPrice: "00,00" },
          { id: "creme-pistache", name: "Creme de Pistache Dubai", size: "Pote 170g", description: "Creme de pistache combinado com doce de leite Havanna.", defaultPrice: "00,00" },
          { id: "havannitas", name: "Havannitas", size: "9g", description: "Bombom de chocolate ao leite com recheio de doce de leite Havanna.", defaultPrice: "00,00" },
        ],
      },
      {
        id: "caixas",
        title: "Caixas de Alfajores",
        items: [
          { id: "caixa-4", name: "Caixa com 4 Alfajores", description: "70% cacao, Mar del Plata, Sem açúcar, Pistache.", defaultPrice: "00,00" },
          { id: "caixa-6", name: "Caixa com 6 Alfajores", description: "Chocolate ao leite e/ou Merengue.", defaultPrice: "00,00" },
          { id: "caixa-12", name: "Caixa com 12 Alfajores", description: "Chocolate ao leite ou misto (Chocolate ao leite e merengue).", defaultPrice: "00,00" },
        ],
      },
    ],
  },
];

export const ALL_ITEMS: MenuItem[] = MENU.flatMap((p) => p.sections.flatMap((s) => s.items));
