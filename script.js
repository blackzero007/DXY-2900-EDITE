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

let messages = [];
let resonatedIds = new Set();
let currentSort = 'hot';
let currentTag = 'all';
let selectedPostTag = 'life';
let currentIdentity = null;
let dailyTopic = '';

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
    return [
        {
            id: generateId(),
            content: '今天在地铁上看到一个老爷爷给老奶奶让座，突然觉得这个世界还是很温暖的。希望每个人都能被温柔以待。',
            nickname: '橘子味的小猫',
            emoji: '🐱',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            timestamp: now - 1000 * 60 * 30,
            resonates: 42,
            tag: 'life'
        },
        {
            id: generateId(),
            content: '终于鼓起勇气跟暗恋了三年的人表白了，虽然被拒绝了，但心里反而轻松了很多。有些事情，做过了就不会后悔。',
            nickname: '勇敢的小兔',
            emoji: '🐰',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            timestamp: now - 1000 * 60 * 60 * 2,
            resonates: 128,
            tag: 'emotion'
        },
        {
            id: generateId(),
            content: '加班到深夜，走出公司发现月亮特别圆。突然想起小时候奶奶说的话："月亮会陪着每个晚归的人。" 突然就不觉得累了。',
            nickname: '月亮上的小熊',
            emoji: '🌙',
            color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            timestamp: now - 1000 * 60 * 60 * 5,
            resonates: 89,
            tag: 'work'
        },
        {
            id: generateId(),
            content: '今天是我来这座城市的第100天，还是没有交到什么朋友，但我相信一切都会好起来的。给自己加油！',
            nickname: '追梦的企鹅',
            emoji: '🐧',
            color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            timestamp: now - 1000 * 60 * 60 * 12,
            resonates: 256,
            tag: 'treehole'
        },
        {
            id: generateId(),
            content: '刚刚收到了梦想公司的offer！！！努力了这么久终于有回报了，激动得想哭。感谢所有没有放弃的日子。',
            nickname: '幸运的狐狸',
            emoji: '🦊',
            color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            timestamp: now - 1000 * 60 * 60 * 24,
            resonates: 312,
            tag: 'dream'
        },
        {
            id: generateId(),
            content: '有时候觉得自己像一座孤岛，明明周围都是人，却感觉没有人真正理解自己。你们也会有这种感觉吗？',
            nickname: '孤独的鲸鱼',
            emoji: '🐋',
            color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
            timestamp: now - 1000 * 60 * 60 * 36,
            resonates: 198,
            tag: 'emotion'
        }
    ];
}

function getTagByKey(key) {
    return TAGS.find(t => t.key === key);
}

function getFilteredMessages() {
    let filtered = [...messages];
    if (currentTag !== 'all') {
        filtered = filtered.filter(m => m.tag === currentTag);
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
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🌳</div>
                <p class="empty-state-text">${currentTag === 'all' ? '树洞还是空的<br>来说点什么吧~' : '这个标签下还没有留言~'}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = sorted.map(msg => {
        const hasResonated = resonatedIds.has(msg.id);
        const tag = getTagByKey(msg.tag);
        const tagColor = tag ? tag.color : '#ccc';
        const tagLabel = tag ? tag.label : '';
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
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.resonate-btn').forEach(btn => {
        btn.addEventListener('click', handleResonate);
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
        tag: selectedPostTag
    };

    messages.unshift(newMessage);
    saveMessages();

    input.value = '';
    document.getElementById('charCount').textContent = '0';

    refreshIdentity();

    currentTag = 'all';
    currentSort = 'new';
    renderTagFilters();
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
    loadDailyTopic();
    refreshIdentity();
    renderDailyTopic();
    renderTagFilters();
    renderPostTagSelector();
    renderMessages();
    scheduleDailyRefresh();

    document.getElementById('submitBtn').addEventListener('click', handleSubmit);
    document.getElementById('refreshNickname').addEventListener('click', refreshIdentity);
    document.getElementById('postInput').addEventListener('input', handleInput);

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
