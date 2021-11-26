# Crosshairs


```text
fontawesome-5/Solid/Crosshairs
```

```text
include('fontawesome-5/Solid/Crosshairs')
```



| Illustration | Crosshairs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Crosshairs.png) | ![illustration for Crosshairs](../../fontawesome-5/Solid/Crosshairs.Local.png) |




## Crosshairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Crosshairs
include('fontawesome-5/Solid/Crosshairs')

' renders the element
Crosshairs('Crosshairs', 'Crosshairs', 'an optional tech label')
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

' loads the Item which embeds the element Crosshairs
include('fontawesome-5/Solid/Crosshairs')

' renders the element
Crosshairs('Crosshairs', 'Crosshairs', 'an optional tech label')
@enduml
```

