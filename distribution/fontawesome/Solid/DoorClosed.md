# DoorClosed


```text
fontawesome/Solid/DoorClosed
```

```text
include('fontawesome/Solid/DoorClosed')
```



| Illustration | DoorClosed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DoorClosed.png) | ![illustration for DoorClosed](../../fontawesome/Solid/DoorClosed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoorClosedXs>`
- `<$DoorClosedSm>`
- `<$DoorClosedMd>`
- `<$DoorClosedLg>`





## DoorClosed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DoorClosed
include('fontawesome/Solid/DoorClosed')

' renders the element
DoorClosed('DoorClosed', 'Door Closed', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element DoorClosed
include('fontawesome/Solid/DoorClosed')

' renders the element
DoorClosed('DoorClosed', 'Door Closed', 'an optional tech label', 'an optional description')
@enduml
```

