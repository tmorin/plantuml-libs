# Intel


```text
simpleicons-7/I/Intel
```

```text
include('simpleicons-7/I/Intel')
```



| Illustration | Intel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Intel.png) | ![illustration for Intel](../../simpleicons-7/I/Intel.Local.png) |




## Intel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Intel
include('simpleicons-7/I/Intel')

' renders the element
Intel('Intel', 'Intel', 'an optional tech label')
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

' loads the Item which embeds the element Intel
include('simpleicons-7/I/Intel')

' renders the element
Intel('Intel', 'Intel', 'an optional tech label')
@enduml
```

