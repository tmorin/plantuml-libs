# Uv


```text
simpleicons/U/Uv
```

```text
include('simpleicons/U/Uv')
```



| Illustration | Uv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uv.png) | ![illustration for Uv](../../simpleicons/U/Uv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UvXs>`
- `<$UvSm>`
- `<$UvMd>`
- `<$UvLg>`





## Uv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uv
include('simpleicons/U/Uv')

' renders the element
Uv('Uv', 'Uv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uv
include('simpleicons/U/Uv')

' renders the element
Uv('Uv', 'Uv', 'an optional tech label', 'an optional description')
@enduml
```

