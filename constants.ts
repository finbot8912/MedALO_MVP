
import { FaqItem, Language } from './types';

export const translations: Record<string, Record<Language, string>> = {
  // Header
  logo: { en: 'MedALO', ko: 'MedALO' },
  languageToggle: { en: '한국어', ko: 'English' },

  // Hero
  heroHeadlineA: { en: 'AI-powered self hair loss tracking.', ko: 'AI로 더 정확해진 자가 탈모 경과 추적' },
  heroSublineA: { en: 'Weekly photos + automatic metrics (±10%) to quantify density and hairline changes.', ko: '주간 촬영과 자동 계측(±10%)으로 모발 밀도·헤어라인 변화를 숫자로 확인하세요.' },
  heroHeadlineB: { en: 'Track Your Hair Loss with AI Precision.', ko: 'AI 정밀도로 당신의 탈모를 추적하세요.' },
  heroSublineB: { en: 'Quantify your progress with weekly photos and automated analysis. See the changes, backed by data.', ko: '주간 촬영과 자동 분석으로 당신의 경과를 수치화하세요. 데이터로 증명되는 변화를 확인하세요.' },
  heroCta: { en: 'Join the Waitlist', ko: '대기자 등록' },
  
  // How it works
  howItWorksTitle: { en: 'How MedALO Works', ko: 'MedALO 작동 방식' },
  howItWorksSubtitle: { en: 'A simple, weekly routine to track your hair health with precision.', ko: '정밀하게 당신의 모발 건강을 추적하는 간단한 주간 루틴.' },
  step1Title: { en: '1. Weekly Photo', ko: '1. 주간 촬영' },
  step1Desc: { en: 'Follow the guided process to take a consistent photo of your scalp each week using our calibration card.', ko: '가이드에 따라 보정 카드를 사용하여 매주 일관된 두피 사진을 촬영하세요.' },
  step2Title: { en: '2. AI Analysis', ko: '2. AI 분석' },
  step2Desc: { en: 'Our AI model analyzes your photo, measuring key metrics like hair density and hairline position.', ko: '저희 AI 모델이 사진을 분석하여 모발 밀도, 헤어라인 위치 등 핵심 지표를 측정합니다.' },
  step3Title: { en: '3. Track Progress', ko: '3. 경과 추적' },
  step3Desc: { en: 'View your progress over time with easy-to-understand charts and objective data points.', ko: '이해하기 쉬운 차트와 객관적인 데이터 포인트로 시간 경과에 따른 변화를 확인하세요.' },

  // AI Accuracy
  aiAccuracyTitle: { en: 'Accuracy and Trust You Can Rely On', ko: '신뢰할 수 있는 정확성' },
  aiAccuracySubtitle: { en: 'We are committed to providing objective and transparent measurements.', ko: '저희는 객관적이고 투명한 측정치를 제공하기 위해 최선을 다하고 있습니다.' },
  accuracyMetricTitle: { en: '±10% Target Accuracy', ko: '±10% 목표 정확도' },
  accuracyMetricDesc: { en: 'Our goal is to achieve an accuracy of ±10% under optimal conditions, providing you with meaningful data.', ko: '저희의 목표는 최적의 조건에서 ±10%의 정확도를 달성하여 의미 있는 데이터를 제공하는 것입니다.' },
  calibrationCardTitle: { en: 'Calibration Card', ko: '보정 카드' },
  calibrationCardDesc: { en: 'A key to consistency. The card helps our AI standardize for lighting, color, and distance.', ko: '일관성의 핵심. 보정 카드는 AI가 조명, 색상, 거리를 표준화하도록 돕습니다.' },
  hybridProcessingTitle: { en: 'Hybrid Processing', ko: '하이브리드 처리' },
  hybridProcessingDesc: { en: 'We use a combination of on-device preprocessing and secure cloud analysis to protect your privacy and ensure accuracy.', ko: '저희는 개인정보를 보호하고 정확성을 보장하기 위해 온디바이스 전처리 및 보안 클라우드 분석을 결합하여 사용합니다.' },

  // Demo
  demoTitle: { en: 'Visualize Your Progress', ko: '변화를 시각적으로 확인하세요' },
  demoSubtitle: { en: 'See how our AI automatically detects hairlines and analyzes density grids.', ko: 'AI가 어떻게 자동으로 헤어라인을 감지하고 밀도 그리드를 분석하는지 확인해보세요.' },
  play: { en: 'Play', ko: '재생' },
  pause: { en: 'Pause', ko: '일시정지' },

  // Security
  securityTitle: { en: 'Your Privacy is Our Priority', ko: '고객의 개인정보는 저희의 최우선 과제입니다' },
  securitySubtitle: { en: 'We handle your data with the highest standards of security and confidentiality.', ko: '저희는 최고 수준의 보안과 기밀 유지 기준에 따라 고객의 데이터를 처리합니다.' },
  encryptionTitle: { en: 'End-to-End Encryption', ko: '종단간 암호화' },
  encryptionDesc: { en: 'Your images and data are encrypted during transit and at rest.', ko: '고객의 이미지와 데이터는 전송 중 및 저장 시 암호화됩니다.' },
  anonymizationTitle: { en: 'Data Anonymization', ko: '데이터 익명화' },
  anonymizationDesc: { en: 'AI analysis is performed on anonymized data to protect your identity.', ko: 'AI 분석은 고객의 신원을 보호하기 위해 익명화된 데이터로 수행됩니다.' },
  controlTitle: { en: 'You Are in Control', ko: '모든 권한은 고객에게 있습니다' },
  controlDesc: { en: 'Easily manage your data and delete your account and all associated information at any time.', ko: '언제든지 쉽게 데이터를 관리하고 계정과 모든 관련 정보를 삭제할 수 있습니다.' },
  
  // FAQ
  faqTitle: { en: 'Frequently Asked Questions', ko: '자주 묻는 질문' },
  
  // Waitlist
  waitlistTitle: { en: 'Be the First to Know', ko: '출시 소식을 가장 먼저 받아보세요' },
  waitlistSubtitle: { en: 'Join our waitlist for exclusive updates and early access.', ko: '대기자 명단에 등록하고 특별 업데이트와 얼리 액세스 기회를 받으세요.' },
  emailPlaceholder: { en: 'Enter your email address', ko: '이메일 주소를 입력하세요' },
  platformInterest: { en: 'I am interested in:', ko: '관심 있는 플랫폼:' },
  consent: { en: 'I agree to receive updates from MedALO.', ko: 'MedALO로부터 업데이트를 받는 데 동의합니다.' },
  joinWaitlistCta: { en: 'Join Waitlist', ko: '대기자 등록' },
  applyForBeta: { en: 'Want to be a Beta Tester?', ko: '베타테스터가 되고 싶으신가요?' },
  fillBetaForm: { en: 'Fill out the beta application form for a chance to help us shape the future of MedALO.', ko: '베타 신청서를 작성하여 MedALO의 미래를 함께 만들어갈 기회를 잡으세요.' },
  openBetaForm: { en: 'Apply for Beta Program', ko: '베타 프로그램 신청하기' },
  closeBetaForm: { en: 'Close Form', ko: '양식 닫기' },
  betaFormTitle: { en: 'Beta Tester Application', ko: '베타테스터 신청서' },
  deviceModel: { en: 'Phone Model (e.g., iPhone 15, Galaxy S24)', ko: '휴대폰 모델 (예: iPhone 15, Galaxy S24)' },
  osVersion: { en: 'Operating System Version (e.g., iOS 17, Android 14)', ko: '운영체제 버전 (예: iOS 17, Android 14)' },
  photoFrequency: { en: 'How often can you take photos?', ko: '얼마나 자주 사진을 촬영할 수 있나요?' },
  weekly: { en: 'Weekly', ko: '매주' },
  biweekly: { en: 'Every two weeks', ko: '2주마다' },
  monthly: { en: 'Monthly', ko: '매월' },
  hairLossArea: { en: 'Primary area of concern:', ko: '주요 고민 부위:' },
  crown: { en: 'Crown / Top of head', ko: '정수리' },
  hairline: { en: 'Hairline / Front', ko: '헤어라인 / 앞머리' },
  other: { en: 'Other', ko: '기타' },
  calibrationCardConsent: { en: 'I agree to receive and use a calibration card for photos.', ko: '사진 촬영을 위해 보정 카드를 수령하고 사용하는 데 동의합니다.' },
  submitApplication: { en: 'Submit Application', ko: '신청서 제출' },
  emailRequired: { en: 'Email is required.', ko: '이메일은 필수 항목입니다.' },
  invalidEmail: { en: 'Please enter a valid email address.', ko: '유효한 이메일 주소를 입력하세요.' },
  consentRequired: { en: 'You must agree to receive updates.', ko: '업데이트 수신에 동의해야 합니다.' },
  deviceModelRequired: { en: 'Device model is required.', ko: '기기 모델은 필수 항목입니다.' },
  waitlistSuccess: { en: 'Thank you! You have been added to the waitlist.', ko: '감사합니다! 대기자 명단에 추가되었습니다.' },
  betaSuccess: { en: 'Thank you for applying! We will contact you if you are selected.', ko: '신청해주셔서 감사합니다! 선정되시면 연락드리겠습니다.' },
  
  // Footer
  footerRights: { en: '© 2024 MedALO. All rights reserved.', ko: '© 2024 MedALO. All rights reserved.' },
  footerDisclaimer: { en: 'MedALO is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease. Consult with a healthcare professional for medical advice.', ko: 'MedALO는 의료기기가 아니며, 질병의 진단, 치료, 치유 또는 예방을 목적으로 하지 않습니다. 의학적 조언은 의료 전문가와 상담하세요.' },
  privacyPolicy: { en: 'Privacy Policy', ko: '개인정보처리방침' },
  termsOfService: { en: 'Terms of Service', ko: '서비스 이용약관' },
};

