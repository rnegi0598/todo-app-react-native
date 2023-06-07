import { StyleSheet, Text, View ,Image} from "react-native";
import avatarGroup from '../assets/images/AvatarGroup.png'
const TaskDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Task Details</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detailsTitle}>
          <Text style={styles.heading}>Task Title</Text>
          <Text style={styles.detailsTitleContent}>NFT Web App Prototype</Text>
        </View>
        <View style={styles.detailsDesc}>
          <Text style={styles.heading}>Descriptions</Text>
          <Text style={styles.detailsDescContent}>
            Last year was a fantastic year for NFTs, with the market reaching a
            $40 billion valuation for the first time. In addition, more than $10
            billion worth of NFTs are now sold every week – with NFT..
          </Text>
        </View>
      </View>
      <View style={styles.avatars}>
            <Image source={avatarGroup}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 64,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "#111322",
    fontFamily:'InterRegular',
  },
  details: {
    marginTop: 36,
  },
  detailsTitle: {
    marginBottom: 15,
  },
  heading: {
    color: "#5D6B98",
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 12,
    fontFamily:'InterRegular',
  },
  detailsTitleContent: {
    color: "#1D2939",
    fontWeight: 600,
    fontSize: 20,
    fontFamily:'InterBold',
  },
  detailsDesc: {},
  detailsDescContent: {
    color: "#111322",
    fontWeight: 500,
    fontSize: 14,
    fontFamily:'InterRegular',
  },
  avatars:{
    marginTop:15,
  }
});

export default TaskDetails;
