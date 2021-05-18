import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';
import usePopularCompanies from 'components/popularCompanies/usePopularCompanies';

const CompanyCard = ({ company }) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            marginLeft: 16, marginRight: 4, paddingVertical: 16, height: 140, width: 150, backgroundColor: 'rgba(200, 200, 200, .2)', borderRadius: 14
        }}>
            <View style={{ backgroundColor: '#EEE', borderRadius: 15, overflow: 'hidden' }}>
                <Image source={{ uri: company?.logoUrl }} style={{ width: 55, height: 55 }} />
            </View>
            <Text style={{ fontSize: 16, color: '#555' }}>{company?.name}</Text>
        </View>
    );
};

function CompanyList() {
    const { companies, loading } = usePopularCompanies();
    const renderItem = ({ item }) => <CompanyCard company={item} />

    if (loading) {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                marginLeft: 16, marginRight: 4, paddingVertical: 16, height: 140, width: 150, backgroundColor: 'rgba(200, 200, 200, .2)', borderRadius: 14
            }} />
        )
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