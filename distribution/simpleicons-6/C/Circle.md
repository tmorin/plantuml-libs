# Circle


```text
simpleicons-6/C/Circle
```

```text
include('simpleicons-6/C/Circle')
```



| Illustration | Circle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Circle.png) | ![illustration for Circle](../../simpleicons-6/C/Circle.Local.png) |




## Circle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Circle
include('simpleicons-6/C/Circle')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Circle
include('simpleicons-6/C/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label')
@enduml
```

