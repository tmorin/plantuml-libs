# Pinterest


```text
simpleicons-7/P/Pinterest
```

```text
include('simpleicons-7/P/Pinterest')
```



| Illustration | Pinterest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pinterest.png) | ![illustration for Pinterest](../../simpleicons-7/P/Pinterest.Local.png) |




## Pinterest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pinterest
include('simpleicons-7/P/Pinterest')

' renders the element
Pinterest('Pinterest', 'Pinterest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinterest
include('simpleicons-7/P/Pinterest')

' renders the element
Pinterest('Pinterest', 'Pinterest', 'an optional tech label', 'an optional description')
@enduml
```

