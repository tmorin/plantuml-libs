# Opengl


```text
simpleicons-14/O/Opengl
```

```text
include('simpleicons-14/O/Opengl')
```



| Illustration | Opengl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Opengl.png) | ![illustration for Opengl](../../simpleicons-14/O/Opengl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenglXs>`
- `<$OpenglSm>`
- `<$OpenglMd>`
- `<$OpenglLg>`





## Opengl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opengl
include('simpleicons-14/O/Opengl')

' renders the element
Opengl('Opengl', 'Opengl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opengl
include('simpleicons-14/O/Opengl')

' renders the element
Opengl('Opengl', 'Opengl', 'an optional tech label', 'an optional description')
@enduml
```

