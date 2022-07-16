# Meetup


```text
simpleicons-7/M/Meetup
```

```text
include('simpleicons-7/M/Meetup')
```



| Illustration | Meetup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Meetup.png) | ![illustration for Meetup](../../simpleicons-7/M/Meetup.Local.png) |




## Meetup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Meetup
include('simpleicons-7/M/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Meetup
include('simpleicons-7/M/Meetup')

' renders the element
Meetup('Meetup', 'Meetup', 'an optional tech label')
@enduml
```

