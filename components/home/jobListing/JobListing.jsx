import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import styles from "./JobListing.style";
import { COLORS } from "../../../constants";
import JobListingCard from "../../common/cards/jobListing/JobListingCard";
import useFetch from "../../../hook/useFetch";

const JobListing = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>List of available jobs</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job)=>(
            <JobListingCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default JobListing;