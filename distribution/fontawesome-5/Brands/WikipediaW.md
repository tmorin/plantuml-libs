# WikipediaW


```text
fontawesome-5/Brands/WikipediaW
```

```text
include('fontawesome-5/Brands/WikipediaW')
```



| Illustration | WikipediaW |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/WikipediaW.png) | ![illustration for WikipediaW](../../fontawesome-5/Brands/WikipediaW.Local.png) |




## WikipediaW

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WikipediaW
include('fontawesome-5/Brands/WikipediaW')

' renders the element
WikipediaW('WikipediaW', 'Wikipedia W', 'an optional tech label')
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

' loads the Item which embeds the element WikipediaW
include('fontawesome-5/Brands/WikipediaW')

' renders the element
WikipediaW('WikipediaW', 'Wikipedia W', 'an optional tech label')
@enduml
```

