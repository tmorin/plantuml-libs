# Menu


```text
material/Navigation/Menu
```

```text
include('material/Navigation/Menu')
```



| Illustration | Menu |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/Menu.png) | ![illustration for Menu](../../material/Navigation/Menu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MenuXs>`
- `<$MenuSm>`
- `<$MenuMd>`
- `<$MenuLg>`





## Menu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Menu
include('material/Navigation/Menu')

' renders the element
Menu('Menu', 'Menu', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Menu
include('material/Navigation/Menu')

' renders the element
Menu('Menu', 'Menu', 'an optional tech label', 'an optional description')
@enduml
```

