# homecloud


## Presentation
This package is used to document the project [homecloud](https://github.com/tmorin/homecloud-ansible).

It implements elements based on :

- [Material Design Icons](https://github.com/google/material-design-icons)
- [Font Awesome](https://fontawesome.com)




## Bootstrap

The package handles its own bootstrap.

```plantuml
' loads the homecloud bootstrap
include('homecloud/bootstrap')
```



## Style

The package handles its own style.

The bootstrap loads the style too! ;)

```plantuml
' loads the homecloud style
include('homecloud/style')
```


# Modules

The package provides 3 modules.


- [Element](element.md) with 22 elements
- [Brand](brand.md) with 9 elements
- [Group](group.md) with 9 elements

# Examples

The package provides 1 examples.


## simple
![simple](../homecloud/examples/simple.png)<br>
[The source file.](../homecloud/examples/simple.puml)

