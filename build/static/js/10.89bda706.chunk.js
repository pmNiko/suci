(this.webpackJsonpsuci=this.webpackJsonpsuci||[]).push([[10],{194:function(n,e,i){"use strict";i.d(e,"c",(function(){return x})),i.d(e,"a",(function(){return g})),i.d(e,"k",(function(){return $})),i.d(e,"i",(function(){return p})),i.d(e,"d",(function(){return D})),i.d(e,"l",(function(){return v})),i.d(e,"b",(function(){return I})),i.d(e,"j",(function(){return T})),i.d(e,"e",(function(){return P})),i.d(e,"f",(function(){return y})),i.d(e,"h",(function(){return C})),i.d(e,"g",(function(){return S}));var r=i(62),t=i(36),c=i.n(t);function d(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation DishPreparing($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    dishPreparing(order_id: $order_id, dish_id: $dish_id) {\n      dishes {\n        _id\n        count\n      }\n    }\n  }\n"]);return d=function(){return n},n}function a(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation DishReady($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    dishReady(order_id: $order_id, dish_id: $dish_id) {\n      _id\n      dishes {\n        _id\n        state\n      }\n    }\n  }\n"]);return a=function(){return n},n}function s(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation DishDelivered($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    dishDelivered(order_id: $order_id, dish_id: $dish_id) {\n      dishes {\n        _id\n        count\n      }\n    }\n  }\n"]);return s=function(){return n},n}function o(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation DishReadyToOrder($order_id: ID!, $dishes: [ID]) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    dishReadyToOrder(order_id: $order_id, dishes: $dishes) {\n      dishes {\n        _id\n      }\n    }\n  }\n"]);return o=function(){return n},n}function u(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation DishPreparingToOrder($order_id: ID!, $dishes: [ID]) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    dishPreparingToOrder(order_id: $order_id, dishes: $dishes) {\n      dishes {\n        _id\n      }\n    }\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation PayOrder($order_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    payOrder(order_id: $order_id) {\n      _id\n      paid\n    }\n  }\n"]);return l=function(){return n},n}function j(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation CloseOrder($order_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    closeOrder(order_id: $order_id) {\n      _id\n      table\n    }\n  }\n"]);return j=function(){return n},n}function h(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation DeleteOrder($order_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    deleteOrder(order_id: $order_id) {\n      _id\n      table\n    }\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation IncrementDishToOrder($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    decrementDishToOrder(order_id: $order_id, dish_id: $dish_id) {\n      dishes {\n        _id\n        count\n      }\n    }\n  }\n"]);return b=function(){return n},n}function O(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation IncrementDishToOrder($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    incrementDishToOrder(order_id: $order_id, dish_id: $dish_id) {\n      dishes {\n        _id\n        count\n      }\n    }\n  }\n"]);return O=function(){return n},n}function f(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation PopDishToOrder($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    popDishToOrder(order_id: $order_id, dish_id: $dish_id) {\n      dishes {\n        _id\n      }\n    }\n  }\n"]);return f=function(){return n},n}function _(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation AddDishToOrder($order_id: ID!, $dish_id: ID!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    addDishToOrder(order_id: $order_id, dish_id: $dish_id) {\n      dishes {\n        _id\n        name\n        price\n        category\n        count\n        state\n      }\n    }\n  }\n"]);return _=function(){return n},n}function m(){var n=Object(r.a)(["\n  # definici\xf3n de la mutaci\xf3n\n  mutation CreateOrder($table: Int!) {\n    # ejecuci\xf3n de la mutaci\xf3n\n    createOrder(table: $table) {\n      _id\n      number\n      date\n      time\n      table\n      closed\n    }\n  }\n"]);return m=function(){return n},n}var x=c()(m()),g=c()(_()),$=c()(f()),p=c()(O()),D=c()(b()),v=c()(h()),I=c()(j()),T=c()(l()),P=c()(u()),y=(c()(o()),c()(s())),C=c()(a()),S=c()(d())},271:function(n,e,i){"use strict";i.r(e);var r=i(10),t=i(191),c=i(1),d=i(264),a=i(267),s=i(167),o=i(146),u=i(229),l=i(234),j=i(232),h=i(228),b=i(230),O=i(266),f=i(231),_=i(196),m=i.n(_),x=i(197),g=i(174),$=i(240),p=i.n($),D=i(59),v=i(22),I=i(175),T=i(194),P=Object(s.a)({table:{minWidth:700}});function y(n){return"".concat(n.toFixed(2))}function C(n,e){return n*e}var S=Object(D.b)(null,(function(n){return{pay:function(e){return n(Object(v.y)(e))}}}))((function(n){var e=n.order,i=n.pay,c=P(),d=function(n){var e=0;return n.map((function(n){e+=C(n.price,n.count)})),e}(e.dishes),a=.07*d,s=d-a,O=Object(I.useMutation)(T.j),_=Object(t.a)(O,1)[0],$=function(){var n=Object(x.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(e._id),n.next=3,_({variables:{order_id:e._id}}).then((function(n){})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsx)(h.a,{component:o.a,children:Object(r.jsxs)(u.a,{className:c.table,"aria-label":"spanning table",children:[Object(r.jsxs)(b.a,{children:[Object(r.jsx)(f.a,{children:Object(r.jsx)(j.a,{align:"center",colSpan:5,children:"FACTURA"})}),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{align:"center",children:e.number}),Object(r.jsxs)(j.a,{align:"center",children:["Mesa N\xba ",e.table]}),Object(r.jsxs)(j.a,{align:"right",children:["Fecha: ",e.date]}),Object(r.jsxs)(j.a,{align:"right",children:["Hora: ",e.time]}),Object(r.jsx)(j.a,{align:"right",colSpan:3,children:"Precio"})]}),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{children:"Item"}),Object(r.jsx)(j.a,{align:"center",children:"Cantidad"}),Object(r.jsx)(j.a,{align:"right",children:"Precio Unitario"}),Object(r.jsx)(j.a,{align:"right",children:"Sum"})]})]}),Object(r.jsxs)(l.a,{children:[e.dishes.map((function(n){var e=n._id,i=n.name,t=n.count,c=n.price;return Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{children:i}),Object(r.jsx)(j.a,{align:"center",children:t}),Object(r.jsx)(j.a,{align:"right",children:y(c)}),Object(r.jsx)(j.a,{align:"right",children:y(C(c,t))})]},e)})),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{rowSpan:3}),Object(r.jsx)(j.a,{colSpan:2,children:"Subtotal"}),Object(r.jsx)(j.a,{align:"right",children:y(d)})]}),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{children:"Descuento"}),Object(r.jsx)(j.a,{align:"right",children:"".concat((.07*100).toFixed(0)," %")}),Object(r.jsx)(j.a,{align:"right",children:y(a)})]}),Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{colSpan:3,children:"Total"}),Object(r.jsx)(j.a,{align:"right",children:y(s)})]}),Object(r.jsx)(f.a,{children:Object(r.jsx)(j.a,{colSpan:5,children:Object(r.jsx)(g.a,{variant:"outlined",size:"small",color:"secondary",className:c.button,disabled:e.paid,onClick:function(){$()},startIcon:Object(r.jsx)(p.a,{}),fullWidth:!0,children:"COBRAR FACTURA"})})})]})]})})})),k=Object(s.a)({root:{width:"100%"},container:{maxHeight:500}}),w=function(n){var e=n.orders,i=n.setDetail,d=k(),a=Object(c.useState)(0),s=Object(t.a)(a,2),_=s[0],m=s[1],x=Object(c.useState)(10),g=Object(t.a)(x,2),$=g[0],p=g[1];return Object(r.jsxs)(o.a,{className:d.root,children:[Object(r.jsx)(h.a,{className:d.container,children:Object(r.jsxs)(u.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(r.jsx)(b.a,{children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)(j.a,{align:"center",children:"N\xba"}),Object(r.jsx)(j.a,{align:"center",children:"Comanda"}),Object(r.jsx)(j.a,{align:"center",children:"Mesa"}),Object(r.jsx)(j.a,{align:"center",children:"Estado"}),Object(r.jsx)(j.a,{align:"center",children:"Pagada"})]})}),Object(r.jsx)(l.a,{children:e.slice(_*$,_*$+$).map((function(n,e){return Object(r.jsxs)(f.a,{hover:!0,role:"checkbox",tabIndex:-1,onClick:function(){var e;e=n._id,i(e)},children:[Object(r.jsx)(j.a,{align:"center",children:e},n._id),Object(r.jsx)(j.a,{align:"center",children:n.number},n._id),Object(r.jsx)(j.a,{align:"center",children:n.table},n._id),Object(r.jsx)(j.a,{align:"center",children:n.closed?"Cerrada":"Abierta"},n._id),Object(r.jsx)(j.a,{align:"center",children:n.paid?"Si":"No"},n._id)]},e)}))})]})}),Object(r.jsx)(O.a,{rowsPerPageOptions:[10,25,100],component:"div",count:e.length,rowsPerPage:$,page:_,onChangePage:function(n,e){m(e)},onChangeRowsPerPage:function(n){p(+n.target.value),m(0)}})]})};e.default=Object(D.b)((function(n){return{orders:n.order.orders}}))((function(n){var e=n.orders,i=Object(c.useState)(""),s=Object(t.a)(i,2),o=s[0],u=s[1],l=e.filter((function(n){return n.closed})),j=e[0];return void 0!==o&&""!==o&&(j=e.filter((function(n){return n._id===o}))[0]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{container:!0,children:[Object(r.jsx)(d.a,{item:!0,md:5,children:Object(r.jsx)(a.a,{m:3,marginTop:8,children:Object(r.jsx)(w,{orders:l,setDetail:u})})}),Object(r.jsx)(d.a,{item:!0,md:7,children:Object(r.jsx)(a.a,{m:3,marginTop:8,children:Object(r.jsx)(S,{order:j})})})]})})}))}}]);
//# sourceMappingURL=10.89bda706.chunk.js.map