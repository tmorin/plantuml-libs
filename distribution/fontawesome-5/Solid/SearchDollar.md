# SearchDollar


```text
fontawesome-5/Solid/SearchDollar
```

```text
include('fontawesome-5/Solid/SearchDollar')
```



| Illustration | SearchDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SearchDollar.png) | ![illustration for SearchDollar](../../fontawesome-5/Solid/SearchDollar.Local.png) |




## SearchDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SearchDollar
include('fontawesome-5/Solid/SearchDollar')

' renders the element
SearchDollar('SearchDollar', 'Search Dollar', 'an optional tech label')
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

' loads the Item which embeds the element SearchDollar
include('fontawesome-5/Solid/SearchDollar')

' renders the element
SearchDollar('SearchDollar', 'Search Dollar', 'an optional tech label')
@enduml
```

