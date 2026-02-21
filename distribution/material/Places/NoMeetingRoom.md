# NoMeetingRoom


```text
material/Places/NoMeetingRoom
```

```text
include('material/Places/NoMeetingRoom')
```



| Illustration | NoMeetingRoom |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/NoMeetingRoom.png) | ![illustration for NoMeetingRoom](../../material/Places/NoMeetingRoom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoMeetingRoomXs>`
- `<$NoMeetingRoomSm>`
- `<$NoMeetingRoomMd>`
- `<$NoMeetingRoomLg>`





## NoMeetingRoom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoMeetingRoom
include('material/Places/NoMeetingRoom')

' renders the element
NoMeetingRoom('NoMeetingRoom', 'No Meeting Room', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoMeetingRoom
include('material/Places/NoMeetingRoom')

' renders the element
NoMeetingRoom('NoMeetingRoom', 'No Meeting Room', 'an optional tech label', 'an optional description')
@enduml
```

