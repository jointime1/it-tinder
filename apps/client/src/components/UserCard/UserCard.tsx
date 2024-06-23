import { Card, Carousel } from "antd";

interface Props {
  title: string;
  description: string;
  photos?: string[];
}

const mock = [
  "https://sun9-47.userapi.com/impf/c846019/v846019397/67299/XVcK_6RJ_5w.jpg?size=1437x2160&quality=96&sign=26599a4c4943e5c96ea26deb252efb9e&type=album",
  "https://sun9-43.userapi.com/impf/c837621/v837621633/51117/x2Oa7_v3Hto.jpg?size=756x1344&quality=96&sign=a8b3cf9268f71c85809bd231671beabb&type=album",
];

export const UserCard = ({ title, description, photos = mock }: Props) => {
  return (
    <Card
      bordered={false}
      style={{ width: 300 }}
      styles={{
        body: { padding: 0, position: "absolute", bottom: 50, color: "white" },
      }}
      cover={
        <Carousel arrows>
          {photos.map((photo) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={photo}
                alt="photo"
                style={{ maxWidth: "100%", maxHeight: "400px", scale: "1.4" }}
              />
            </div>
          ))}
        </Carousel>
      }
    >
      <div style={{ fontSize: 24 }}>{title}</div>
      <div style={{ fontSize: 24 }}>{description}</div>
    </Card>
  );
};
