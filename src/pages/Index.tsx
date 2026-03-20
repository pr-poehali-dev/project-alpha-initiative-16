export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ROLL*TIME</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Акции</a>
          <a href="#">Контакты</a>
        </nav>
        <a href="https://wa.me/79328413213" target="_blank" rel="noopener noreferrer"><button className="btn-cta">Заказать</button></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              РОЛЛЫ И ПИЦЦА,
              <br />
              КАК ТЫ <span>ЛЮБИШЬ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Самые сочные роллы и хрустящая пицца в ретро-атмосфере. Только свежие ингредиенты, только огонь вкус.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="https://wa.me/79328413213" target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Заказать сейчас
                </button>
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #РОЛЛЫ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ПИЦЦА 🔥
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * РОЛЛЫ КОТОРЫЕ РВУТ * ПИЦЦА НА ТОНКОМ ТЕСТЕ * ТОЛЬКО СВЕЖИЕ ПРОДУКТЫ * ОТКРЫТЫ ДО 23:00 * ЛУЧШИЕ В ГОРОДЕ *
            РОЛЛЫ КОТОРЫЕ РВУТ * ПИЦЦА НА ТОНКОМ ТЕСТЕ * ТОЛЬКО СВЕЖИЕ ПРОДУКТЫ * ОТКРЫТЫ ДО 23:00 * ЛУЧШИЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/352e8a7e-55e9-4d27-a9e8-e8e9a78105a7/files/57fc6d4d-3532-4321-a6ab-7e05d6ab867d.jpg"
                alt="Роллы с лососем"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Сет «Классика»</h3>
                  <span className="price">990 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  32 ролла с лососем, тунцом и авокадо. Свежий рис, нежный сыр сливочный, соус спайси.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Хрустящая
              </span>
              <img
                src="https://cdn.poehali.dev/projects/352e8a7e-55e9-4d27-a9e8-e8e9a78105a7/files/1889e75b-2d66-4fa7-acd9-08d51482d7cd.jpg"
                alt="Пицца Пепперони"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пицца Пепперони</h3>
                  <span className="price">750 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Двойная пепперони, моцарелла, томатный соус на тонком тесте.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/352e8a7e-55e9-4d27-a9e8-e8e9a78105a7/files/35530d90-2af8-4fc1-b28a-a8ea38cec73e.jpg"
                alt="Комбо ролл+пицца"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Комбо «Всё сразу»</h3>
                  <span className="price">1 490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сет из 24 роллов + пицца 30 см на выбор. Идеально для компании.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАШ ВКУС — НАШ ПРИОРИТЕТ.</h2>
            <p className="vibe-text">
              Мы готовим роллы и пиццу только из свежих продуктов, доставленных в день заказа. Никаких полуфабрикатов —
              только настоящий вкус в каждом кусочке. Атмосфера, которая переносит в эпоху, когда всё было по-настоящему.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ROLL.TIME
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Роллы"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пицца"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Роллы крупным планом"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера заведения"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ROLL*TIME</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Самые вкусные роллы и пицца в городе. Свежие ингредиенты, ретро-атмосфера и вкус, который запоминается.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Акции
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 10:00 – 23:00</li>
            <li>Сб–Вс: 11:00 – 23:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li><a href="https://wa.me/79328413213" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>+7 (932) 841-32-13</a></li>
            <li><a href="https://vk.com/id1061142304" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>ВКонтакте</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}