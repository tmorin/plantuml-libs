# Symphony


```text
simpleicons-5/S/Symphony
```

```text
include('simpleicons-5/S/Symphony')
```



| Illustration | Symphony |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Symphony.png) | ![illustration for Symphony](../../simpleicons-5/S/Symphony.Local.png) |




## Symphony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Symphony
include('simpleicons-5/S/Symphony')

' renders the element
Symphony('Symphony', 'Symphony', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Symphony
include('simpleicons-5/S/Symphony')

' renders the element
Symphony('Symphony', 'Symphony', 'an optional tech label')
@enduml
```

