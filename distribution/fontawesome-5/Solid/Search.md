# Search


```text
fontawesome-5/Solid/Search
```

```text
include('fontawesome-5/Solid/Search')
```



| Illustration | Search |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Search.png) | ![illustration for Search](../../fontawesome-5/Solid/Search.Local.png) |




## Search

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Search
include('fontawesome-5/Solid/Search')

' renders the element
Search('Search', 'Search', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Search
include('fontawesome-5/Solid/Search')

' renders the element
Search('Search', 'Search', 'an optional tech label')
@enduml
```

