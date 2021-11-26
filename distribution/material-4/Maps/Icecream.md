# Icecream


```text
material-4/Maps/Icecream
```

```text
include('material-4/Maps/Icecream')
```



| Illustration | Icecream |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Icecream.png) | ![illustration for Icecream](../../material-4/Maps/Icecream.Local.png) |




## Icecream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Icecream
include('material-4/Maps/Icecream')

' renders the element
Icecream('Icecream', 'Icecream', 'an optional tech label')
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

' loads the Item which embeds the element Icecream
include('material-4/Maps/Icecream')

' renders the element
Icecream('Icecream', 'Icecream', 'an optional tech label')
@enduml
```

