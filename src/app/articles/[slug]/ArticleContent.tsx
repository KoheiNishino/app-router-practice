import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "../../common/components"
import { Article } from "../../types"

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <Card as="article">
      <CardHeader>
        <Heading as="h1">{article.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text as="p" fontSize="md">
          {article.content}
        </Text>
      </CardBody>
    </Card>
  );
}
