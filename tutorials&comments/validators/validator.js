class Student {
  constructor(studentName, address, age, email, mobile, gender, dob) {
      this.studentName = this.validateStudentName(studentName);
      this.address = address; // Address could be another class
      this.age = this.validateAge(age);
      this.email = this.validateEmail(email);
      this.mobile = this.validateMobile(mobile);
      this.gender = gender; // Assuming Gender is an Enum
      this.dob = dob; // LocalDate equivalent could be Date in JS
  }

  validateStudentName(name) {
      if (!name || name.length < 3 || name.length > 10) {
          throw new Error("Student name must be between 3 and 10 characters.");
      }
      return name;
  }

  validateAge(age) {
      if (age < 13) {
          throw new Error("Age must be at least 13.");
      }
      return age;
  }

  validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          throw new Error("Invalid email format.");
      }
      return email;
  }

  validateMobile(mobile) {
      const mobilePattern = /^[6789][0-9]{9}$/;
      if (!mobilePattern.test(mobile)) {
          throw new Error("Mobile number must be a valid Indian number starting with 6, 7, 8, or 9.");
      }
      return mobile;
  }
}