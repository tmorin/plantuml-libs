# PersonSkiingNordic


```text
fontawesome-6/Solid/PersonSkiingNordic
```

```text
include('fontawesome-6/Solid/PersonSkiingNordic')
```



| Illustration | PersonSkiingNordic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonSkiingNordic.png) | ![illustration for PersonSkiingNordic](../../fontawesome-6/Solid/PersonSkiingNordic.Local.png) |




## PersonSkiingNordic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonSkiingNordic
include('fontawesome-6/Solid/PersonSkiingNordic')

' renders the element
PersonSkiingNordic('PersonSkiingNordic', 'Person Skiing Nordic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonSkiingNordic
include('fontawesome-6/Solid/PersonSkiingNordic')

' renders the element
PersonSkiingNordic('PersonSkiingNordic', 'Person Skiing Nordic', 'an optional tech label', 'an optional description')
@enduml
```

