# Moodle


```text
simpleicons-14/M/Moodle
```

```text
include('simpleicons-14/M/Moodle')
```



| Illustration | Moodle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Moodle.png) | ![illustration for Moodle](../../simpleicons-14/M/Moodle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoodleXs>`
- `<$MoodleSm>`
- `<$MoodleMd>`
- `<$MoodleLg>`





## Moodle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Moodle
include('simpleicons-14/M/Moodle')

' renders the element
Moodle('Moodle', 'Moodle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moodle
include('simpleicons-14/M/Moodle')

' renders the element
Moodle('Moodle', 'Moodle', 'an optional tech label', 'an optional description')
@enduml
```

