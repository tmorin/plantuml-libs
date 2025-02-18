# Meetup


```text
simpleicons-14/M/Meetup
```

```text
include('simpleicons-14/M/Meetup')
```



| Illustration | Meetup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Meetup.png) | ![illustration for Meetup](../../simpleicons-14/M/Meetup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MeetupXs>`
- `<$MeetupSm>`
- `<$MeetupMd>`
- `<$MeetupLg>`





## Meetup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meetup
include('simpleicons-14/M/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meetup
include('simpleicons-14/M/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label', 'an optional description')
@enduml
```

