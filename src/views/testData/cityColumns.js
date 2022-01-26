/* eslint-disable */
export default [
  {
    label: '정보',
    children: [
      {
        label: '도시',
        valueKey: 'city',
        fixed: true,
      },
      {
        label: '주',
        valueKey: 'state'
      },
      {
        label: '이름',
        valueKey: 'name'
      },
      {
        label: '주소정보',
        children: [
          {
            label: '주소',
            valueKey: 'address'
          },
          {
            label: '우편번호',
            valueKey: 'zip'
          },
          {
            label: '날짜',
            valueKey: 'date',
            align: 'center'
          },
        ]
      }
    ]
  },
  {
    label: '국가',
  },
]

// {
//   label: '정보',
//   children: [
//     {
//       label: '도시',
//       valueKey: 'city',
//       fixed: true,
//     },
//     {
//       label: '주',
//       valueKey: 'state'
//     },
//     {
//       label: '이름',
//       valueKey: 'name'
//     },
//     {
//       lable: '주소정보',
//       children: [
//         {
//           label: '주소',
//           valueKey: 'address'
//         },
//         {
//           label: '우편번호',
//           valueKey: 'zip'
//         },
//         {
//           label: '날짜',
//           valueKey: 'date',
//           align: 'center'
//         },
//       ]
//     }
//   ],
// }
