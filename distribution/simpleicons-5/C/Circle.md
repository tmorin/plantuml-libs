# Circle


```text
simpleicons-5/C/Circle
```

```text
include('simpleicons-5/C/Circle')
```



| Illustration | Circle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Circle.png) | ![illustration for Circle](../../simpleicons-5/C/Circle.Local.png) |




## Circle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Circle
include('simpleicons-5/C/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label')
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

' loads the Item which embeds the element Circle
include('simpleicons-5/C/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label')
@enduml
```

