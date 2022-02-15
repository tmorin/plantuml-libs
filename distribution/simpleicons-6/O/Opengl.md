# Opengl


```text
simpleicons-6/O/Opengl
```

```text
include('simpleicons-6/O/Opengl')
```



| Illustration | Opengl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opengl.png) | ![illustration for Opengl](../../simpleicons-6/O/Opengl.Local.png) |




## Opengl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opengl
include('simpleicons-6/O/Opengl')

' renders the element
Opengl('Opengl', 'Opengl', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opengl
include('simpleicons-6/O/Opengl')

' renders the element
Opengl('Opengl', 'Opengl', 'an optional tech label')
@enduml
```

