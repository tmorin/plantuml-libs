# AirplanemodeInactive


```text
material/Device/AirplanemodeInactive
```

```text
include('material/Device/AirplanemodeInactive')
```



| Illustration | AirplanemodeInactive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/AirplanemodeInactive.png) | ![illustration for AirplanemodeInactive](../../material/Device/AirplanemodeInactive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirplanemodeInactiveXs>`
- `<$AirplanemodeInactiveSm>`
- `<$AirplanemodeInactiveMd>`
- `<$AirplanemodeInactiveLg>`





## AirplanemodeInactive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AirplanemodeInactive
include('material/Device/AirplanemodeInactive')

' renders the element
AirplanemodeInactive('AirplanemodeInactive', 'Airplanemode Inactive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AirplanemodeInactive
include('material/Device/AirplanemodeInactive')

' renders the element
AirplanemodeInactive('AirplanemodeInactive', 'Airplanemode Inactive', 'an optional tech label', 'an optional description')
@enduml
```

