module.exports = (seed) => {
    const emojis = [
        '😄',
        '😃',
        '😀',
        '😊',
        '☺',
        '😉',
        '😍',
        '😘',
        '😚',
        '😗',
        '😙',
        '😜',
        '😝',
        '😛',
        '😳',
        '😁',
        '😔',
        '😌',
        '😒',
        '😞',
        '😣',
        '😢',
        '😂',
        '😭',
        '😪',
        '😥',
        '😰',
        '😅',
        '😓',
        '😩',
        '😫',
        '😨',
        '😱',
        '😠',
        '😡',
        '😤',
        '😖',
        '😆',
        '😋',
        '😷',
        '😎',
        '😴',
        '😵',
        '😲',
        '😟',
        '😦',
        '😧',
        '😈',
        '👿',
        '😮',
        '😬',
        '😐',
        '😕',
        '😯',
        '😶',
        '😇',
        '😏',
        '😑',
        '👲',
        '👳',
        '👮',
        '👷',
        '💂',
        '👶',
        '👦',
        '👧',
        '👨',
        '👩',
        '👴',
        '👵',
        '👱',
        '👼',
        '👸',
        '😺',
        '😸',
        '😻',
        '😽',
        '😼',
        '🙀',
        '😿',
        '😹',
        '😾',
        '👹',
        '👺',
        '🙈',
        '🙉',
        '🙊',
        '💀',
        '👽',
        '💩',
        '🔥',
        '✨',
        '🌟',
        '💫',
        '💥',
        '💢',
        '💦',
        '💧',
        '💤',
        '💨',
        '👂',
        '👀',
        '👃',
        '👅',
        '👄',
        '👍',
        '👎',
        '👌',
        '👊',
        '✊',
        '✌',
        '👋',
        '✋',
        '👐',
        '👆',
        '👇',
        '👉',
        '👈',
        '🙌',
        '🙏',
        '☝',
        '👏',
        '💪',
        '🚶',
        '🏃',
        '💃',
        '👫',
        '👪',
        '👬',
        '👭',
        '💏',
        '💑',
        '👯',
        '🙆',
        '🙅',
        '💁',
        '🙋',
        '💆',
        '💇',
        '💅',
        '👰',
        '🙎',
        '🙍',
        '🙇',
        '🎩',
        '👑',
        '👒',
        '👟',
        '👞',
        '👡',
        '👠',
        '👢',
        '👕',
        '👔',
        '👚',
        '👗',
        '🎽',
        '👖',
        '👘',
        '👙',
        '💼',
        '👜',
        '👝',
        '👛',
        '👓',
        '🎀',
        '🌂',
        '💄',
        '💛',
        '💙',
        '💜',
        '💚',
        '❤',
        '💔',
        '💗',
        '💓',
        '💕',
        '💖',
        '💞',
        '💘',
        '💌',
        '💋',
        '💍',
        '💎',
        '👤',
        '👥',
        '💬',
        '👣',
        '💭',
        '🐶',
        '🐺',
        '🐱',
        '🐭',
        '🐹',
        '🐰',
        '🐸',
        '🐯',
        '🐨',
        '🐻',
        '🐷',
        '🐽',
        '🐮',
        '🐗',
        '🐵',
        '🐒',
        '🐴',
        '🐑',
        '🐘',
        '🐼',
        '🐧',
        '🐦',
        '🐤',
        '🐥',
        '🐣',
        '🐔',
        '🐍',
        '🐢',
        '🐛',
        '🐝',
        '🐜',
        '🐞',
        '🐌',
        '🐙',
        '🐚',
        '🐠',
        '🐟',
        '🐬',
        '🐳',
        '🐋',
        '🐄',
        '🐏',
        '🐀',
        '🐃',
        '🐅',
        '🐇',
        '🐉',
        '🐎',
        '🐐',
        '🐓',
        '🐕',
        '🐖',
        '🐁',
        '🐂',
        '🐲',
        '🐡',
        '🐊',
        '🐫',
        '🐪',
        '🐆',
        '🐈',
        '🐩',
        '🐾',
        '💐',
        '🌸',
        '🌷',
        '🍀',
        '🌹',
        '🌻',
        '🌺',
        '🍁',
        '🍃',
        '🍂',
        '🌿',
        '🌾',
        '🍄',
        '🌵',
        '🌴',
        '🌲',
        '🌳',
        '🌰',
        '🌱',
        '🌼',
        '🌐',
        '🌞',
        '🌝',
        '🌚',
        '🌑',
        '🌒',
        '🌓',
        '🌔',
        '🌕',
        '🌖',
        '🌗',
        '🌘',
        '🌜',
        '🌛',
        '🌙',
        '🌍',
        '🌎',
        '🌏',
        '🌋',
        '🌌',
        '🌠',
        '⭐',
        '☀',
        '⛅',
        '☁',
        '⚡',
        '☔',
        '❄',
        '⛄',
        '🌀',
        '🌁',
        '🌈',
        '🌊',
        '🎍',
        '💝',
        '🎎',
        '🎒',
        '🎓',
        '🎏',
        '🎆',
        '🎇',
        '🎐',
        '🎑',
        '🎃',
        '👻',
        '🎅',
        '🎄',
        '🎁',
        '🎋',
        '🎉',
        '🎊',
        '🎈',
        '🎌',
        '🔮',
        '🎥',
        '📷',
        '📹',
        '📼',
        '💿',
        '📀',
        '💽',
        '💾',
        '💻',
        '📱',
        '☎',
        '📞',
        '📟',
        '📠',
        '📡',
        '📺',
        '📻',
        '🔊',
        '🔉',
        '🔈',
        '🔇',
        '🔔',
        '🔕',
        '📢',
        '📣',
        '⏳',
        '⌛',
        '⏰',
        '⌚',
        '🔓',
        '🔒',
        '🔏',
        '🔐',
        '🔑',
        '🔎',
        '💡',
        '🔦',
        '🔆',
        '🔅',
        '🔌',
        '🔋',
        '🔍',
        '🛁',
        '🛀',
        '🚿',
        '🚽',
        '🔧',
        '🔩',
        '🔨',
        '🚪',
        '🚬',
        '💣',
        '🔫',
        '🔪',
        '💊',
        '💉',
        '💰',
        '💴',
        '💵',
        '💷',
        '💶',
        '💳',
        '💸',
        '📲',
        '📧',
        '📥',
        '📤',
        '✉',
        '📩',
        '📨',
        '📯',
        '📫',
        '📪',
        '📬',
        '📭',
        '📮',
        '📦',
        '📝',
        '📄',
        '📃',
        '📑',
        '📊',
        '📈',
        '📉',
        '📜',
        '📋',
        '📅',
        '📆',
        '📇',
        '📁',
        '📂',
        '✂',
        '📌',
        '📎',
        '✒',
        '✏',
        '📏',
        '📐',
        '📕',
        '📗',
        '📘',
        '📙',
        '📓',
        '📔',
        '📒',
        '📚',
        '📖',
        '🔖',
        '📛',
        '🔬',
        '🔭',
        '📰',
        '🎨',
        '🎬',
        '🎤',
        '🎧',
        '🎼',
        '🎵',
        '🎶',
        '🎹',
        '🎻',
        '🎺',
        '🎷',
        '🎸',
        '👾',
        '🎮',
        '🃏',
        '🎴',
        '🀄',
        '🎲',
        '🎯',
        '🏈',
        '🏀',
        '⚽',
        '⚾',
        '🎾',
        '🎱',
        '🏉',
        '🎳',
        '⛳',
        '🚵',
        '🚴',
        '🏁',
        '🏇',
        '🏆',
        '🎿',
        '🏂',
        '🏊',
        '🏄',
        '🎣',
        '☕',
        '🍵',
        '🍶',
        '🍼',
        '🍺',
        '🍻',
        '🍸',
        '🍹',
        '🍷',
        '🍴',
        '🍕',
        '🍔',
        '🍟',
        '🍗',
        '🍖',
        '🍝',
        '🍛',
        '🍤',
        '🍱',
        '🍣',
        '🍥',
        '🍙',
        '🍘',
        '🍚',
        '🍜',
        '🍲',
        '🍢',
        '🍡',
        '🍳',
        '🍞',
        '🍩',
        '🍮',
        '🍦',
        '🍨',
        '🍧',
        '🎂',
        '🍰',
        '🍪',
        '🍫',
        '🍬',
        '🍭',
        '🍯',
        '🍎',
        '🍏',
        '🍊',
        '🍋',
        '🍒',
        '🍇',
        '🍉',
        '🍓',
        '🍑',
        '🍈',
        '🍌',
        '🍐',
        '🍍',
        '🍠',
        '🍆',
        '🍅',
        '🌽',
        '🏠',
        '🏡',
        '🏫',
        '🏢',
        '🏣',
        '🏥',
        '🏦',
        '🏪',
        '🏩',
        '🏨',
        '💒',
        '⛪',
        '🏬',
        '🏤',
        '🌇',
        '🌆',
        '🏯',
        '🏰',
        '⛺',
        '🏭',
        '🗼',
        '🗾',
        '🗻',
        '🌄',
        '🌅',
        '🌃',
        '🗽',
        '🌉',
        '🎠',
        '🎡',
        '⛲',
        '🎢',
        '🚢',
        '⛵',
        '🚤',
        '🚣',
        '⚓',
        '🚀',
        '✈',
        '💺',
        '🚁',
        '🚂',
        '🚊',
        '🚉',
        '🚞',
        '🚆',
        '🚄',
        '🚅',
        '🚈',
        '🚇',
        '🚝',
        '🚋',
        '🚃',
        '🚎',
        '🚌',
        '🚍',
        '🚙',
        '🚘',
        '🚗',
        '🚕',
        '🚖',
        '🚛',
        '🚚',
        '🚨',
        '🚓',
        '🚔',
        '🚒',
        '🚑',
        '🚐',
        '🚲',
        '🚡',
        '🚟',
        '🚠',
        '🚜',
        '💈',
        '🚏',
        '🎫',
        '🚦',
        '🚥',
        '⚠',
        '🚧',
        '🔰',
        '⛽',
        '🏮',
        '🎰',
        '♨',
        '🗿',
        '🎪',
        '🎭',
        '📍',
        '🚩',
        '⬆',
        '⬇',
        '⬅',
        '➡',
        '🔠',
        '🔡',
        '🔤',
        '↗',
        '↖',
        '↘',
        '↙',
        '↔',
        '↕',
        '🔄',
        '◀',
        '▶',
        '🔼',
        '🔽',
        '↩',
        '↪',
        'ℹ',
        '⏪',
        '⏩',
        '⏫',
        '⏬',
        '⤵',
        '⤴',
        '🆗',
        '🔀',
        '🔁',
        '🔂',
        '🆕',
        '🆙',
        '🆒',
        '🆓',
        '🆖',
        '📶',
        '🎦',
        '🈁',
        '🈯',
        '🈳',
        '🈵',
        '🈴',
        '🈲',
        '🉐',
        '🈹',
        '🈺',
        '🈶',
        '🈚',
        '🚻',
        '🚹',
        '🚺',
        '🚼',
        '🚾',
        '🚰',
        '🚮',
        '🅿',
        '♿',
        '🚭',
        '🈷',
        '🈸',
        '🈂',
        'Ⓜ',
        '🛂',
        '🛄',
        '🛅',
        '🛃',
        '🉑',
        '㊙',
        '㊗',
        '🆑',
        '🆘',
        '🆔',
        '🚫',
        '🔞',
        '📵',
        '🚯',
        '🚱',
        '🚳',
        '🚷',
        '🚸',
        '⛔',
        '✳',
        '❇',
        '❎',
        '✅',
        '✴',
        '💟',
        '🆚',
        '📳',
        '📴',
        '🅰',
        '🅱',
        '🆎',
        '🅾',
        '💠',
        '➿',
        '♻',
        '♈',
        '♉',
        '♊',
        '♋',
        '♌',
        '♍',
        '♎',
        '♏',
        '♐',
        '♑',
        '♒',
        '♓',
        '⛎',
        '🔯',
        '🏧',
        '💹',
        '💲',
        '💱',
        '©',
        '®',
        '™',
        '〽',
        '〰',
        '🔝',
        '🔚',
        '🔙',
        '🔛',
        '🔜',
        '❌',
        '⭕',
        '❗',
        '❓',
        '❕',
        '❔',
        '🔃',
        '🕛',
        '🕧',
        '🕐',
        '🕜',
        '🕑',
        '🕝',
        '🕒',
        '🕞',
        '🕓',
        '🕟',
        '🕔',
        '🕠',
        '🕕',
        '🕖',
        '🕗',
        '🕘',
        '🕙',
        '🕚',
        '🕡',
        '🕢',
        '🕣',
        '🕤',
        '🕥',
        '🕦',
        '✖',
        '➕',
        '➖',
        '➗',
        '♠',
        '♥',
        '♣',
        '♦',
        '💮',
        '💯',
        '✔',
        '☑',
        '🔘',
        '🔗',
        '➰',
        '🔱',
        '🔲',
        '🔳',
        '◼',
        '◻',
        '◾',
        '◽',
        '▪',
        '▫',
        '🔺',
        '⬜',
        '⬛',
        '⚫',
        '⚪',
        '🔴',
        '🔵',
        '🔻',
        '🔶',
        '🔷',
        '🔸',
        '🔹',
    ];

    seed = seed || Math.random();
    
    return emojis[Math.floor(seed * emojis.length)];
};