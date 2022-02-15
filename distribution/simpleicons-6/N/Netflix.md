# Netflix


```text
simpleicons-6/N/Netflix
```

```text
include('simpleicons-6/N/Netflix')
```



| Illustration | Netflix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Netflix.png) | ![illustration for Netflix](../../simpleicons-6/N/Netflix.Local.png) |




## Netflix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Netflix
include('simpleicons-6/N/Netflix')

' renders the element
Netflix('Netflix', 'Netflix', 'an optional tech label')
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

' loads the Item which embeds the element Netflix
include('simpleicons-6/N/Netflix')

' renders the element
Netflix('Netflix', 'Netflix', 'an optional tech label')
@enduml
```

