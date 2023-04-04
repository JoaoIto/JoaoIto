interface User {
    name: string;
    age: number;
    code: string[];
    dev: (
    coffee: string, 
    music: string) 
    => string;
}

const user: User = {
    name: "JoaoIto",
    age: 17,
    code: [
        "JavaScript", 
        "TypeScript", 
        "Java", 
        "Python"
          ],
    dev: function(
    coffee: string, 
    music: string): 
    string {
        this.coffee = coffee;
        this.music = music;

        const animation;
        animation = coffee + music;

        return "It's on code! ;)";
    }
};
