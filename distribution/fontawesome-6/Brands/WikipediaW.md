# WikipediaW


```text
fontawesome-6/Brands/WikipediaW
```

```text
include('fontawesome-6/Brands/WikipediaW')
```



| Illustration | WikipediaW |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/WikipediaW.png) | ![illustration for WikipediaW](../../fontawesome-6/Brands/WikipediaW.Local.png) |




## WikipediaW

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WikipediaW
include('fontawesome-6/Brands/WikipediaW')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WikipediaW
include('fontawesome-6/Brands/WikipediaW')

' renders the element
WikipediaW('WikipediaW', 'Wikipedia W', 'an optional tech label')
@enduml
```

