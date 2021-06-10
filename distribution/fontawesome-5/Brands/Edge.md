# Edge


```text
fontawesome-5/Brands/Edge
```

```text
include('fontawesome-5/Brands/Edge')
```



| Illustration | Edge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Edge.png) | ![illustration for Edge](../../fontawesome-5/Brands/Edge.Local.png) |




## Edge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Edge
include('fontawesome-5/Brands/Edge')

' renders the element
Edge('Edge', 'Edge', 'an optional tech label')
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

' loads the Item which embeds the element Edge
include('fontawesome-5/Brands/Edge')

' renders the element
Edge('Edge', 'Edge', 'an optional tech label')
@enduml
```

