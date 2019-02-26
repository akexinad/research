require_relative '../bank'

describe Bank do
  let(:bank) { Bank.new 'TDD Bank' }
  # "." denotes a class method
  describe '.new' do
    it "creates a new bank object" do
      # bank = Bank.new 'TDD Bank' #Defined above
      expect(bank).to_not be nil
    end

    it "assigns a bank a name" do
      bank = Bank.new 'TDD Bank'
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  #  "#" denotes an instance method
  describe '#create_account' do
    it "creates an account for a particular person" do
      # bank = Bank.new 'TDD Bank'
      bank.create_account 'Fellini', 7
      expect(bank.accounts['Fellini']).to eq 7
    end
  end

  describe '#deposit' do
    it "deposits an amount into a particular account" do
      bank.create_account 'Benigni', 200
      bank.deposit 'Benigni', 300
      expect(bank.accounts['Benigni']).to eq 200+300
    end
  end

  describe '#withdraw' do
    it "withdraws an amount from a particular account" do
      bank.create_account 'Germi', 200
      bank.withdraw 'Germi', 50
      expect(bank.accounts['Germi']).to eq 200-50
    end

    it 'ignores withdrawals that exceed the balance' do
      bank.create_account 'Giulio', 1
      bank.withdraw 'Giulio', 1_000_000
      expect(bank.balance 'Giulio').to eq 1
    end
  end

  describe '#balance' do
    it "returns the balance for the account" do
      bank.create_account 'Pasolini', 500
      expect(bank.balance 'Pasolini').to eq 500
    end
  end
end
