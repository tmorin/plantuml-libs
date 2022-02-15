# Filter


```text
fontawesome-6/Solid/Filter
```

```text
include('fontawesome-6/Solid/Filter')
```



| Illustration | Filter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Filter.png) | ![illustration for Filter](../../fontawesome-6/Solid/Filter.Local.png) |




## Filter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Filter
include('fontawesome-6/Solid/Filter')

' renders the element
Filter('Filter', 'Filter', 'an optional tech label')
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

' loads the Item which embeds the element Filter
include('fontawesome-6/Solid/Filter')

' renders the element
Filter('Filter', 'Filter', 'an optional tech label')
@enduml
```

