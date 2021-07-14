# Netflix


```text
simpleicons-5/N/Netflix
```

```text
include('simpleicons-5/N/Netflix')
```



| Illustration | Netflix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Netflix.png) | ![illustration for Netflix](../../simpleicons-5/N/Netflix.Local.png) |




## Netflix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Netflix
include('simpleicons-5/N/Netflix')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Netflix
include('simpleicons-5/N/Netflix')

' renders the element
Netflix('Netflix', 'Netflix', 'an optional tech label')
@enduml
```

