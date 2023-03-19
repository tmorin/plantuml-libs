# Cmake


```text
simpleicons-8/C/Cmake
```

```text
include('simpleicons-8/C/Cmake')
```



| Illustration | Cmake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cmake.png) | ![illustration for Cmake](../../simpleicons-8/C/Cmake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CmakeXs>`
- `<$CmakeSm>`
- `<$CmakeMd>`
- `<$CmakeLg>`





## Cmake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cmake
include('simpleicons-8/C/Cmake')

' renders the element
Cmake('Cmake', 'Cmake', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cmake
include('simpleicons-8/C/Cmake')

' renders the element
Cmake('Cmake', 'Cmake', 'an optional tech label', 'an optional description')
@enduml
```

