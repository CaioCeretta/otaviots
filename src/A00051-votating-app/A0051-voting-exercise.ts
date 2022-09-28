type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVotingOption(option: VotingOption): void {
    this._votingOptions.push(option);
  }

  vote(voteIndex: number): void {
    if (!this._votingOptions[voteIndex]) return;

    this._votingOptions[voteIndex].numberOfVotes++;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private votes: Voting[] = [];

  addVotes(voting: Voting): void {
    this.votes.push(voting);
  }

  showVoting(): void {
    for (const option of this.votes) {
      console.log(option.details);

      for (const votingOption of option.votingOptions) {
        console.log(votingOption.option);
        console.log(votingOption.numberOfVotes);
      }

      console.log('###');
    }
  }
}

const option1 = new Voting('What is your favorite programming language');
option1.addVotingOption({ option: 'PHP', numberOfVotes: 0 });
option1.addVotingOption({ option: 'Javascript', numberOfVotes: 0 });
option1.addVotingOption({ option: 'Typescript', numberOfVotes: 0 });
option1.vote(2);
option1.vote(1);
option1.vote(1);
option1.vote(1);
option1.vote(0);
option1.vote(2);

const votingApp = new VotingApp();

votingApp.addVotes(option1);

votingApp.showVoting();
