# Audiotechnica


```text
simpleicons/A/Audiotechnica
```

```text
include('simpleicons/A/Audiotechnica')
```



| Illustration | Audiotechnica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Audiotechnica.png) | ![illustration for Audiotechnica](../../simpleicons/A/Audiotechnica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AudiotechnicaXs>`
- `<$AudiotechnicaSm>`
- `<$AudiotechnicaMd>`
- `<$AudiotechnicaLg>`





## Audiotechnica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Audiotechnica
include('simpleicons/A/Audiotechnica')

' renders the element
Audiotechnica('Audiotechnica', 'Audiotechnica', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audiotechnica
include('simpleicons/A/Audiotechnica')

' renders the element
Audiotechnica('Audiotechnica', 'Audiotechnica', 'an optional tech label', 'an optional description')
@enduml
```

