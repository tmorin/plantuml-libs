# Sky


```text
simpleicons-5/S/Sky
```

```text
include('simpleicons-5/S/Sky')
```



| Illustration | Sky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sky.png) | ![illustration for Sky](../../simpleicons-5/S/Sky.Local.png) |




## Sky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sky
include('simpleicons-5/S/Sky')

' renders the element
Sky('Sky', 'Sky', 'an optional tech label')
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

' loads the Item which embeds the element Sky
include('simpleicons-5/S/Sky')

' renders the element
Sky('Sky', 'Sky', 'an optional tech label')
@enduml
```

