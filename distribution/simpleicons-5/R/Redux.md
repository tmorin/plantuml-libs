# Redux


```text
simpleicons-5/R/Redux
```

```text
include('simpleicons-5/R/Redux')
```



| Illustration | Redux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Redux.png) | ![illustration for Redux](../../simpleicons-5/R/Redux.Local.png) |




## Redux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Redux
include('simpleicons-5/R/Redux')

' renders the element
Redux('Redux', 'Redux', 'an optional tech label')
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

' loads the Item which embeds the element Redux
include('simpleicons-5/R/Redux')

' renders the element
Redux('Redux', 'Redux', 'an optional tech label')
@enduml
```

