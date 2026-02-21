# AirplanemodeActive


```text
material/Device/AirplanemodeActive
```

```text
include('material/Device/AirplanemodeActive')
```



| Illustration | AirplanemodeActive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/AirplanemodeActive.png) | ![illustration for AirplanemodeActive](../../material/Device/AirplanemodeActive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirplanemodeActiveXs>`
- `<$AirplanemodeActiveSm>`
- `<$AirplanemodeActiveMd>`
- `<$AirplanemodeActiveLg>`





## AirplanemodeActive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AirplanemodeActive
include('material/Device/AirplanemodeActive')

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
include('material/bootstrap')

' loads the Item which embeds the element AirplanemodeActive
include('material/Device/AirplanemodeActive')

' renders the element
AirplanemodeActive('AirplanemodeActive', 'Airplanemode Active', 'an optional tech label', 'an optional description')
@enduml
```

