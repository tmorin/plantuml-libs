# TeethOpen


```text
fontawesome-5/Solid/TeethOpen
```

```text
include('fontawesome-5/Solid/TeethOpen')
```



| Illustration | TeethOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TeethOpen.png) | ![illustration for TeethOpen](../../fontawesome-5/Solid/TeethOpen.Local.png) |




## TeethOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TeethOpen
include('fontawesome-5/Solid/TeethOpen')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TeethOpen
include('fontawesome-5/Solid/TeethOpen')

' renders the element
TeethOpen('TeethOpen', 'Teeth Open', 'an optional tech label')
@enduml
```

