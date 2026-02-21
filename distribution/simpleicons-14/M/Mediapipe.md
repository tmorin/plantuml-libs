# Mediapipe


```text
simpleicons-14/M/Mediapipe
```

```text
include('simpleicons-14/M/Mediapipe')
```



| Illustration | Mediapipe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mediapipe.png) | ![illustration for Mediapipe](../../simpleicons-14/M/Mediapipe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MediapipeXs>`
- `<$MediapipeSm>`
- `<$MediapipeMd>`
- `<$MediapipeLg>`





## Mediapipe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mediapipe
include('simpleicons-14/M/Mediapipe')

' renders the element
Mediapipe('Mediapipe', 'Mediapipe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mediapipe
include('simpleicons-14/M/Mediapipe')

' renders the element
Mediapipe('Mediapipe', 'Mediapipe', 'an optional tech label', 'an optional description')
@enduml
```

