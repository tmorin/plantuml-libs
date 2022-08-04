# Crosshairs


```text
fontawesome-6/Solid/Crosshairs
```

```text
include('fontawesome-6/Solid/Crosshairs')
```



| Illustration | Crosshairs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Crosshairs.png) | ![illustration for Crosshairs](../../fontawesome-6/Solid/Crosshairs.Local.png) |




## Crosshairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Crosshairs
include('fontawesome-6/Solid/Crosshairs')

' renders the element
Crosshairs('Crosshairs', 'Crosshairs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crosshairs
include('fontawesome-6/Solid/Crosshairs')

' renders the element
Crosshairs('Crosshairs', 'Crosshairs', 'an optional tech label', 'an optional description')
@enduml
```

