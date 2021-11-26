# Bullhorn


```text
fontawesome-5/Solid/Bullhorn
```

```text
include('fontawesome-5/Solid/Bullhorn')
```



| Illustration | Bullhorn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bullhorn.png) | ![illustration for Bullhorn](../../fontawesome-5/Solid/Bullhorn.Local.png) |




## Bullhorn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bullhorn
include('fontawesome-5/Solid/Bullhorn')

' renders the element
Bullhorn('Bullhorn', 'Bullhorn', 'an optional tech label')
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

' loads the Item which embeds the element Bullhorn
include('fontawesome-5/Solid/Bullhorn')

' renders the element
Bullhorn('Bullhorn', 'Bullhorn', 'an optional tech label')
@enduml
```

