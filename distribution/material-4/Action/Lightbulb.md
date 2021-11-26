# Lightbulb


```text
material-4/Action/Lightbulb
```

```text
include('material-4/Action/Lightbulb')
```



| Illustration | Lightbulb |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Lightbulb.png) | ![illustration for Lightbulb](../../material-4/Action/Lightbulb.Local.png) |




## Lightbulb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Lightbulb
include('material-4/Action/Lightbulb')

' renders the element
Lightbulb('Lightbulb', 'Lightbulb', 'an optional tech label')
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

' loads the Item which embeds the element Lightbulb
include('material-4/Action/Lightbulb')

' renders the element
Lightbulb('Lightbulb', 'Lightbulb', 'an optional tech label')
@enduml
```

