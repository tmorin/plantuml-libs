# Infinity


```text
fontawesome-5/Solid/Infinity
```

```text
include('fontawesome-5/Solid/Infinity')
```



| Illustration | Infinity |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Infinity.png) | ![illustration for Infinity](../../fontawesome-5/Solid/Infinity.Local.png) |




## Infinity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Infinity
include('fontawesome-5/Solid/Infinity')

' renders the element
Infinity('Infinity', 'Infinity', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Infinity
include('fontawesome-5/Solid/Infinity')

' renders the element
Infinity('Infinity', 'Infinity', 'an optional tech label')
@enduml
```

