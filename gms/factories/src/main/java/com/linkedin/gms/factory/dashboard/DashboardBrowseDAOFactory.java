package com.linkedin.gms.factory.dashboard;

import com.linkedin.gms.factory.common.IndexConventionFactory;
import com.linkedin.metadata.configs.BrowseConfigFactory;
import com.linkedin.metadata.dao.browse.ESBrowseDAO;
import com.linkedin.metadata.search.DashboardDocument;
import com.linkedin.metadata.utils.elasticsearch.IndexConvention;
import javax.annotation.Nonnull;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;


@Configuration
public class DashboardBrowseDAOFactory {
  @Autowired
  ApplicationContext applicationContext;

  @Nonnull
  @Bean(name = "dashboardBrowseDao")
  @DependsOn({"elasticSearchRestHighLevelClient", IndexConventionFactory.INDEX_CONVENTION_BEAN})
  protected ESBrowseDAO createInstance() {
    return new ESBrowseDAO(applicationContext.getBean(RestHighLevelClient.class),
        BrowseConfigFactory.getBrowseConfig(DashboardDocument.class,
            applicationContext.getBean(IndexConvention.class)));
  }
}