# Ruby


```text
simpleicons-7/R/Ruby
```

```text
include('simpleicons-7/R/Ruby')
```



| Illustration | Ruby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Ruby.png) | ![illustration for Ruby](../../simpleicons-7/R/Ruby.Local.png) |




## Ruby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ruby
include('simpleicons-7/R/Ruby')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ruby
include('simpleicons-7/R/Ruby')

' renders the element
Ruby('Ruby', 'Ruby', 'an optional tech label')
@enduml
```

