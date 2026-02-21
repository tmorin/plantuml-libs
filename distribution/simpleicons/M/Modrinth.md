# Modrinth


```text
simpleicons/M/Modrinth
```

```text
include('simpleicons/M/Modrinth')
```



| Illustration | Modrinth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Modrinth.png) | ![illustration for Modrinth](../../simpleicons/M/Modrinth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModrinthXs>`
- `<$ModrinthSm>`
- `<$ModrinthMd>`
- `<$ModrinthLg>`





## Modrinth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Modrinth
include('simpleicons/M/Modrinth')

' renders the element
Modrinth('Modrinth', 'Modrinth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Modrinth
include('simpleicons/M/Modrinth')

' renders the element
Modrinth('Modrinth', 'Modrinth', 'an optional tech label', 'an optional description')
@enduml
```

