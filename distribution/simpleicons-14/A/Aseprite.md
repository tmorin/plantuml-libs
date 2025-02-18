# Aseprite


```text
simpleicons-14/A/Aseprite
```

```text
include('simpleicons-14/A/Aseprite')
```



| Illustration | Aseprite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aseprite.png) | ![illustration for Aseprite](../../simpleicons-14/A/Aseprite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsepriteXs>`
- `<$AsepriteSm>`
- `<$AsepriteMd>`
- `<$AsepriteLg>`





## Aseprite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aseprite
include('simpleicons-14/A/Aseprite')

' renders the element
Aseprite('Aseprite', 'Aseprite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aseprite
include('simpleicons-14/A/Aseprite')

' renders the element
Aseprite('Aseprite', 'Aseprite', 'an optional tech label', 'an optional description')
@enduml
```

