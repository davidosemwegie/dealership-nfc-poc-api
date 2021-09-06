import { PrismaClient, Link } from '@prisma/client';

const prisma = new PrismaClient();

type CreateLink = Omit<Link, 'id' | 'isVibsibleOnDevice' | 'hasBeenScanned'>;

export class LinkProvider {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async create(args: CreateLink): Promise<Link> {
    const link = await prisma.link.create({
      data: {
        ...args,
        scanned: false,
      },
    });

    return link;
  }

  public async getAll(): Promise<Link[]> {
    const links = await prisma.link.findMany();

    return links;
  }

  public async setScanned(id: string): Promise<Link> {
    const link = await prisma.link.update({ data: { scanned: true }, where: { id } });

    return link;
  }
}
