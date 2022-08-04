# Monster


```text
simpleicons-7/M/Monster
```

```text
include('simpleicons-7/M/Monster')
```



| Illustration | Monster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Monster.png) | ![illustration for Monster](../../simpleicons-7/M/Monster.Local.png) |




## Monster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Monster
include('simpleicons-7/M/Monster')

' renders the element
Monster('Monster', 'Monster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monster
include('simpleicons-7/M/Monster')

' renders the element
Monster('Monster', 'Monster', 'an optional tech label', 'an optional description')
@enduml
```

