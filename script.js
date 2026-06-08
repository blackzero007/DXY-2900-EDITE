const adjectives = [
    '橘子味的', '草莓味的', '巧克力味的', '薄荷味的', '樱花味的',
    '柠檬味的', '抹茶味的', '蜂蜜味的', '可乐味的', '奶茶味的',
    '温柔的', '可爱的', '神秘的', '调皮的', '安静的',
    '活泼的', '害羞的', '勇敢的', '迷糊的', '慵懒的',
    '快乐的', '忧郁的', '浪漫的', '古怪的', '机智的',
    '梦游的', '飞翔的', '游泳的', '跳舞的', '唱歌的',
    '月亮上的', '星星上的', '云朵里的', '彩虹下的', '森林里的',
    '海边的', '山顶的', '花园里的', '图书馆的', '咖啡店的'
];

const nouns = [
    '小猫', '小狗', '小兔', '小熊', '小猪',
    '狐狸', '松鼠', '考拉', '熊猫', '企鹅',
    '海豚', '鲸鱼', '蝴蝶', '蜜蜂', '瓢虫',
    '独角兽', '小龙', '凤凰', '精灵', '仙女',
    '魔法师', '探险家', '梦想家', '诗人', '画家',
    '音乐家', '旅行家', '美食家', '科学家', '发明家',
    '月亮', '星星', '云朵', '彩虹', '流星',
    '花朵', '树叶', '露珠', '雪花', '泡泡'
];

const emojis = [
    '🐱', '🐶', '🐰', '🐻', '🐷',
    '🦊', '🐿️', '🐨', '🐼', '🐧',
    '🐬', '🐋', '🦋', '🐝', '🐞',
    '🦄', '🐲', '🐦', '🧚', '🌙',
    '⭐', '☁️', '🌈', '🌸', '🍀',
    '🎀', '🎈', '🎪', '🎨', '🎵'
];

const avatarColors = [
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'
];

const TAGS = [
    { key: 'life', label: '生活', color: '#4facfe' },
    { key: 'emotion', label: '情感', color: '#f5576c' },
    { key: 'work', label: '工作', color: '#43e97b' },
    { key: 'dream', label: '梦想', color: '#fee140' },
    { key: 'treehole', label: '树洞', color: '#a8edea' }
];

const MOODS = [
    { key: 'happy', label: '开心', emoji: '😊', color: '#FFB800' },
    { key: 'sad', label: '难过', emoji: '😢', color: '#5B8DEF' },
    { key: 'anxious', label: '焦虑', emoji: '😰', color: '#FF6B6B' },
    { key: 'expectant', label: '期待', emoji: '🤩', color: '#9B59B6' },
    { key: 'calm', label: '平静', emoji: '😌', color: '#2ECC71' },
    { key: 'grateful', label: '感恩', emoji: '🥰', color: '#E74C3C' }
];

const DAILY_TOPIC_KEY = 'tree_hole_daily_topic';

const TOPIC_POOL = [
    '今天让你感到温暖的一个瞬间是什么？',
    '如果可以对十年前的自己说一句话，你会说什么？',
    '最近有什么让你觉得「人间值得」的小事？',
    '你最想去的一个地方是哪里？为什么？',
    '有没有一首歌，听到就会想起某个人？',
    '你最近一次开怀大笑是因为什么？',
    '如果有一天可以不用工作，你最想做什么？',
    '你心中最理想的生活是什么样子的？',
    '有没有一件事，你坚持了很久？',
    '你觉得成长最大的代价是什么？',
    '最近有没有什么让你焦虑的事情？',
    '如果可以拥有一项超能力，你想要什么？',
    '你最喜欢的季节是什么？为什么？',
    '有没有一道菜，让你想起家的味道？',
    '你最珍贵的一段回忆是什么？',
    '最近有什么想要实现的小目标？',
    '如果明天就是世界末日，你今天会做什么？',
    '你觉得什么是真正的幸福？',
    '有没有一个人，你想对他/她说声谢谢？',
    '你最大的梦想是什么？',
    '最近读过的一本好书是什么？',
    '你觉得孤独是什么颜色的？',
    '有没有一句话，一直激励着你前行？',
    '你最想对现在的自己说什么？',
    '如果可以回到过去，你想回到哪一年？',
    '你觉得什么是真正的勇气？',
    '最近有什么让你感动的事情吗？',
    '你理想中的周末应该是什么样的？',
    '有没有什么事情是你一直想做但还没做的？',
    '你觉得人生中最重要的东西是什么？'
];

const STORAGE_KEY = 'tree_hole_messages';
const RESONATED_KEY = 'tree_hole_resonated';
const REPLY_RESONATED_KEY = 'tree_hole_reply_resonated';
const EXPANDED_REPLIES_KEY = 'tree_hole_expanded_replies';

let messages = [];
let resonatedIds = new Set();
let replyResonatedIds = new Set();
let expandedReplyIds = new Set();
let currentSort = 'hot';
let currentTag = 'all';
let currentMood = 'all';
let selectedPostTag = 'life';
let selectedPostMood = 'happy';
let currentIdentity = null;
let dailyTopic = '';
let replyingToMessageId = null;
let replyIdentity = null;

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateIdentity() {
    return {
        nickname: randomChoice(adjectives) + randomChoice(nouns),
        emoji: randomChoice(emojis),
        color: randomChoice(avatarColors)
    };
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    if (days < 7) return `${days}天前`;

    const date = new Date(timestamp);
    return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function loadMessages() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            messages = JSON.parse(stored);
        }
    } catch (e) {
        messages = [];
    }

    messages.forEach(msg => {
        if (!msg.tag) {
            msg.tag = 'treehole';
        }
        if (!msg.replies) {
            msg.replies = [];
        }
        if (!msg.mood) {
            msg.mood = 'calm';
        }
    });

    if (messages.length === 0) {
        messages = getSampleMessages();
        saveMessages();
    }
}

function saveMessages() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
        console.error('保存失败:', e);
    }
}

function loadResonated() {
    try {
        const stored = localStorage.getItem(RESONATED_KEY);
        if (stored) {
            resonatedIds = new Set(JSON.parse(stored));
        }
    } catch (e) {
        resonatedIds = new Set();
    }
}

function saveResonated() {
    try {
        localStorage.setItem(RESONATED_KEY, JSON.stringify([...resonatedIds]));
    } catch (e) {
        console.error('保存失败:', e);
    }
}

function loadReplyResonated() {
    try {
        const stored = localStorage.getItem(REPLY_RESONATED_KEY);
        if (stored) {
            replyResonatedIds = new Set(JSON.parse(stored));
        }
    } catch (e) {
        replyResonatedIds = new Set();
    }
}

function saveReplyResonated() {
    try {
        localStorage.setItem(REPLY_RESONATED_KEY, JSON.stringify([...replyResonatedIds]));
    } catch (e) {
        console.error('保存回复共鸣失败:', e);
    }
}

