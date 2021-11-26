# Eco


```text
material-4/Action/Eco
```

```text
include('material-4/Action/Eco')
```



| Illustration | Eco |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Eco.png) | ![illustration for Eco](../../material-4/Action/Eco.Local.png) |




## Eco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Eco
include('material-4/Action/Eco')

' renders the element
Eco('Eco', 'Eco', 'an optional tech label')
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

' loads the Item which embeds the element Eco
include('material-4/Action/Eco')

' renders the element
Eco('Eco', 'Eco', 'an optional tech label')
@enduml
```

