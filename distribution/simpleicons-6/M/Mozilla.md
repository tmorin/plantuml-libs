# Mozilla


```text
simpleicons-6/M/Mozilla
```

```text
include('simpleicons-6/M/Mozilla')
```



| Illustration | Mozilla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mozilla.png) | ![illustration for Mozilla](../../simpleicons-6/M/Mozilla.Local.png) |




## Mozilla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mozilla
include('simpleicons-6/M/Mozilla')

' renders the element
Mozilla('Mozilla', 'Mozilla', 'an optional tech label')
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

' loads the Item which embeds the element Mozilla
include('simpleicons-6/M/Mozilla')

' renders the element
Mozilla('Mozilla', 'Mozilla', 'an optional tech label')
@enduml
```

