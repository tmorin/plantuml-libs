# Json


```text
simpleicons-8/J/Json
```

```text
include('simpleicons-8/J/Json')
```



| Illustration | Json |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Json.png) | ![illustration for Json](../../simpleicons-8/J/Json.Local.png) |




## Json

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Json
include('simpleicons-8/J/Json')

' renders the element
Json('Json', 'Json', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Json
include('simpleicons-8/J/Json')

' renders the element
Json('Json', 'Json', 'an optional tech label', 'an optional description')
@enduml
```

