import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : ?Text;
    message : Text;
  };

  let submissions = Map.empty<Text, Submission>();

  var nextId = 0;

  func getNextId() : Text {
    let id = nextId.toText();
    nextId += 1;
    id;
  };

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : ?Text, message : Text) : async () {
    let id = getNextId();
    let submission : Submission = {
      name;
      email;
      phone;
      message;
    };
    submissions.add(id, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray();
  };
};
