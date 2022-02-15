# TeethOpen


```text
fontawesome-6/Solid/TeethOpen
```

```text
include('fontawesome-6/Solid/TeethOpen')
```



| Illustration | TeethOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TeethOpen.png) | ![illustration for TeethOpen](../../fontawesome-6/Solid/TeethOpen.Local.png) |




## TeethOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TeethOpen
include('fontawesome-6/Solid/TeethOpen')

' renders the element
TeethOpen('TeethOpen', 'Teeth Open', 'an optional tech label')
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

' loads the Item which embeds the element TeethOpen
include('fontawesome-6/Solid/TeethOpen')

' renders the element
TeethOpen('TeethOpen', 'Teeth Open', 'an optional tech label')
@enduml
```

