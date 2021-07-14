# Ruby


```text
simpleicons-5/R/Ruby
```

```text
include('simpleicons-5/R/Ruby')
```



| Illustration | Ruby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Ruby.png) | ![illustration for Ruby](../../simpleicons-5/R/Ruby.Local.png) |




## Ruby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ruby
include('simpleicons-5/R/Ruby')

' renders the element
Ruby('Ruby', 'Ruby', 'an optional tech label')
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

' loads the Item which embeds the element Ruby
include('simpleicons-5/R/Ruby')

' renders the element
Ruby('Ruby', 'Ruby', 'an optional tech label')
@enduml
```

