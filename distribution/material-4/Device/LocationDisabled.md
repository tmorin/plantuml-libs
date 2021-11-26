# LocationDisabled


```text
material-4/Device/LocationDisabled
```

```text
include('material-4/Device/LocationDisabled')
```



| Illustration | LocationDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/LocationDisabled.png) | ![illustration for LocationDisabled](../../material-4/Device/LocationDisabled.Local.png) |




## LocationDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocationDisabled
include('material-4/Device/LocationDisabled')

' renders the element
LocationDisabled('LocationDisabled', 'Location Disabled', 'an optional tech label')
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

' loads the Item which embeds the element LocationDisabled
include('material-4/Device/LocationDisabled')

' renders the element
LocationDisabled('LocationDisabled', 'Location Disabled', 'an optional tech label')
@enduml
```

