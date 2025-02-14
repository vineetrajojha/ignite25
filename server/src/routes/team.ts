import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

// Validation schema
const memberSchema = z.object({
  name: z.string().min(2)
});

const teamSchema = z.object({
  teamName: z.string().min(2),
  totalMembers: z.number().min(1),
  leaderName: z.string().min(2),
  leaderEmail: z.string().email(),
  leaderContact: z.string().min(10),
  university: z.string().min(2),
  members: z.array(memberSchema),
  referral: z.string().regex(/^[a-zA-Z]+\d+$/)
});

router.post('/register', async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = teamSchema.parse(req.body);

    // Check if team name already exists
    const existingTeam = await prisma.team.findUnique({
      where: { teamName: validatedData.teamName }
    });

    if (existingTeam) {
        res.status(400).json({ error: 'Team name already exists' });
      return 
    }

    // Create team and members in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create team
      const team = await tx.team.create({
        data: {
          teamName: validatedData.teamName,
          totalMembers: validatedData.totalMembers,
          leaderName: validatedData.leaderName,
          leaderEmail: validatedData.leaderEmail,
          leaderContact: validatedData.leaderContact,
          university: validatedData.university,
          referral: validatedData.referral
        }
      });

      // Create members
      const members = await Promise.all(
        validatedData.members.map((member) =>
          tx.member.create({
            data: {
              ...member,
              teamId: team.id
            }
          })
        )
      );

      return { team, members };
    });

    res.status(201).json({
      message: 'Team registered successfully',
      data: result
    });
    return
  } catch (error) {
    if (error instanceof z.ZodError) {
        res.status(400).json({
        error: 'Validation failed',
        details: error.errors
      });
        return 
    }

    console.error('Team registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
    return
  }
});

export default router;