function loadExpandedReplies() {
    try {
        const stored = localStorage.getItem(EXPANDED_REPLIES_KEY);
        if (stored) {
            expandedReplyIds = new Set(JSON.parse(stored));
        }
    } catch (e) {
        expandedReplyIds = new Set();
    }
}

function saveExpandedReplies() {
    try {
        localStorage.setItem(EXPANDED_REPLIES_KEY, JSON.stringify([...expandedReplyIds]));
    } catch (e) {
        console.error('保存展开状态失败:', e);
    }
}

function getTodayString() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

function loadDailyTopic() {
    try {
        const stored = localStorage.getItem(DAILY_TOPIC_KEY);
        if (stored) {
            const data = JSON.parse(stored);
            if (data.date === getTodayString() && data.topic) {
                dailyTopic = data.topic;
                return;
            }
        }
    } catch (e) {
        console.error('加载每日话题失败:', e);
    }

    dailyTopic = getRandomDifferentTopic();
    saveDailyTopic();
}

function getRandomDifferentTopic() {
    let newTopic = randomChoice(TOPIC_POOL);
    try {
        const stored = localStorage.getItem(DAILY_TOPIC_KEY);
        if (stored) {
            const data = JSON.parse(stored);
            if (data.topic) {
                let attempts = 0;
                while (newTopic === data.topic && attempts < 10) {
                    newTopic = randomChoice(TOPIC_POOL);
                    attempts++;
                }
            }
        }
    } catch (e) {
        // ignore
    }
    return newTopic;
}

function saveDailyTopic() {
    try {
        localStorage.setItem(DAILY_TOPIC_KEY, JSON.stringify({
            date: getTodayString(),
            topic: dailyTopic
        }));
    } catch (e) {
        console.error('保存每日话题失败:', e);
    }
}

function renderDailyTopic() {
    const container = document.getElementById('dailyTopicCard');
    if (!container || !dailyTopic) return;

    container.innerHTML = `
        <div class="daily-topic-icon">💭</div>
        <div class="daily-topic-content">
            <div class="daily-topic-label">今日话题</div>
            <div class="daily-topic-text">${escapeHtml(dailyTopic)}</div>
        </div>
        <button class="daily-topic-btn" id="useTopicBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            写点什么
        </button>
    `;
}

function refreshDailyTopicWithAnimation() {
    const container = document.getElementById('dailyTopicCard');
    if (!container) return;

    container.style.opacity = '0';
    container.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        dailyTopic = getRandomDifferentTopic();
        saveDailyTopic();
        renderDailyTopic();
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 300);
}