export const FAQ_DATA: FaqItem[] = [
  {
    q: { en: 'How accurate is the AI analysis?', ko: 'AI 분석은 얼마나 정확한가요?' },
    a: { en: 'Our goal is to achieve an accuracy of ±10% in detecting changes. Accuracy can be influenced by factors like lighting consistency, hair length, and correct use of the calibration card.', ko: '저희 목표는 변화 감지에서 ±10%의 정확도를 달성하는 것입니다. 정확도는 조명 일관성, 모발 길이, 보정 카드의 올바른 사용과 같은 요인에 의해 영향을 받을 수 있습니다.' },
  },
  {
    q: { en: 'Can this replace a visit to the doctor?', ko: '이 서비스가 병원 진료를 대체할 수 있나요?' },
    a: { en: 'No. MedALO is an informational tool for tracking changes and is not a medical device. It does not provide diagnoses or treatment recommendations. Always consult a qualified healthcare professional for medical advice.', ko: '아닙니다. MedALO는 변화를 추적하기 위한 정보 제공 도구이며 의료기기가 아닙니다. 진단이나 치료 권장 사항을 제공하지 않습니다. 의학적 조언은 항상 자격을 갖춘 의료 전문가와 상담하세요.' },
  },
  {
    q: { en: 'Are my photos and data secure?', ko: '제 사진과 데이터는 안전한가요?' },
    a: { en: 'Yes. We use end-to-end encryption for data in transit and at rest. AI analysis is performed on anonymized data, and you have full control to delete your information at any time.', ko: '네. 저희는 전송 중 및 저장된 데이터에 대해 종단간 암호화를 사용합니다. AI 분석은 익명화된 데이터로 수행되며, 언제든지 정보를 삭제할 수 있는 모든 권한을 가집니다.' },
  },
  {
    q: { en: 'When will the app be released?', ko: '앱은 언제 출시되나요?' },
    a: { en: 'We are currently in the final stages of development. Join the waitlist to be the first to know about our official launch date and to get a chance for early access.', ko: '현재 개발 마지막 단계에 있습니다. 대기자 명단에 등록하여 공식 출시일을 가장 먼저 확인하고 얼리 액세스 기회를 잡으세요.' },
  },
];
