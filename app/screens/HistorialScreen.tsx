import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  ListRenderItem
} from 'react-native';


import CustomButton from '../components/Button';

interface ActivityItem {
  id: string;
  type: 'irrigation' | 'light' | 'fan' | string;
  action: string;
  time: string;
  date: string;
  info: string;
}

const HistoryScreen = () => {

  const activityHistory: ActivityItem[] = [
    {
      id: '1',
      type: 'irrigation',
      action: 'Riego activado',
      time: '10:25 AM',
      date: '26/02/2025',
      info: 'Duración: 15 minutos'
    },
    {
      id: '2',
      type: 'light',
      action: 'Iluminación desactivada',
      time: '07:00 AM',
      date: '26/02/2025',
      info: 'Automático por horario'
    },
    {
      id: '3',
      type: 'fan',
      action: 'Ventilación activada',
      time: '02:30 PM',
      date: '25/02/2025',
      info: 'Temperatura: 29.5°C'
    },
    {
      id: '4',
      type: 'irrigation',
      action: 'Riego desactivado',
      time: '10:40 AM',
      date: '25/02/2025',
      info: 'Humedad del suelo: 62%'
    },
    {
      id: '5',
      type: 'light',
      action: 'Iluminación activada',
      time: '06:00 PM',
      date: '25/02/2025',
      info: 'Intensidad: 80%'
    },
    {
      id: '6',
      type: 'fan',
      action: 'Ventilación desactivada',
      time: '07:15 PM',
      date: '24/02/2025',
      info: 'Temperatura: 25.2°C'
    },
  ];

  const renderActivityIndicator = (type: string) => {
    let backgroundColor: string;
    let text: string;
    
    switch (type) {
      case 'irrigation':
        backgroundColor = '#2e86de';
        text = 'R';
        break;
      case 'light':
        backgroundColor = '#feca57';
        text = 'I';
        break;
      case 'fan':
        backgroundColor = '#a0aec0';
        text = 'V';
        break;
      default:
        backgroundColor = '#dc3545';
        text = '!';
    }
    
    return (
      <View style={[styles.activityIndicator, { backgroundColor }]}>
        <Text style={styles.indicatorText}>{text}</Text>
      </View>
    );
  };

  const renderItem: ListRenderItem<ActivityItem> = ({ item }) => (
    <View style={styles.activityItem}>
      <View style={styles.activityIconContainer}>
        {renderActivityIndicator(item.type)}
      </View>
      <View style={styles.activityInfo}>
        <Text style={styles.activityAction}>{item.action}</Text>
        <Text style={styles.activityTime}>{item.time} - {item.date}</Text>
        <Text style={styles.activityDetails}>{item.info}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Historial de Actividades</Text>
      </View>
      
      <View style={styles.filterContainer}>
        <CustomButton
          title="Todos"
          type="primary"
          size="small"
          style={styles.filterButton}
        />
        <CustomButton
          title="Riego"
          type="secondary"
          size="small"
          style={styles.filterButton}
        />
        <CustomButton
          title="Iluminación"
          type="secondary"
          size="small"
          style={styles.filterButton}
        />
        <CustomButton
          title="Ventilación"
          type="secondary"
          size="small"
          style={styles.filterButton}
        />
      </View>
      
      <FlatList<ActivityItem>
        data={activityHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <Text style={styles.subtitle}>Últimas 24 horas</Text>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>⏱</Text>
            <Text style={styles.emptyText}>No hay actividades registradas</Text>
          </View>
        )}
      />
      
      <View style={styles.footer}>
        <CustomButton
          title="Exportar Historial"
          type="secondary"
          fullWidth
          style={{ marginBottom: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3748',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    marginRight: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  filterButton: {
    marginRight: 10,
  },
  listContent: {
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#28a745',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  activityIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activityInfo: {
    flex: 1,
  },
  activityAction: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  activityTime: {
    fontSize: 14,
    color: '#a0aec0',
    marginBottom: 5,
  },
  activityDetails: {
    fontSize: 14,
    color: '#ffffff',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyIcon: {
    fontSize: 40,
    color: '#a0aec0',
    marginBottom: 10,
  },
  emptyText: {
    color: '#a0aec0',
    fontSize: 16,
    marginTop: 15,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default HistoryScreen;