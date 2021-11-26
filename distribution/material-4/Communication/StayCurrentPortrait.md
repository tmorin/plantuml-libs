# StayCurrentPortrait


```text
material-4/Communication/StayCurrentPortrait
```

```text
include('material-4/Communication/StayCurrentPortrait')
```



| Illustration | StayCurrentPortrait |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/StayCurrentPortrait.png) | ![illustration for StayCurrentPortrait](../../material-4/Communication/StayCurrentPortrait.Local.png) |




## StayCurrentPortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StayCurrentPortrait
include('material-4/Communication/StayCurrentPortrait')

' renders the element
StayCurrentPortrait('StayCurrentPortrait', 'Stay Current Portrait', 'an optional tech label')
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

' loads the Item which embeds the element StayCurrentPortrait
include('material-4/Communication/StayCurrentPortrait')

' renders the element
StayCurrentPortrait('StayCurrentPortrait', 'Stay Current Portrait', 'an optional tech label')
@enduml
```

