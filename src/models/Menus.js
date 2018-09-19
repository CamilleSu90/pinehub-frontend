/* eslint-disable */
import Model from './Model';
import _ from 'underscore';
export default class Menus extends Model {
  constructor(application) {
    super(application);
  }
  data() {
    return {
      activeMenu: null,
      list:[{
        id: '1',
	      title: '微信',
	      icon: '#icon-weixin',
	      path: 'wechat',
	      children: [{
          id: '2' ,
          title: '公众号管理',
          icon: '',
          path: 'index',
	      },{
          id: '3',
          title: '菜单管理',
          icon:'',
          path: 'menus'
        },{
          id: '6',
          title: '自动回复',
          icon: '',
          path: 'autoReply'
        },{
          id: '7',
          title: '素材管理',
          icon: '',
          path: 'materials'
        }]
      },{
        id: '8',
	      title: '店铺',
	      icon: '#icon-shangcheng',
	      path: 'shop',
	      children: [{
          id: '9',
          title: '店铺管理',
          icon: '',
          path: 'index',
	      },{
          id: '10',
          title: '关门店铺',
          icon: '',
          path: 'closed'
        },{
          id: '40',
          title: '营业店铺',
          icon: '',
          path: 'open'
        }]
      },{
        id: '11',
	      title: '营销',
	      icon: '#icon-icon_',
	      path: 'marketing',
	      children: [
          {
            id: '12',
            title: '营销中心',
            icon: '',
            path: 'index',
  	      },{
            id: '13',
            title: '满减/送',
            icon: '',
            path: 'up_to_cut',
	        },{
            id: '14',
            title: '支付有礼',
            icon: '',
            path: 'paid_gift',
	        },{
            id: '15',
            title: '优惠券',
  	        icon: 'fa fa-ticket',
  	        path: 'coupons',
          }]
      },{
        id: '16',
	      title: '商品',
	      icon: '#icon-category',
	      path: 'merchandise',
	      children: [{
          id: '17',
          title: '商品管理',
          icon: '',
          path: 'index',
	      },{
          id: '18',
          title: '出售中',
          icon: '',
          path: 'selling',
	      },{
          id: '19',
          title: '仓库中',
          icon: '',
          path: 'down',
	      },{
          id: '20',
          title: '已售罄',
          icon: '',
          path: 'sold_out',
	      },{
          id: '21',
          title: '品类管理',
          icon: '',
          path: '/category/index',
	      }]
      },{
        id: '22',
	      title: '订单',
	      icon: '#icon-dingdanguanli',
	      path: 'order',
	      children: [{
          id: '23',
          title: '订单管理',
          icon: '',
          path: 'index',
	      },{
          id: '24',
          title: '扫码付订单',
          icon: '',
          path: 'scan_payment',
        },{
          id: '25',
          title: '预定订单',
          icon: '',
          path: 'booking',
        },{
          id: '40',
          title: '即时订单',
          icon: '',
          path: 'immediate',
        },
        // {
        //   id: '16',
        //   title: '采购订单',
        //   icon: '',
        //   path: 'purchase',
        // },{
        //   id: '27',
        //   title: '分销订单',
        //   icon: '',
        //   path: 'distribution',
        // }
      ]
      },{
        id: '28',
	      title: '用户',
	      icon: '#icon-drxx10',
	      path: 'users',
	      children: [{
          id: '29',
          title: '客户管理',
          icon: '',
          path: 'customers',
	      },
        // {
        //   id: '30',
        //   title: '会员卡',
        //   icon: '',
        //   path: 'memberCard',
	      // },
        {
          id: '31',
          title: '会员管理',
          icon: '',
          path: 'members',
	      },{
          id: '32',
          title: '积分管理',
          icon: '',
          path: 'scores',
	      }]
      },{
        id: '33',
        title: '分销',
        icon: '#icon--',
        path: 'distribution',
        children:[
          {
            id: '34',
            title: '分销员管理',
            icon: '',
            path: 'score/manage',
          },{
            id: '35',
            title: '订单管理',
            icon: '',
            path: 'score/manage',
          },{
            id: '36',
            title: '提现管理',
            icon: '',
            path: 'score/manage',
          }
        ]
      },{
        id: '37',
        title: '财务',
        icon: '#icon-fenxi',
        path: 'finance'
      },{
        id: '38',
        title: '供应商',
        icon: '#icon-supplier',
        path: ''
      },{
        id: '39',
        title: '物流',
        icon: '#icon-icon_wuliuguanli',
        path: ''
      }]
    };
  }
  computed() {
    return {
      getMenuByPath :(state) => (path) => {
        let menu = null;
        _.map(state.list, function(value) {
          if(value.path === path){
            menu =   value;
          }
          if(value.children){
            _.map(value.children , function(child) {
              if((child.path.charAt(0) === '/' && child.path === path) || ('/' + value.path + '/' +child.path) === path) {
                menu =   child;
              }
            });
          }
        });
        return menu;
      }
    };
  }
}
