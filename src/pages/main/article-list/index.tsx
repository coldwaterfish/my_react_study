import { memo, useEffect, useState } from "react";

import { handleArticleList } from "api/index";
import { Button, Form, Input, Modal, Space, Table, DatePicker } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useLocation, useNavigate } from "react-router-dom";

import "./index.less";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import moment from "moment";

const { RangePicker } = DatePicker;

export interface article {
  key: number;
  title: string;
  createTime: string;
  updateTime: string;
}

// 组件
const ArticleList = () => {
  // 文章列表-初始数据
  const [articleList, setArticleList] = useState<article[]>([]);

  // 文章列表-copy
  const [articleListCopy, setArticleListCopy] = useState<article[]>([]);

  // 对话框-删除
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  // 点击的文章-编辑/删除
  const [selectArticle, setSelectArticle] = useState<article>();

  // router
  const navigate = useNavigate();
  const location = useLocation();

  // search-form
  const [form] = Form.useForm();

  // 根据窗口宽度调整search-form的布局
  const [formLayout, setFormLayout] = useState<
    "horizontal" | "vertical" | "inline"
  >("inline");

  // effect
  useEffect(() => {
    (async function () {
      const result = await handleArticleList(location.pathname);
      if (result && result.data) {
        const articleList=JSON.parse(result.data)
        setArticleList(articleList);
        setArticleListCopy(articleList);
      }
    })();
  }, []); // eslint-disable-line

  // 点击id,跳转文章详情
  const idClick = (text: number) => {
    return () => {
      navigate(`${location.pathname}/article`, {
        state: { key: text },
      });
    };
  };

  // 编辑
  const onEdit = (record: article) => {
    return () => {
      console.log(record);
    };
  };

  // 删除
  const onDelete = (record: article) => {
    return () => {
      setIsDeleteModal(true);
      setSelectArticle(record);
    };
  };

  // 确认删除
  const handleDeleteOk = () => {
    const arr = [...articleList];
    const index = articleList.findIndex((item) => item === selectArticle);
    arr.splice(index, 1);
    setArticleList(arr);
    setIsDeleteModal(false);
  };

  // 取消删除
  const handleDeleteCancel = () => {
    setIsDeleteModal(false);
  };

  // 列表搜索
  const onSearch = (values: any) => {
    const { articleKey, articleTitle, articleDateTime } = values;
    let filterList = articleListCopy.filter((item) => {
      let isKey = true;
      if (articleKey) {
        isKey = item.key.toString().includes(articleKey);
      }
      let isTitle = true;
      if (articleTitle) {
        isTitle = item.title.includes(articleTitle);
      }
      let isDateTime = true;
      if (articleDateTime) {
        isDateTime =
          articleDateTime[1] >= moment(item.createTime) &&
          moment(item.createTime) >= articleDateTime[0];
      }
      return isKey && isTitle && isDateTime;
    });
    setArticleList(filterList);
  };

  // 设置表格的layout
  const setSearchFormLayout = () => {
    let width =
      window.innerWidth || //浏览器窗口的内部宽度（包括滚动条）
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      setFormLayout("vertical");
    } else {
      setFormLayout("inline");
    }
  };
  // effect
  useEffect(() => {
    setSearchFormLayout();
    return () => {
      window.removeEventListener("resize", setSearchFormLayout, false);
    };
  }, []); // eslint-disable-line

  // 监听窗口宽度
  window.addEventListener("resize", setSearchFormLayout, false);
  // 表格的标题
  const columns: ColumnsType<article> = [
    {
      title: "编号",
      dataIndex: "key",
      key: "key",
      render: (text: number) => (
        <Button
          onClick={idClick(text)}
          type="text"
          style={{ color: "#1890ff" }}
          className="idButtonStyle"
        >
          {text}
        </Button>
      ),
      // 添加默认排序，初始显示会有黑色背景
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "创建日期",
      dataIndex: "createTime",
      key: "createTime",
      render: (text: string) => {
        if (text) return <span>{text}</span>
        return <span>2022-01-01</span>
      },
      // 响应式-显示/隐藏
      responsive: ["md"],
    },
    {
      title: "修改日期",
      dataIndex: "updateTime",
      key: "updateTime",
      render: (text: string) => {
        if (text) return <span>{text}</span>
        return <span>2022-01-02</span>
      },
      responsive: ["md"],
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <Button onClick={onEdit(record)} type="primary" size="small">
              编辑
            </Button>
            <Button onClick={onDelete(record)} type="primary" size="small">
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <Modal
        title="提示："
        visible={isDeleteModal}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>
          确认删除 : {selectArticle?.key} {selectArticle?.title} ?
        </p>
      </Modal>
      <div className="header">
        <Form
          name="search-form"
          onFinish={onSearch}
          form={form}
          layout={formLayout}
        >
          <Form.Item name="articleKey">
            <Input style={{ width: "200px" }} placeholder="编号" />
          </Form.Item>
          <Form.Item name="articleTitle">
            <Input style={{ width: "200px" }} placeholder="标题" />
          </Form.Item>
          <Form.Item name="articleDateTime">
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              搜索
            </Button>
          </Form.Item>
        </Form>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
          添加
        </Button>
      </div>
      <Table<article>
        columns={columns}
        dataSource={articleList}
        className="articleTable"
      />
    </>
  );
};

export default memo(ArticleList);
