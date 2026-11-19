export type Decision = 'allow' | 'block';

export interface CardItem {
  id: string;
  stage: 1 | 2 | 3;
  stageTitle: string;
  category: 'password' | 'phishing' | 'access';
  categoryLabel: string;
  title: string;
  subtitle: string;
  avatarSeed?: string;
  
  // Specific data fields
  profileData?: {
    fullName: string;
    role: string;
    birthYear?: number;
    phone?: string;
    submittedPassword?: string;
    passwordEntropy?: 'Juda zaif' | 'O\'rtacha' | 'Yuqori daraja';
    length?: number;
  };
  
  messageData?: {
    sender: string;
    channel: 'SMS' | 'Telegram' | 'E-mail' | 'Wi-Fi Portal' | 'Bildirishnoma';
    time: string;
    content: string;
    url?: string;
    attachment?: string;
    warningFlag?: string;
  };

  accessData?: {
    ip: string;
    location: string;
    time: string;
    device: string;
    authMethod: string;
    twoFactorStatus: 'Tasdiqlangan' | 'Yo\'q / Rad etilgan' | 'O\'chirilgan';
    threatLevel: 'Past' | 'O\'rtacha' | 'Kritik';
  };

  correctAction: Decision;
  whyCorrect: string;
  whyWrong: string;
  educationalTip: string;
  securityImpact: number; // damage if wrong
  scoreGain: number; // points if right
}

export interface UserHistoryItem {
  card: CardItem;
  userDecision: Decision;
  isCorrect: boolean;
  scoreDelta: number;
  securityDelta: number;
}

export type GameState = 'start' | 'playing' | 'feedback' | 'gameover' | 'victory';

export interface PlayerRank {
  title: string;
  minScore: number;
  badge: string;
  description: string;
  color: string;
}
