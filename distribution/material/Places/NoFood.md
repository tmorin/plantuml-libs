# NoFood


```text
material/Places/NoFood
```

```text
include('material/Places/NoFood')
```



| Illustration | NoFood |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/NoFood.png) | ![illustration for NoFood](../../material/Places/NoFood.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoFoodXs>`
- `<$NoFoodSm>`
- `<$NoFoodMd>`
- `<$NoFoodLg>`





## NoFood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoFood
include('material/Places/NoFood')

' renders the element
NoFood('NoFood', 'No Food', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoFood
include('material/Places/NoFood')

' renders the element
NoFood('NoFood', 'No Food', 'an optional tech label', 'an optional description')
@enduml
```

