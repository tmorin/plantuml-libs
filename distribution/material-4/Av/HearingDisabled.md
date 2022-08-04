# HearingDisabled


```text
material-4/Av/HearingDisabled
```

```text
include('material-4/Av/HearingDisabled')
```



| Illustration | HearingDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/HearingDisabled.png) | ![illustration for HearingDisabled](../../material-4/Av/HearingDisabled.Local.png) |




## HearingDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HearingDisabled
include('material-4/Av/HearingDisabled')

' renders the element
HearingDisabled('HearingDisabled', 'Hearing Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HearingDisabled
include('material-4/Av/HearingDisabled')

' renders the element
HearingDisabled('HearingDisabled', 'Hearing Disabled', 'an optional tech label', 'an optional description')
@enduml
```

