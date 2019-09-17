package backend.java.fetchers;

import com.google.common.collect.ImmutableMap;
import graphql.schema.DataFetcher;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

;

@Component
public class ArticleDataFetchers {

    private static List<Map<String, String>> articles = Arrays.asList(
            ImmutableMap.of("id", "book-1",
                    "name", "Harry Potter and the Philosopher's Stone"),
            ImmutableMap.of("id", "book-2",
                    "name", "Moby Dick"),
            ImmutableMap.of("id", "book-3",
                    "name", "Interview with the vampire")
    );

    public DataFetcher getArticleById() {
        return dataFetchingEnvironment -> {
            String id = dataFetchingEnvironment.getArgument("id");
            return articles
                    .stream()
                    .filter(article -> article.get("id").equals(id))
                    .findFirst()
                    .orElse(null);
        };
    }
}
