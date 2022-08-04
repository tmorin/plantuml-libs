# AirplanemodeActive


```text
material-4/Device/AirplanemodeActive
```

```text
include('material-4/Device/AirplanemodeActive')
```



| Illustration | AirplanemodeActive |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/AirplanemodeActive.png) | ![illustration for AirplanemodeActive](../../material-4/Device/AirplanemodeActive.Local.png) |




## AirplanemodeActive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirplanemodeActive
include('material-4/Device/AirplanemodeActive')

' renders the element
AirplanemodeActive('AirplanemodeActive', 'Airplanemode Active', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AirplanemodeActive
include('material-4/Device/AirplanemodeActive')

' renders the element
AirplanemodeActive('AirplanemodeActive', 'Airplanemode Active', 'an optional tech label', 'an optional description')
@enduml
```

