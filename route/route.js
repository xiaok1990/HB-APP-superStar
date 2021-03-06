var route = [
    {
        "path": "/castle/wap/course/course-list",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_lessionList",
                        "title": "课程列表",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "percent": "95",
                            "left_days": "36天",
                            "finish_lessons": "...",
                            "is_start": false,
                            "lessons": [],
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/h5/lessionList/template/index.html"
                        ],
                        "css": [
                            "modules/h5/lessionList/css/index.css"
                        ],
                        "script": "modules/h5/lessionList/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/wblogin",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_login",
                        "title": "微博登录",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/login/template/index.html"
                        ],
                        "css": [
                            "modules/h5/login/css/index.css"
                        ],
                        "script": "modules/h5/login/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/index_old_20161017",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_home",
                        "title": "网红首页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": "/"
                                }
                            ],
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "fans_count": "300",
                            "level": "小学生",
                            "biz_score": "N/A",
                            "progress": "12/25",
                            "test_url": "测试url",
                            "news": [
                                {
                                    "title": "",
                                    "url": ""
                                }
                            ],
                            "my_lesson": {
                                "title": "标题",
                                "author": "讲师",
                                "url": "",
                                "toal": "总节数",
                                "current": "当前进行到第几节"
                            },
                            "my_score": {
                                "finished": "总共完成多少次作业，如果是0表示未参加过课后作业",
                                "friend": "张三、李四",
                                "chart": [
                                    {
                                        "x": "20160823",
                                        "y": 4
                                    },
                                    {
                                        "x": "20160824",
                                        "y": 0
                                    },
                                    {
                                        "x": "20160825",
                                        "y": 14
                                    }
                                ]
                            }
                        },
                        "template": [
                            "modules/h5/home/template/index.html"
                        ],
                        "css": [
                            "modules/h5/home/css/index.css"
                        ],
                        "script": "modules/h5/home/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/course/course-details",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_lessionDetail",
                        "title": "课程详情",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "submit_url": "上传照片/文字的接口url",
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/h5/lessionDetail/template/index.html"
                        ],
                        "css": [
                            "modules/h5/lessionDetail/css/index.css"
                        ],
                        "script": "modules/h5/lessionDetail/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/user-info",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_personalInfo",
                        "title": "个人中心",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/personalInfo/template/index.html"
                        ],
                        "css": [
                            "modules/h5/personalInfo/css/index.css"
                        ],
                        "script": "modules/h5/personalInfo/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/lable",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_weiboTags",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/weiboTags/template/index.html"
                        ],
                        "css": [
                            "modules/h5/weiboTags/css/index.css"
                        ],
                        "script": "modules/h5/weiboTags/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/my-course",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_myLessons",
                        "title": "我的课程",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "lessons": {
                                "studying": [],
                                "finished": []
                            }
                        },
                        "template": [
                            "modules/h5/myLessons/template/index.html"
                        ],
                        "css": [
                            "modules/h5/myLessons/css/index.css"
                        ],
                        "script": "modules/h5/myLessons/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/look-work",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_weiboH5",
                        "title": "查看课后作业",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "times": "...",
                            "content": "...",
                            "images": [
                                "url"
                            ],
                            "current_choice": "当前用户的选项",
                            "description": "H5的中心思想",
                            "submit_url": "提交的URL",
                            "question": "问题描述"
                        },
                        "template": [
                            "modules/h5/weiboH5/template/index.html"
                        ],
                        "css": [
                            "modules/h5/weiboH5/css/index.css"
                        ],
                        "script": "modules/h5/weiboH5/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/homework/share",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_successShare",
                        "title": "课后分享",
                        "pretreatment": false,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            }
                        },
                        "template": [
                            "modules/h5/task/template/index.html"
                        ],
                        "css": [
                            "modules/h5/task/css/index.css"
                        ],
                        "script": "modules/h5/task/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/show",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_memberCenter",
                        "title": "个人中心",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "fans": "粉丝数字",
                            "biz_score": "电商属性",
                            "menu": [
                                [
                                    {
                                        "name": "我的课程",
                                        "url": "/"
                                    }
                                ]
                            ]
                        },
                        "template": [
                            "modules/h5/memberCenter/template/index.html"
                        ],
                        "css": [
                            "modules/h5/memberCenter/css/index.css"
                        ],
                        "script": "modules/h5/memberCenter/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/homework/info",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_task",
                        "title": "课后作业",
                        "pretreatment": false,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL",
                                "fans_count": "粉丝数",
                                "level": "网红小学生Lv.1",
                                "score": "成长值"
                            },
                            "submit_url": "上传照片/文字的接口url",
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/h5/task/template/index.html"
                        ],
                        "css": [
                            "modules/h5/task/css/index.css"
                        ],
                        "script": "modules/h5/task/js/index.js",
                        "app_script": "modules/h5/task/app_js/task.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/wxlogin",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_login",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/login/template/index.html"
                        ],
                        "css": [
                            "modules/h5/login/css/index.css"
                        ],
                        "script": "modules/h5/login/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/course/course-section-details",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_lessionContent",
                        "title": "课程详情",
                        // "loading_show": true,
                        "share": true,
                        "data": {
                            "name": "标题加载中...",
                            "content": "加载中...",
                            "next_url": "下一步的URL",
                            "is_test": 0,
                            "platform": null,
                            "user": {
                                "uid": "0",
                                "screen_name": "加载中",
                                "profile_image": "http://tva4.sinaimg.cn/crop.0.1.631.631.1024/6f4dd669jw1en23w6skilj20hs0hntb0.jpg"
                            },
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "submit_url": "上传照片/文字的接口url"
                        },
                        "template": [
                            "modules/h5/lessionContent/template/index.html"
                        ],
                        "css": [
                            "modules/h5/lessionContent/css/index.css"
                        ],
                        "script": "modules/h5/lessionContent/js/index.js",
                        "app_script": "modules/h5/lessionContent/app_js/lessionContent.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/homework/test-result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_taskResult",
                        "title": "课后作业",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL",
                                "fans_count": "粉丝数",
                                "level": "网红小学生Lv.1",
                                "score": "成长值"
                            },
                            "percent": "14",
                            "result": [
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "next_url": "重新测试URL",
                            "share_url": "寻找更多的人帮助，分享出去的URL",
                            "next_lesson": {
                                "name": "课程名",
                                "image": "课程缩略图",
                                "url": ""
                            }
                        },
                        "template": [
                            "modules/h5/taskResult/template/index.html"
                        ],
                        "css": [
                            "modules/h5/taskResult/css/index.css"
                        ],
                        "script": "modules/h5/taskResult/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/invite-friend",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_inviteFriend",
                        "title": "邀请好友",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/inviteFriend/template/index.html"
                        ],
                        "css": [
                            "modules/h5/inviteFriend/css/index.css"
                        ],
                        "script": "modules/h5/inviteFriend/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/together",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_inviteLanding",
                        "title": "一起变红",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/inviteLanding/template/index.html"
                        ],
                        "css": [
                            "modules/h5/inviteLanding/css/index.css"
                        ],
                        "script": "modules/h5/inviteLanding/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/invite-list",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_inviteList",
                        "title": "我的邀请列表",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "data": [
                                {
                                    "name": "昵称",
                                    "avatar_hd": "头像",
                                    "add_time": "加入时间",
                                    "form": "weiboweixin"
                                }
                            ],
                            "total": 10,
                            "share_url": "分享URL"
                        },
                        "template": [
                            "modules/h5/inviteList/template/index.html"
                        ],
                        "css": [
                            "modules/h5/inviteList/css/index.css"
                        ],
                        "script": "modules/h5/inviteList/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/introduce",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_introduce",
                        "title": "网红城堡介绍",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/introduce/template/index.html"
                        ],
                        "css": [
                            "modules/h5/introduce/css/index.css"
                        ],
                        "script": "modules/h5/introduce/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/growth-info",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_scoreRules",
                        "title": "成长值介绍",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/scoreRules/template/index.html"
                        ],
                        "css": [
                            "modules/h5/scoreRules/css/index.css"
                        ],
                        "script": "modules/h5/scoreRules/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/contact",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_contactUs",
                        "title": "联系我们",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/h5/contactUs/template/index.html"
                        ],
                        "css": [
                            "modules/h5/contactUs/css/index.css"
                        ],
                        "script": "modules/h5/contactUs/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/prepare",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_weixinOAuth",
                        "title": "微信授权",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL",
                                "fans_count": "粉丝数",
                                "level": "网红小学生Lv.1",
                                "score": "成长值"
                            },
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/h5/weixinOAuth/template/index.html"
                        ],
                        "css": [
                            "modules/h5/weixinOAuth/css/index.css"
                        ],
                        "script": "modules/h5/weixinOAuth/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/success",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_h5SubmitSuccess",
                        "title": "提交成功",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "share_url": "上传照片/文字的接口url",
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/h5/h5SubmitSuccess/template/index.html"
                        ],
                        "css": [
                            "modules/h5/h5SubmitSuccess/css/index.css"
                        ],
                        "script": "modules/h5/h5SubmitSuccess/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/stats/sign",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_signup",
                        "title": "DNA－手机提交页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL",
                                "fans_count": "粉丝数",
                                "level": "网红小学生Lv.1",
                                "score": "成长值"
                            },
                            "phone": "",
                            "submit_url": "提交url"
                        },
                        "template": [
                            "modules/h5/signup/template/index.html"
                        ],
                        "css": [
                            "modules/h5/signup/css/index.css"
                        ],
                        "script": "modules/h5/signup/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/stats/tips",
        "data": {
            "default_data": {
                "modules": []
            }
        }
    },
    {
        "path": "/castle/wap/stats/result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_DNAResult",
                        "title": "DNA-微博分析结果",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "follower_num": 1012,
                            "follower": "你的粉丝数量属于中等水平",
                            "fans": "良好",
                            "fantastic": {
                                "count": "你的微博内容较丰富",
                                "content": {
                                    "default": 7572,
                                    "pic": 0,
                                    "video": 0,
                                    "total": 7572
                                }
                            },
                            "active": {
                                "count": "你的微博活跃度较低",
                                "content": [
                                    20,
                                    50,
                                    30,
                                    70,
                                    10,
                                    60,
                                    15,
                                    8
                                ]
                            },
                            "advert": "你的微博近期没有做过推广",
                            "position": "你的微博定位不明确",
                            "next_url": "/signup/wap/stats/suggest"
                        },
                        "template": [
                            "modules/h5/DNAResult/template/index.html"
                        ],
                        "css": [
                            "modules/h5/DNAResult/css/index.css"
                        ],
                        "script": "modules/h5/DNAResult/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/stats/suggest",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_signup_suggestion",
                        "title": "DNA-微博专家建议页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "advices": [
                                {
                                    "title": "建议标题",
                                    "content": "内容"
                                },
                                {
                                    "title": "建议标题",
                                    "content": "内容"
                                }
                            ],
                            "next_url": "/signup/wap/stats/suggest"
                        },
                        "template": [
                            "modules/signup/suggestion/template/index.html"
                        ],
                        "css": [
                            "modules/signup/suggestion/css/index.css"
                        ]
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/course/ceshi",
        "data": {
            "default_data": {
                "modules": {
                    "data": [
                        "/castle/wap/course/ceshi/sider.css?version=aaaaaaaaaaaaaa",
                        "/castle/wap/course/ceshi/sider.html?version=22222222222222",
                        "/castle/wap/course/ceshi/sider.js?version=454444444444444445555555555",
                        "/castle/wap/course/ceshi/home.css?version=4444444444444444444",
                        "/castle/wap/course/ceshi/home.html?version=55555555555555555555",
                        "/castle/wap/course/ceshi/home.js?version=666666666666666666666666",
                        "这是测试的"
                    ]
                }
            }
        }
    },
    {
        "path": "/castle/wap/share/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_surveyIndex",
                        "title": "测试题界面首页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/h5/survey/template/index.html"
                        ],
                        "css": [
                            "modules/h5/survey/css/index.css"
                        ],
                        "script": "modules/h5/survey/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_surveyResult",
                        "title": "测试结果界面",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "score": "分数",
                            "tips": "文案",
                            "next_url": "下一步的URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/h5/survey/template/surveyResult.html"
                        ],
                        "css": [
                            "modules/h5/survey/css/survey.css"
                        ],
                        "script": "modules/h5/survey/js/surveyResult.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/answer",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_survey",
                        "title": "问卷调查",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "share_url": "分享出去的URL",
                            "submit_url": "提交答案的URL",
                            "question_id": "当前的问题ID",
                            "question_num": "已经完成题目数量",
                            "questions": [
                                {
                                    "id": "111",
                                    "title": "",
                                    "type": "单选还是多选",
                                    "options": [
                                        {
                                            "id": "选项id",
                                            "text": "选项文本",
                                            "image": "图片URL（如果有）",
                                            "is_correct": 1
                                        }
                                    ],
                                    "explain": ""
                                }
                            ]
                        },
                        "template": [
                            "modules/h5/survey/template/survey.html"
                        ],
                        "css": [
                            "modules/h5/survey/css/survey.css"
                        ],
                        "script": "modules/h5/survey/js/survey.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/list",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_testing",
                        "title": "测试列表",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            }
                        },
                        "template": [
                            "modules/h5/testing/template/index.html"
                        ],
                        "css": [
                            "modules/h5/testing/css/index.css"
                        ],
                        "script": "modules/h5/testing/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/biz-index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_businessIndex",
                        "title": "电商属性测试",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "next_url": "下一步的URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/testing/business/template/index.html"
                        ],
                        "css": [
                            "modules/testing/business/css/index.css"
                        ],
                        "script": "modules/testing/business/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/biz-oauth",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_businessAuthorization",
                        "title": "电商属性测试授权",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/testing/business/template/authorization.html"
                        ],
                        "css": [
                            "modules/testing/business/css/common.css"
                        ],
                        "script": ""
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/biz-result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_businessResult",
                        "title": "电商属性测试结果",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "weibo_user_id": 0,
                            "is_join": "true/false,是否是网红城堡用户",
                            "score": "当前用户得分",
                            "avg_score": "平均分",
                            "max_score": "最高分",
                            "detail": {
                                "radar": {
                                    "indicator": [
                                        {
                                            "name": "个人资料",
                                            "max": 6500
                                        },
                                        {
                                            "name": "微博发表链接",
                                            "max": 16000
                                        },
                                        {
                                            "name": "内容关键词",
                                            "max": 30000
                                        },
                                        {
                                            "name": "买家秀",
                                            "max": 38000
                                        },
                                        {
                                            "name": "微博橱窗",
                                            "max": 52000
                                        }
                                    ]
                                },
                                "series": [
                                    {
                                        "type": "radar",
                                        "data": [
                                            {
                                                "value": [
                                                    4300,
                                                    10000,
                                                    28000,
                                                    35000,
                                                    50000
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "advices": "",
                            "chart": {
                                "x": [],
                                "y": []
                            },
                            "next_url": "跳转的URL",
                            "retry_url": "重新测试URL"
                        },
                        "template": [
                            "modules/testing/business/template/result.html"
                        ],
                        "css": [
                            "modules/testing/business/css/result.css"
                        ],
                        "script": "modules/testing/business/js/result.js",
                        "app_script": "modules/testing/business/app_js/result.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/dna-index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_weiboDNA",
                        "title": "检测你的微博DNA",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/testing/weiboDNA/template/index.html"
                        ],
                        "css": [
                            "modules/testing/weiboDNA/css/index.css"
                        ],
                        "script": "modules/testing/weiboDNA/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/dna-oauth",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_weiboDNAauth",
                        "title": "微博授权",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/testing/weiboDNA/template/auth.html"
                        ],
                        "css": [
                            "modules/testing/weiboDNA/css/auth.css"
                        ],
                        "script": ""
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/dna-result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_weiboDNAinvite",
                        "title": "微博DNA测试结果",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "is_join": "1",
                            "weibo_user_id": "weiboid",
                            "profile_image": "头像url",
                            "tags": "标签，[{name,weight}]",
                            "share_url": "分享链接",
                            "try_url": "马上体验url"
                        },
                        "template": [
                            "modules/testing/weiboDNA/template/invite.html"
                        ],
                        "css": [
                            "modules/testing/weiboDNA/css/invite.css"
                        ],
                        "script": "modules/testing/weiboDNA/js/invite.js",
                        "app_script": "modules/testing/weiboDNA/app_js/invite.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/dna-wait",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_weiboDNAwait",
                        "title": "测试你的微博DNA",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL"
                        },
                        "template": [
                            "modules/testing/weiboDNA/template/wait.html"
                        ],
                        "css": [
                            "modules/testing/weiboDNA/css/index.css"
                        ],
                        "script": "modules/testing/weiboDNA/js/wait.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/biz-wait",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_businessWait",
                        "title": "电商属性测试",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "submit_url": "ajax查询状态URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/testing/business/template/wait.html"
                        ],
                        "css": [
                            "modules/testing/business/css/common.css"
                        ],
                        "script": "modules/testing/business/js/wait.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/dna-top",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_weiboDNAtop",
                        "title": "顶级网红的DNA",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "is_join": "1",
                            "weibo_user_id": "weiboid",
                            "profile_image": "头像url",
                            "tags": "标签，[{name,weight}]",
                            "share_url": "分享链接",
                            "try_url": "马上体验url"
                        },
                        "template": [
                            "modules/testing/weiboDNA/template/dna-top.html"
                        ],
                        "css": [
                            "modules/testing/weiboDNA/css/dna-top.css"
                        ],
                        "script": "modules/testing/weiboDNA/js/dna-top.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/top-webred",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_businessTopList",
                        "title": "顶级网红列表",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "back_url": "返回的URL",
                            "share_url": "分享出去的URL",
                            "top_webreds": {
                                "data": []
                            }
                        },
                        "template": [
                            "modules/testing/business/template/topList.html"
                        ],
                        "css": [
                            "modules/testing/business/css/topList.css"
                        ],
                        "script": ""
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/top-webredone",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_businessTopListInfo",
                        "title": "顶级网红详情",
                        "data": {
                            "top_webreds": {
                                "radar": {
                                    "indicator": [
                                        {
                                            "name": "个人资料",
                                            "max": 0
                                        },
                                        {
                                            "name": "微博\n发表链接",
                                            "max": 0
                                        },
                                        {
                                            "name": "内容关键词",
                                            "max": 0
                                        },
                                        {
                                            "name": "买家秀",
                                            "max": 0
                                        },
                                        {
                                            "name": "微博\n橱窗",
                                            "max": 0
                                        }
                                    ],
                                    "axisLabel": {
                                        "show": true,
                                        "textStyle": {
                                            "color": "#999"
                                        }
                                    }
                                },
                                "series": [
                                    {
                                        "type": "radar",
                                        "data": [
                                            {
                                                "value": [
                                                    0,
                                                    "0",
                                                    "0",
                                                    "0",
                                                    "0"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "scoretotal": "加载中",
                            "name": "加载中",
                            "fans": "加载中",
                            "biz_score": "加载中",
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "detail": [],
                            "advices": "",
                            "prev_url": "",
                            "next_url": "",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/testing/business/template/topListInfo.html"
                        ],
                        "css": [
                            "modules/testing/business/css/topList.css"
                        ],
                        "script": "modules/testing/business/js/topListInfo.js",
                        "app_script": "modules/testing/business/app_js/topListInfo.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/section",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_lessionShare",
                        "title": "章节详情",
                        "data": {
                            "name": "标题加载中...",
                            "content": "加载中...",
                            "next_url": "下一步的URL",
                            "is_test": 0,
                            "platform": null,
                            "user": {
                                "uid": "0",
                                "screen_name": "加载中",
                                "profile_image": "http://tva4.sinaimg.cn/crop.0.1.631.631.1024/6f4dd669jw1en23w6skilj20hs0hntb0.jpg"
                            },
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "submit_url": "上传照片/文字的接口url"
                        },
                        "template": [
                            "modules/h5/lessionShare/template/index.html"
                        ],
                        "css": [
                            "modules/h5/lessionShare/css/index.css"
                        ],
                        "script": "modules/h5/lessionShare/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/guide/advantage-result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_preheat_abilityModel",
                        "title": "优势分析结果页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "submit_url": "ajax查询状态URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/preheat/ability/template/model.html"
                        ],
                        "css": [
                            "modules/preheat/ability/css/model.css"
                        ],
                        "script": "modules/preheat/ability/js/model.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/guide/choose-advantage",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_preheat_abilityChoose",
                        "title": "选择优势页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "next_url": "下一步的URL",
                            "submit_url": "ajax查询状态URL",
                            "share_url": "分享出去的URL"
                        },
                        "template": [
                            "modules/preheat/ability/template/choose.html"
                        ],
                        "css": [
                            "modules/preheat/ability/css/choose.css"
                        ],
                        "script": "modules/preheat/ability/js/choose.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/guide/ability-result",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_modelResult",
                        "title": "能力模型结果页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "charts": {
                                "radar": {
                                    "indicator": [
                                        {
                                            "name": "专业能力",
                                            "max": 6500
                                        },
                                        {
                                            "name": "电商运营能力",
                                            "max": 16000
                                        },
                                        {
                                            "name": "传播能力",
                                            "max": 30000
                                        },
                                        {
                                            "name": "供应链能力",
                                            "max": 38000
                                        },
                                        {
                                            "name": "内容能力",
                                            "max": 52000
                                        },
                                        {
                                            "name": "感召能力",
                                            "max": 52000
                                        }
                                    ]
                                },
                                "series": [
                                    {
                                        "type": "radar",
                                        "data": [
                                            {
                                                "value": [
                                                    4300,
                                                    10000,
                                                    28000,
                                                    35000,
                                                    50000,
                                                    50000
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "total": "整体评价的文案",
                            "good_ability": [],
                            "bad_ability": [],
                            "introduction_url": "能力模型介绍页URL",
                            "next_url": "网红城堡首页的URL"
                        },
                        "template": [
                            "modules/preheat/model/template/result.html"
                        ],
                        "css": [
                            "modules/preheat/model/css/common.css"
                        ],
                        "script": "modules/preheat/model/js/result.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/guide/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_preheat_analyzing",
                        "title": "预热-标杆网红",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "wanghong": [
                                {
                                    "screen_name": "",
                                    "profile_image": "",
                                    "fans": "",
                                    "sale": "",
                                    "desc": "简短描述"
                                }
                            ],
                            "query_url": "轮询分析进度URL",
                            "next_url": "查看结果URL"
                        },
                        "template": [
                            "modules/preheat/analyzing/template/index.html"
                        ],
                        "css": [
                            "modules/preheat/analyzing/css/index.css"
                        ],
                        "script": "modules/preheat/analyzing/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/guide/pk",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_preheat_pk",
                        "title": "预热-PK",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "self": {
                                "fans": "",
                                "weibo": "",
                                "interactive": "",
                                "biz": ""
                            },
                            "standard": {
                                "fans": "",
                                "weibo": "",
                                "interactive": "",
                                "biz": ""
                            },
                            "next_url": "查看个人能力URL"
                        },
                        "template": [
                            "modules/preheat/pk/template/index.html"
                        ],
                        "css": [
                            "modules/preheat/pk/css/index.css",
                            "libs/animate-css/animate.min.css"
                        ],
                        "script": "modules/preheat/pk/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/error/error",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_error",
                        "data": {
                            "code": "-1",
                            "msg": "抱歉，您访问的地址不存在哦",
                            "home": "/"
                        },
                        "template": [
                            "modules/error/template/error.html"
                        ],
                        "css": [
                            "modules/error/css/error.css"
                        ]
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/homework/my-homework",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_homeworkList",
                        "data": {
                            "platform": "weibo还是weixin",
                            "homeworkList": [],
                            "lessonList_url": "课程列表url",
                            "page": "当前页码",
                            "max_page": "总共页数",
                            "page_url": "分页请求地址"
                        },
                        "template": [
                            "modules/h5/homeworkList/template/index.html"
                        ],
                        "css": [
                            "modules/h5/homeworkList/css/index.css"
                        ],
                        "script": "modules/h5/homeworkList/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/nick-index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_nicenameTest",
                        "title": "昵称测试",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "http://127.0.0.1/modules/h5/weiboH5/images/face_2.png"
                            },
                            "next_url": "下一步的URL",
                            "share_url": "分享出去的URL",
                            "study_url": "学习顶级网红如何取昵称链接"
                        },
                        "template": [
                            "modules/testing/nickname/template/test.html"
                        ],
                        "css": [
                            "modules/testing/nickname/css/test.css"
                        ],
                        "script": "modules/testing/nickname/js/test.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/nick-test",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_nicknameResult",
                        "title": "昵称测试结果",
                        "pretreatment": false,
                        "data": {
                            "platform": "weibo还是weixin",
                            "name":"加载中",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "nickname": "昵称",
                            "score": "?",
                            "structScore": "昵称结构得分",
                            "keyScore": "关键字得分",
                            "top_url": "顶级网红页url",
                            "retest_url": "重新测试地址"
                        },
                        "template": [
                            "modules/testing/nickname/template/result.html"
                        ],
                        "css": [
                            "modules/testing/nickname/css/result.css"
                        ],
                        "script": "modules/testing/nickname/js/result.js",
                        "app_script": "modules/testing/nickname/app_js/result.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/share-nicktest",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_nicenamePK",
                        "title": "昵称测试PK--好友分享",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "screen_name": "昵称",
                                "profile_image": "http://127.0.0.1/modules/h5/weiboH5/images/face_2.png"
                            },
                            "info": "得分信息",
                            "pk_url": "下一步的URL",
                            "share_url": "分享出去的URL",
                            "study_url": "学习顶级网红如何取昵称链接"
                        },
                        "template": [
                            "modules/testing/nickname/template/PK_start.html"
                        ],
                        "css": [
                            "modules/testing/nickname/css/test.css"
                        ],
                        "script": "modules/testing/nickname/js/PK_start.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/share/pk-nicktest",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_nickname_pkresult",
                        "title": "昵称测试--pk结果",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "self": {
                                "architecture": "自己结构得分",
                                "keywords": "自己关键词得分",
                                "score": "总体得分"
                            },
                            "user": {
                                "uid": "4145",
                                "screen_name": "自己昵称",
                                "profile_image": "自己头像URL"
                            },
                            "shareinfo": {
                                "screen_name": "顶级网红昵称",
                                "profile_image": "顶级网红头像",
                                "architecture": "顶级网红结构得分",
                                "keywords": "顶级网红关键词得分",
                                "score": "顶级网红总体得分"
                            },
                            "victory": "是否pk胜利",
                            "test_num": "测试次数",
                            "share_url": "分享URL",
                            "again_url": "重新测试URL"
                        },
                        "template": [
                            "modules/testing/nickname/template/pk_result.html"
                        ],
                        "css": [
                            "modules/testing/nickname/css/pk_result.css"
                        ],
                        "script": "modules/testing/nickname/js/pk_result.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/exam/super-star",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_testing_nicknameTop",
                        "title": "顶级网红",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "percents": [
                                52,
                                16,
                                7.7,
                                6.2,
                                1.3
                            ],
                            "keys": [
                                {
                                    "name": "啊",
                                    "weight": 32
                                },
                                {
                                    "name": "的",
                                    "weight": 18
                                }
                            ],
                            "learnMore_url": "学习更多取昵称的技巧的url"
                        },
                        "template": [
                            "modules/testing/nickname/template/top.html"
                        ],
                        "css": [
                            "modules/testing/nickname/css/top.css"
                        ],
                        "script": "modules/testing/nickname/js/top.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/app/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_app_qrcodeScan",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/app/qrcodeScan/template/index.html"
                        ],
                        "css": [
                            "modules/app/qrcodeScan/css/index.css"
                        ],
                        "script": "modules/qrcode/qrcodeScan/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/guide/ability-introduction",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_modelIntroduction",
                        "title": "能力模型介绍",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            }
                        },
                        "template": [
                            "modules/preheat/model/template/introduction.html"
                        ],
                        "css": [
                            "modules/preheat/model/css/common.css"
                        ]
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/works/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_works_index",
                        "title": "赚钱首页",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "top_5": [
                                {
                                    "banner": "",
                                    "url": "",
                                    "name": "",
                                    "offical_name": "",
                                    "time_end": "10.25截止",
                                    "work_type": "分类",
                                    "return_amount": "",
                                    "city": ""
                                }
                            ],
                            "top_type_1": {
                                "name": "哈哈呵呵　",
                                "logo": "",
                                "works": [
                                    {
                                        "banner": "",
                                        "url": "",
                                        "name": "",
                                        "offical_name": "",
                                        "time_end": "10.25截止",
                                        "work_type": "分类",
                                        "return_amount": "",
                                        "city": ""
                                    }
                                ]
                            },
                            "top_1": {
                                "banner": "",
                                "url": "",
                                "name": "",
                                "offical_name": "",
                                "time_end": "10.25截止",
                                "work_type": "分类",
                                "return_amount": "",
                                "city": ""
                            },
                            "top_org_1": {
                                "name": "",
                                "logo": "",
                                "url": ""
                            },
                            "works": [
                                {
                                    "banner": "",
                                    "url": "",
                                    "name": "",
                                    "offical_name": "",
                                    "time_end": "10.25截止",
                                    "work_type": "分类",
                                    "return_amount": "",
                                    "city": ""
                                }
                            ],
                            "page_url": "/castle/wap/works/index"
                        },
                        "template": [
                            "modules/offer/opportunity/template/index.html"
                        ],
                        "css": [
                            "modules/offer/opportunity/css/index.css"
                        ],
                        "script": "modules/offer/opportunity/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/works/detail",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_works_detail",
                        "title": "机遇详情",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "banner": "",
                            "name": "",
                            "time_start": "",
                            "time_end": "",
                            "work_type": "",
                            "offical": [],
                            "num": "",
                            "require": [
                                {
                                    "key": "粉丝数量",
                                    "value": ">500"
                                }
                            ],
                            "return_desc": "工作回报的文本",
                            "desc": "工作内容的HTML",
                            "recommends": [
                                {
                                    "logo": "",
                                    "name": "",
                                    "time_end": "",
                                    "url": ""
                                }
                            ],
                            "status": 1
                        },
                        "template": [
                            "modules/offer/detail/template/index.html"
                        ],
                        "css": [
                            "modules/offer/detail/css/index.css"
                        ],
                        "script": "modules/offer/detail/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/works/checkapply",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_works_status",
                        "title": "机遇申请",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "status": 1,
                            "learns": [
                                {
                                    "require_name": "",
                                    "button_text": "",
                                    "url": ""
                                }
                            ]
                        },
                        "template": [
                            "modules/offer/status/template/index.html"
                        ],
                        "css": [
                            "modules/offer/status/css/index.css"
                        ],
                        "script": "modules/offer/status/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/works/organize",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_works_organize",
                        "title": "合作机构",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "top3": [
                                {
                                    "logo": "",
                                    "name": "",
                                    "intro": ""
                                }
                            ],
                            "others": [
                                {
                                    "name": "",
                                    "organizes": [
                                        {
                                            "logo": "",
                                            "name": "",
                                            "intro": ""
                                        }
                                    ]
                                }
                            ]
                        },
                        "template": [
                            "modules/offer/org/template/index.html"
                        ],
                        "css": [
                            "modules/offer/org/css/index.css"
                        ],
                        "script": "modules/offer/org/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/works/myworks",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_works_myworks",
                        "title": "我的机遇",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "myworks": []
                        },
                        "template": [
                            "modules/offer/myOffer/template/index.html"
                        ],
                        "css": [
                            "modules/offer/myOffer/css/index.css"
                        ],
                        "script": "modules/offer/myOffer/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/speedup/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_quickenedIndex",
                        "title": "加速首页",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "banner": "/modules/quickened/index/images/banner_1.jpg#banner图url",
                            "weibo_url": "发微博入口",
                            "fansi_url": "粉丝互动入口",
                            "yuqing_url": "舆情监测入口",
                            "jingzheng_url": "竞争对手分析入口",
                            "advert_url": "微博广告投放入口",
                            "dsyygj_url": "电商运营工具",
                            "dsyy_url": "/castle/wap/error/out-service",
                            "ghsdj_url": "/castle/wap/error/out-service",
                            "cosmetology_url": "/castle/wap/error/out-service",
                            "recommend": []
                        },
                        "template": [
                            "modules/quickened/index/template/index.html"
                        ],
                        "css": [
                            "modules/quickened/index/css/index.css"
                        ],
                        "script": "modules/quickened/index/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/message-list",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_message",
                        "title": "消息通知",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL"
                            },
                            "fans": "粉丝数字",
                            "biz_score": "电商属性",
                            "menu": [
                                [
                                    {
                                        "name": "我的课程",
                                        "url": "/"
                                    },
                                    {
                                        "name": "我的作业",
                                        "url": "/"
                                    },
                                    {
                                        "name": "个人资料",
                                        "url": "/"
                                    }
                                ],
                                [
                                    {
                                        "name": "微博定位",
                                        "url": "/"
                                    },
                                    {
                                        "name": "一起变红",
                                        "url": "/"
                                    }
                                ],
                                [
                                    {
                                        "name": "联系我们",
                                        "url": "/"
                                    }
                                ]
                            ]
                        },
                        "template": [
                            "modules/h5/message/template/index.html"
                        ],
                        "css": [
                            "modules/h5/message/css/index.css"
                        ]
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/speedup/vipcourse",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_vipSignup",
                        "title": "vip课程详情",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "id": "课程id",
                            "submit_url": "提交url",
                            "next_url": "下一步url"
                        },
                        "template": [
                            "modules/quickened/train/template/signup.html"
                        ],
                        "css": [
                            "modules/quickened/train/css/signup.css"
                        ],
                        "script": "modules/quickened/train/js/signup.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/speedup/cosmetology-list",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_beautyList",
                        "title": "美容整形列表",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "list": [],
                            "submit_url": "报名url"
                        },
                        "template": [
                            "modules/quickened/beauty/template/list.html"
                        ],
                        "css": [
                            "modules/quickened/beauty/css/list.css"
                        ],
                        "script": "modules/quickened/beauty/js/list.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/works/mainpage",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_start_home",
                        "title": "首页",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            }
                        },
                        "template": [
                            "modules/start/home/template/index.html"
                        ],
                        "css": [
                            "modules/start/home/css/index.css"
                        ],
                        "script": "modules/start/home/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/speedup/cosmetology-register",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_beautySignup",
                        "title": "vip课程报名详情",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "id": "课程id",
                            "submit_url": "提交url",
                            "next_url": "下一步url"
                        },
                        "template": [
                            "modules/quickened/beauty/template/signup.html"
                        ],
                        "css": [
                            "modules/quickened/beauty/css/signup.css"
                        ],
                        "script": "modules/quickened/beauty/js/signup.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/joins/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_start_join",
                        "title": "加盟",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL",
                                "fans_count": "粉丝数",
                                "level": "网红小学生Lv.1",
                                "score": "成长值"
                            }
                        },
                        "template": [
                            "modules/start/join/template/index.html"
                        ],
                        "css": [
                            "modules/start/join/css/index.css"
                        ],
                        "script": "modules/start/join/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/news/industry-news-home",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_industryInfo",
                        "title": "业界资讯",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "user": {
                                "uid": "",
                                "screen_name": "昵称",
                                "profile_image": "头像URL",
                                "fans_count": "粉丝数",
                                "level": "网红小学生Lv.1",
                                "score": "成长值"
                            }
                        },
                        "template": [
                            "modules/h5/industryInfo/template/index.html"
                        ],
                        "css": [
                            "modules/h5/industryInfo/css/index.css"
                        ],
                        "script": "modules/h5/industryInfo/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/news/news-detail",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_h5_newsDetail",
                        "title": "新闻详情",
                        "share": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "title": "加载中,请稍后...",
                            "time": "...",
                            "content": "..."
                        },
                        "template": [
                            "modules/h5/newsDetail/template/index.html"
                        ],
                        "css": [
                            "modules/h5/newsDetail/css/index.css"
                        ],
                        "script": "modules/h5/newsDetail/js/index.js",
                        "app_script": "modules/h5/newsDetail/app_js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/user/index",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_start_home",
                        "title": "网红首页",
                        "loading_show": true,
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            }
                        },
                        "template": [
                            "modules/start/home/template/index.html"
                        ],
                        "css": [
                            "modules/start/home/css/index.css"
                        ],
                        "script": "modules/start/home/js/index.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/error/out-services",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_error_outService",
                        "title": "服务未开启",
                        "data": {
                            "home": ""
                        },
                        "template": [
                            "modules/error/template/out-service.html"
                        ],
                        "css": [
                            "modules/error/css/error.css"
                        ]
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/tips/post",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_introduced",
                        "title": "智发布",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "next_url": "首页url"
                        },
                        "template": [
                            "modules/quickened/module/template/introduced.html"
                        ],
                        "css": [
                            "modules/quickened/module/css/common.css"
                        ],
                        "script": "modules/quickened/module/js/common.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/tips/tools",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_businessTool",
                        "title": "电商运营工具",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "next_url": "首页url"
                        },
                        "template": [
                            "modules/quickened/module/template/businessTool.html"
                        ],
                        "css": [
                            "modules/quickened/module/css/common.css"
                        ],
                        "script": "modules/quickened/module/js/common.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/tips/interaction",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_interaction",
                        "title": "智互动",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "next_url": "首页url"
                        },
                        "template": [
                            "modules/quickened/module/template/interaction.html"
                        ],
                        "css": [
                            "modules/quickened/module/css/common.css"
                        ],
                        "script": "modules/quickened/module/js/common.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/tips/advert",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_advert",
                        "title": "智能广告投放",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "next_url": "首页url"
                        },
                        "template": [
                            "modules/quickened/module/template/advert.html"
                        ],
                        "css": [
                            "modules/quickened/module/css/common.css"
                        ],
                        "script": "modules/quickened/module/js/common.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/tips/social",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_social",
                        "title": "智舆情",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "next_url": "首页url"
                        },
                        "template": [
                            "modules/quickened/module/template/social.html"
                        ],
                        "css": [
                            "modules/quickened/module/css/common.css"
                        ],
                        "script": "modules/quickened/module/js/common.js"
                    }
                ]
            }
        }
    },
    {
        "path": "/castle/wap/tips/listen",
        "data": {
            "default_data": {
                "modules": [
                    {
                        "id": "st_modules_quickened_listen",
                        "title": "智监测",
                        "data": {
                            "platform": "weibo还是weixin",
                            "jssdk": {
                                "appId": "必填，公众号的唯一标识",
                                "timestamp": "必填，生成签名的时间戳",
                                "nonceStr": "必填，生成签名的随机串",
                                "signature": "必填，签名，见附录1"
                            },
                            "userInfo": {
                                "uid": "2333",
                                "screen_name": "昵称",
                                "profile_image": "头像地址"
                            },
                            "tabbar": [
                                {
                                    "name": "首页",
                                    "url": ""
                                },
                                {
                                    "name": "首页2",
                                    "url": ""
                                },
                                {
                                    "name": "首页3",
                                    "url": ""
                                },
                                {
                                    "name": "首页4",
                                    "url": ""
                                }
                            ],
                            "next_url": "首页url"
                        },
                        "template": [
                            "modules/quickened/module/template/listen.html"
                        ],
                        "css": [
                            "modules/quickened/module/css/common.css"
                        ],
                        "script": "modules/quickened/module/js/common.js"
                    }
                ]
            }
        }
    }
]