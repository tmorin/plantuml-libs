# Wii


```text
simpleicons-14/W/Wii
```

```text
include('simpleicons-14/W/Wii')
```



| Illustration | Wii |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wii.png) | ![illustration for Wii](../../simpleicons-14/W/Wii.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WiiXs>`
- `<$WiiSm>`
- `<$WiiMd>`
- `<$WiiLg>`





## Wii

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wii
include('simpleicons-14/W/Wii')

' renders the element
Wii('Wii', 'Wii', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wii
include('simpleicons-14/W/Wii')

' renders the element
Wii('Wii', 'Wii', 'an optional tech label', 'an optional description')
@enduml
```

