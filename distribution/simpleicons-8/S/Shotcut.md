# Shotcut


```text
simpleicons-8/S/Shotcut
```

```text
include('simpleicons-8/S/Shotcut')
```



| Illustration | Shotcut |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Shotcut.png) | ![illustration for Shotcut](../../simpleicons-8/S/Shotcut.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShotcutXs>`
- `<$ShotcutSm>`
- `<$ShotcutMd>`
- `<$ShotcutLg>`





## Shotcut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Shotcut
include('simpleicons-8/S/Shotcut')

' renders the element
Shotcut('Shotcut', 'Shotcut', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Shotcut
include('simpleicons-8/S/Shotcut')

' renders the element
Shotcut('Shotcut', 'Shotcut', 'an optional tech label', 'an optional description')
@enduml
```

