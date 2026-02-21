# Platformio


```text
simpleicons/P/Platformio
```

```text
include('simpleicons/P/Platformio')
```



| Illustration | Platformio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Platformio.png) | ![illustration for Platformio](../../simpleicons/P/Platformio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlatformioXs>`
- `<$PlatformioSm>`
- `<$PlatformioMd>`
- `<$PlatformioLg>`





## Platformio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Platformio
include('simpleicons/P/Platformio')

' renders the element
Platformio('Platformio', 'Platformio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Platformio
include('simpleicons/P/Platformio')

' renders the element
Platformio('Platformio', 'Platformio', 'an optional tech label', 'an optional description')
@enduml
```

