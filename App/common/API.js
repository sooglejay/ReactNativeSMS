/**
 * 进行定义请求Action类型
 */
'use strict';
//（1）交易码为0001,登录
// (2）交易码为0002,系统通知
// (3）交易码为0003,个人中心
//（4）交易码为0004,缴费汇总表-（应收）
//（5）交易码为0005, 缴费汇总表-（其他）
//（6）交易码为0006, 缴费明细表
//（7）交易码为0007, 应收缴费统计表
//（8）交易码为0008, 已完成订单
export const API_SERVER = 'http://115.28.177.161:8080/WebService.WebService/01';
export const HandShakeCode = {
    login: '0001',
    systemNotification: '0002',
    individualCenter: '0003',
    paymentTableRequire: '0004',
    paymentTableOthers: '0005',
    paymentDetail: '0006',
    paymentTableRequireCollection: '0007',
    orderCompleted: '0010',
}

export const bodyObj = (body) => {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:body
    }
}

export const RTN_CODE={
    RTN_CODE_00:"00",
    RTN_CODE_01:"01",
}