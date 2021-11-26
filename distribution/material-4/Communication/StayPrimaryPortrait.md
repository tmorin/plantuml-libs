# StayPrimaryPortrait


```text
material-4/Communication/StayPrimaryPortrait
```

```text
include('material-4/Communication/StayPrimaryPortrait')
```



| Illustration | StayPrimaryPortrait |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/StayPrimaryPortrait.png) | ![illustration for StayPrimaryPortrait](../../material-4/Communication/StayPrimaryPortrait.Local.png) |




## StayPrimaryPortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StayPrimaryPortrait
include('material-4/Communication/StayPrimaryPortrait')

' renders the element
StayPrimaryPortrait('StayPrimaryPortrait', 'Stay Primary Portrait', 'an optional tech label')
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

' loads the Item which embeds the element StayPrimaryPortrait
include('material-4/Communication/StayPrimaryPortrait')

' renders the element
StayPrimaryPortrait('StayPrimaryPortrait', 'Stay Primary Portrait', 'an optional tech label')
@enduml
```

