# Tractor


```text
fontawesome-6/Solid/Tractor
```

```text
include('fontawesome-6/Solid/Tractor')
```



| Illustration | Tractor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Tractor.png) | ![illustration for Tractor](../../fontawesome-6/Solid/Tractor.Local.png) |




## Tractor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tractor
include('fontawesome-6/Solid/Tractor')

' renders the element
Tractor('Tractor', 'Tractor', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tractor
include('fontawesome-6/Solid/Tractor')

' renders the element
Tractor('Tractor', 'Tractor', 'an optional tech label', 'an optional description')
@enduml
```

