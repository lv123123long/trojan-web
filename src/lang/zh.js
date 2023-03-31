export default {
    ok: '确定',
    cancel: '取消',
    reset: '重置',
    login: '登录',
    register: '注册',
    log: '日志',
    edit: '编辑',
    share: '分享',
    terminal: '终端',
    refresh: '刷新',
    restart: '重启',
    start: '启动',
    stop: '暂停',
    update: '更新',
    add: '添加',
    username: '用户名',
    password: '密码',
    loglevel: '日志等级',
    all: '所有',
    type: '类型',
    line: '初始行数',
    choice: '请选择',
    latest: '最新日志',
    delete: '删除',
    inputPass: '输入密码',
    inputPassAgain: '请再次输入密码',
    passLessError: '密码不能小于5位',
    passDifferentError: '两次输入不一致!',
    setupPass: '设置admin密码',
    inputNotNull: '用户名或密码不能为空!',
    route: {
        dashboard: '首页',
        trojan: 'trojan管理',
        user: '用户管理'
    },
    navbar: {
        version: '系统版本',
        setting: '系统设置',
        password: '修改密码',
        title: '修改标题',
        clashRules: '修改规则',
        importExport: '导入导出',
        resetDay: '改重置日',
        resetTitle: '修改流量重置日',
        changeTitle: '修改登录页标题',
        changeRules: '修改clash规则',
        inputTitle: '输入登录页标题',
        changeTitleSuccess: '修改登录页标题成功!',
        changeRulesSuccess: '修改clash规则成功!',
        resetRulesSuccess: '重置clash规则成功!',
        changeDaySuccess: '修改流量重置日成功!',
        closeResetSuccess: '关闭流量重置成功',
        versionTitle: 'trojan管理程序版本',
        passwordTitle: '变更管理员密码',
        resetSuccess: '重置密码成功!',
        meanClose: '0代表关闭流量重置',
        exportTip: '导出数据库里所有记录到csv文件',
        importTip: '导入csv文件数据到数据库',
        importSuccess: '导入成功',
        importCsv: '导入csv文件',
        exportCsv: '导出csv文件'
    },
    dashboard: {
        memory: '内存',
        disk: '硬盘',
        trojanVersion: 'trojan 版本',
        trojanUser: 'trojan 用户数',
        trojanUptime: 'trojan 已运行',
        netSpeed: '网速',
        netCount: '连接数',
        load: '服务器负载',
        upload: '上传',
        download: '下载',
        total: '总共',
        day: '天',
        hour: '时',
        minute: '分',
        second: '秒'
    },
    trojan: {
        restartSuccess: '重启trojan成功!',
        startSuccess: '启动trojan成功!',
        stopSuccess: '停止trojan成功!',
        updateSuccess: '更新trojan成功!',
        loglevelSuccess: '设置日志等级成功!',
        switchSuccess: '切换trojan类型成功!'
    },
    user: {
        upload: '上传流量',
        download: '下载流量',
        total: '总流量',
        quota: '流量限制',
        expiryDate: '到期日期',
        setExpire: '设置限期',
        editExpire: '修改限期',
        cancelExpire: '取消限期',
        reset: '重置流量',
        unlimit: '无',
        search: '输入用户名搜索',
        limitData: '限制流量',
        modifyUser: '修改账密',
        trojanShareLink: 'trojan链接',
        clashShareLink: 'clash链接',
        importClash: '导到clash',
        meanUnlimit: '-1代表无流量限制',
        inputUsername: '输入用户名',
        inputPassword: '输入密码',
        operate: '操作',
        addUser: '新增trojan用户',
        patchLimitUser: '限制以下用户流量',
        patchDelUser: '确定批量删除以下用户?',
        modifyUser2: '修改用户 ',
        userpass: '的用户名和密码',
        delUser: '确定删除用户 ',
        patchReset: '确定重置以下用户流量?',
        resetUser: '确定重置用户 ',
        data: ' 的流量?',
        limitUser: '确定限制用户 ',
        limitUser2: '限制用户 ',
        limitSuccess: '流量成功!',
        delUser1: '删除用户',
        success: '成功!',
        resetUser1: '重置用户',
        limitAdmin: '不能创建用户名为admin的用户!',
        passLimit: '密码不支持中文!',
        addUser2: '新增用户',
        week: '单周',
        month: '单月',
        season: '单季',
        halfYear: '半年',
        year: '一年',
        preset: '预设',
        days: '天数',
        setExpireSuccess: '设置用户限期成功!',
        cancelExpireSuccess: '取消用户限期成功!',
        remaining: '剩余天数'
    },
    request: {
        requestError: '请求出错',
        authFail: '授权失败，请重新登录',
        accessDenied: '拒绝访问',
        notFound: '请求错误,未找到该资源',
        serverError: '服务端错误',
        connectError: '连接服务器失败'
    }
}
