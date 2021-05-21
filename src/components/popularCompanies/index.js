import React from 'react';
import { FlatList } from 'react-native';
import { usePopularCompanies } from 'repositories/companies';
import { CompanyCard, CardLoading } from 'components/popularCompanies/card';

function CompanyList() {
  const { companies, loading } = usePopularCompanies();
  const renderItem = ({ item }) => <CompanyCard company={item} />;

  if (loading) {
    return <CardLoading />;
  }

  return (
    <FlatList
      data={companies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default CompanyList;
