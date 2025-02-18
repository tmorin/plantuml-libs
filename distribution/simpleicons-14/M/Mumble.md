# Mumble


```text
simpleicons-14/M/Mumble
```

```text
include('simpleicons-14/M/Mumble')
```



| Illustration | Mumble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mumble.png) | ![illustration for Mumble](../../simpleicons-14/M/Mumble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MumbleXs>`
- `<$MumbleSm>`
- `<$MumbleMd>`
- `<$MumbleLg>`





## Mumble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mumble
include('simpleicons-14/M/Mumble')

' renders the element
Mumble('Mumble', 'Mumble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mumble
include('simpleicons-14/M/Mumble')

' renders the element
Mumble('Mumble', 'Mumble', 'an optional tech label', 'an optional description')
@enduml
```

