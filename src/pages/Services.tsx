
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServicesListView from '@/components/services/ServicesListView';
import ServiceDetailView from '@/components/services/ServiceDetailView';
import ServiceNotFound from '@/components/services/ServiceNotFound';
import { useServicesData } from '@/hooks/useServicesData';

const ServicesPage = () => {
  const { serviceId } = useParams();
  const { servicesData, heroImageUrl, loading } = useServicesData();
  
  // Show loading state while data is being loaded
  if (loading) {
    return <LoadingSpinner />;
  }
  
  // If a specific service is selected
  if (serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    
    if (!service) {
      return <ServiceNotFound />;
    }
    
    return <ServiceDetailView service={service} />;
  }
  
  // Main services listing page
  return <ServicesListView servicesData={servicesData} heroImageUrl={heroImageUrl} />;
};

export default ServicesPage;
