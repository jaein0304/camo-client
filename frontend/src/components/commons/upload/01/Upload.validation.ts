// upload02 validation

import { Modal } from "antd";

export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다!!" });
    return false;
  }
  if (file.size > 10 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다!! (10MB 미만으로 올려주세요)" });
    return false;
  }
  if (
    !file.type.includes("jpg") &&
    !file.type.includes("jpeg") &&
    !file.type.includes("png") &&
    !file.type.includes("webp")
  ) {
    Modal.error({ content: "파일 확장자가 올바르지 않습니다 (png, jpg, jpeg, webp만 가능합니다)" });
    return false;
  }
  return file;
}