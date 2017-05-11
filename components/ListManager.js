var items = [
    {
        id  : 1,
        text: 'Apple'
    },
    {
        id  : 1,
        text: 'Banana'
    },
    {
        id  : 1,
        text: 'Pineapple'
    },
];

// Should be separated component
var ListItem = React.createClass({
    render: function () {
        return (
            <li>
                <h4>{this.props.text}</h4>
            </li>
        )
    }
});

// Should be separated component
var List = React.createClass({
    render: function () {
        var createItem = function (product) {
            return (
                <ListItem text={product.text}/>
            );
        };

        return (
            <ul>{this.props.items.map(createItem)}</ul>
        );
    }
});

// Should be separated component
var ListManager = React.createClass({
    render: function () {
        return (
            <List items={this.props.items}/>
        );
    }
});

ReactDOM.render(
    <ListManager items={items}/>,
    document.getElementById('listTest')
)