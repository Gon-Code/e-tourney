import { 
  User as PrismaUser, 
  Team as PrismaTeam, 
  Tournament as PrismaTournament, 
  Series as PrismaSeries, 
  Match as PrismaMatch, 
  SeriesFormat 
} from '@prisma/client';

// Extendemos los tipos autogenerados de Prisma con sus relaciones si las necesitamos tipar explícitamente en el frontend
export type User = PrismaUser;
export type Team = PrismaTeam & {
  members?: User[];
  captain?: User;
};
export type Tournament = PrismaTournament & {
  series?: Series[];
};
export type Series = PrismaSeries & {
  tournament?: Tournament;
  team1?: Team;
  team2?: Team;
  winnerTeam?: Team | null;
  matches?: Match[];
};
export type Match = PrismaMatch & {
  series?: Series;
  team1?: Team;
  team2?: Team;
  winnerTeam?: Team | null;
};
