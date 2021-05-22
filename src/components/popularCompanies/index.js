import React from 'react';
import { FlatList } from 'react-native';
import { usePopularCompanies } from 'repositories/companies';
import {
  CompanyCard,
  CompaniesLoading,
} from 'components/popularCompanies/card';

function PopularCompanies() {
  const { companies, loading } = usePopularCompanies();
  const renderItem = ({ item }) => <CompanyCard company={item} />;

  if (loading) {
    return <CompaniesLoading />;
  }

  return (
    <FlatList
      data={companies}
      horizontal={true}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default PopularCompanies;
