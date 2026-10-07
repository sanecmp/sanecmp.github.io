(() => {
  "use strict";

  const english = {
    "sanecmp — управление использованием компьютера": "sanecmp — computer usage management",
    "Система": "System",
    "Принципы": "Principles",
    "Установка": "Installation",
    "Начать": "Get started",
    "Ограничения и статистика · локально": "Limits and statistics · local",
    "Расписания и лимиты": "Schedules and limits",
    "для компьютера.": "for computer use.",
    "sanea устанавливается на родительский компьютер или домашний NAS и хранит настройки. sanex применяет их на компьютере ребёнка и собирает статистику использования.": "sanea runs on the parent's computer or a home NAS and stores the settings. sanex applies them on the child's computer and collects usage statistics.",
    "Установить": "Install",
    "Как устроено": "How it works",
    "целевая платформа": "target platform",
    "защищённый обмен": "secure communication",
    "Без облака": "No cloud",
    "данные остаются дома": "data stays at home",
    "Сегодня": "Today",
    "Алексей": "Alex",
    "А": "A",
    "осталось сегодня": "remaining today",
    "Учёба": "Learning",
    "без ограничений": "unlimited",
    "Игры": "Games",
    "осталось 42 мин из 1 ч": "42 min remaining of 1 hour",
    "Правила продолжают действовать, даже если родительское приложение выключено.": "The rules remain active even when the parent application is offline.",
    "Архитектура": "Architecture",
    "Связаны по сети.": "Connected over the network.",
    "Независимы в работе.": "Independent in operation.",
    "Родитель управляет правилами через браузер. Системная служба на компьютере ребёнка применяет сохранённые настройки автономно.": "The parent manages rules in a browser. A system service on the child's computer applies the saved settings autonomously.",
    "Родительское приложение": "Parent application",
    "Панель управления для родительского компьютера или домашнего NAS.": "A control panel for the parent's computer or a home NAS.",
    "регистрирует компьютеры и локальные учётные записи;": "registers computers and local user accounts;",
    "создаёт расписания, лимиты сеансов и правила приложений;": "creates schedules, session limits, and application rules;",
    "хранит настройки и полученную статистику в локальной SQLite;": "stores settings and received statistics in a local SQLite database;",
    "показывает активность детей со всех связанных устройств.": "shows children's activity across all linked devices.",
    "конфигурация": "configuration",
    "события": "events",
    "Компьютер ребёнка": "Child's computer",
    "Небольшая системная служба без привязки ко входу пользователя.": "A small system service that does not depend on a user login.",
    "учитывает пользовательские сеансы и приложения;": "tracks user sessions and applications;",
    "применяет расписание и лимиты к выбранным учётным записям;": "applies schedules and limits to selected user accounts;",
    "хранит состояние и события в защищённых локальных файлах;": "stores state and events in protected local files;",
    "синхронизируется с sanea при доступности сети.": "synchronizes with sanea whenever the network is available.",
    "Принципы работы": "Operating principles",
    "Как применяются правила": "How the rules are applied",
    "Наблюдение и ограничения включаются отдельно для каждой учётной записи. Родительская учётная запись может оставаться вне наблюдения.": "Monitoring and limits are enabled separately for each user account. A parent's account can remain unmonitored.",
    "Данные остаются дома": "Data stays at home",
    "Конфигурация и статистика хранятся на ваших устройствах, без внешнего сервиса.": "Configuration and statistics stay on your devices, with no external service.",
    "Не требует постоянного подключения": "No constant connection required",
    "sanex продолжает применять сохранённые правила и копит события для последующей передачи.": "sanex keeps applying saved rules and queues events for later delivery.",
    "Только нужный сеанс": "Only the relevant session",
    "При исчерпании лимита завершается сеанс ребёнка, а не работа всего компьютера.": "When a limit is reached, the child's session ends—not the entire computer.",
    "Явные настройки": "Explicit settings",
    "Расписания, продолжительность сеансов и лимиты приложений задаются явно.": "Schedules, session durations, and application limits are defined explicitly.",
    "Первый запуск": "First run",
    "От установки до правил": "From installation to rules",
    "Четыре действия — и компьютер готов работать автономно.": "Four actions, and the computer is ready to work autonomously.",
    "Запустите sanea": "Start sanea",
    "Установщик настроит и запустит службу на родительском компьютере или домашнем NAS.": "The installer configures and starts the service on a parent's computer or a home NAS.",
    "Установите sanex": "Install sanex",
    "Разверните службу на Debian-компьютере ребёнка от имени root.": "Install the service on the child's Debian computer.",
    "Свяжите устройства": "Link the devices",
    "Откройте регистрацию в sanea и введите одноразовый код командой sanex.": "Open registration in sanea and enter the one-time code with sanex.",
    "Назначьте правила": "Assign rules",
    "Выберите учётную запись, настройте расписание и лимиты, включите сбор и применение ограничений.": "Choose a user account, configure its schedule and limits, and enable collection and enforcement.",
    "Установка sanea и sanex": "Installing sanea and sanex",
    "Установщики размещают приложения и настраивают системные службы. sanea запускается сразу, sanex — после регистрации компьютера.": "The installers deploy the applications and configure their system services. sanea starts immediately; sanex starts after computer registration.",
    "Установщики поддерживают режим --from-github для установки из основных веток GitHub. Этот режим дополнительно требует git.": "The installers support --from-github mode to install from the main branches on GitHub. This mode also requires git.",
    "Перед установкой:": "Before installation:",
    "нужны curl, системный Python 3.12+ и": "you need curl, system Python 3.12+ and",
    ". Python и uv должны принадлежать root и быть недоступны ребёнку для изменения. Для sanex требуется Debian-based Linux с GNOME, systemd и AccountsService на x86-64.": ". Python and uv must be owned by root and must not be writable by the child. sanex requires Debian-based Linux with GNOME, systemd and AccountsService on x86-64.",
    "На компьютере родителя или NAS": "On the parent's computer or NAS",
    "На компьютере ребёнка": "On the child's computer",
    "Запустите установщик от имени root.": "Run the installer as root.",
    "Создайте учётную запись администратора.": "Create an administrator account.",
    "На компьютере с sanea откройте": "On the computer running sanea, open",
    "и войдите.": "and sign in.",
    "Установщик сделает остальное:": "The installer handles the rest:",
    "создаст локальную базу и ключи, настроит автозапуск и сразу запустит sanea.": "it creates the local database and keys, enables autostart, and starts sanea immediately.",
    "Если sanea и sanex на разных компьютерах:": "If sanea and sanex run on different computers:",
    "локальные IP-адреса sanea установщик добавит в SANEA_ALLOWED_HOSTS при установке. Разрешите HTTPS и UDP-обнаружение в домашней сети.": "the installer adds sanea's local IP addresses to SANEA_ALLOWED_HOSTS during installation. Allow HTTPS and UDP discovery on the home network.",
    "Полная инструкция": "Full instructions",
    "Обновление": "Updates",
    "Обновить sanex можно через интерфейс sanea. В разделе «Компьютеры» укажите нужную версию в блоке «Обновление sanex» и запустите обновление.": "You can update sanex through sanea's web interface. In Computers, enter the version you want in Update sanex and start the update.",
    "В разделе «Компьютеры» sanea откройте регистрацию на 30 секунд.": "In sanea's Computers section, open registration for 30 seconds.",
    "Замените YOUR-CODE в команде на показанный в sanea код вида ABCD-EFGH.": "Replace YOUR-CODE in the command with the ABCD-EFGH-style code displayed in sanea.",
    "После регистрации:": "After registration:",
    "служба запустится автоматически, а sanea получит список локальных учётных записей. Наблюдение останется выключено до вашего решения.": "the service starts automatically and sanea receives the local user-account list. Monitoring stays off until you decide to enable it.",
    "Локальная настройка ограничений и просмотр статистики.": "Configure limits and view statistics locally.",
    "Перейти к установке": "Go to installation",
    "Локальная система управления временем за компьютером.": "A local computer usage management system.",
    "Наверх": "Back to top",
    "Скопировать": "Copy",
    "Скопировать команду": "Copy command",
    "Основная навигация": "Main navigation",
    "sanecmp, на главную": "sanecmp, home",
    "Ключевые свойства": "Key features",
    "Пример дневного лимита": "Example daily limit",
    "Использовано 1 час 58 минут из 3 часов": "1 hour 58 minutes used out of 3 hours",
    "Дневной лимит": "Daily limit",
    "Использовано": "Used",
    "Защищённый обмен в локальной сети": "Secure communication over the local network",
    "sanecmp — локальная система настройки ограничений и сбора статистики использования компьютера.": "sanecmp is a local system for configuring computer-use limits and collecting usage statistics."
  };

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement.closest("script, style, pre, code")) {
      textNodes.push({ node, original: node.nodeValue });
    }
  }

  const attributes = [];
  document.querySelectorAll("[aria-label], [title]").forEach((element) => {
    for (const name of ["aria-label", "title"]) {
      if (element.hasAttribute(name)) {
        attributes.push({ element, name, original: element.getAttribute(name) });
      }
    }
  });
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    attributes.push({ element: description, name: "content", original: description.content });
  }
  const originalTitle = document.title;

  function translated(value, language) {
    if (language === "ru") return value;
    const trimmed = value.trim();
    const normalized = trimmed.replace(/\s+/g, " ");
    if (!normalized || !english[normalized]) return value;
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    return `${leading}${english[normalized]}${trailing}`;
  }

  function applyLanguage(language, remember = false) {
    const selected = language === "ru" ? "ru" : "en";
    document.documentElement.lang = selected;
    textNodes.forEach(({ node, original }) => {
      node.nodeValue = translated(original, selected);
    });
    attributes.forEach(({ element, name, original }) => {
      element.setAttribute(name, translated(original, selected));
    });
    document.title = translated(originalTitle, selected);
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });
    if (remember) {
      try {
        localStorage.setItem("sanecmp-language", selected);
      } catch (_) {
        // The page still works when storage is unavailable.
      }
    }
  }

  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  let preferred = urlLanguage === "ru" || urlLanguage === "en" ? urlLanguage : null;
  try {
    preferred = preferred || localStorage.getItem("sanecmp-language");
  } catch (_) {
    // Fall back to the browser language when storage is unavailable.
  }
  if (preferred !== "ru" && preferred !== "en") {
    preferred = (navigator.languages?.[0] || navigator.language || "en")
      .toLowerCase()
      .startsWith("ru") ? "ru" : "en";
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });
  applyLanguage(preferred);
})();
