# RoomPreferences


```text
material/Places/RoomPreferences
```

```text
include('material/Places/RoomPreferences')
```



| Illustration | RoomPreferences |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/RoomPreferences.png) | ![illustration for RoomPreferences](../../material/Places/RoomPreferences.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoomPreferencesXs>`
- `<$RoomPreferencesSm>`
- `<$RoomPreferencesMd>`
- `<$RoomPreferencesLg>`





## RoomPreferences

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RoomPreferences
include('material/Places/RoomPreferences')

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
include('material/bootstrap')

' loads the Item which embeds the element RoomPreferences
include('material/Places/RoomPreferences')

' renders the element
RoomPreferences('RoomPreferences', 'Room Preferences', 'an optional tech label', 'an optional description')
@enduml
```

