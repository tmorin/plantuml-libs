# Webgl


```text
simpleicons-7/W/Webgl
```

```text
include('simpleicons-7/W/Webgl')
```



| Illustration | Webgl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Webgl.png) | ![illustration for Webgl](../../simpleicons-7/W/Webgl.Local.png) |




## Webgl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Webgl
include('simpleicons-7/W/Webgl')

' renders the element
Webgl('Webgl', 'Webgl', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Webgl
include('simpleicons-7/W/Webgl')

' renders the element
Webgl('Webgl', 'Webgl', 'an optional tech label')
@enduml
```

