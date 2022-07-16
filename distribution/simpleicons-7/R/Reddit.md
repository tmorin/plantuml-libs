# Reddit


```text
simpleicons-7/R/Reddit
```

```text
include('simpleicons-7/R/Reddit')
```



| Illustration | Reddit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Reddit.png) | ![illustration for Reddit](../../simpleicons-7/R/Reddit.Local.png) |




## Reddit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reddit
include('simpleicons-7/R/Reddit')

' renders the element
Reddit('Reddit', 'Reddit', 'an optional tech label')
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

' loads the Item which embeds the element Reddit
include('simpleicons-7/R/Reddit')

' renders the element
Reddit('Reddit', 'Reddit', 'an optional tech label')
@enduml
```

