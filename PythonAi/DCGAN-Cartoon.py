# Animation character generation based on DCGAN
import torch.nn as nn
import torch
import torchvision
import torchvision.utils as vutils

# 17章

# Define generator network G:model


class Generator(nn.Module):
    def __init__(self, nz=100):
        super(Generator, self).__init__()
        # The input of layer1 is a random noise of 100*1*1, and the output size is 1024*4*4
        self.layer1 = nn.Sequential(
            nn.ConvTranspose2d(nz, 1024, kernel_size=4,
                               stride=1, padding=0, bias=False),
            nn.BatchNorm2d(1024),
            nn.ReLU(inplace=True)
        )
        # The input of layer2 is a image 1024*4*4, and the output size is 512*8*8
        self.layer2 = nn.Sequential(
            nn.ConvTranspose2d(1024, 512, 4, 2, 1, bias=False),
            nn.BatchNorm2d(512),
            nn.ReLU(inplace=True)
        )
        # The input of layer3 is a image 512*8*8, and the output size is 256*16*16
        self.layer3 = nn.Sequential(
            nn.ConvTranspose2d(512, 256, 4, 2, 1, bias=False),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True)
        )
        # The input of layer4 is a image 256*16*16, and the output size is 128*32*32
        self.layer4 = nn.Sequential(
            nn.ConvTranspose2d(256, 128, 4, 2, 1, bias=False),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True)
        )
        # The input of layer4 is a image 128*32*32, and the output size is 3*96*96
        self.layer5 = nn.Sequential(
            nn.ConvTranspose2d(128, 3, 5, 3, 1, bias=False),
            nn.Tanh()
        )

    # Define the forward of Generator
    def forward(self, x):
        out = self.layer1(x)
        out = self.layer2(out)
        out = self.layer3(out)
        out = self.layer4(out)
        out = self.layer5(out)
        return out


# Define Discriminator network D:model
class Discriminator(nn.Module):
    def __init__(self):
        super(Discriminator, self).__init__()
        # The input of layer1 is a image 3*96*96, and the output size is 64*32*32
        self.layer1 = nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=5, stride=3, padding=1, bias=False),
            nn.BatchNorm2d(64),
            nn.LeakyReLU(0.2, inplace=True)
        )
        # The input of layer2 is a image 64*32*32, and the output size is 128*16*16
        self.layer2 = nn.Sequential(
            nn.Conv2d(64, 128, 4, 2, 1, bias=False),
            nn.BatchNorm2d(128),
            nn.LeakyReLU(0.2, inplace=True)
        )
        # The input of layer3 is a image 128*16*16, and the output size is 256*8*8
        self.layer3 = nn.Sequential(
            nn.Conv2d(128, 256, 4, 2, 1, bias=False),
            nn.BatchNorm2d(256),
            nn.LeakyReLU(0.2, inplace=True)
        )
        # The input of layer4 is a image 256*8*8, and the output size is 512*4*4
        self.layer4 = nn.Sequential(
            nn.Conv2d(256, 512, 4, 2, 1, bias=False),
            nn.BatchNorm2d(512),
            nn.LeakyReLU(0.2, inplace=True)
        )
        # layer5 output the probability of predicted results
        self.layer5 = nn.Sequential(
            nn.Conv2d(512, 1, 4, 1, 0, bias=False),
            nn.Sigmoid()
        )
    # the forward

    def forward(self, x):
        out = self.layer1(x)
        out = self.layer2(out)
        out = self.layer3(out)
        out = self.layer4(out)
        out = self.layer5(out)
        return out


# setting the super parameters
BatchSize = 8
ImageSize = 96
Epoch = 25
Lr = 0.0002
Betal = 0.5
# faces\\" #the location of the data set
DataPath = "D:\\Python_resources\\17-Generating-anime-characters\\"
# the result of the calculation set
OutPath = "D:\\Python_resources\\17-Generating-anime-characters-output-imgs\\"

# Defines whether to use a GPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def train(netG, netD, dataloader):
    criterion = nn.BCELoss()
    optimizerG = torch.optim.Adam(
        netG.parameters(), lr=Lr, betas=(Betal, 0.999))
    optimizerD = torch.optim.Adam(
        netD.parameters(), lr=Lr, betas=(Betal, 0.999))
    label = torch.FloatTensor(BatchSize)
    real_label = 1
    fake_label = 0

    for epoch in range(1, Epoch+1):
        for i, (imgs, _) in enumerate(dataloader):
            #
            optimizerD.zero_grad()
            imgs = imgs.to(device)
            output = netD(imgs)
            label.data.fill_(real_label)
            label = label.to(device)
            # print(output)
            # print(label)
            # 报错,需要压缩output，使用squeeze函数,或者使用unsqueeze升维
            errD_real = criterion(
                output.squeeze(-1).squeeze(-1).squeeze(-1), label)
            errD_real.backward()
            #
            label.data.fill_(fake_label)
            noise = torch.randn(BatchSize, 100, 1, 1)
            noise = noise.to(device)
            fake = netG(noise)
            #
            output = netD(fake.detach())
            errD_fake = criterion(
                output.squeeze(-1).squeeze(-1).squeeze(-1), label)
            errD_fake.backward()
            errD = errD_fake+errD_real
            optimizerD.step()

            #
            optimizerG.zero_grad()
            #
            label.data.fill_(real_label)
            label = label.to(device)
            output = netD(fake)
            errG = criterion(output.squeeze(-1).squeeze(-1).squeeze(-1), label)
            errG.backward()
            optimizerG.step()
            if i % 50 == 0:
                print('[%d/%d][%d/%d]Loss_D: %.3f Loss_G: %.3f'
                      % (epoch, Epoch, i, len(dataloader), errD.item(), errG.item()))
                vutils.save_image(
                    fake.data, '%s/fake_samples_epoch_%03d.png' % (OutPath, epoch), normalize=True)
                torch.save(netG.state_dict(), '%s/netG_%03d.pth' %
                           (OutPath, epoch))
                torch.save(netD.state_dict(), '%s/netD_%03d.pth' %
                           (OutPath, epoch))


if __name__ == "__main__":
    #
    transforms = torchvision.transforms.Compose([
        torchvision.transforms.Resize(ImageSize),
        torchvision.transforms.ToTensor(),
        torchvision.transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))]
    )
    dataset = torchvision.datasets.ImageFolder(DataPath, transform=transforms)

    dataloader = torch.utils.data.DataLoader(
        dataset=dataset,
        batch_size=BatchSize,
        shuffle=True,
        drop_last=True,
    )

    netG = Generator().to(device)
    netD = Discriminator().to(device)
    train(netG, netD, dataloader)