function handleUseTopic() {
    const input = document.getElementById('postInput');
    input.value = dailyTopic + ' ';
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    handleInput();

    const postCard = document.querySelector('.post-card');
    if (postCard) {
        postCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
}

function scheduleDailyRefresh() {
    const delay = getTimeUntilMidnight();
    setTimeout(() => {
        refreshDailyTopicWithAnimation();
        scheduleDailyRefresh();
    }, delay);
}

function checkAndRefreshDailyTopic() {
    try {
        const stored = localStorage.getItem(DAILY_TOPIC_KEY);
        if (stored) {
            const data = JSON.parse(stored);
            if (data.date !== getTodayString()) {
                refreshDailyTopicWithAnimation();
            }
        }
    } catch (e) {
        console.error('检查每日话题失败:', e);
    }
}

function getSampleMessages() {
    const now = Date.now();
    const msg1Id = generateId();
    const msg2Id = generateId();
    const msg4Id = generateId();
    const msg6Id = generateId();

    return [
        {
            id: msg1Id,
            content: '今天在地铁上看到一个老爷爷给老奶奶让座，突然觉得这个世界还是很温暖的。希望每个人都能被温柔以待。',
            nickname: '橘子味的小猫',
            emoji: '🐱',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            timestamp: now - 1000 * 60 * 30,
            resonates: 42,
            tag: 'life',
            mood: 'grateful',
            replies: [
                {
                    id: generateId(),
                    content: '是啊，生活中总有一些小温暖在不经意间出现~',
                    nickname: '温柔的云朵',
                    emoji: '☁️',
                    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                    timestamp: now - 1000 * 60 * 20,
                    resonates: 8
                },
                {
                    id: generateId(),
                    content: '被你说的也想出门走走了，说不定也能遇到什么暖心的事',
                    nickname: '快乐的蜜蜂',
                    emoji: '🐝',
                    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    timestamp: now - 1000 * 60 * 15,
                    resonates: 5
                }
            ]
        },
        {
            id: msg2Id,
            content: '终于鼓起勇气跟暗恋了三年的人表白了，虽然被拒绝了，但心里反而轻松了很多。有些事情，做过了就不会后悔。',
            nickname: '勇敢的小兔',
            emoji: '🐰',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            timestamp: now - 1000 * 60 * 60 * 2,
            resonates: 128,
            tag: 'emotion',
            mood: 'calm',
            replies: [
                {
                    id: generateId(),
                    content: '你真的很勇敢！至少不会留有遗憾了，加油！',
                    nickname: '星星上的精灵',
                    emoji: '🧚',
                    color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
                    timestamp: now - 1000 * 60 * 90,
                    resonates: 23
                },
                {
                    id: generateId(),
                    content: '做过就不会后悔，这才是最重要的。更好的人还在前面等着你呢~',
                    nickname: '樱花味的小熊',
                    emoji: '🐻',
                    color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                    timestamp: now - 1000 * 60 * 70,
                    resonates: 15
                },
                {
                    id: generateId(),
                    content: '三年...好长啊，佩服你的勇气。祝你遇到更好的人！',
                    nickname: '海边的贝壳',
                    emoji: '🐚',
                    color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                    timestamp: now - 1000 * 60 * 50,
                    resonates: 10
                }
            ]
        },
        {
            id: generateId(),
            content: '加班到深夜，走出公司发现月亮特别圆。突然想起小时候奶奶说的话："月亮会陪着每个晚归的人。" 突然就不觉得累了。',
            nickname: '月亮上的小熊',
            emoji: '🌙',
            color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            timestamp: now - 1000 * 60 * 60 * 5,
            resonates: 89,
            tag: 'work',
            mood: 'calm',
            replies: []
        },
        {
            id: msg4Id,
            content: '今天是我来这座城市的第100天，还是没有交到什么朋友，但我相信一切都会好起来的。给自己加油！',
            nickname: '追梦的企鹅',
            emoji: '🐧',
            color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            timestamp: now - 1000 * 60 * 60 * 12,
            resonates: 256,
            tag: 'treehole',
            mood: 'expectant',
            replies: [
                {
                    id: generateId(),
                    content: '加油！我也是一个人在外地，虽然有时候会孤单，但也在慢慢变好。',
                    nickname: '奋斗的小松鼠',
                    emoji: '🐿️',
                    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                    timestamp: now - 1000 * 60 * 60 * 10,
                    resonates: 45
                }
            ]
        },
        {
            id: generateId(),
            content: '刚刚收到了梦想公司的offer！！！努力了这么久终于有回报了，激动得想哭。感谢所有没有放弃的日子。',
            nickname: '幸运的狐狸',
            emoji: '🦊',
            color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            timestamp: now - 1000 * 60 * 60 * 24,
            resonates: 312,
            tag: 'dream',
            mood: 'happy',
            replies: []
        },
        {
            id: msg6Id,
            content: '有时候觉得自己像一座孤岛，明明周围都是人，却感觉没有人真正理解自己。你们也会有这种感觉吗？',
            nickname: '孤独的鲸鱼',
            emoji: '🐋',
            color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
            timestamp: now - 1000 * 60 * 60 * 36,
            resonates: 198,
            tag: 'emotion',
            mood: 'sad',
            replies: [
                {
                    id: generateId(),
                    content: '会的。但是后来发现，其实每个人都在自己的世界里努力着，能遇到同频的人是幸运，遇不到也没关系。',
                    nickname: '梦游的猫咪',
                    emoji: '🐱',
                    color: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                    timestamp: now - 1000 * 60 * 60 * 30,
                    resonates: 67
                },
                {
                    id: generateId(),
                    content: '你不是一个人。在树洞里，我们都懂你。',
                    nickname: '温暖的星星',
                    emoji: '⭐',
                    color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
                    timestamp: now - 1000 * 60 * 60 * 28,
                    resonates: 52
                }
            ]
        }
    ];
}

function getTagByKey(key) {
    return TAGS.find(t => t.key === key);
}

function getMoodByKey(key) {
    return MOODS.find(m => m.key === key);
}

function getFilteredMessages() {
    let filtered = [...messages];
    if (currentTag !== 'all') {
        filtered = filtered.filter(m => m.tag === currentTag);
    }
    if (currentMood !== 'all') {
        filtered = filtered.filter(m => m.mood === currentMood);
    }
    return filtered;
}

function getSortedMessages() {
    const filtered = getFilteredMessages();
    const sorted = [...filtered];
    if (currentSort === 'hot') {
        sorted.sort((a, b) => b.resonates - a.resonates || b.timestamp - a.timestamp);
    } else {
        sorted.sort((a, b) => b.timestamp - a.timestamp);
    }
    return sorted;
}

function renderMessages() {
    const container = document.getElementById('messagesList');
    const sorted = getSortedMessages();

    document.getElementById('messageCount').textContent = getFilteredMessages().length;

    if (sorted.length === 0) {
        let emptyText = '树洞还是空的<br>来说点什么吧~';
        if (currentTag !== 'all' && currentMood !== 'all') {
            emptyText = '这个标签和心情下还没有留言~';
        } else if (currentTag !== 'all') {
            emptyText = '这个标签下还没有留言~';
        } else if (currentMood !== 'all') {
            const mood = getMoodByKey(currentMood);
            const moodEmoji = mood ? mood.emoji : '😊';
            const moodLabel = mood ? mood.label : '';
            emptyText = `${moodEmoji} ${moodLabel}心情下还没有留言~`;
        }

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🌳</div>
                <p class="empty-state-text">${emptyText}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = sorted.map(msg => {
        const hasResonated = resonatedIds.has(msg.id);
        const tag = getTagByKey(msg.tag);
        const tagColor = tag ? tag.color : '#ccc';
        const tagLabel = tag ? tag.label : '';
        const mood = getMoodByKey(msg.mood);
        const moodColor = mood ? mood.color : '#FFB800';
        const moodLabel = mood ? mood.label : '';
        const moodEmoji = mood ? mood.emoji : '😊';
        const replies = msg.replies || [];
        const replyCount = replies.length;
        const isExpanded = expandedReplyIds.has(msg.id);
        const isReplying = replyingToMessageId === msg.id;
        const replyIdent = replyIdentity || currentIdentity;

        const repliesHtml = replies.map(reply => {
            const replyHasResonated = replyResonatedIds.has(reply.id);
            return `
                <div class="reply-item" data-reply-id="${reply.id}">
                    <div class="reply-avatar" style="background: ${reply.color}">
                        ${reply.emoji}
                    </div>
                    <div class="reply-body">
                        <div class="reply-header">
                            <span class="reply-nickname">${reply.nickname}</span>
                            <span class="reply-time">${formatTime(reply.timestamp)}</span>
                        </div>
                        <div class="reply-content">${escapeHtml(reply.content)}</div>
                        <div class="reply-footer">
                            <button class="reply-resonate-btn ${replyHasResonated ? 'active' : ''}" data-message-id="${msg.id}" data-reply-id="${reply.id}">
                                <span class="reply-heart-icon">${replyHasResonated ? '❤️' : '🤍'}</span>
                                <span class="reply-resonate-count">${reply.resonates}</span>
                                <span>共鸣</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const replyFormHtml = isReplying ? `
            <div class="reply-form">
                <div class="reply-form-header">
                    <div class="reply-avatar-small" style="background: ${replyIdent.color}">
                        ${replyIdent.emoji}
                    </div>
                    <span class="reply-form-nickname">${replyIdent.nickname}</span>
                    <button class="reply-refresh-btn" data-message-id="${msg.id}" title="换一个昵称">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M23 4v6h-6M1 20v-6h6"/>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                        </svg>
                    </button>
                </div>
                <textarea class="reply-input" data-message-id="${msg.id}" placeholder="写下你的回复..." maxlength="300"></textarea>
                <div class="reply-form-footer">
                    <span class="reply-char-count"><span class="reply-char-count-num">0</span>/300</span>
                    <div class="reply-form-buttons">
                        <button class="reply-cancel-btn" data-message-id="${msg.id}">取消</button>
                        <button class="reply-submit-btn" data-message-id="${msg.id}">发送</button>
                    </div>
                </div>
            </div>
        ` : '';

        return `
            <div class="message-card" data-id="${msg.id}">
                <div class="message-header">
                    <div class="message-avatar" style="background: ${msg.color}">
                        ${msg.emoji}
                    </div>
                    <div class="message-info">
                        <div class="message-nickname">${msg.nickname}</div>
                        <div class="message-time">${formatTime(msg.timestamp)}</div>
                    </div>
                    <span class="message-mood" style="--mood-color: ${moodColor}">
                        <span class="message-mood-emoji">${moodEmoji}</span>
                        ${moodLabel}
                    </span>
                    <span class="message-tag" style="background-color: ${tagColor}20; color: ${tagColor}">
                        ${tagLabel}
                    </span>
                </div>
                <div class="message-content">${escapeHtml(msg.content)}</div>
                <div class="message-footer">
                    <button class="resonate-btn ${hasResonated ? 'active' : ''}" data-id="${msg.id}">
                        <span class="heart-icon">${hasResonated ? '❤️' : '🤍'}</span>
                        <span class="resonate-count">${msg.resonates}</span>
                        <span>共鸣</span>
                    </button>
                    <button class="reply-toggle-btn" data-id="${msg.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        <span>回复</span>
                        <span class="reply-count">${replyCount > 0 ? replyCount : ''}</span>
                    </button>
                </div>
                <div class="replies-section ${isExpanded ? 'expanded' : ''}">
                    <button class="replies-toggle" data-id="${msg.id}">
                        <svg class="replies-toggle-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                        <span>${isExpanded ? '收起回复' : `查看${replyCount}条回复`}</span>
                    </button>
                    <div class="replies-list ${isExpanded ? 'visible' : ''}">
                        ${repliesHtml}
                        ${replyFormHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.resonate-btn').forEach(btn => {
        btn.addEventListener('click', handleResonate);
    });

    container.querySelectorAll('.reply-toggle-btn').forEach(btn => {
        btn.addEventListener('click', handleReplyToggle);
    });

    container.querySelectorAll('.replies-toggle').forEach(btn => {
        btn.addEventListener('click', handleRepliesExpandToggle);
    });

    container.querySelectorAll('.reply-resonate-btn').forEach(btn => {
        btn.addEventListener('click', handleReplyResonate);
    });

    container.querySelectorAll('.reply-submit-btn').forEach(btn => {
        btn.addEventListener('click', handleReplySubmit);
    });

    container.querySelectorAll('.reply-cancel-btn').forEach(btn => {
        btn.addEventListener('click', handleReplyCancel);
    });

    container.querySelectorAll('.reply-refresh-btn').forEach(btn => {
        btn.addEventListener('click', handleReplyRefreshIdentity);
    });

    container.querySelectorAll('.reply-input').forEach(input => {
        input.addEventListener('input', handleReplyInput);
        input.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                const msgId = input.dataset.messageId;
                submitReply(msgId);
            }
        });
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function handleResonate(e) {
    const btn = e.currentTarget;
    const id = btn.dataset.id;
    const msg = messages.find(m => m.id === id);

    if (!msg) return;

    if (resonatedIds.has(id)) {
        resonatedIds.delete(id);
        msg.resonates = Math.max(0, msg.resonates - 1);
    } else {
        resonatedIds.add(id);
        msg.resonates += 1;
    }

    saveMessages();
    saveResonated();
    renderMessages();
    renderTagFilters();
    renderMoodFilter();
}

function handleReplyToggle(e) {
    const msgId = e.currentTarget.dataset.id;

    if (!expandedReplyIds.has(msgId)) {
        expandedReplyIds.add(msgId);
        saveExpandedReplies();
    }

    if (replyingToMessageId === msgId) {
        replyingToMessageId = null;
        replyIdentity = null;
    } else {
        replyingToMessageId = msgId;
        replyIdentity = generateIdentity();
    }

    renderMessages();

    if (replyingToMessageId === msgId) {
        setTimeout(() => {
            const replyInput = document.querySelector(`.reply-input[data-message-id="${msgId}"]`);
            if (replyInput) {
                replyInput.focus();
            }
        }, 50);
    }
}

function handleRepliesExpandToggle(e) {
    const msgId = e.currentTarget.dataset.id;

    if (expandedReplyIds.has(msgId)) {
        expandedReplyIds.delete(msgId);
    } else {
        expandedReplyIds.add(msgId);
    }

    saveExpandedReplies();
    renderMessages();
}

function handleReplyResonate(e) {
    const btn = e.currentTarget;
    const msgId = btn.dataset.messageId;
    const replyId = btn.dataset.replyId;
    const msg = messages.find(m => m.id === msgId);

    if (!msg || !msg.replies) return;

    const reply = msg.replies.find(r => r.id === replyId);
    if (!reply) return;

    if (replyResonatedIds.has(replyId)) {
        replyResonatedIds.delete(replyId);
        reply.resonates = Math.max(0, reply.resonates - 1);
    } else {
        replyResonatedIds.add(replyId);
        reply.resonates += 1;
    }

    saveMessages();
    saveReplyResonated();
    renderMessages();
}

function handleReplyInput(e) {
    const input = e.currentTarget;
    const msgId = input.dataset.messageId;
    const replyCard = input.closest('.replies-list');
    const charCount = replyCard.querySelector('.reply-char-count-num');
    if (charCount) {
        charCount.textContent = input.value.length;
    }
}

function handleReplySubmit(e) {
    const msgId = e.currentTarget.dataset.messageId;
    submitReply(msgId);
}

function submitReply(msgId) {
    const replyInput = document.querySelector(`.reply-input[data-message-id="${msgId}"]`);
    if (!replyInput) return;

    const content = replyInput.value.trim();
    if (!content) {
        replyInput.focus();
        return;
    }

    const msg = messages.find(m => m.id === msgId);
    if (!msg) return;

    if (!replyIdentity) {
        replyIdentity = generateIdentity();
    }

    const newReply = {
        id: generateId(),
        content: content,
        nickname: replyIdentity.nickname,
        emoji: replyIdentity.emoji,
        color: replyIdentity.color,
        timestamp: Date.now(),
        resonates: 0
    };

    if (!msg.replies) {
        msg.replies = [];
    }
    msg.replies.push(newReply);

    saveMessages();

    replyingToMessageId = null;
    replyIdentity = null;

    if (!expandedReplyIds.has(msgId)) {
        expandedReplyIds.add(msgId);
        saveExpandedReplies();
    }

    renderMessages();
    renderTagFilters();
    renderMoodFilter();

    const repliesSection = document.querySelector(`.message-card[data-id="${msgId}"] .replies-section`);
    if (repliesSection) {
        repliesSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function handleReplyCancel(e) {
    const msgId = e.currentTarget.dataset.messageId;
    replyingToMessageId = null;
    replyIdentity = null;
    renderMessages();
}

function handleReplyRefreshIdentity(e) {
    const msgId = e.currentTarget.dataset.messageId;
    replyIdentity = generateIdentity();
    renderMessages();

    setTimeout(() => {
        const replyInput = document.querySelector(`.reply-input[data-message-id="${msgId}"]`);
        if (replyInput) {
            replyInput.focus();
        }
    }, 50);
}

function refreshIdentity() {
    currentIdentity = generateIdentity();
    document.getElementById('previewNickname').textContent = currentIdentity.nickname;
    document.getElementById('previewAvatar').textContent = currentIdentity.emoji;
    document.getElementById('previewAvatar').style.background = currentIdentity.color;
}

function handleSubmit() {
    const input = document.getElementById('postInput');
    const content = input.value.trim();

    if (!content) {
        input.focus();
        return;
    }

    if (!currentIdentity) {
        refreshIdentity();
    }

    const newMessage = {
        id: generateId(),
        content: content,
        nickname: currentIdentity.nickname,
        emoji: currentIdentity.emoji,
        color: currentIdentity.color,
        timestamp: Date.now(),
        resonates: 0,
        tag: selectedPostTag,
        mood: selectedPostMood
    };

    messages.unshift(newMessage);
    saveMessages();

    input.value = '';
    document.getElementById('charCount').textContent = '0';

    refreshIdentity();

    currentTag = 'all';
    currentSort = 'new';
    currentMood = 'all';
    renderTagFilters();
    renderMoodFilter();
    updateSortTabs();
    renderMessages();

    const firstCard = document.querySelector('.message-card');
    if (firstCard) {
        firstCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateSortTabs() {
    document.querySelectorAll('.sort-tab').forEach(tab => {
        if (tab.dataset.sort === currentSort) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function renderTagFilters() {
    const container = document.getElementById('tagFilters');
    const allCount = messages.length;

    let html = `
        <button class="tag-filter ${currentTag === 'all' ? 'active' : ''}" data-tag="all">
            全部
            <span class="tag-count">${allCount}</span>
        </button>
    `;

    TAGS.forEach(tag => {
        const count = messages.filter(m => m.tag === tag.key).length;
        html += `
            <button class="tag-filter ${currentTag === tag.key ? 'active' : ''}" data-tag="${tag.key}" style="--tag-color: ${tag.color}">
                <span class="tag-dot"></span>
                ${tag.label}
                <span class="tag-count">${count}</span>
            </button>
        `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.tag-filter').forEach(btn => {
        btn.addEventListener('click', handleTagFilterChange);
    });
}

function updateTagFilters() {
    document.querySelectorAll('.tag-filter').forEach(btn => {
        if (btn.dataset.tag === currentTag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handleTagFilterChange(e) {
    const tag = e.currentTarget.dataset.tag;
    if (tag === currentTag) return;

    currentTag = tag;
    updateTagFilters();
    renderMessages();
}

function renderPostTagSelector() {
    const container = document.getElementById('postTagSelector');

    const html = TAGS.map(tag => `
        <button class="post-tag ${selectedPostTag === tag.key ? 'active' : ''}" data-tag="${tag.key}" style="--tag-color: ${tag.color}">
            <span class="post-tag-dot"></span>
            ${tag.label}
        </button>
    `).join('');

    container.innerHTML = html;

    container.querySelectorAll('.post-tag').forEach(btn => {
        btn.addEventListener('click', handlePostTagSelect);
    });
}

function updatePostTagSelector() {
    document.querySelectorAll('.post-tag').forEach(btn => {
        if (btn.dataset.tag === selectedPostTag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handlePostTagSelect(e) {
    const tag = e.currentTarget.dataset.tag;
    if (tag === selectedPostTag) return;

    selectedPostTag = tag;
    updatePostTagSelector();
}

function renderPostMoodSelector() {
    const container = document.getElementById('postMoodSelector');

    const html = MOODS.map(mood => `
        <button class="post-mood ${selectedPostMood === mood.key ? 'active' : ''}" data-mood="${mood.key}" style="--mood-color: ${mood.color}">
            <span class="post-mood-emoji">${mood.emoji}</span>
            ${mood.label}
        </button>
    `).join('');

    container.innerHTML = html;

    container.querySelectorAll('.post-mood').forEach(btn => {
        btn.addEventListener('click', handlePostMoodSelect);
    });
}

function updatePostMoodSelector() {
    document.querySelectorAll('.post-mood').forEach(btn => {
        if (btn.dataset.mood === selectedPostMood) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handlePostMoodSelect(e) {
    const mood = e.currentTarget.dataset.mood;
    if (mood === selectedPostMood) return;

    selectedPostMood = mood;
    updatePostMoodSelector();
}

function renderMoodFilter() {
    const select = document.getElementById('moodFilter');
    if (!select) return;

    let html = '<option value="all">全部心情</option>';

    MOODS.forEach(mood => {
        const count = messages.filter(m => m.mood === mood.key).length;
        html += `
            <option value="${mood.key}" ${currentMood === mood.key ? 'selected' : ''}>
                ${mood.emoji} ${mood.label} (${count})
            </option>
        `;
    });

    select.innerHTML = html;
}

function handleMoodFilterChange(e) {
    const mood = e.target.value;
    if (mood === currentMood) return;

    currentMood = mood;
    renderMessages();
}

function handleSortChange(e) {
    const sort = e.currentTarget.dataset.sort;
    if (sort === currentSort) return;

    currentSort = sort;
    updateSortTabs();
    renderMessages();
}

function handleInput() {
    const input = document.getElementById('postInput');
    document.getElementById('charCount').textContent = input.value.length;
}

function init() {
    loadMessages();
    loadResonated();
    loadReplyResonated();
    loadExpandedReplies();
    loadDailyTopic();
    refreshIdentity();
    renderDailyTopic();
    renderTagFilters();
    renderPostTagSelector();
    renderPostMoodSelector();
    renderMoodFilter();
    renderMessages();
    scheduleDailyRefresh();

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);
    document.getElementById('refreshNickname').addEventListener('click', refreshIdentity);
    document.getElementById('postInput').addEventListener('input', handleInput);
    document.getElementById('moodFilter').addEventListener('change', handleMoodFilterChange);

    document.getElementById('postInput').addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            handleSubmit();
        }
    });

    document.querySelectorAll('.sort-tab').forEach(tab => {
        tab.addEventListener('click', handleSortChange);
    });

    const dailyTopicCard = document.getElementById('dailyTopicCard');
    if (dailyTopicCard) {
        dailyTopicCard.addEventListener('click', handleUseTopic);
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            checkAndRefreshDailyTopic();
        }
    });
}

const DRIFT_STORAGE_KEY = 'drift_bottles';
const DRIFT_MY_BOTTLES_KEY = 'drift_my_bottles';
const DRIFT_PICKED_KEY = 'drift_picked_bottles';
const DRIFT_REPLIED_KEY = 'drift_replied_bottles';

let driftBottles = [];
let myDriftBottles = [];
let pickedDriftBottles = [];
let repliedDriftBottleIds = new Set();
let currentPage = 'treehole';
let currentDriftBottle = null;
let isWritingDrift = false;
let driftWriteIdentity = null;
let driftReplyIdentity = null;
let isReplyingDrift = false;

function loadDriftBottles() {
    try {
        const stored = localStorage.getItem(DRIFT_STORAGE_KEY);
        if (stored) {
            driftBottles = JSON.parse(stored);
        }
    } catch (e) {
        driftBottles = [];
    }

    driftBottles.forEach(bottle => {
        if (!bottle.type) {
            bottle.type = 'normal';
        }
        if (!bottle.replyTo) {
            bottle.replyTo = null;
        }
        if (!bottle.replies) {
            bottle.replies = [];
        }
        if (!bottle.pickCount) {
            bottle.pickCount = 0;
        }
        if (!bottle.replyCount) {
            bottle.replyCount = 0;
        }
    });

    if (driftBottles.length === 0) {
        driftBottles = getSampleDriftBottles();
        saveDriftBottles();
    }
}

function saveDriftBottles() {
    try {
        localStorage.setItem(DRIFT_STORAGE_KEY, JSON.stringify(driftBottles));
    } catch (e) {
        console.error('保存漂流瓶失败:', e);
    }
}

function loadMyDriftBottles() {
    try {
        const stored = localStorage.getItem(DRIFT_MY_BOTTLES_KEY);
        if (stored) {
            myDriftBottles = JSON.parse(stored);
        }
    } catch (e) {
        myDriftBottles = [];
    }
}

function saveMyDriftBottles() {
    try {
        localStorage.setItem(DRIFT_MY_BOTTLES_KEY, JSON.stringify(myDriftBottles));
    } catch (e) {
        console.error('保存我的漂流瓶失败:', e);
    }
}

function loadPickedDriftBottles() {
    try {
        const stored = localStorage.getItem(DRIFT_PICKED_KEY);
        if (stored) {
            pickedDriftBottles = JSON.parse(stored);
        }
    } catch (e) {
        pickedDriftBottles = [];
    }
}

function savePickedDriftBottles() {
    try {
        localStorage.setItem(DRIFT_PICKED_KEY, JSON.stringify(pickedDriftBottles));
    } catch (e) {
        console.error('保存捞到的漂流瓶失败:', e);
    }
}

function loadRepliedDriftBottles() {
    try {
        const stored = localStorage.getItem(DRIFT_REPLIED_KEY);
        if (stored) {
            repliedDriftBottleIds = new Set(JSON.parse(stored));
        }
    } catch (e) {
        repliedDriftBottleIds = new Set();
    }
}

function saveRepliedDriftBottles() {
    try {
        localStorage.setItem(DRIFT_REPLIED_KEY, JSON.stringify([...repliedDriftBottleIds]));
    } catch (e) {
        console.error('保存已回应漂流瓶失败:', e);
    }
}

function getSampleDriftBottles() {
    const now = Date.now();
    return [
        {
            id: generateId(),
            content: '今天看到海边的日落特别美，突然想把这一刻装进瓶子里，漂给一个陌生的你。希望看到这条消息的人，今天也能遇到美好的事。',
            nickname: '海边的贝壳',
            emoji: '🐚',
            color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
            timestamp: now - 1000 * 60 * 60 * 2,
            type: 'normal',
            replyTo: null,
            replies: [],
            pickCount: 15,
            replyCount: 3
        },
        {
            id: generateId(),
            content: '如果你捡到了这个瓶子，可以告诉我你最近在为什么而努力吗？我正在准备考研，有时候会觉得很累，但还是想坚持下去。',
            nickname: '追梦的小蜗牛',
            emoji: '🐌',
            color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            timestamp: now - 1000 * 60 * 60 * 5,
            type: 'normal',
            replyTo: null,
            replies: [],
            pickCount: 28,
            replyCount: 7
        },
        {
            id: generateId(),
            content: '深夜睡不着，翻来覆去想着那个人。明明知道不可能，可心里还是放不下。如果你也有同样的经历，就当这是一个树洞吧。',
            nickname: '失眠的星星',
            emoji: '⭐',
            color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
            timestamp: now - 1000 * 60 * 60 * 12,
            type: 'normal',
            replyTo: null,
            replies: [],
            pickCount: 42,
            replyCount: 12
        },
        {
            id: generateId(),
            content: '今天是我的生日，一个人在异乡。没有蛋糕，没有祝福，但我给自己买了一碗面。希望明年的生日，能有人陪我一起过。',
            nickname: '孤独的企鹅',
            emoji: '🐧',
            color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            timestamp: now - 1000 * 60 * 60 * 24,
            type: 'normal',
            replyTo: null,
            replies: [],
            pickCount: 56,
            replyCount: 20
        },
        {
            id: generateId(),
            content: '捡到瓶子的朋友，你好呀~ 我是一个喜欢画画的人，虽然画得不好，但每次拿起画笔都会觉得很开心。你有什么一直坚持在做的事情吗？',
            nickname: '爱画画的小猫',
            emoji: '🎨',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            timestamp: now - 1000 * 60 * 60 * 36,
            type: 'normal',
            replyTo: null,
            replies: [],
            pickCount: 33,
            replyCount: 8
        }
    ];
}

function switchPage(page) {
    if (page === currentPage) return;

    currentPage = page;

    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.dataset.page === page) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    document.querySelectorAll('.page-content').forEach(content => {
        if (content.id === `${page}Page`) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });

    if (page === 'drift') {
        renderDriftStats();
        renderMyDriftBottles();
        renderPickedDriftBottles();
    }
}

function handleNavTabClick(e) {
    const page = e.currentTarget.dataset.page;
    switchPage(page);
}

function renderDriftStats() {
    document.getElementById('thrownCount').textContent = myDriftBottles.length;
    document.getElementById('pickedCount').textContent = pickedDriftBottles.length;
    document.getElementById('replyCount').textContent = repliedDriftBottleIds.size;
}

function renderMyDriftBottles() {
    const container = document.getElementById('myBottlesList');
    const countEl = document.getElementById('myBottleCount');
    countEl.textContent = myDriftBottles.length;

    if (myDriftBottles.length === 0) {
        container.innerHTML = `
            <div class="drift-empty">
                <div class="drift-empty-icon">🍾</div>
                <div class="drift-empty-text">你还没有扔出过漂流瓶<br>点击上方"扔一个"开始吧~</div>
            </div>
        `;
        return;
    }

    const sorted = [...myDriftBottles].sort((a, b) => b.timestamp - a.timestamp);
    container.innerHTML = sorted.map(bottle => renderDriftBottleCard(bottle, 'my')).join('');

    container.querySelectorAll('.drift-bottle-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const bottle = myDriftBottles.find(b => b.id === id);
            if (bottle) {
                showDriftBottleDetail(bottle, 'my');
            }
        });
    });
}

function renderPickedDriftBottles() {
    const container = document.getElementById('pickedBottlesList');
    const countEl = document.getElementById('pickedBottleCount');
    countEl.textContent = pickedDriftBottles.length;

    if (pickedDriftBottles.length === 0) {
        container.innerHTML = `
            <div class="drift-empty">
                <div class="drift-empty-icon">🌊</div>
                <div class="drift-empty-text">你还没有捞到过漂流瓶<br>点击上方"捞一个"试试运气~</div>
            </div>
        `;
        return;
    }

    const sorted = [...pickedDriftBottles].sort((a, b) => b.pickTime - a.pickTime);
    container.innerHTML = sorted.map(bottle => renderDriftBottleCard(bottle, 'picked')).join('');

    container.querySelectorAll('.drift-bottle-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const bottle = pickedDriftBottles.find(b => b.id === id);
            if (bottle) {
                showDriftBottleDetail(bottle, 'picked');
            }
        });
    });
}

function renderDriftBottleCard(bottle, type) {
    const isReply = bottle.type === 'reply';
    const hasReplied = repliedDriftBottleIds.has(bottle.id);

    return `
        <div class="drift-bottle-card ${isReply ? 'is-reply' : ''}" data-id="${bottle.id}">
            <div class="drift-bottle-header">
                <div class="drift-bottle-avatar" style="background: ${bottle.color}">
                    ${bottle.emoji}
                </div>
                <div class="drift-bottle-info">
                    <div class="drift-bottle-nickname">${bottle.nickname}</div>
                    <div class="drift-bottle-time">${formatTime(bottle.timestamp)}</div>
                </div>
                <span class="drift-bottle-tag ${isReply ? 'reply-tag' : ''}">
                    ${isReply ? '回应' : '漂流瓶'}
                </span>
            </div>
            <div class="drift-bottle-content">${escapeHtml(bottle.content.substring(0, 80))}${bottle.content.length > 80 ? '...' : ''}</div>
            <div class="drift-bottle-footer">
                <div class="drift-bottle-stats">
                    <span class="drift-bottle-stat">👁️ ${bottle.pickCount}</span>
                    <span class="drift-bottle-stat">💬 ${bottle.replyCount}</span>
                </div>
                <div class="drift-bottle-actions">
                    ${type === 'picked' && !hasReplied ? `
                        <button class="drift-bottle-btn reply-btn" data-action="reply">回应</button>
                    ` : ''}
                    ${type === 'picked' ? `
                        <button class="drift-bottle-btn throw-back-btn" data-action="throwBack">扔回海里</button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function showDriftBottleDetail(bottle, source) {
    const section = document.getElementById('driftCurrentSection');
    const isReply = bottle.type === 'reply';
    const hasReplied = repliedDriftBottleIds.has(bottle.id);
    const isMy = source === 'my';

    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let replyFormHtml = '';
    if (source === 'picked' && !hasReplied) {
        if (isReplyingDrift) {
            replyFormHtml = `
                <div class="drift-reply-section">
                    <div class="drift-reply-title">💬 写回应</div>
                    <div class="drift-reply-form">
                        <div class="drift-reply-form-header">
                            <div class="drift-reply-avatar" style="background: ${driftReplyIdentity.color}">
                                ${driftReplyIdentity.emoji}
                            </div>
                            <span class="drift-reply-nickname">${driftReplyIdentity.nickname}</span>
                            <button class="drift-reply-refresh" id="driftReplyRefreshBtn" title="换一个昵称">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M23 4v6h-6M1 20v-6h6"/>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                                </svg>
                            </button>
                        </div>
                        <textarea class="drift-reply-input" id="driftReplyInput" placeholder="写下你的回应，作为漂流瓶漂回去..." maxlength="300"></textarea>
                        <div class="drift-reply-footer">
                            <span class="drift-reply-char-count"><span id="driftReplyCharCount">0</span>/300</span>
                            <button class="drift-reply-submit" id="driftReplySubmitBtn">发送回应</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    section.innerHTML = `
        <div class="section-header">
            <span class="section-title">${isMy ? '我的漂流瓶' : '捞到的漂流瓶'}</span>
        </div>
        <div class="drift-bottle-detail ${isReply ? 'is-reply' : ''}">
            <div class="drift-detail-header">
                <div class="drift-detail-avatar" style="background: ${bottle.color}">
                    ${bottle.emoji}
                </div>
                <div class="drift-detail-info">
                    <div class="drift-detail-nickname">${bottle.nickname}</div>
                    <div class="drift-detail-time">${formatTime(bottle.timestamp)}</div>
                </div>
                <span class="drift-detail-tag ${isReply ? 'reply-tag' : ''}">
                    ${isReply ? '回应瓶' : '漂流瓶'}
                </span>
            </div>
            <div class="drift-detail-content">${escapeHtml(bottle.content)}</div>
            <div class="drift-picked-meta">
                <span class="drift-picked-meta-item">👁️ 被捞起 ${bottle.pickCount} 次</span>
                <span class="drift-picked-meta-item">💬 收到 ${bottle.replyCount} 个回应</span>
            </div>
            <div class="drift-detail-actions">
                ${source === 'picked' && !hasReplied ? `
                    <button class="drift-detail-btn primary" id="driftReplyActionBtn">
                        💬 回应
                    </button>
                ` : ''}
                ${source === 'picked' && hasReplied ? `
                    <button class="drift-detail-btn" disabled style="opacity: 0.6; cursor: default;">
                        ✅ 已回应
                    </button>
                ` : ''}
                ${source === 'picked' ? `
                    <button class="drift-detail-btn" id="driftThrowBackBtn">
                        🌊 扔回海里
                    </button>
                ` : ''}
                <button class="drift-detail-btn" id="driftCloseDetailBtn">
                    关闭
                </button>
            </div>
            ${replyFormHtml}
        </div>
    `;

    currentDriftBottle = bottle;

    const replyActionBtn = document.getElementById('driftReplyActionBtn');
    if (replyActionBtn) {
        replyActionBtn.addEventListener('click', () => {
            isReplyingDrift = true;
            if (!driftReplyIdentity) {
                driftReplyIdentity = generateIdentity();
            }
            showDriftBottleDetail(bottle, source);
        });
    }

    const replyRefreshBtn = document.getElementById('driftReplyRefreshBtn');
    if (replyRefreshBtn) {
        replyRefreshBtn.addEventListener('click', () => {
            driftReplyIdentity = generateIdentity();
            showDriftBottleDetail(bottle, source);
            setTimeout(() => {
                const input = document.getElementById('driftReplyInput');
                if (input) input.focus();
            }, 50);
        });
    }

    const replyInput = document.getElementById('driftReplyInput');
    if (replyInput) {
        replyInput.addEventListener('input', handleDriftReplyInput);
        replyInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                submitDriftReply();
            }
        });
        setTimeout(() => replyInput.focus(), 100);
    }

    const replySubmitBtn = document.getElementById('driftReplySubmitBtn');
    if (replySubmitBtn) {
        replySubmitBtn.addEventListener('click', submitDriftReply);
    }

    const throwBackBtn = document.getElementById('driftThrowBackBtn');
    if (throwBackBtn) {
        throwBackBtn.addEventListener('click', () => throwBackBottle(bottle));
    }

    const closeBtn = document.getElementById('driftCloseDetailBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDriftDetail);
    }
}

function handleDriftReplyInput(e) {
    const input = e.target;
    const charCount = document.getElementById('driftReplyCharCount');
    if (charCount) {
        charCount.textContent = input.value.length;
    }
}

function submitDriftReply() {
    const input = document.getElementById('driftReplyInput');
    if (!input || !currentDriftBottle) return;

    const content = input.value.trim();
    if (!content) {
        input.focus();
        return;
    }

    if (!driftReplyIdentity) {
        driftReplyIdentity = generateIdentity();
    }

    const replyBottle = {
        id: generateId(),
        content: content,
        nickname: driftReplyIdentity.nickname,
        emoji: driftReplyIdentity.emoji,
        color: driftReplyIdentity.color,
        timestamp: Date.now(),
        type: 'reply',
        replyTo: currentDriftBottle.id,
        replies: [],
        pickCount: 0,
        replyCount: 0
    };

    driftBottles.push(replyBottle);

    const originalBottle = driftBottles.find(b => b.id === currentDriftBottle.id);
    if (originalBottle) {
        originalBottle.replyCount++;
    }

    const pickedOriginal = pickedDriftBottles.find(b => b.id === currentDriftBottle.id);
    if (pickedOriginal) {
        pickedOriginal.replyCount++;
    }

    myDriftBottles.push(replyBottle);

    repliedDriftBottleIds.add(currentDriftBottle.id);

    saveDriftBottles();
    saveMyDriftBottles();
    savePickedDriftBottles();
    saveRepliedDriftBottles();

    isReplyingDrift = false;
    driftReplyIdentity = null;

    renderDriftStats();
    renderMyDriftBottles();
    renderPickedDriftBottles();

    const updatedBottle = pickedDriftBottles.find(b => b.id === currentDriftBottle.id);
    if (updatedBottle) {
        showDriftBottleDetail(updatedBottle, 'picked');
    }
}

function throwBackBottle(bottle) {
    pickedDriftBottles = pickedDriftBottles.filter(b => b.id !== bottle.id);
    savePickedDriftBottles();

    closeDriftDetail();
    renderDriftStats();
    renderPickedDriftBottles();
}

function closeDriftDetail() {
    const section = document.getElementById('driftCurrentSection');
    section.style.display = 'none';
    currentDriftBottle = null;
    isReplyingDrift = false;
    driftReplyIdentity = null;
}

function showThrowBottleModal() {
    const section = document.getElementById('driftCurrentSection');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (!driftWriteIdentity) {
        driftWriteIdentity = generateIdentity();
    }

    section.innerHTML = `
        <div class="section-header">
            <span class="section-title">扔一个漂流瓶</span>
        </div>
        <div class="drift-write-modal">
            <div class="drift-write-title">
                <span class="drift-write-icon">🍾</span>
                写下你的留言
            </div>
            <div class="drift-write-header">
                <div class="drift-write-avatar" style="background: ${driftWriteIdentity.color}">
                    ${driftWriteIdentity.emoji}
                </div>
                <span class="drift-write-nickname">${driftWriteIdentity.nickname}</span>
                <button class="drift-write-refresh" id="driftWriteRefreshBtn" title="换一个昵称">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M23 4v6h-6M1 20v-6h6"/>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                </button>
            </div>
            <textarea 
                class="drift-write-input" 
                id="driftWriteInput" 
                placeholder="把你的心事、愿望、或者只是今天的心情，装进这个漂流瓶里..."
                maxlength="300"
            ></textarea>
            <div class="drift-write-footer">
                <span class="drift-write-char-count"><span id="driftWriteCharCount">0</span>/300</span>
                <div class="drift-write-actions">
                    <button class="drift-write-cancel" id="driftWriteCancelBtn">取消</button>
                    <button class="drift-write-submit" id="driftWriteSubmitBtn">
                        <span>🌊</span>
                        扔出去
                    </button>
                </div>
            </div>
        </div>
    `;

    isWritingDrift = true;

    const input = document.getElementById('driftWriteInput');
    setTimeout(() => input.focus(), 100);

    input.addEventListener('input', (e) => {
        document.getElementById('driftWriteCharCount').textContent = e.target.value.length;
    });

    input.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            submitDriftBottle();
        }
    });

    document.getElementById('driftWriteRefreshBtn').addEventListener('click', () => {
        driftWriteIdentity = generateIdentity();
        showThrowBottleModal();
        setTimeout(() => {
            const inp = document.getElementById('driftWriteInput');
            if (inp) inp.focus();
        }, 50);
    });

    document.getElementById('driftWriteCancelBtn').addEventListener('click', () => {
        isWritingDrift = false;
        closeDriftDetail();
    });

    document.getElementById('driftWriteSubmitBtn').addEventListener('click', submitDriftBottle);
}

function submitDriftBottle() {
    const input = document.getElementById('driftWriteInput');
    if (!input) return;

    const content = input.value.trim();
    if (!content) {
        input.focus();
        return;
    }

    if (!driftWriteIdentity) {
        driftWriteIdentity = generateIdentity();
    }

    const newBottle = {
        id: generateId(),
        content: content,
        nickname: driftWriteIdentity.nickname,
        emoji: driftWriteIdentity.emoji,
        color: driftWriteIdentity.color,
        timestamp: Date.now(),
        type: 'normal',
        replyTo: null,
        replies: [],
        pickCount: 0,
        replyCount: 0
    };

    driftBottles.push(newBottle);
    myDriftBottles.push(newBottle);

    saveDriftBottles();
    saveMyDriftBottles();

    driftWriteIdentity = generateIdentity();
    isWritingDrift = false;

    renderDriftStats();
    renderMyDriftBottles();

    showDriftBottleDetail(newBottle, 'my');

    const section = document.getElementById('driftCurrentSection');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function pickRandomBottle() {
    const myIds = new Set(myDriftBottles.map(b => b.id));
    const availableBottles = driftBottles.filter(b => !myIds.has(b.id));

    if (availableBottles.length === 0) {
        alert('海里暂时没有漂流瓶了~ 先扔一个试试吧！');
        return;
    }

    const section = document.getElementById('driftCurrentSection');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    section.innerHTML = `
        <div class="section-header">
            <span class="section-title">捞漂流瓶</span>
        </div>
        <div class="drift-pick-animation">
            <span class="drift-pick-bottle">🍾</span>
            <div class="drift-pick-text">正在从海里捞取漂流瓶...</div>
        </div>
    `;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * availableBottles.length);
        const bottle = { ...availableBottles[randomIndex] };

        bottle.pickCount++;
        bottle.pickTime = Date.now();

        const globalBottle = driftBottles.find(b => b.id === bottle.id);
        if (globalBottle) {
            globalBottle.pickCount++;
        }

        const existingIndex = pickedDriftBottles.findIndex(b => b.id === bottle.id);
        if (existingIndex >= 0) {
            pickedDriftBottles[existingIndex] = bottle;
        } else {
            pickedDriftBottles.push(bottle);
        }

        saveDriftBottles();
        savePickedDriftBottles();

        renderDriftStats();
        renderPickedDriftBottles();

        showDriftBottleDetail(bottle, 'picked');
    }, 1200);
}

function initDrift() {
    loadDriftBottles();
    loadMyDriftBottles();
    loadPickedDriftBottles();
    loadRepliedDriftBottles();

    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', handleNavTabClick);
    });

    document.getElementById('throwBottleBtn').addEventListener('click', showThrowBottleModal);
    document.getElementById('pickBottleBtn').addEventListener('click', pickRandomBottle);
}

function init() {
    loadMessages();
    loadResonated();
    loadReplyResonated();
    loadExpandedReplies();
    loadDailyTopic();
    refreshIdentity();
    renderDailyTopic();
    renderTagFilters();
    renderPostTagSelector();
    renderPostMoodSelector();
    renderMoodFilter();
    renderMessages();
    scheduleDailyRefresh();

    initDrift();

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);
    document.getElementById('refreshNickname').addEventListener('click', refreshIdentity);
    document.getElementById('postInput').addEventListener('input', handleInput);
    document.getElementById('moodFilter').addEventListener('change', handleMoodFilterChange);

    document.getElementById('postInput').addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            handleSubmit();
        }
    });

    document.querySelectorAll('.sort-tab').forEach(tab => {
        tab.addEventListener('click', handleSortChange);
    });

    const dailyTopicCard = document.getElementById('dailyTopicCard');
    if (dailyTopicCard) {
        dailyTopicCard.addEventListener('click', handleUseTopic);
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            checkAndRefreshDailyTopic();
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
