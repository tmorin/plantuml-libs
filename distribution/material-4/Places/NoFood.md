# NoFood


```text
material-4/Places/NoFood
```

```text
include('material-4/Places/NoFood')
```



| Illustration | NoFood |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoFood.png) | ![illustration for NoFood](../../material-4/Places/NoFood.Local.png) |




## NoFood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoFood
include('material-4/Places/NoFood')

' renders the element
NoFood('NoFood', 'No Food', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element NoFood
include('material-4/Places/NoFood')

' renders the element
NoFood('NoFood', 'No Food', 'an optional tech label')
@enduml
```

