# Sky


```text
simpleicons-6/S/Sky
```

```text
include('simpleicons-6/S/Sky')
```



| Illustration | Sky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sky.png) | ![illustration for Sky](../../simpleicons-6/S/Sky.Local.png) |




## Sky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sky
include('simpleicons-6/S/Sky')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sky
include('simpleicons-6/S/Sky')

' renders the element
Sky('Sky', 'Sky', 'an optional tech label')
@enduml
```

