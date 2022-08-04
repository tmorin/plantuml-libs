# RoomPreferences


```text
material-4/Places/RoomPreferences
```

```text
include('material-4/Places/RoomPreferences')
```



| Illustration | RoomPreferences |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/RoomPreferences.png) | ![illustration for RoomPreferences](../../material-4/Places/RoomPreferences.Local.png) |




## RoomPreferences

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RoomPreferences
include('material-4/Places/RoomPreferences')

' renders the element
RoomPreferences('RoomPreferences', 'Room Preferences', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoomPreferences
include('material-4/Places/RoomPreferences')

' renders the element
RoomPreferences('RoomPreferences', 'Room Preferences', 'an optional tech label', 'an optional description')
@enduml
```

