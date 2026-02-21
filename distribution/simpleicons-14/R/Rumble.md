# Rumble


```text
simpleicons-14/R/Rumble
```

```text
include('simpleicons-14/R/Rumble')
```



| Illustration | Rumble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rumble.png) | ![illustration for Rumble](../../simpleicons-14/R/Rumble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RumbleXs>`
- `<$RumbleSm>`
- `<$RumbleMd>`
- `<$RumbleLg>`





## Rumble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rumble
include('simpleicons-14/R/Rumble')

' renders the element
Rumble('Rumble', 'Rumble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rumble
include('simpleicons-14/R/Rumble')

' renders the element
Rumble('Rumble', 'Rumble', 'an optional tech label', 'an optional description')
@enduml
```

