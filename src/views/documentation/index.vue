<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=demo_English_button">Java backend integration</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/">Documentation</a>
    <a class="document-btn" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">Github Repository</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">国内文档</a>
    <dropdown-menu class="document-btn" :items="articleList" title="系列文章" />
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/job/">内推招聘</a>

    <div>
      <t-form-template
        v-if="treeOptions.length"
        v-model="formValue"
        label="검색"
        size="medium"
        :editable="true"
        type="search"
        :column-count="columnCount"
        :options="getFormOptions()"
      />
      <br>
      <t-table
        v-model="tableValue"
        :column-options="columnOptions"
        :table-data="tableData"
        :span-options="tableSpanOptions"
      />
      formValue: {{ formValue }}
    </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'
import cities from '@/views/testData/city'
import cityColumns from '@/views/testData/cityColumns'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: 'v4.0 篇', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ],
      textValue: '',
      textNumber: '',
      options: [],
      radioOptions: [],
      checkOptions: [],
      transferOptions: [],
      selectValue: null,
      radioValue: null,
      checkValue: [],
      switchValue: null,
      timeValue: '',
      dateValue: '',
      rateValue: 0,
      transferValue: null,
      treeValue: [],
      treeOptions: [],
      columnCount: 4,
      formOptions: [],
      formValue: {},
      selectCascadeOptions: [],
      columnOptions: cityColumns,
      tableOptions: {
        headerAlign: 'left',  // 헤더 정렬
        height: null,           // 테이블 높이(값이 설정되면 header 정보가 fix, null이면 height 설정 안 함)
        hideRowIndex: true,    // 행 번호 숨기기 여부(기본 표시)
        stripe: true,           // 홀수 행과 짝수 행을 배경색으로 구분
        border: true,           // 세로선 표시
      },
      tableData: cities,
      tableValue: { id: 1 },
      tableSpanOptions: [],
    }
  },
  computed: {
    treeDefaultProps() {
      return {
        children: 'children', // 자식 노드 명
        label: 'name',       // 노드 표시 이름
      }
    },
    treeDefaultProps2() {
      return {
        children: 'children', // 자식 노드 명
        label: 'name',       // 노드 표시 이름
      }
    },
  },
  /* Vue lifecycle: created, mounted, destroyed, etc */
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
    this.init()
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  destroyed() {
  },
  /* methods */
  methods: {
    init() {
      this.handleResize()
      this.getData()
      this.getFormOptions()
      this.formValue = { text: '테스트',
        number: 123,
        select: 1,
        selectcascade: [1, 111, 2, 21],
      }
      // this.tableSpanOptions = [
      //   {
      //     index: 2,      // row span 하려는 컬럼의 index 번호
      //     field: 'city', // 해당 컬럼의 속성명
      //   },
      //   {
      //     index: 3, 
      //     field: 'state',
      //   },
      // ]
    },
    handleResize() {
      this.columnCount = this.getRelativeColumnCount()
    },
    // TODO: 화면 크기별 컬럼 개수를 가져옴
    getRelativeColumnCount() {
      let count = 0
      // xs
      if (window.innerWidth < 768) count = 1
      // sm
      else if (window.innerWidth >= 768 && window.innerWidth < 992) count = 2
      // md
      else if (window.innerWidth >= 992 && window.innerWidth < 1200) count = 2
      // lg
      else if (window.innerWidth >= 1200 && window.innerWidth < 1920) count = 4
      // xl
      else if (window.innerWidth >= 1920) count = 4
      return count
    },
    getFormOptions() {
      const options = []
      options.push({
        key: 'text',
        type: 'text',
        label: '글자',
      })
      options.push({
        key: 'number',
        type: 'number',
        label: '숫자',
      })
      options.push({
        key: 'select',
        type: 'select',
        label: 'select',
        options: this.options,
        valueKey: 'id',
        labelKey: 'name',
      })
      options.push({
        key: 'selectcascade',
        type: 'selectcascade',
        label: '종속적 선택',
        options: this.selectCascadeOptions,
        valueKey: 'id',
        labelKey: 'name',
        returnType: 'object',
        multiple: true,
      })
      options.push({
        key: 'selectcascade2',
        type: 'selectcascade',
        label: '종속적 선택2',
        options: this.selectCascadeOptions,
        valueKey: 'id',
        labelKey: 'name',
        multiple: true,
      })
      options.push({
        key: 'tree',
        type: 'tree',
        label: 'tree',
        options: this.treeOptions,
        valueKey: 'id',
        labelKey: 'name',
        defaultProps: this.treeDefaultProps
      })
      return options
    },
    getData() {
      this.selectValue = [1, 2]
      this.radioValue = 2
      this.checkValue = [3]
      this.timeValue = ['23:15', '23:10']
      this.dateValue = ['2022-01-28']
      this.treeValue = [11, 12]
      setTimeout(() => {
        this.textValue = 'test'
        this.textNumber = 1000
        this.options = [
          {
            id: 1,
            name: '서울',
            order: 1
          },
          {
            id: 2,
            name: '부산',
            order: 2
          },
          {
            id: 3,
            name: '대구',
            order: 3
          },
        ]
        this.radioOptions = [
          {
            id: 1,
            name: '서울',
            order: 1
          },
          {
            id: 2,
            name: '부산',
            order: 2
          },
          {
            id: 3,
            name: '대구',
            order: 3
          },
        ]
        this.checkOptions = [
          {
            id: 1,
            name: '서울',
            order: 1
          },
          {
            id: 2,
            name: '부산',
            order: 2
          },
          {
            id: 3,
            name: '대구',
            order: 3
          },
        ]
        this.transferOptions = [
          {
            id: 1,
            name: '서울',
            order: 1
          },
          {
            id: 2,
            name: '부산',
            order: 2
          },
          {
            id: 3,
            name: '대구',
            order: 3
          },
          {
            id: 4,
            name: '인천',
            order: 1
          },
          {
            id: 5,
            name: '고양',
            order: 2
          },
          {
            id: 6,
            name: '광주',
            order: 3
          },
          {
            id: 7,
            name: '경기도',
            order: 1
          },
          {
            id: 8,
            name: '충청도',
            order: 2
          },
          {
            id: 9,
            name: '경상도',
            order: 3
          },
        ]
      }, 1000)

      setTimeout(() => {
        this.treeOptions = [
          {
            id: 1,
            name: '서울',
            order: 1,
            children: [
              {
                id: 11,
                name: '강서구',
                order: 1,
                children: [
                  {
                    id: 111,
                    name: '화곡동',
                    order: 1,
                  }
                ]
              },
              {
                id: 12,
                name: '강남구',
                order: 1,
              }
            ]
          },
          {
            id: 2,
            name: '부산',
            order: 2,
            children: [
              {
                id: 21,
                name: '중구',
                order: 1,
              },
              {
                id: 22,
                name: '연제구',
                order: 1,
              }
            ]
          },
          {
            id: 3,
            name: '대구',
            order: 3,
            children: [
              {
                id: 31,
                name: '서구',
                order: 1,
              },
              {
                id: 32,
                name: '중구',
                order: 1,
              }
            ]
          },
        ]
        this.selectCascadeOptions = this.$_.cloneDeep(this.treeOptions)
      }, 2000)
    }
  }
}
</script>

<style lang='scss' scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
