import { useParams } from 'react-router-dom';
import ServicesList from '../../mock/ServicesList';
import ServiceDetail from '../sections/ServiceDetail';
const ServiceDetailContainer = () => {
    const { id } = useParams();
    const serviceData = ServicesList.find(service => service.id === id);
    return (
        <ServiceDetail service={serviceData} />
    );
}
export default ServiceDetailContainer;