# SearchPlus


```text
fontawesome-5/Solid/SearchPlus
```

```text
include('fontawesome-5/Solid/SearchPlus')
```



| Illustration | SearchPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SearchPlus.png) | ![illustration for SearchPlus](../../fontawesome-5/Solid/SearchPlus.Local.png) |




## SearchPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SearchPlus
include('fontawesome-5/Solid/SearchPlus')

' renders the element
SearchPlus('SearchPlus', 'Search Plus', 'an optional tech label')
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

' loads the Item which embeds the element SearchPlus
include('fontawesome-5/Solid/SearchPlus')

' renders the element
SearchPlus('SearchPlus', 'Search Plus', 'an optional tech label')
@enduml
```

