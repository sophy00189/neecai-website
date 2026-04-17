/* ============================================
   霓彩舞台设备 Neecai - 交互脚本
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========== 多语言系统 ==========
    const translations = {
        zh: {
            logo_sub: '霓彩',
            nav_home: '首页', nav_products: '产品中心', nav_solutions: '解决方案', nav_cases: '经典案例', nav_about: '关于我们', nav_contact: '联系我们', nav_quote: '获取报价',
            hero_badge: '行业领先的舞台特效解决方案',
            hero_t1: '点亮每一场', hero_t2: '震撼演出',
            hero_desc: '从火花喷射到全息投影，从智能灯光到沉浸式体验——<br>我们用科技与艺术，为每一场舞台注入灵魂。',
            hero_btn1: '探索产品', hero_btn2: '观看案例',
            stat_years: '年行业经验', stat_projects: '成功项目', stat_countries: '国家覆盖', stat_patents: '项核心专利',
            scroll_down: '向下滚动',
            products_title: '产品中心', products_desc: '覆盖舞台特效全品类，从火焰到星光，一站式满足你的所有需求',
            p_fire_title: '火焰特效', p_fire_desc: '专业级舞台火焰机，喷射高度可达8-10米，支持DMX512控制，瞬间点燃全场氛围。', p_fire_f1: '多种火焰形态', p_fire_f2: '智能安全防护', p_fire_f3: 'DMX512控制',
            p_spark_title: '火花特效', p_spark_desc: '冷火花机系列，无烟无味安全环保，可变高度与密度，打造如梦如幻的视觉盛宴。', p_spark_f1: '冷火花技术', p_spark_f2: '可调喷射高度', p_spark_f3: '防水等级IP55',
            p_smoke_title: '烟雾特效', p_smoke_desc: '大功率烟雾机与低烟机，快速铺满舞台，配合灯光营造梦幻层次感。', p_smoke_f1: '超大烟量输出', p_smoke_f2: '低烟贴地效果', p_smoke_f3: '环保配方',
            p_confetti_title: '彩花特效', p_confetti_desc: '电动彩花机与礼炮，瞬间喷射漫天彩纸彩带，将现场气氛推至最高潮。', p_confetti_f1: '多彩多形态', p_confetti_f2: '远距离喷射', p_confetti_f3: '遥控触发',
            p_light_title: '智能灯光', p_light_desc: '专业舞台灯光系统，包含光束灯、染色灯、追光灯，打造极致光影艺术。', p_light_f1: '全彩RGBW', p_light_f2: '超高亮度', p_light_f3: '无限联动',
            p_holo_title: '全息投影', p_holo_desc: '裸眼3D全息投影系统，虚实融合沉浸式体验，开创舞台视觉新纪元。', p_holo_f1: '裸眼3D效果', p_holo_f2: '超高清画质', p_holo_f3: '定制内容',
            learn_more: '了解更多',
            solutions_title: '解决方案', solutions_desc: '针对不同场景，提供定制化特效方案，让每一场活动都成为经典',
            tab_concert: '演唱会', tab_theater: '剧院演出', tab_festival: '音乐节', tab_corporate: '企业活动', tab_wedding: '婚礼庆典',
            sol_concert_title: '演唱会特效方案', sol_concert_desc: '我们为演唱会提供从设计到执行的全方位特效解决方案。结合艺人风格与曲目编排，打造沉浸式的视听盛宴。',
            sol_concert_f1_t: '火焰+火花联动', sol_concert_f1_d: '高潮段落火焰与火花同步触发，震撼力拉满',
            sol_concert_f2_t: '灯光+烟雾编排', sol_concert_f2_d: '精准的时间码同步，灯光与烟雾完美配合',
            sol_concert_f3_t: '定制化编程', sol_concert_f3_d: '根据演出编排逐帧编程，每个特效精准触发',
            sol_theater_title: '剧院演出特效方案', sol_theater_desc: '为话剧、音乐剧、舞剧等提供精准可控的特效支持，让艺术表达更上一层楼。',
            sol_theater_f1_t: '精准可控', sol_theater_f1_d: '每一帧特效都可精确预编程，与演员走位完美同步',
            sol_theater_f2_t: '安全至上', sol_theater_f2_d: '多重安全保护机制，确保演员与观众安全',
            sol_theater_f3_t: '氛围营造', sol_theater_f3_d: '细腻的低烟与灯光配合，营造梦幻舞台氛围',
            sol_festival_title: '音乐节特效方案', sol_festival_desc: '大型户外音乐节全场景特效覆盖，从主舞台到氛围区，制造全场嗨点。',
            sol_festival_f1_t: '超大规模部署', sol_festival_f1_d: '数百台设备联动，覆盖万人级场地',
            sol_festival_f2_t: '全天候适应', sol_festival_f2_d: '防水防尘设计，无惧户外恶劣天气',
            sol_festival_f3_t: '无线组网控制', sol_festival_f3_d: '无线DMX组网，快速部署灵活调整',
            sol_corp_title: '企业活动特效方案', sol_corp_desc: '发布会、年会、庆典等企业活动特效方案，提升品牌形象与活动质感。',
            sol_corp_f1_t: '品牌定制', sol_corp_f1_d: '特效色彩与形态匹配品牌VI，强化品牌记忆',
            sol_corp_f2_t: '快速部署', sol_corp_f2_d: '模块化设备，2小时完成安装调试',
            sol_corp_f3_t: '互动体验', sol_corp_f3_d: '观众互动特效触发，增强参与感',
            sol_wedding_title: '婚礼庆典特效方案', sol_wedding_desc: '浪漫冷火花、梦幻烟雾、星空投影……让每一对新人的高光时刻终身难忘。',
            sol_wedding_f1_t: '浪漫冷火花', sol_wedding_f1_d: '安全无烟的冷火花走道，新人入场仪式感拉满',
            sol_wedding_f2_t: '星空投影', sol_wedding_f2_d: '穹顶星空投影，打造浪漫梦幻空间',
            sol_wedding_f3_t: '仙气烟雾', sol_wedding_f3_d: '低烟贴地效果，如临仙境',
            sol_cta: '咨询方案',
            cases_title: '经典案例', cases_desc: '从万人演唱会到高端婚礼，看看我们如何点亮每一个高光时刻',
            case_tag_concert: '演唱会', case_tag_tv: '电视节目', case_tag_festival: '音乐节', case_tag_corp: '企业活动', case_tag_wedding: '婚礼',
            case_c1_title: '超级巨星巡回演唱会', case_c1_desc: '12城巡演，128台火焰机+96台火花机联动，创造国内演唱会特效规模之最',
            case_c2_title: '跨年晚会舞台特效', case_c2_desc: '5小时直播零失误，全息投影+智能灯光融合',
            case_c3_title: '电音嘉年华', case_c3_desc: '3天5万人，激光+烟雾+彩花全场联动',
            case_c4_title: '科技品牌发布会', case_c4_desc: '品牌色定制特效，全球直播同步触发',
            case_c5_title: '海岛婚礼盛典', case_c5_desc: '冷火花走道+星空穹顶，梦幻至极',
            adv_title: '核心优势', adv_desc: '选择我们的6大理由',
            adv_r1_t: '自主研发', adv_r1_d: '36项核心专利技术，持续创新引领行业标准',
            adv_r2_t: '安全可靠', adv_r2_d: '多重安全防护机制，CE/FCC/ROHS国际认证',
            adv_r3_t: '全球服务', adv_r3_d: '覆盖50+国家与地区，6大海外仓储中心',
            adv_r4_t: '定制能力', adv_r4_d: '从单台设备到整场编排，深度定制你的一切需求',
            adv_r5_t: '7×24支持', adv_r5_d: '专业技术团队全天候在线，随时响应紧急需求',
            adv_r6_t: '源头工厂', adv_r6_d: '20000㎡自有生产基地，品质与交付双重保障',
            about_title: '关于霓彩舞台设备', about_factory_label: '生产基地', about_badge_text: '年行业深耕',
            about_lead: '我们不只是制造设备，<br>我们是<strong>舞台奇迹的创造者</strong>。',
            about_p1: '霓彩舞台设备（Neecai）成立于2010年，是一家集研发、生产、销售、服务于一体的高新技术企业。我们专注于舞台特效设备的创新与应用，产品涵盖火焰特效、火花特效、烟雾特效、智能灯光、全息投影等全品类。',
            about_p2: '15年来，我们服务了超过3000场演出活动，产品远销全球50多个国家和地区，与众多顶级演出团队建立了长期合作关系。',
            ms_2010: '公司成立', ms_2015: '获首轮投资', ms_2018: '海外业务拓展', ms_2022: '专利突破30项', ms_2025: '全息投影产品线发布',
            testi_title: '客户评价', testi_desc: '来自全球客户的真实反馈',
            testi_1_text: '"霓彩的特效设备质量非常稳定，在12城巡演中从未出过任何故障。他们的技术支持团队也是我们合作过的最专业的。"', testi_1_name: '张总监', testi_1_role: '某知名艺人巡演制作总监',
            testi_2_text: '"我们在欧洲的音乐节用了他们的火花机和烟雾机，效果震撼全场。配送速度也很快，从波兰仓3天就到了。"', testi_2_role: '西班牙活动制作公司CEO',
            testi_3_text: '"冷火花走道在我们婚礼上效果太惊艳了！安全无烟，宾客们都赞不绝口。强烈推荐给所有新人！"', testi_3_name: '李女士', testi_3_role: '婚礼策划师',
            contact_title: '联系我们', contact_desc: '无论您是需要产品咨询、方案定制还是售后支持，我们的团队随时为您服务。',
            ct_phone_t: '电话咨询', ct_email_t: '邮件联系', ct_addr_t: '公司地址', ct_addr_d: '北京市朝阳区文化创意园A座8层',
            form_title: '获取报价', form_subtitle: '填写以下信息，我们将在24小时内回复您',
            form_name: '姓名 *', form_name_ph: '请输入您的姓名', form_company: '公司', form_company_ph: '请输入公司名称',
            form_email: '邮箱 *', form_email_ph: '请输入邮箱地址', form_phone: '电话', form_phone_ph: '请输入联系电话',
            form_product: '感兴趣的产品', form_select: '请选择产品类型', form_comprehensive: '综合方案',
            form_msg: '需求描述 *', form_msg_ph: '请描述您的具体需求，如活动类型、场地规模、期望效果等',
            form_submit: '提交咨询',
            popup_title: '获取专属报价', popup_subtitle: '15年舞台特效经验，24小时内回复您的需求',
            popup_name_ph: '您的姓名 *', popup_email_ph: '邮箱地址 *', popup_phone_ph: '联系电话',
            popup_select: '感兴趣的产品', popup_msg_ph: '请简述您的需求，如活动类型、场地大小、预算范围等',
            popup_submit: '立即获取报价', popup_trust1: 'CE/FCC认证', popup_trust2: '50+国家客户', popup_trust3: '24h回复',
            footer_desc: '专注舞台特效15年，用科技与艺术点亮每一场演出。',
            footer_products: '产品中心', footer_solutions: '解决方案', footer_about: '关于我们',
            footer_about_co: '公司介绍', footer_news: '新闻动态', footer_join: '加入我们', footer_partners: '合作伙伴',
            footer_privacy: '隐私政策', footer_terms: '使用条款', footer_sitemap: '网站地图',
        },
        en: {
            logo_sub: 'Neecai',
            nav_home: 'Home', nav_products: 'Products', nav_solutions: 'Solutions', nav_cases: 'Portfolio', nav_about: 'About', nav_contact: 'Contact', nav_quote: 'Get Quote',
            hero_badge: 'Industry-Leading Stage Effects Solutions',
            hero_t1: 'Ignite Every', hero_t2: 'Spectacular Show',
            hero_desc: 'From spark fountains to holographic projections, from intelligent lighting to immersive experiences—<br>We infuse every stage with soul through technology and art.',
            hero_btn1: 'Explore Products', hero_btn2: 'View Portfolio',
            stat_years: 'Years Experience', stat_projects: 'Successful Projects', stat_countries: 'Countries Served', stat_patents: 'Core Patents',
            scroll_down: 'Scroll Down',
            products_title: 'Products', products_desc: 'Complete range of stage effects — from fire to starlight, one-stop solutions for all your needs',
            p_fire_title: 'Fire Effects', p_fire_desc: 'Professional stage flame machines, 8-10m shooting height, DMX512 control, instantly igniting the atmosphere.', p_fire_f1: 'Multiple Flame Patterns', p_fire_f2: 'Smart Safety Protection', p_fire_f3: 'DMX512 Control',
            p_spark_title: 'Spark Effects', p_spark_desc: 'Cold spark machines — smokeless, odorless, eco-friendly with adjustable height and density for dreamlike visuals.', p_spark_f1: 'Cold Spark Technology', p_spark_f2: 'Adjustable Height', p_spark_f3: 'IP55 Waterproof',
            p_smoke_title: 'Smoke Effects', p_smoke_desc: 'High-power fog and low-lying smoke machines, quickly covering the stage with dreamy layered effects.', p_smoke_f1: 'Massive Output', p_smoke_f2: 'Low-Lying Fog', p_smoke_f3: 'Eco-Friendly Formula',
            p_confetti_title: 'Confetti Effects', p_confetti_desc: 'Electric confetti cannons and streamer shooters, instantly filling the air with color and pushing excitement to the peak.', p_confetti_f1: 'Multi-Color & Shapes', p_confetti_f2: 'Long-Range Shooting', p_confetti_f3: 'Remote Trigger',
            p_light_title: 'Intelligent Lighting', p_light_desc: 'Professional stage lighting systems — beam, wash, and follow spots creating the ultimate light art.', p_light_f1: 'Full RGBW Color', p_light_f2: 'Ultra-High Brightness', p_light_f3: 'Unlimited Linking',
            p_holo_title: 'Holographic Projection', p_holo_desc: 'Glasses-free 3D holographic systems, blending virtual and real for a new era of stage visuals.', p_holo_f1: 'Glasses-Free 3D', p_holo_f2: 'Ultra HD Quality', p_holo_f3: 'Custom Content',
            learn_more: 'Learn More',
            solutions_title: 'Solutions', solutions_desc: 'Customized effects solutions for every scenario, making every event a classic',
            tab_concert: 'Concert', tab_theater: 'Theater', tab_festival: 'Festival', tab_corporate: 'Corporate', tab_wedding: 'Wedding',
            sol_concert_title: 'Concert Effects Solution', sol_concert_desc: 'End-to-end effects solutions for concerts. Combining artist style and setlist choreography for immersive audiovisual spectacles.',
            sol_concert_f1_t: 'Fire + Spark Sync', sol_concert_f1_d: 'Flames and sparks triggered simultaneously at climactic moments',
            sol_concert_f2_t: 'Lighting + Smoke Choreography', sol_concert_f2_d: 'Precise timecode sync for perfect light and smoke coordination',
            sol_concert_f3_t: 'Custom Programming', sol_concert_f3_d: 'Frame-by-frame programming with pinpoint effect triggering',
            sol_theater_title: 'Theater Effects Solution', sol_theater_desc: 'Precise and controllable effects support for drama, musicals, and dance performances.',
            sol_theater_f1_t: 'Precision Control', sol_theater_f1_d: 'Every effect frame can be pre-programmed to sync perfectly with actors',
            sol_theater_f2_t: 'Safety First', sol_theater_f2_d: 'Multiple safety mechanisms ensuring performer and audience safety',
            sol_theater_f3_t: 'Atmosphere Creation', sol_theater_f3_d: 'Delicate low fog and lighting for dreamy stage atmospheres',
            sol_festival_title: 'Festival Effects Solution', sol_festival_desc: 'Full-scene effects coverage for large outdoor music festivals, from main stage to ambient zones.',
            sol_festival_f1_t: 'Massive Deployment', sol_festival_f1_d: 'Hundreds of synchronized devices covering 10,000+ capacity venues',
            sol_festival_f2_t: 'All-Weather Ready', sol_festival_f2_d: 'Waterproof and dustproof design, built for outdoor conditions',
            sol_festival_f3_t: 'Wireless DMX Network', sol_festival_f3_d: 'Wireless DMX networking for quick setup and flexible adjustments',
            sol_corp_title: 'Corporate Event Solution', sol_corp_desc: 'Effects solutions for product launches, annual galas, and corporate celebrations.',
            sol_corp_f1_t: 'Brand Customization', sol_corp_f1_d: 'Effect colors and shapes matching brand VI for stronger brand recall',
            sol_corp_f2_t: 'Rapid Deployment', sol_corp_f2_d: 'Modular equipment, fully installed and tested in 2 hours',
            sol_corp_f3_t: 'Interactive Experience', sol_corp_f3_d: 'Audience-triggered effects for enhanced engagement',
            sol_wedding_title: 'Wedding Effects Solution', sol_wedding_desc: 'Romantic cold sparks, dreamy fog, starry projections... Making every couple\'s highlight moment unforgettable.',
            sol_wedding_f1_t: 'Romantic Cold Sparks', sol_wedding_f1_d: 'Safe, smokeless cold spark walkways for a grand entrance',
            sol_wedding_f2_t: 'Starry Projection', sol_wedding_f2_d: 'Ceiling star projections for a romantic dreamscape',
            sol_wedding_f3_t: 'Ethereal Fog', sol_wedding_f3_d: 'Low-lying fog effects creating a fairy-tale atmosphere',
            sol_cta: 'Get Solution',
            cases_title: 'Portfolio', cases_desc: 'From 10,000-person concerts to luxury weddings — see how we light up every highlight moment',
            case_tag_concert: 'Concert', case_tag_tv: 'TV Show', case_tag_festival: 'Festival', case_tag_corp: 'Corporate', case_tag_wedding: 'Wedding',
            case_c1_title: 'Superstar Arena Tour', case_c1_desc: '12-city tour with 128 flame machines + 96 spark machines, setting a new record for concert effects scale',
            case_c2_title: 'New Year\'s Eve Gala', case_c2_desc: '5 hours of live broadcast with zero errors, holographic projection + intelligent lighting fusion',
            case_c3_title: 'EDM Carnival', case_c3_desc: '3 days, 50,000 attendees, lasers + smoke + confetti all synchronized',
            case_c4_title: 'Tech Brand Launch', case_c4_desc: 'Brand-color custom effects, global live stream synchronized triggering',
            case_c5_title: 'Island Wedding Gala', case_c5_desc: 'Cold spark walkway + starry dome, absolutely dreamlike',
            adv_title: 'Why Choose Us', adv_desc: '6 reasons to partner with Neecai',
            adv_r1_t: 'In-House R&D', adv_r1_d: '36 core patents, continuously innovating and setting industry standards',
            adv_r2_t: 'Safety Certified', adv_r2_d: 'Multiple safety mechanisms with CE/FCC/ROHS international certifications',
            adv_r3_t: 'Global Reach', adv_r3_d: 'Covering 50+ countries with 6 overseas warehouse centers',
            adv_r4_t: 'Custom Solutions', adv_r4_d: 'From single units to full-show programming, deep customization for every need',
            adv_r5_t: '24/7 Support', adv_r5_d: 'Professional tech team online around the clock, always ready for emergencies',
            adv_r6_t: 'Direct Factory', adv_r6_d: '20,000㎡ own production base, guaranteed quality and delivery',
            about_title: 'About Neecai', about_factory_label: 'Production Base', about_badge_text: 'Years of Excellence',
            about_lead: 'We don\'t just manufacture equipment,<br>we are <strong>creators of stage miracles</strong>.',
            about_p1: 'Neecai was founded in 2010 as a high-tech enterprise integrating R&D, production, sales, and service. We focus on innovation and application of stage effects equipment, covering fire effects, spark effects, smoke effects, intelligent lighting, and holographic projection.',
            about_p2: 'Over 15 years, we have served 3,000+ performance events, exporting to 50+ countries worldwide, and built long-term partnerships with top production teams globally.',
            ms_2010: 'Founded', ms_2015: 'First Investment Round', ms_2018: 'Global Expansion', ms_2022: '30+ Patents', ms_2025: 'Holographic Line Launch',
            testi_title: 'Testimonials', testi_desc: 'Real feedback from clients around the world',
            testi_1_text: '"Neecai\'s equipment quality is incredibly stable — zero failures across our 12-city tour. Their tech support team is the most professional we\'ve ever worked with."', testi_1_name: 'Director Zhang', testi_1_role: 'Tour Production Director',
            testi_2_text: '"We used their spark and smoke machines at our European festival — absolutely stunning effects. Delivery was fast too, just 3 days from the Poland warehouse."', testi_2_role: 'Spanish Event Production CEO',
            testi_3_text: '"The cold spark walkway at our wedding was absolutely breathtaking! Safe, smokeless, and our guests couldn\'t stop talking about it. Highly recommend!"', testi_3_name: 'Ms. Li', testi_3_role: 'Wedding Planner',
            contact_title: 'Contact Us', contact_desc: 'Whether you need product consultation, custom solutions, or after-sales support, our team is always ready.',
            ct_phone_t: 'Phone', ct_email_t: 'Email', ct_addr_t: 'Address', ct_addr_d: '8F, Building A, Cultural Creative Park, Chaoyang, Beijing',
            form_title: 'Get a Quote', form_subtitle: 'Fill in the form below and we\'ll respond within 24 hours',
            form_name: 'Name *', form_name_ph: 'Enter your name', form_company: 'Company', form_company_ph: 'Enter company name',
            form_email: 'Email *', form_email_ph: 'Enter your email', form_phone: 'Phone', form_phone_ph: 'Enter your phone number',
            form_product: 'Product Interest', form_select: 'Select product type', form_comprehensive: 'Comprehensive Solution',
            form_msg: 'Requirements *', form_msg_ph: 'Describe your needs — event type, venue size, desired effects, etc.',
            form_submit: 'Submit Inquiry',
            popup_title: 'Get Your Custom Quote', popup_subtitle: '15 years of stage effects expertise, response within 24 hours',
            popup_name_ph: 'Your name *', popup_email_ph: 'Email address *', popup_phone_ph: 'Phone number',
            popup_select: 'Product interest', popup_msg_ph: 'Briefly describe your needs — event type, venue size, budget, etc.',
            popup_submit: 'Get Your Quote Now', popup_trust1: 'CE/FCC Certified', popup_trust2: '50+ Countries', popup_trust3: '24h Response',
            footer_desc: '15 years of stage effects excellence, lighting up every show with technology and art.',
            footer_products: 'Products', footer_solutions: 'Solutions', footer_about: 'About Us',
            footer_about_co: 'Company', footer_news: 'News', footer_join: 'Careers', footer_partners: 'Partners',
            footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Use', footer_sitemap: 'Sitemap',
        },
        es: {
            logo_sub: 'Neecai',
            nav_home: 'Inicio', nav_products: 'Productos', nav_solutions: 'Soluciones', nav_cases: 'Portafolio', nav_about: 'Nosotros', nav_contact: 'Contacto', nav_quote: 'Cotización',
            hero_badge: 'Soluciones de Efectos Escénicos Líderes en la Industria',
            hero_t1: 'Enciende Cada', hero_t2: 'Espectáculo Espectacular',
            hero_desc: 'Desde fuentes de chispas hasta proyecciones holográficas, desde iluminación inteligente hasta experiencias inmersivas—<br>Infundimos alma a cada escenario con tecnología y arte.',
            hero_btn1: 'Explorar Productos', hero_btn2: 'Ver Portafolio',
            stat_years: 'Años de Experiencia', stat_projects: 'Proyectos Exitosos', stat_countries: 'Países Atendidos', stat_patents: 'Patentes Core',
            scroll_down: 'Desplazar',
            products_title: 'Productos', products_desc: 'Gama completa de efectos escénicos — desde fuego hasta luz estelar, soluciones integrales para todas tus necesidades',
            p_fire_title: 'Efectos de Fuego', p_fire_desc: 'Máquinas de llama profesionales, altura de disparo de 8-10m, control DMX512, encendiendo instantáneamente la atmósfera.', p_fire_f1: 'Múltiples Patrones de Llama', p_fire_f2: 'Protección Inteligente', p_fire_f3: 'Control DMX512',
            p_spark_title: 'Efectos de Chispas', p_spark_desc: 'Máquinas de chispas frías — sin humo, sin olor, ecológicas con altura y densidad ajustables.', p_spark_f1: 'Tecnología de Chispas Frías', p_spark_f2: 'Altura Ajustable', p_spark_f3: 'Impermeable IP55',
            p_smoke_title: 'Efectos de Humo', p_smoke_desc: 'Máquinas de niebla de alta potencia y humo bajo, cubriendo rápidamente el escenario con efectos soñadores.', p_smoke_f1: 'Gran Salida de Humo', p_smoke_f2: 'Humo Bajo', p_smoke_f3: 'Fórmula Ecológica',
            p_confetti_title: 'Efectos de Confeti', p_confetti_desc: 'Cañones de confeti eléctricos, llenando instantáneamente el aire de color.', p_confetti_f1: 'Multicolor y Formas', p_confetti_f2: 'Disparo de Largo Alcance', p_confetti_f3: 'Activación Remota',
            p_light_title: 'Iluminación Inteligente', p_light_desc: 'Sistemas de iluminación profesional — haces, lavados y seguimientos creando el arte lumínico definitivo.', p_light_f1: 'Color RGBW Completo', p_light_f2: 'Brillo Ultra Alto', p_light_f3: 'Enlace Ilimitado',
            p_holo_title: 'Proyección Holográfica', p_holo_desc: 'Sistemas holográficos 3D sin gafas, fusionando lo virtual y lo real.', p_holo_f1: '3D Sin Gafas', p_holo_f2: 'Calidad Ultra HD', p_holo_f3: 'Contenido Personalizado',
            learn_more: 'Más Información',
            solutions_title: 'Soluciones', solutions_desc: 'Soluciones de efectos personalizadas para cada escenario',
            tab_concert: 'Concierto', tab_theater: 'Teatro', tab_festival: 'Festival', tab_corporate: 'Corporativo', tab_wedding: 'Boda',
            sol_concert_title: 'Solución para Conciertos', sol_concert_desc: 'Soluciones de efectos integrales para conciertos. Combinando el estilo del artista con la coreografía del repertorio.',
            sol_concert_f1_t: 'Sincronización Fuego + Chispas', sol_concert_f1_d: 'Llamas y chispas activadas simultáneamente en los momentos culminantes',
            sol_concert_f2_t: 'Coreografía Luz + Humo', sol_concert_f2_d: 'Sincronización precisa con timecode para coordinación perfecta',
            sol_concert_f3_t: 'Programación Personalizada', sol_concert_f3_d: 'Programación fotograma a fotograma con activación precisa',
            sol_theater_title: 'Solución para Teatro', sol_theater_desc: 'Soporte de efectos preciso y controlable para obras, musicales y danza.',
            sol_theater_f1_t: 'Control Preciso', sol_theater_f1_d: 'Cada efecto puede preprogramarse para sincronizarse con los actores',
            sol_theater_f2_t: 'Seguridad Primero', sol_theater_f2_d: 'Múltiples mecanismos de seguridad para intérpretes y público',
            sol_theater_f3_t: 'Creación de Ambiente', sol_theater_f3_d: 'Niebla baja e iluminación delicada para atmósferas soñadoras',
            sol_festival_title: 'Solución para Festivales', sol_festival_desc: 'Cobertura completa de efectos para grandes festivales al aire libre.',
            sol_festival_f1_t: 'Despliegue Masivo', sol_festival_f1_d: 'Cientos de dispositivos sincronizados para venues de 10,000+ personas',
            sol_festival_f2_t: 'Resistente a Todo Clima', sol_festival_f2_d: 'Diseño impermeable y a prueba de polvo para exteriores',
            sol_festival_f3_t: 'Red DMX Inalámbrica', sol_festival_f3_d: 'Red DMX inalámbrica para instalación rápida y ajustes flexibles',
            sol_corp_title: 'Solución Corporativa', sol_corp_desc: 'Soluciones de efectos para lanzamientos, galas y celebraciones corporativas.',
            sol_corp_f1_t: 'Personalización de Marca', sol_corp_f1_d: 'Colores y formas de efectos adaptados a la identidad visual de marca',
            sol_corp_f2_t: 'Despliegue Rápido', sol_corp_f2_d: 'Equipamiento modular, instalado y probado en 2 horas',
            sol_corp_f3_t: 'Experiencia Interactiva', sol_corp_f3_d: 'Efectos activados por el público para mayor participación',
            sol_wedding_title: 'Solución para Bodas', sol_wedding_desc: 'Chispas frías románticas, niebla soñadora, proyecciones estelares... Haciendo inolvidable el momento de cada pareja.',
            sol_wedding_f1_t: 'Chispas Frías Románticas', sol_wedding_f1_d: 'Pasarelas de chispas frías seguras y sin humo para una entrada espectacular',
            sol_wedding_f2_t: 'Proyección Estelar', sol_wedding_f2_d: 'Proyección de estrellas en el techo para un espacio onírico',
            sol_wedding_f3_t: 'Niebla Etérea', sol_wedding_f3_d: 'Efecto de niebla baja creando una atmósfera de cuento de hadas',
            sol_cta: 'Consultar Solución',
            cases_title: 'Portafolio', cases_desc: 'Desde conciertos de 10,000 personas hasta bodas de lujo — vea cómo iluminamos cada momento',
            case_tag_concert: 'Concierto', case_tag_tv: 'Programa TV', case_tag_festival: 'Festival', case_tag_corp: 'Corporativo', case_tag_wedding: 'Boda',
            case_c1_title: 'Gira de Superestrella', case_c1_desc: 'Gira de 12 ciudades con 128 máquinas de llama + 96 máquinas de chispas',
            case_c2_title: 'Gala de Año Nuevo', case_c2_desc: '5 horas de transmisión en vivo sin errores, proyección holográfica + iluminación inteligente',
            case_c3_title: 'Carnaval EDM', case_c3_desc: '3 días, 50,000 asistentes, láser + humo + confeti sincronizados',
            case_c4_title: 'Lanzamiento de Marca Tech', case_c4_desc: 'Efectos personalizados con colores de marca, activación sincronizada global',
            case_c5_title: 'Boda Insular', case_c5_desc: 'Pasarela de chispas frías + cúpula estrellada, absolutamente de ensueño',
            adv_title: 'Por Qué Elegirnos', adv_desc: '6 razones para asociarse con Neecai',
            adv_r1_t: 'I+D Propia', adv_r1_d: '36 patentes core, innovación continua liderando estándares de la industria',
            adv_r2_t: 'Certificado Seguro', adv_r2_d: 'Múltiples mecanismos de seguridad con certificaciones CE/FCC/ROHS',
            adv_r3_t: 'Alcance Global', adv_r3_d: 'Cubriendo 50+ países con 6 centros de almacén en el extranjero',
            adv_r4_t: 'Soluciones a Medida', adv_r4_d: 'Desde unidades individuales hasta programación completa, personalización profunda',
            adv_r5_t: 'Soporte 24/7', adv_r5_d: 'Equipo técnico profesional en línea las 24 horas, siempre listo para emergencias',
            adv_r6_t: 'Fábrica Directa', adv_r6_d: '20,000㎡ de base de producción propia, calidad y entrega garantizadas',
            about_title: 'Sobre Neecai', about_factory_label: 'Base de Producción', about_badge_text: 'Años de Excelencia',
            about_lead: 'No solo fabricamos equipos,<br>somos <strong>creadores de milagros escénicos</strong>.',
            about_p1: 'Neecai fue fundada en 2010 como una empresa de alta tecnología que integra I+D, producción, ventas y servicio. Nos enfocamos en la innovación y aplicación de equipos de efectos escénicos.',
            about_p2: 'En 15 años, hemos servido más de 3,000 eventos, exportando a más de 50 países, construyendo alianzas a largo plazo con los mejores equipos de producción del mundo.',
            ms_2010: 'Fundación', ms_2015: 'Primera Ronda de Inversión', ms_2018: 'Expansión Global', ms_2022: '30+ Patentes', ms_2025: 'Lanzamiento Holográfico',
            testi_title: 'Testimonios', testi_desc: 'Opiniones reales de clientes de todo el mundo',
            testi_1_text: '"La calidad de los equipos de Neecai es increíblemente estable — cero fallos en nuestra gira de 12 ciudades. Su equipo técnico es el más profesional con el que hemos trabajado."', testi_1_name: 'Director Zhang', testi_1_role: 'Director de Producción de Gira',
            testi_2_text: '"Usamos sus máquinas de chispas y humo en nuestro festival europeo — efectos absolutamente impresionantes. La entrega fue rápida, solo 3 días desde el almacén de Polonia."', testi_2_role: 'CEO de Producción de Eventos, España',
            testi_3_text: '"¡La pasarela de chispas frías en nuestra boda fue espectacular! Segura, sin humo, y nuestros invitados no dejaban de hablar de ella. ¡Altamente recomendado!"', testi_3_name: 'Sra. Li', testi_3_role: 'Planificadora de Bodas',
            contact_title: 'Contáctenos', contact_desc: 'Ya sea consulta de productos, soluciones personalizadas o soporte postventa, nuestro equipo está siempre listo.',
            ct_phone_t: 'Teléfono', ct_email_t: 'Correo', ct_addr_t: 'Dirección', ct_addr_d: '8ª Planta, Edificio A, Parque Cultural Creativo, Chaoyang, Beijing',
            form_title: 'Obtener Cotización', form_subtitle: 'Complete el formulario y le responderemos en 24 horas',
            form_name: 'Nombre *', form_name_ph: 'Ingrese su nombre', form_company: 'Empresa', form_company_ph: 'Ingrese nombre de empresa',
            form_email: 'Correo *', form_email_ph: 'Ingrese su correo', form_phone: 'Teléfono', form_phone_ph: 'Ingrese su teléfono',
            form_product: 'Producto de Interés', form_select: 'Seleccione tipo de producto', form_comprehensive: 'Solución Integral',
            form_msg: 'Requisitos *', form_msg_ph: 'Describa sus necesidades — tipo de evento, tamaño del lugar, efectos deseados, etc.',
            form_submit: 'Enviar Consulta',
            popup_title: 'Obtenga su Cotización', popup_subtitle: '15 años de experiencia en efectos escénicos, respuesta en 24 horas',
            popup_name_ph: 'Su nombre *', popup_email_ph: 'Correo electrónico *', popup_phone_ph: 'Teléfono',
            popup_select: 'Producto de interés', popup_msg_ph: 'Describa brevemente sus necesidades — tipo de evento, tamaño del lugar, presupuesto, etc.',
            popup_submit: 'Obtener Cotización Ahora', popup_trust1: 'Certificado CE/FCC', popup_trust2: '50+ Países', popup_trust3: 'Respuesta 24h',
            footer_desc: '15 años de excelencia en efectos escénicos, iluminando cada show con tecnología y arte.',
            footer_products: 'Productos', footer_solutions: 'Soluciones', footer_about: 'Nosotros',
            footer_about_co: 'Empresa', footer_news: 'Noticias', footer_join: 'Empleo', footer_partners: 'Socios',
            footer_privacy: 'Política de Privacidad', footer_terms: 'Términos de Uso', footer_sitemap: 'Mapa del Sitio',
        },
        pt: {
            logo_sub: 'Neecai',
            nav_home: 'Início', nav_products: 'Produtos', nav_solutions: 'Soluções', nav_cases: 'Portfólio', nav_about: 'Sobre', nav_contact: 'Contato', nav_quote: 'Orçamento',
            hero_badge: 'Soluções de Efeitos Cênicos Líderes na Indústria',
            hero_t1: 'Acenda Cada', hero_t2: 'Espetáculo Espetacular',
            hero_desc: 'De fontes de faíscas a projeções holográficas, de iluminação inteligente a experiências imersivas—<br>Infundimos alma em cada palco com tecnologia e arte.',
            hero_btn1: 'Explorar Produtos', hero_btn2: 'Ver Portfólio',
            stat_years: 'Anos de Experiência', stat_projects: 'Projetos Bem-Sucedidos', stat_countries: 'Países Atendidos', stat_patents: 'Patentes Core',
            scroll_down: 'Rolar',
            products_title: 'Produtos', products_desc: 'Linha completa de efeitos cênicos — do fogo à luz estelar, soluções completas para todas as suas necessidades',
            p_fire_title: 'Efeitos de Fogo', p_fire_desc: 'Máquinas de chama profissionais, altura de disparo de 8-10m, controle DMX512, acendendo instantaneamente a atmosfera.', p_fire_f1: 'Múltiplos Padrões de Chama', p_fire_f2: 'Proteção Inteligente', p_fire_f3: 'Controle DMX512',
            p_spark_title: 'Efeitos de Faíscas', p_spark_desc: 'Máquinas de faíscas frias — sem fumaça, sem odor, ecológicas com altura e densidade ajustáveis.', p_spark_f1: 'Tecnologia de Faíscas Frias', p_spark_f2: 'Altura Ajustável', p_spark_f3: 'Impermeável IP55',
            p_smoke_title: 'Efeitos de Fumaça', p_smoke_desc: 'Máquinas de névoa de alta potência e fumaça baixa, cobrindo rapidamente o palco com efeitos oníricos.', p_smoke_f1: 'Grande Saída de Fumaça', p_smoke_f2: 'Fumaça Baixa', p_smoke_f3: 'Fórmula Ecológica',
            p_confetti_title: 'Efeitos de Confete', p_confetti_desc: 'Canhões de confete elétricos, enchendo instantaneamente o ar de cor.', p_confetti_f1: 'Multicor e Formas', p_confetti_f2: 'Disparo de Longo Alcance', p_confetti_f3: 'Ativação Remota',
            p_light_title: 'Iluminação Inteligente', p_light_desc: 'Sistemas de iluminação profissional — feixes, washes e follow spots criando a arte luminosa definitiva.', p_light_f1: 'Cor RGBW Completa', p_light_f2: 'Brilho Ultra Alto', p_light_f3: 'Vinculação Ilimitada',
            p_holo_title: 'Projeção Holográfica', p_holo_desc: 'Sistemas holográficos 3D sem óculos, fundindo o virtual e o real.', p_holo_f1: '3D Sem Óculos', p_holo_f2: 'Qualidade Ultra HD', p_holo_f3: 'Conteúdo Personalizado',
            learn_more: 'Saiba Mais',
            solutions_title: 'Soluções', solutions_desc: 'Soluções de efeitos personalizadas para cada cenário',
            tab_concert: 'Show', tab_theater: 'Teatro', tab_festival: 'Festival', tab_corporate: 'Corporativo', tab_wedding: 'Casamento',
            sol_concert_title: 'Solução para Shows', sol_concert_desc: 'Soluções de efeitos integrais para shows. Combinando o estilo do artista com a coreografia do repertório.',
            sol_concert_f1_t: 'Sincronização Fogo + Faíscas', sol_concert_f1_d: 'Chamas e faíscas ativadas simultaneamente nos momentos culminantes',
            sol_concert_f2_t: 'Coreografia Luz + Fumaça', sol_concert_f2_d: 'Sincronização precisa com timecode para coordenação perfeita',
            sol_concert_f3_t: 'Programação Personalizada', sol_concert_f3_d: 'Programação quadro a quadro com ativação precisa',
            sol_theater_title: 'Solução para Teatro', sol_theater_desc: 'Suporte de efeitos preciso e controlável para peças, musicais e dança.',
            sol_theater_f1_t: 'Controle Preciso', sol_theater_f1_d: 'Cada efeito pode ser pré-programado para sincronizar com os atores',
            sol_theater_f2_t: 'Segurança em Primeiro Lugar', sol_theater_f2_d: 'Múltiplos mecanismos de segurança para intérpretes e público',
            sol_theater_f3_t: 'Criação de Atmosfera', sol_theater_f3_d: 'Névoa baixa e iluminação delicada para atmosferas oníricas',
            sol_festival_title: 'Solução para Festivais', sol_festival_desc: 'Cobertura completa de efeitos para grandes festivais ao ar livre.',
            sol_festival_f1_t: 'Implantação em Massa', sol_festival_f1_d: 'Centenas de dispositivos sincronizados para locais de 10.000+ pessoas',
            sol_festival_f2_t: 'Resistente a Todo Clima', sol_festival_f2_d: 'Design impermeável e à prova de poeira para exteriores',
            sol_festival_f3_t: 'Rede DMX Sem Fio', sol_festival_f3_d: 'Rede DMX sem fio para instalação rápida e ajustes flexíveis',
            sol_corp_title: 'Solução Corporativa', sol_corp_desc: 'Soluções de efeitos para lançamentos, galas e celebrações corporativas.',
            sol_corp_f1_t: 'Personalização de Marca', sol_corp_f1_d: 'Cores e formas de efeitos adaptados à identidade visual da marca',
            sol_corp_f2_t: 'Implantação Rápida', sol_corp_f2_d: 'Equipamento modular, instalado e testado em 2 horas',
            sol_corp_f3_t: 'Experiência Interativa', sol_corp_f3_d: 'Efeitos ativados pelo público para maior engajamento',
            sol_wedding_title: 'Solução para Casamentos', sol_wedding_desc: 'Faíscas frias românticas, névoa onírica, projeções estelares... Tornando o momento de cada casal inesquecível.',
            sol_wedding_f1_t: 'Faíscas Frias Românticas', sol_wedding_f1_d: 'Passarelas de faíscas frias seguras e sem fumaça para uma entrada espetacular',
            sol_wedding_f2_t: 'Projeção Estelar', sol_wedding_f2_d: 'Projeção de estrelas no teto para um espaço onírico',
            sol_wedding_f3_t: 'Névoa Etérea', sol_wedding_f3_d: 'Efeito de névoa baixa criando uma atmosfera de conto de fadas',
            sol_cta: 'Consultar Solução',
            cases_title: 'Portfólio', cases_desc: 'De shows para 10.000 pessoas a casamentos de luxo — veja como iluminamos cada momento',
            case_tag_concert: 'Show', case_tag_tv: 'Programa TV', case_tag_festival: 'Festival', case_tag_corp: 'Corporativo', case_tag_wedding: 'Casamento',
            case_c1_title: 'Turnê de Superstar', case_c1_desc: 'Turnê de 12 cidades com 128 máquinas de chama + 96 máquinas de faíscas',
            case_c2_title: 'Gala de Ano Novo', case_c2_desc: '5 horas de transmissão ao vivo sem erros, projeção holográfica + iluminação inteligente',
            case_c3_title: 'Carnaval EDM', case_c3_desc: '3 dias, 50.000 participantes, laser + fumaça + confete sincronizados',
            case_c4_title: 'Lançamento de Marca Tech', case_c4_desc: 'Efeitos personalizados com cores da marca, ativação sincronizada global',
            case_c5_title: 'Casamento Insular', case_c5_desc: 'Passarela de faíscas frias + cúpula estrelada, absolutamente dos sonhos',
            adv_title: 'Por Que Nos Escolher', adv_desc: '6 razões para parceirar com a Neecai',
            adv_r1_t: 'P&D Própria', adv_r1_d: '36 patentes core, inovação contínua liderando padrões da indústria',
            adv_r2_t: 'Certificado Seguro', adv_r2_d: 'Múltiplos mecanismos de segurança com certificações CE/FCC/ROHS',
            adv_r3_t: 'Alcance Global', adv_r3_d: 'Cobrindo 50+ países com 6 centros de armazém no exterior',
            adv_r4_t: 'Soluções Sob Medida', adv_r4_d: 'De unidades individuais à programação completa, personalização profunda',
            adv_r5_t: 'Suporte 24/7', adv_r5_d: 'Equipe técnica profissional online 24 horas, sempre pronta para emergências',
            adv_r6_t: 'Fábrica Direta', adv_r6_d: '20.000㎡ de base de produção própria, qualidade e entrega garantidas',
            about_title: 'Sobre a Neecai', about_factory_label: 'Base de Produção', about_badge_text: 'Anos de Excelência',
            about_lead: 'Não apenas fabricamos equipamentos,<br>somos <strong>criadores de milagres cênicos</strong>.',
            about_p1: 'A Neecai foi fundada em 2010 como uma empresa de alta tecnologia que integra P&D, produção, vendas e serviço. Focamos na inovação e aplicação de equipamentos de efeitos cênicos.',
            about_p2: 'Em 15 anos, servimos mais de 3.000 eventos, exportando para mais de 50 países, construindo parcerias de longo prazo com as melhores equipes de produção do mundo.',
            ms_2010: 'Fundação', ms_2015: 'Primeira Rodada de Investimento', ms_2018: 'Expansão Global', ms_2022: '30+ Patentes', ms_2025: 'Lançamento Holográfico',
            testi_title: 'Depoimentos', testi_desc: 'Feedback real de clientes ao redor do mundo',
            testi_1_text: '"A qualidade dos equipamentos da Neecai é incrivelmente estável — zero falhas em nossa turnê de 12 cidades. A equipe técnica é a mais profissional com quem já trabalhamos."', testi_1_name: 'Diretor Zhang', testi_1_role: 'Diretor de Produção de Turnê',
            testi_2_text: '"Usamos suas máquinas de faíscas e fumaça em nosso festival europeu — efeitos absolutamente impressionantes. A entrega foi rápida, apenas 3 dias do armazém da Polônia."', testi_2_role: 'CEO de Produção de Eventos, Espanha',
            testi_3_text: '"A passarela de faíscas frias no nosso casamento foi espetacular! Segura, sem fumaça, e nossos convidados não paravam de falar sobre ela. Altamente recomendado!"', testi_3_name: 'Sra. Li', testi_3_role: 'Planejadora de Casamentos',
            contact_title: 'Contate-nos', contact_desc: 'Seja consulta de produtos, soluções personalizadas ou suporte pós-venda, nossa equipe está sempre pronta.',
            ct_phone_t: 'Telefone', ct_email_t: 'E-mail', ct_addr_t: 'Endereço', ct_addr_d: '8º Andar, Edifício A, Parque Cultural Criativo, Chaoyang, Pequim',
            form_title: 'Obter Orçamento', form_subtitle: 'Preencha o formulário e responderemos em 24 horas',
            form_name: 'Nome *', form_name_ph: 'Digite seu nome', form_company: 'Empresa', form_company_ph: 'Digite o nome da empresa',
            form_email: 'E-mail *', form_email_ph: 'Digite seu e-mail', form_phone: 'Telefone', form_phone_ph: 'Digite seu telefone',
            form_product: 'Produto de Interesse', form_select: 'Selecione o tipo de produto', form_comprehensive: 'Solução Integral',
            form_msg: 'Requisitos *', form_msg_ph: 'Descreva suas necessidades — tipo de evento, tamanho do local, efeitos desejados, etc.',
            form_submit: 'Enviar Consulta',
            popup_title: 'Obtenha seu Orçamento', popup_subtitle: '15 anos de experiência em efeitos cênicos, resposta em 24 horas',
            popup_name_ph: 'Seu nome *', popup_email_ph: 'Endereço de e-mail *', popup_phone_ph: 'Telefone',
            popup_select: 'Produto de interesse', popup_msg_ph: 'Descreva brevemente suas necessidades — tipo de evento, tamanho do local, orçamento, etc.',
            popup_submit: 'Obter Orçamento Agora', popup_trust1: 'Certificado CE/FCC', popup_trust2: '50+ Países', popup_trust3: 'Resposta 24h',
            footer_desc: '15 anos de excelência em efeitos cênicos, iluminando cada show com tecnologia e arte.',
            footer_products: 'Produtos', footer_solutions: 'Soluções', footer_about: 'Sobre Nós',
            footer_about_co: 'Empresa', footer_news: 'Notícias', footer_join: 'Carreiras', footer_partners: 'Parceiros',
            footer_privacy: 'Política de Privacidade', footer_terms: 'Termos de Uso', footer_sitemap: 'Mapa do Site',
        }
    };

    let currentLang = localStorage.getItem('neecai-lang') || 'zh';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('neecai-lang', lang);
        const t = translations[lang];
        if (!t) return;

        // Set HTML lang
        const langMap = { zh: 'zh-CN', en: 'en', es: 'es', pt: 'pt' };
        document.documentElement.lang = langMap[lang] || 'zh-CN';

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Update current lang display
        const langNames = { zh: '中文', en: 'EN', es: 'ES', pt: 'PT' };
        document.getElementById('currentLang').textContent = langNames[lang];

        // Update active state
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        // Update page title
        const titleMap = {
            zh: '霓彩舞台设备 | Neecai - www.neecai.net',
            en: 'Neecai Stage Effects - www.neecai.net',
            es: 'Neecai Efectos Escénicos - www.neecai.net',
            pt: 'Neecai Efeitos Cênicos - www.neecai.net'
        };
        document.title = titleMap[lang];
    }

    // Language switcher interaction
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });

    langDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.dataset.lang);
            langDropdown.classList.remove('show');
        });
    });

    // Initialize language
    setLanguage(currentLang);

    // ========== 粒子背景 ==========
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = this.getColor();
        }
        getColor() {
            const colors = ['rgba(255,107,53,','rgba(255,215,0,','rgba(67,97,238,','rgba(114,9,183,','rgba(247,37,133,'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            this.opacity += (Math.random() - 0.5) * 0.01;
            this.opacity = Math.max(0.05, Math.min(0.6, this.opacity));
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.opacity + ')';
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255,107,53,${(1 - dist / 150) * 0.08})`;
                    ctx.lineWidth = 0.5; ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ========== 导航栏 ==========
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
        backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // 移动端菜单
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    let menuOpen = false;
    mobileMenuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = menuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active'); menuOpen = false;
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // ========== 数字动画 ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    function animateStats() {
        if (statsAnimated) return;
        statNumbers.forEach(num => {
            const rect = num.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                statsAnimated = true;
                const target = parseInt(num.dataset.target);
                const duration = 2000, start = performance.now();
                function updateNumber(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    num.textContent = Math.round(eased * target).toLocaleString();
                    if (progress < 1) requestAnimationFrame(updateNumber);
                }
                requestAnimationFrame(updateNumber);
            }
        });
    }
    window.addEventListener('scroll', animateStats);
    animateStats();

    // ========== Tab 切换 ==========
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // ========== 滚动动画 ==========
    const revealElements = document.querySelectorAll('.product-card, .case-card, .adv-card, .testimonial-card, .solution-layout, .about-layout, .contact-layout');
    revealElements.forEach(el => el.classList.add('reveal'));
    function handleScrollReveal() {
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('active');
        });
    }
    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal();

    // ========== 表单 ==========
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('.btn-submit');
        const orig = btn.innerHTML;
        btn.innerHTML = '<span>...</span><i class="fas fa-spinner fa-spin"></i>';
        btn.style.opacity = '0.7'; btn.style.pointerEvents = 'none';
        setTimeout(() => {
            btn.innerHTML = '<span>✓</span><i class="fas fa-check"></i>';
            btn.style.background = 'linear-gradient(135deg, #06d6a0, #118ab2)';
            setTimeout(() => { btn.innerHTML = orig; btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; btn.style.background = ''; e.target.reset(); }, 2000);
        }, 1500);
    });

    // ========== 产品卡片交互 ==========
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const visual = card.querySelector('.product-visual');
            if (visual) visual.style.background = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(255,107,53,0.08), transparent 50%)`;
        });
        card.addEventListener('mouseleave', () => { const v = card.querySelector('.product-visual'); if (v) v.style.background = ''; });
    });

    // ========== 鼠标跟随 ==========
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth, y = e.clientY / window.innerHeight;
        heroSection.querySelectorAll('.light-beam').forEach((beam, i) => {
            beam.style.transform = `translate(${(x - 0.5) * 10 * (i + 1)}px, ${(y - 0.5) * 5 * (i + 1)}px) rotate(${(x - 0.5) * 20}deg)`;
        });
    });

    // ========== 平滑滚动 ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // ========== 首次访问询盘弹窗 ==========
    const inquiryOverlay = document.getElementById('inquiryOverlay');
    const inquiryClose = document.getElementById('inquiryClose');
    const inquiryForm = document.getElementById('inquiryForm');

    // 每次访问都弹出询盘弹窗
    function showInquiryPopup() {
        if (inquiryOverlay) {
            setTimeout(() => {
                inquiryOverlay.classList.add('active');
            }, 1000);
        }
    }

    function closeInquiryPopup() {
        if (inquiryOverlay) {
            inquiryOverlay.classList.remove('active');
        }
    }

    if (inquiryClose) {
        inquiryClose.addEventListener('click', closeInquiryPopup);
    }

    // 点击遮罩层关闭
    if (inquiryOverlay) {
        inquiryOverlay.addEventListener('click', (e) => {
            if (e.target === inquiryOverlay) closeInquiryPopup();
        });
    }

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeInquiryPopup();
    });

    // 弹窗表单提交
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = inquiryForm.querySelector('.inquiry-submit');
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.style.pointerEvents = 'none';

            fetch(inquiryForm.action, {
                method: 'POST',
                body: new FormData(inquiryForm),
                headers: { 'Accept': 'application/json' }
            }).then(res => {
                if (res.ok) {
                    btn.innerHTML = '<i class="fas fa-check"></i> ✓';
                    btn.style.background = 'linear-gradient(135deg, #06d6a0, #118ab2)';
                    setTimeout(() => {
                        closeInquiryPopup();
                        inquiryForm.reset();
                        btn.innerHTML = orig;
                        btn.style.background = '';
                        btn.style.pointerEvents = '';
                    }, 1500);
                } else {
                    btn.innerHTML = orig;
                    btn.style.pointerEvents = '';
                }
            }).catch(() => {
                btn.innerHTML = orig;
                btn.style.pointerEvents = '';
            });
        });
    }

    showInquiryPopup();
});
