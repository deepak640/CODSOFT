import { DeleteOutlined } from "@ant-design/icons";
const CompletedTask = ({ data, setData }) => {
  const handleDelete = (task) => {
    setData((prev) => prev.filter(({ topic }) => topic !== task));
  };
  return (
    <div className="tasks completed-task-container">
      <h1 align="center">Completed tasks</h1>
      <ul>
        {data ? (
          data.map((item, index) => {
            return (
              <li className="items" data-aos="zoom-in" key={index}>
                <div>
                  <p>{item.topic}</p>
                  <p>{item.date}</p>
                </div>
                <DeleteOutlined
                  className="icon icon-red"
                  onClick={() => {
                    handleDelete(item.topic);
                  }}
                />
              </li>
            );
          })
        ) : (
          <p>Nothing completed ye</p>
        )}
      </ul>
    </div>
  );
};

export default CompletedTask;
