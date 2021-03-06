// @flow
import React from "react"
import styles from "./style"
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  SafeAreaView
} from "react-native"

type Props = {
  toggleModalVisibility: Function,
  modalVisible: boolean,
  modalControlText: string
}

export function ModalControll(props: Props) {
  const { toggleModalVisibility, modalVisible, modalControlText } = props
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.modalGroup}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{modalControlText}</Text>
          <TouchableHighlight
            onPress={() => {
              toggleModalVisibility()
            }}
            style={styles.modalButton}
          >
            <Text style={styles.buttonText}>OK!</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
