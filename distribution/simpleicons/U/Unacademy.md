# Unacademy


```text
simpleicons/U/Unacademy
```

```text
include('simpleicons/U/Unacademy')
```



| Illustration | Unacademy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unacademy.png) | ![illustration for Unacademy](../../simpleicons/U/Unacademy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnacademyXs>`
- `<$UnacademySm>`
- `<$UnacademyMd>`
- `<$UnacademyLg>`





## Unacademy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unacademy
include('simpleicons/U/Unacademy')

' renders the element
Unacademy('Unacademy', 'Unacademy', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unacademy
include('simpleicons/U/Unacademy')

' renders the element
Unacademy('Unacademy', 'Unacademy', 'an optional tech label', 'an optional description')
@enduml
```

