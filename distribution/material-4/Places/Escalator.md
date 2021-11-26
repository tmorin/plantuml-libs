# Escalator


```text
material-4/Places/Escalator
```

```text
include('material-4/Places/Escalator')
```



| Illustration | Escalator |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Escalator.png) | ![illustration for Escalator](../../material-4/Places/Escalator.Local.png) |




## Escalator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Escalator
include('material-4/Places/Escalator')

' renders the element
Escalator('Escalator', 'Escalator', 'an optional tech label')
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

' loads the Item which embeds the element Escalator
include('material-4/Places/Escalator')

' renders the element
Escalator('Escalator', 'Escalator', 'an optional tech label')
@enduml
```

