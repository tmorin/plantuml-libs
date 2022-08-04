# Blueprint


```text
simpleicons-7/B/Blueprint
```

```text
include('simpleicons-7/B/Blueprint')
```



| Illustration | Blueprint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Blueprint.png) | ![illustration for Blueprint](../../simpleicons-7/B/Blueprint.Local.png) |




## Blueprint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Blueprint
include('simpleicons-7/B/Blueprint')

' renders the element
Blueprint('Blueprint', 'Blueprint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blueprint
include('simpleicons-7/B/Blueprint')

' renders the element
Blueprint('Blueprint', 'Blueprint', 'an optional tech label', 'an optional description')
@enduml
```

