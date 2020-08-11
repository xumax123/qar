var qarLib=[
    //["客户化代码","原事件代码","事件名称","一级","二级","三级","监控条件","持续时间"],
    ["3024","3016","Speed Above Maximum Tire Speed<br />轮速超限","","195KTS","","GS<=","——"],
    ["3005","3130","Speed above 250kts(below 10000ft)<br />一万尺以下速度大","","265kts","","Cas>265,T>10s","10s"],
    ["3006","3001","Speed Above VMO<br />速度超VMO","VMO","VMO  TOL>=3s","〉5秒","CAS>","3s，二级5s，三级"],
    ["3007","3002","Speed Above MMO<br />速度超MMO","MMO","MMO TOL>=3s","〉5秒","MACH>:","3s,二级；5s三级"],
    ["3025","3017","Speed Above Recommended Turb. Speed<br />颠簸时超过颠簸推荐速度","TOL >= 120 s","TOL >= 300 s","TOL >= 600 s","ALT_STD20000;<br />>:MACH>0.77M:<br />CAS>276kts",""],
    ["3032","","Speed High in Climb (35ft - 1500ft)<br />初始爬升速度大 (35英尺 - 1500英尺)","V2+20kts","V2+30kts","","35ft-1500ftAFE,CAS>","5s"],
    ["3038","3027","Speed Low in Climb (35ft - 1500ft)<br />初始爬升速度小 (35英尺 - 1500英尺)","V2+5kts","V2","","For 2 s, CAS < V2","2s"],
    ["3005","3000","Speed High in Approach (below 2500ft RA)<br />起始进近速度大 ","230 Kts","250 Kts","","AFE <2500ft, CAS>","3s"],
    ["3010","3005","Speed High in Approach (at 1000ft)<br />1000英尺进近速度大","VAPP + 10 Kts","VAPP + 15 Kts","VAPP + 20Kts","1000ft,CAS >","3s"],
    ["3012","3007","Speed High in Approach (at 500ft)<br />500英尺进近速度大","VAPP + 10Kts","VAPP + 15Kts","VAPP + 20Kts","500ft,CAS >","3s"],
    ["3014","3009","Speed High in Approach (at 50ft)<br />50英尺进近速度大","VAPP + 8 Kts","VAPP + 12 Kts","VAPP + 15 Kts","50ft,CAS >","1s"],
    ["3029","3014","Speed High at Touch down<br />接地速度大","VLS + 5 Kts","VLS + 8 Kts","VLS + 10 Kts","CAS >:","——"],
    ["3011","3006","Speed Low in Approach (at 1000ft)<br />1000英尺进近速度小","VAPP - 5 Kts","VAPP  -8 Kts","VAPP -10 Kts","1000ft,CAS <","3s"],
    ["3013","3008","Speed Low in Approach (at 500ft)<br />500英尺进近速度小","VAPP -5  Kts","VAPP  -8 Kts","VAPP -10  Kts","500ft,CAS <","3s"],
    ["3015","3010","Speed Low in Approach (at 50ft)<br />50英尺进近速度小","VAPP -5  Kts","VAPP  -8 Kts","VAPP -10  Kts","50ft,CAS <","1s"],
    ["3023","3015","Speed Low at Touch down<br />接地速度小","VLS -5 Kts","VLS -8Kts","VLS -10 Kts","CAS <:","——"],
    ["3018","3013","Exceedance of Flaps/Slats Limit  Speed in Aproach<br />进近中襟缝翼超速","","1s","〉3秒","CAS >VFE; TOL >","1s,二级；3s三级"],
    ["3028","3019","Speed Low 速度小于VLS","VLS","VLS-5","VLS-10","CAS <; TOL >= 1s","1s"],
    ["3017","3012","Speed above VFE<br />爬升阶段襟逢翼超速","","2s","〉5秒","CAS >VFE; TOL >","2s,二级；5s三级"],
    ["3020","3025","VAPP Questionable in Approach<br />进近时目标速度有问题","VLS","VLS + 20 kts","","VAPP >:","——"],
    ["3030","3021","Taxi Speed High in straight line<br />直线滑行速度大","> 30 Kts","> = 35 Kts","","GS","3s"],
    ["3031","3022","Taxi Speed High in Turn<br />转弯滑行速度大",">12Kts",">15 Kts",">18Kts","GS ","2s"],
    ["3008","3003","Speed above VLO Retraction<br />收起落架速度超限","","220 kts","","CAS/MACH >","3s"],
    ["3016","3011","Speed above VLO Extension<br />放起落架速度超限","","250 kts","","CAS >","——"],
    ["3009","3004","Speed Above VLE<br />起落架伸出速度超限（放出状态）","","285 Kts, 0.68 M","","CAS/MACH "," 3s"],
    ["3042","3125","Speed low at lift off<br />起飞抬轮速度小","Vr-1","Vr-3","Vr-5","前轮离地，速度<","——"],
    ["3040","3127","Speed high at lift off<br />起飞抬轮速度大","Vr+15","Vr+20","","前轮离地，速度>","——"],
    ["3401/2","3055","Rate Of Descent High in Approach (3000ft - 1000ft)<br />进近下降率大  (3000 - 1000英尺)","-1500 ft/min","-1800ft/min","-2000ft/min ","IVV <","3s"],
    ["3403","3056","Rate Of Descent High in Approach (1000ft - 500ft)<br />进近下降率大 (1000 - 500英尺)","-1100ft/min","-1300 ft/min","-1500 ft/min","IVV <","3s"],
    ["3404","3057","Rate Of Descent High in Approach (500ft-200ft)<br />进近下降率大 (500ft-200ft)"," -1100ft/min"," -1200ft/min","-1300 ft/min","IVV <","3s"],
    ["3414","","Rate Of Descent High in Approach (200ft-50ft)<br />进近下降率大 (200ft-50ft)"," -1100ft/min"," -1200ft/min","-1300 ft/min","IVV <","2s"],
    ["3405","","50英尺以下下降率大"," -900ft/min"," -950ft/min"," -1000ft/min","","2s"],
    ["3408","3101","High Vertical speed before Touchdown<br />接地前下沉快","< -6.5 ft/s","< -8 ft/s","< -10 ft/s","Late Flare","——"],
    ["3410","","下降率超限","5000ft/min","6000ft/min","","IVV≥6000，T>10s","10s"],
    ["3406","3059","Rate Of Descent High in Descent (FL100 - FL30)<br />下降阶段下降率大 (FL100 - FL30)","-3000 ft/min","-3500 ft/min","","IVV <: ?TOL = 10s","10s"],
    ["3501","3062","Vertical Acceleration High in Flight<br />空中垂直过载大","",">1.8 G ;< 0.2 G","〉2G，〈0G","VRTGMAX >=: ??OR VRTGMIN >=:","——"],
    ["3500","3061","Vertical Acceleration High at Take Off<br />起飞垂直过载大","1．45G","1.5 G","","VRTGMAX >=:","——"],
    ["3504","3063","Vertical Acceleration High at Touchdown<br />接地垂直过载大","1.6 G","1.8 G","1.9 G","VRTGMAX >=:","——"],
    ["3618","3073","Rudder Large Inputs (above 200ft)<br />空中方向舵量大 (高于 200英尺)","","5.7","","In Symetrical flight ?RUD_PDL*Coeff >","——"],
    ["3100","3028","Pitch High at Take Off（lift off）<br />起飞姿态大","(A319)11.5 °(A320)9.5 °(A321)7.5°","(A319)12.5 °(A320)10.5 °(A321)8.5°","(A319)13.5 °(A320)11.5 °(A321)9.5°","PITCH >: ??(At Lift Off);","——"],
    ["3105","","空中超最大俯仰姿态","","","〉25度或<-15度","","——"],
    ["3108","3032","Pitch High at Touchdown<br />接地俯仰姿态大","(A319）10°(A320)7°<br />(A321)6°","(A319)11°<br />(A320)8°<br />(A321)7°","(A319)12°<br />(A320)9°<br />(A321)8°","PITCH >: ??(At Touch Down);","——"],
    ["3104","3031","Pitch Low in Climb<br />爬升俯仰姿态小","10°","8°","","PITCH <: ?","3s"],
    ["3207","3041","Bank High in Climb (100ft - 400ft)<br />初始爬升坡度大  (100英尺 - 400英尺)","","8°","15 °","100ft - 400ft| ROLL | >: ?","2s"],
    ["3208","3042","Bank High in Climb (400ft - 1000ft)<br />爬升坡度大 (400英尺 - 1000英尺)","","33 °","35","400ft - 1000ft| ROLL | >: ?","3s"],
    ["3400","3053","Path High in Descent (above FL100)<br />下降时航径高 (高于 FL100)","6°","8 °","","Slope <: ?TOL = 10s","10s"],
    ["3407","3060","Rate Of Climb Low in Climb (below 1000ft)<br />爬升时上升率小 (在1000英尺高度以下)","1000 ft/min","750 ft/min","","IVV <","5s"],
    ["3624","3076","Ground Spoiler lever not armed<br />地面扰流板未预位","Not armed prior to take off or landing","","","GND spoiler lever position","——"],
    ["3800","3085","HDG Deviation at Take Off (50kts - Rotation)<br />起飞滑跑航向偏 (50kts -抬轮)","","3 °","5 °","|HEADING_LINEAR-headref| ","3s"],
    ["3812","3094","Height Low at Threshold<br />进跑道高度低","<= 40","<= 35","<= 25","Height Low at THR","——"],
    ["3813","3095","Height High at Threshold<br />进跑道高度高",">=60 ft",">=70 ft",">=80 ft","High Height at THR","——"],
    ["3814","3096","HDG Significant Change in Approach (below 500ft)<br />进近中航向变化大 (低于 500英尺)","10 °","15 °","20 °","deltaHDG >=:","——"],
    ["3109","3033","Pitch Low at Touchdown<br />接地俯仰姿态小","2°","1°","0.5°","PITCH <=: ??(At Touch Down)","——"],
    ["3900","3129","High lost during initial climb<br />初始爬升掉高度","","IVV<0","","AFE 35-1500,T>2s","2s"],
    ["3203","3132","Bank high<br />空中坡度大","",">33","35","|ROLL|>: ","3s"],
    ["3103","3150","Pitch high in initial climb<br />初始爬升姿态大","18°","19°","21°","35ft-1500ftAFE,pitch","3s"],
    ["3034","3166","Tail Wind at Take off起飞尾风超限","","15","","GS>100,尾风量>= ","——"],
    ["3815","3167","Heading  Early Change at Take Off<br />起飞低高度转弯","","AFE<= 400","","航向改变>20,横滚>10,","——"],
    ["3831","3172","Nose gear touch<br />前轮先接地","","触发","","Nose gear=ground,Main landing gear =air","——"],
    ["3101","3029","Pitch Rate High at Take Off<br />起飞俯仰率大","3.5°/s","4°/s","4.5°/s","PITCH_RATE >:","——"],
    ["3111","3034","Pitch Rate High at Landing<br />着陆俯仰率大","2 °/sec","2.5 °/sec","3 °/sec","PITCH_RATE (MAX) >= :","——"],
    ["3102","3030","Pitch Rate Low at Take Off<br />起飞俯仰率小","1.3°/s","1°/s","","PITCH_RATE (MAX) <:","——"],
    ["3209","3043","Bank Cycling at Take Off<br />起飞时坡度摇摆","","5次","","Oscillation number >:","——"],
    ["3206","3040","Bank High in Climb (Take Off - 100ft)<br />起飞时坡度大 (起飞 - 100英尺)","〉5 °","〉8°","〉=10 °","Take Off - 100ft,| ROLL | >: ?","2s"],
    ["3204","3039","Bank Cycling in Approach<br />进近时坡度摇摆","4次","6次","8 次","Oscillation number >:","——"],
    ["3202","3037","Bank High in Approach (1000ft - 500ft)<br />进近时坡度大 (1000英尺 - 500英尺)","10°","15°","20°","1000-500ft，   | ROLL | >","3s"],
    ["3201","3036","Bank High in Approach (500ft - 200ft)<br />进近时坡度大  (500英尺 - 200英尺)","10°","12°","15°","| ROLL | >","2s"],
    ["3200","3035","Bank High in Approach (below 200ft)<br />进近时坡度大  (低于 200英尺)","5°","6°","7°","| ROLL | (MAX) >=:","2s"],
    ["3210","3044","Bank High During Flare (below 10ft)<br />着陆时坡度大  (低于 10英尺)","5","6 °","7","below 10ft| ROLL | (MAX) >=:","——"],
    ["3211","3045","Bank oscillation in Approach (below 100ft)<br />低高度坡度摆动 (低于 100英尺)","5 °","8 °","12 °","below 100ft，ROLL (Range) >=","——"],
    ["3902","3103","Altitude Above Maximum Operating Altitude<br />飞行高度超限","","39800 ft","","ALT_STD >:","——"],
    ["3312","3047","Path High in Approach (at 1200ft)<br />进近航径高 ( 1200英尺)","GA + 0.7°","GA + 0.95°","","Path Angle >:","——"],
    ["3314","3049","Path High in Approach (at 800ft)<br />进近航径高  ( 800英尺)","GA + 0.4°","GA + 0.7°","GA + 0.95°","Path Angle >:","——"],
    ["3316","3051","Path High in Approach (at 400ft)<br />进近航径高 ( 400英尺)","GA + 0.4°","GA + 0.7°","GA + 0.95°","Path Angle >:","——"],
    ["3313","3048","Path Low in Approach (at 1200ft)<br />进近航径低 ( 1200英尺)","GA - 0.6°","GA - 0.8°","","Path Angle <:","——"],
    ["3315","3050","Path Low in Approach (at 800ft)<br />进近航径低  ( 800英尺)","GA - 0.4°","GA - 0.6°","GA - 0.8°","Path Angle <:","——"],
    ["3317","3052","Path Low in Approach (at 400ft)<br />进近航径低 ( 400英尺)","GA - 0.4°","GA - 0.6°","GA - 0.8°","Path Angle <:","——"],
    ["3319","3058","Path High at Landing (below 20ft)<br />着陆航径高 (低于 20英尺)","2.25 °","2.65 °","3 °","ALT_AFE <= 50; Slope <:","——"],
    ["3311","3046","Level off in Approach below 1000ft<br />进近中平飞（低于1000FT）","","ON","","INFO EVENT","——"],
    ["3809","3131","Heading excursion during takeoff<br />起飞滑跑航向偏摆","3deg","5deg","","deltaHDG>=","——"],
    ["3801","3089","Deviation below Glideslope (1000ft - 500ft)<br />低于下滑道(1000英尺 - 500英尺)","","1 dot","1.5 dot","GLIDE >: ?TOL >= 3s","3s"],
    ["3802","3090","Deviation above Glideslope (1000ft - 500ft)<br />高于下滑道 (1000英尺 -500英尺)","","-1 dot","-1.5 dot","GLIDE >: ?TOL >= 3s","3s"],
    ["3804","","盲降进近500以下高于下滑道","","1.0DOT","1.5 dot","  AFE<500，<br />G/S>0.25，T>5S ","3s"],
    ["3805","","盲降进近500以下低于下滑道",""," -1.0DOT","-1.5 dot","  AFE<500，<br />G/S>-0.25，T>5S ","3s"],
    ["3803","3091","Deviation from Localizer (1000ft - 500ft)<br />偏离航道 (1000英尺 - 500英尺)","0.5 dot","0.75dot","1.0dot","|LOCC| >: ?TOL >= 3s","3s"],
    ["3813","","盲降进近500以下偏离航道","0.5dot","0.75dot","1.0dot","  AFE<500，<br />LOC>0.25，T>5S ","3s"],
    ["3811","","高下滑道进近","","ON","","AFE<3000,Gp≥1个点，形态<2或起落架UP，V/S<1500，","——"],
    ["3807","3097","Heading Excursion During Landing Roll<br />着陆滑跑航向偏摆","4 °","5 °","6 °","Touch Down to 80kts，deltaHDG >=:","——"],
    ["3806","3092","Heading Deviation at Landing (above 60kts)<br />着陆滑跑航向偏 (高于 60kts)","取消一级","3 °","5 °","4sec after TD GS > 60kts HDGdev >:","3s"],
    ["3819","","平飘时间短","4S","3.5S","3S","",""],
    ["3808","","平飘时间长","10S","12S","14S","",""],
    ["","","着陆拉开始晚","〈25尺","〈20","","","——"],
    ["3818","3099","Long Flare Distance <br />平飘距离长","取消一级","900 m","1050 m","DIST_TO_THR (at TD)","——"],
    ["3817","3098","Short Flare Distance<br />平飘距离短","","260","230 m","DIST_TO_THR (at TD) <=:","——"],
    ["3901","3102","Flaps/Slats extended above Max altitude<br />放襟缝翼高度超限","","20000","","For 10s, FLAPS deployed and ALT_STD >","——"],
    ["3635","","建立着陆形态早",">2500","","","","——"],
    ["3601","3065","Flaps Late Setting at Landing<br />建立着陆形态晚","","1300 ft","1000 ft","ALTITUDE<:","——"],
    ["3602","3066","Landing with Incorrect Flap Setting<br />非正常着陆形态","","形态3","<形态2","","——"],
    ["3607","3069","Auto Pilot Off Detected in Cruise<br />巡航阶段自动驾驶断开","","5sec","","Length of Time AP off during Cruise: H>29000","5s"],
    ["3613","3072","Speed Brakes Out with Significant Thrust<br />使用减速板时发动机推力大","","N1 > 60%","","N1 > 60%","10s"],
    ["3604","","takeoff check<br />未设置起飞型态","","","ON"," 3076 3122","——"],
    ["3603","3122","Take Off Config Warning<br />起飞形态警告","","","ture","WARNING=:","——"],
    ["3609","3070","Landing Gear Late Retraction<br />收起落架晚","500 ft "," 700 ft","","ALTITUDE > : After TO /500<br />After GA/700","——"],
    ["3608","","Gear early retraction<br />收轮早","","ON","","IVV<0  OR  AFE<10","——"],
    ["3600","3064","Flaps Early Retraction at Take Off<br />起飞收形态高度低","< 700","< 400","","Slats/Flaps setings change at _ALTITUDE <","——"],
    ["3605","3067","Configuration change Questionable<br />during Go around<br />复飞程序不正确","Gear down in CONF 3 >= 10s","> 20 s gear down and CONF FULL","gear up in CONF FULL","Length of Time :","10s"],
    ["3634","3119","Landing Gear Not Locked Down<br />起落架未放下锁定","","","1000ft","LDG not locked down below:","——"],
    ["3636","","起飞先收形态后收轮","60秒","","","","60s"],
    ["3606","3068","Speed Brakes Used in Approach (below 1000ft)<br />低高度使用减速板 (低于 1000英尺)","","Speed Brakes out in Final Appr.","","Speed Brakes out in Final App.","——"],
    ["3639","3020","Braking Delayed at Landing<br />落地延迟使用刹车","18s","23s","30s","TIME >","——"],
    ["3638","3026","Braking Questionable at Landing<br />落地刹车粗","-0.35G","-0.45","","LONG_ACC>: TOL >= 3s","3s"],
    ["3640","","自动刹车断开晚","","GS<20","","GS<20,AUTOBRAKE-ON","——"],
    ["3914","3112","Overweight Landing<br />超重着陆","","","61/62.5（A319）64.5（A320）75.5（A321）","Landing weight > =:","——"],
    ["3912","3165","Overweigh at take off<br />超重起飞","","","ON","机型限制值68.0/70.0/73.5/75.5/77.O/89.0","——"],
    ["3913","","超重滑行","","","GW>LMT","机型限制值68.4/70.4/73.9/75.9/77.4//89.4","——"],
    ["3922","3075","Autoland<br />自动着陆","","Ture","","Landing performed with AP ON","——"],
    ["3923","3118","Autoland Warning<br />自动驾驶断开晚","200英尺","","50英尺","WARNING=:","——"],
    ["3701","3077","Thrust Low in Approach (below 500ft RA)<br />进近时推力小 (低于 500英尺 RA)","","19 %（A319）12 %（A320）19 %（A321）","","THR_DEFICIT >:","——"],
    ["3718","3080","Thrust Asymmetry in Approach<br />进近时推力不对称","","3 s","","(N1_1 - N1_2) > 10 RPM: (EPR_1 -EPR_2)>0.05:","60s"],
    ["3716","3084","Thrust Asymmetry in flight<br />飞行中推力不对称<br />","","10?%","","(N1_1-N1_2) ; tol 3 s (Climb - Desc/Cruise)","3s"],
    ["3720","","使用TOGA超限","","〉5分钟","","","——"],
    ["3705","3084","Thrust Asymmetry in flight<br />飞行中推力不对称","","","","(N1_1-N1_2) ; tol 20/30 s (Climb - Desc/Cruise);",""],
    ["3710","3171","N1 asymmetry during take off<br />起飞阶段N1不对称","","3","5","N1_1-N1_2>=3 ;GS>40","——"],
    ["3712","3081","Thrust Asymmetry during Landing Roll out<br />着陆滑跑时推力不对称","","10 s","","(N1_1 - N1_2) > 10 RPM: (EPR_1 -EPR_2) > 0.05:","10s"],
    ["3714","3106","Engine Reverser selected in Flight<br />空中使用反推","","","at least 3 secs before Touchdown","REVERSER sel. in flight for more than 1sec","——"],
    ["3702","3078","EGT High<br />EGT高","","","CFM-725/950<br />IAE319/320-635<br />IAE321-635/650","EGT_1 or EGT_2 ","2s"],
    ["3722","","起飞后增速早","AFE<1500,形态减小","","","","——"],
    ["3703","3079","Thrust Reduction Late at Landing<br />落地后收油门","","A/C on Ground for 2 secs","","Thrust Still High and :","2s"],
    ["3708","3082","Thrust High during Taxi<br />滑行时推力大","N1 : 45 % <br />EPR : 1.05","","","Any Engine >","3s"],
    ["3724","3162","Taxi with single engine<br />单发滑行","","CFM<16/IAE<20(或EPR<1)GS>5","","双发启动参数稳定后","——"],
    ["3726","","对正跑道前推力大","","N1>50","","航向偏差>30,N1>50","3s"],
    ["3611","3071","Reversers Delayed at Landing<br />使用反推晚","","10 sec after touch down or _CAS < 30 kts","","Reverse not deployed:","——"],
    ["3728","3074","Reversers High Thrust at Low Speed<br />低速时全反推","50 kts","","","Full reverse applied with CAS <","——"],
    ["3730","","着陆未使用反推","","GS<40，REV NOT OPEN","","T/D TO GS<40，REV NOT OPEN","——"],
    ["3732","3120","Engine Shutdown in Flight<br />发动机空中停车","","","<= 300 °","During 20s N2 < 12 and EGT <:","20s"],
    ["3920","3183","GPWS  unknown  warning<br />GPWS类型不具体警告","","","On ","Gpws  unknown  ","2S"],
    ["3900","3170","MASTER WARNING<br />主警告","","","ON","ON","2S"],
    ["3903","3104","Windshear Warning <br />风切变警告","","","WIND_SHEAR","_WARNING =:","——"],
    ["","3181","GPWS  windshear  warning <br />GPWS风切变警告","","","On ","Gpws  windshear   ","2S"],
    ["3962","","风切变改出程序不正确","","Ture","","_WARNING =:改出动作在警告解除前收油门、改变形态","——"],
    ["3964","","风切变警告继续进近","","","on","风切变警告5秒后油门未TOGA","5s"],
    ["3971","3179","GPWS  too low terrain  warning<br />GPWS太低地形警告","","","On ","Gpws  too low terrain  ","2S"],
    ["3972","3174","GPWS pull up warning <br />GPWS pull up 警告","","","On ","Gpws  pull up  ","2S"],
    ["3973","3180","GPWS  glideslope  warning <br />GPWS下滑道警告","","","On ","Gpws glideslope  ","2S"],
    ["3974","3178","GPWS  too low flaps  warning<br />GPWS太低襟翼警告","","","On ","Gpws  too low flaps   ","2S"],
    ["3975","3177","GPWS  too low gear  warning <br />GPWS太低起落架警告","","","On ","Gpws  too low gear  ","2S"],
    ["3976","3176","GPWS don’t sink warning<br />GPWS don’t sink 警告","","","On ","Gpws   don’t sink ","2S"],
    ["3977","3173","GPWS sink rate warning <br />GPWS sink rate 警告","","","On ","Gpws sink rate ","2S"],
    ["3933","3121","Smoke Warning<br />烟雾警告","","","Smoke","WARNING=:","——"],
    ["3918","3114","TCAS Resolution Advisory TCAS <br />RA 警告","","","1s/ ON","TCAS_RA during:","——"],
    ["3909","3109","Alpha FloorAlpha<br />Alpha平台","","","True","_ALPHA_FLOOR:","——"],
    ["3910","3110","Alternate Law<br />备用法则","","","True","ALTERN_LAW:","——"],
    ["3911","3111","Direct Law<br />直接法则","","","True","DIRECT_LAW:","——"],
    ["3917","3113","Dual Stick Inputs<br />侧杆双操纵","","","(x>=2°TOL3 sec) AND (y>=2° TOL 3 sec)","(x>=2°  AND y>=2° )","3s"],
    ["3960","","TCAS  RA避让程序不正确","","AP/FD   ON ","","AP/FD  ON ","3s"],
    ["3711","3168","Thrust Reduce during climb<br />减推力早","1500","","","FLEX/TOGA—CLB,AFE<","——"],
    ["3958","3018","Rejected Takeoff Detected<br />中断起飞","=<80kts",">80kts",">100kt","TOGA/FLEX→IDLE/REV,CAS >:","——"],
    ["3904","3105","Go Around复飞",">200","<=200","<=50","Go Around when ALT_AFE:","——"],
    ["3954","","中止着陆","","","AFE<50，油门TOGA","","——"],
    ["3956","","中止着陆姿态小","","小于5°","","油门TOGA后，姿态<5°，时间>3秒","3s"],
    ["3958","","中止着陆姿态大","","",">10.5°(A319/A320);>8.0°（A321）","油门TOGA后，姿态>10.5°(A319/A320);>8.0°（A321）/时间>2秒","2s"],
    ["3906","3107","Bounced Landing<br />着陆跳跃","","Bounced","","Bounced","——"],
    ["3952","3108","Touch And Go<br />落地连续起飞","More than one","Only one","","Touch and go:","——"],
    ["3950","","着陆低油量","","","1110(A319)/1137(A320)/1427(A321)","fuel-land<=","——"],
    ["4214","3149","Tail strike risk at take off <br />起飞擦机尾风险","","",""," 3028 3029","——"],
    ["3033","3024","Tail wind High at Landing (below 100ft)<br />落地时顺风大（低于100英尺）","",">12 kts",">15 kts","Average tail wind from 100 to 0ft >:","——"],
    ["4001","3135","Continuously slow during final<br />五边持续速度小","","","","300630083010","——"],
    ["4003","3137","Continuously fast during final<br />五边持续速度大","","",""," 3005 3007 3009","——"],
    ["4022","3143","Bank continuously excessive close to ground<br />低高度持续大坡度","","",""," 3035 3036 3037","——"],
    ["4012","3140","Roll oscillations prior to flare<br />拉平前横滚","","",""," 3035 3045","——"],
    ["4009","3139","Late offset in short final<br />","","",""," 3036 3096","——"],
    ["4206","3147","Wing strike risk at landing <br />着陆擦机翼风险","","",""," 3044 3140","——"],
    ["4000","3134","Continuously low during final<br />五边持续低于下滑道","","","","304830503052","——"],
    ["4002","3136","Continuously high during final<br />五边持续高于下滑道","","",""," 3047 3049 3051","——"],
    ["4202","3138","Continuously steep during final<br />五边持续航径陡","","",""," 3055 3056 3057","——"],
    ["4200","3144","Low energy situation in approach<br />进近中能量低 ","","",""," 3134 3135 3077","——"],
    ["4201","3145","High energy situation in approach<br />进近中能量高 ","","",""," 3136 3137 3138","——"],
    ["4205","3146","Tail strike risk at landing <br />着陆擦机尾风险","","",""," 3032 3034","——"],
    ["4207","3148","Hard landing risk<br />重着陆风险","","",""," 3058 3101","——"],
    ["","101","Training flight训练航班","","","","touch and go>2","——"],
    ["","109","Incomplete flight不完整航班","","","","NO landing","——"],
    ["","110","Flight phase unknown detect<br />不能正确划分航段航班","","","","unknown","——"],
    ["客户化代码","事件代码","事件描述","一级事件标准","二级事件标准","三级事件标准","监控条件和时机","持续时间"],
["","4103","Taxi Speed High in Turn<br />转弯滑行速度大","",">15 kts,tol>=2s",">18 kts,tol>=2s","GS >",""],
["","4715","Flaps Late Setting At Landing<br />建立着陆形态晚","","1200 ft","1000 ft","ALTITEUDE<:",""],
["","6101","late autopilot off during landing <br />自动驾驶断开晚","","150ft-50ft","50-0ft","AP_ENGAGED(-1)=1 AND AP_ENGAGED=0,HEIGHT<:",""],
["","6209","Low fuel at landing<br />着陆油量低","","","1665KG(319)1706KG(320CFM/IAE) 1425KG(320LEAP/PW) 2155KG(321CFM/IAE) 1552KG(321LEAP/PW)","LANDING_FUEL<:",""],
["","4101","Taxi Speed High In Straight Line<br />直线滑行速度大",">30 kts,tol>=2s",">35 kts,tol>=2s","","GS>",""],
["","4109","Low speed during flap/slat retraction<br />收襟缝翼速度小","IAS<F_speed-3或IAS<S_speed-3","IAS<F_speed-5或IAS<S_speed-5","","FLAP_LEVER_C(-1)>FLAP_LEVER_C,IASC(-1)<:",""],
["","4401","Heading  Early Change at Take Off<br />起飞过早转弯","","<400","","ABS(ROLL)>10 DURING 10S,HEIGHT(-10)<:",""],
["","4701","Landing Gear early Retraction<br />起飞收轮早","","<10FT or IVV<0","","LDG_SEL_UP由0变1时,监控RALTC、IVVC",""],
["","4705","Flaps Early Retraction at Take Off<br />起飞收形态早","","<1500ft","","Slats/Flaps settings change at_ALTITUDE<",""],
["","4735","Speed Brakes Used in Approach(<1000ft)<br />低高度使用减速板(<1000ft)","","","true",":",""],
["","5107","N1 asymmetry during take off or landing<br />起飞/着陆滑跑N1不对称","","ABS(N11-N12)>3%,tol>=5s;TLA为FULL_REVERSE/REVERSE时，|N11-N12|>10%，5s","","(N1_1-N1_2)>10 RPM:(EPR_1-EPR_2)>0.05:",""],
["","5111","N1 high when pressing TOGA<br />按TOGA时N1值大","60","","","Any TLAC from <4 to >=4,Any N1(-2)>:",""],
["","6207","Incorrect G/A procedures <br />复飞动作错误","","","","Length of Time:",""],
["","9035","Dual Stick Inputs<br />侧杆双操纵","","","TOL >= 3s","(x>=2°)  AND (y>=2°)",""],
["","4141","High Speed below ft100<br />一万尺下速度大","","265kts,tol>5sA350：250kts","","ALT_QNH<8000,ABS(IASC)>:",""],
["","4153","Speed High When Exit Rumway<br />脱离跑道速度大","40 kts","45 kts","50 kts","35ft<ALT_AFE<1500ft; CASC>V2/VAPP+",""],
["","4703","Landing Gear Late Retraction<br />起飞收轮晚","",">1500ft","","ALTITUDE>:After TO/After GA",""],
["","4711","Auto Pilot Off Detected in Cruise(>29000ft)<br />巡航阶段自动驾驶断开(>29000ft)","","disconnected>5s","","Length of Time AP off during Cruise:",""],
["","4713","Speed Brakes Out with Significant Thrust<br />使用减速板时发动机推力大","","N1>60%,tol>=10s","","Length of Time(N1>60):",""],
["","4721","Landing with Incorrect Flap Setting<br />非正常着陆形态","","","CONF<3","CONF",""],
["","5101","Taxi with single engine<br />单发滑行","","true","","",""],
["","5105","Takeoff thrust set up early<br />对正跑道前推力大","","转入跑道前N1>=50","","Heading Ref - Heading > 30°; N1_1 or N1_2 >:",""],
["","5117","Thrust Reduction Late at Landing<br />接地后收油门","","detected","","Thrust Still High and:",""],
["","5205","Reversers deployed late during Landing<br />接地使用反推晚","","TR deployed more than 10sec after touchdown","","Reverse not deployed:",""],
["","5207","No Reversers<br />无反推","","true","","landing,GS>=40,both TLAC>1 All the time",""],
["","4405","Thrust Reduce early during initial climb<br />初始爬升减推力早","","<1500ft","","以离地瞬间的TLA1_C为起飞推力，监控初始爬升开始的推力，如TLA1_C持续3s小于起飞推力，HEIGHT(-2)<:",""],
["","4719","Late landing gear extension<br />着陆放轮晚","1500FT","1300FT","1000FT","进近下降中,LDG_LOK_DW由0变1时,HEIGHT<;",""],
["","5103","Thrust High during Taxi<br />滑行时推力大","","N1：45%,tol>=3","","Any Engine>: TOL>=3s",""],
["","6103","Autoland<br />自动着陆","true","","","Landing performed with AP ON",""],
["","9019","Landing Gear Not Locked Down<br />起落架未放下锁定","","","1000ft","LDG not locked down below:",""],
["","4707","Landing gear retraction after configuration change during takeoff <br />起飞先收形态后收轮","true","","","爬升中,记T1为LDG_SEL_UP由0变1时,T2为CONF变化时，若T1-T2>180s",""],
["","5109","N1 asymmetry when take off<br />起飞时N1不对称","","ABS(N11-N12)>3%","","GS_C>20,(TLA2_C>=4 OR TLA3_C>=4)",""],
["","5113","Thrust Asymmetry flight<br />飞行中推力不对称","","ABS(N11-N12)>10%,tol>=3s","","(N1_1-N1_2) ; tol 20/30 s (Climb - Desc/Cruise);",""],
["","5203","Reversers Retracted late during landing<br />低速时全反推","IAS<=55 kts","","","Full reverse applied with CAS<",""],
["","4149","Incorrect VAPP/MCP speed setting in final approach<br />进近时目标速度有问题","","tol>=4s,Vapp>Vls+25kts","","VAPP>:",""],
["","4717","Ground Spoiler lever not armed<br />扰流板未预位","","Not armed prior to take off or landing","","GND spoiler lever position",""],
["","4727","late landing gear retraction during go around<br />复飞收轮晚","",">60s","","",""],
["","5201","Engine Reverser selected flight<br />空中使用反推","","","true","REVERSER selected in flight fro more than 1sec",""],
["","6201","Rejected Takeoff Detected<br />中断起飞","<80kts",">=80kts",">=100kts","CAS>:",""],
["","6205","Incorrect procedure after Windshear warning<br />风切变改出程序不正确","","true","","",""],
["","4701","Landing Gear early Retraction<br />起飞收轮早","","<10FT or IVV<0","","",""],
["","4707","Landing gear retraction after configuration change during takeoff <br />起飞先收形态后收轮","true","","","",""],
["","4719","Late landing gear extension<br />着陆放轮晚","1500FT","1300FT","1000FT","",""],
["","5207","No Reversers<br />无反推","","true","","",""],
["","4401","Heading  Early Change at Take Off<br />起飞过早转弯","","<400","","",""],
["","4405","Thrust Reduce early during initial climb<br />初始爬升减推力早","","<1500ft","","",""],
["","4735","Speed Brakes Used in Approach (below 1000ft)<br />低高度使用减速板(低于1000ft)","","","true",":",""],
["","5109","N1 asymmetry when take off<br />起飞时N1不对称","","ABS(N11-N12)>3%","","",""],
["","5111","N1 high when pressing TOGA<br />按TOGA时N1值大","60","","","",""],
["","4141","High Speed below FT100<br />一万尺下速度大","","265kts,tol>5s A350：250kts","","",""],
["","6101","late autopilot off during landing <br />自动驾驶断开晚","","150ft-50ft","50-0ft","",""],
["","6209","Low fuel at landing<br />着陆油量低","","","1665KG(319) 1706KG(320CFM/IAE) 1425KG(320LEAP/PW) 2155KG(321CFM/IAE) 1552KG(321LEAP/PW)","",""],
["","4109","Low speed during flap/slat retraction<br />收襟缝翼速度小","IAS<F_speed-3或IAS<S_speed-3","IAS<F_speed-5或IAS<S_speed-5","","",""],
["","4149","Incorrect VAPP/MCP speed setting in final approach<br />进近时目标速度有问题","","tol>=4s, Vapp>Vls+25kts","","VAPP>:",""],
["","5107","N1 asymmetry during take off or landing<br />起飞/着陆滑跑N1不对称","","ABS(N11-N12)>3%,tol>=5s; TLA为FULL_REVERSE/REVERSE时，|N11-N12|>10%，5s","","(N1_1-N1_2)>10 RPM:(EPR_1-EPR_2)>0.05:",""],
["","6207","Incorrect G/A procedures <br />复飞动作错误","","","","Length of Time:",""]
    ]
    