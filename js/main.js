// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // 向下滚动
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // 向上滚动
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // 登录按钮点击事件
    const loginBtn = document.querySelector('.btn-login');
    loginBtn.addEventListener('click', () => {
        // TODO: 实现登录功能
        console.log('登录按钮被点击');
    });

    // 注册按钮点击事件
    const registerBtn = document.querySelector('.btn-register');
    registerBtn.addEventListener('click', () => {
        // TODO: 实现注册功能
        console.log('注册按钮被点击');
    });

    // 开始练习按钮点击事件
    const startBtn = document.querySelector('.btn-start');
    startBtn.addEventListener('click', () => {
        // TODO: 跳转到练习页面
        console.log('开始练习按钮被点击');
    });

    // 尝试解答按钮点击事件
    const tryBtns = document.querySelectorAll('.btn-try');
    tryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // TODO: 跳转到题目详情页
            console.log('尝试解答按钮被点击');
        });
    });

    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // TODO: 实现搜索逻辑
            console.log('搜索关键词:', searchTerm);
            // 这里可以添加搜索结果展示逻辑
            window.location.href = `#search?q=${encodeURIComponent(searchTerm)}`;
        }
    }

    // 点击搜索按钮
    searchBtn.addEventListener('click', handleSearch);

    // 按回车搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 搜索框获得焦点时的效果
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.classList.remove('focused');
    });
}); 