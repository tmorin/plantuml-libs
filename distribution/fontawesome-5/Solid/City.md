# City


```text
fontawesome-5/Solid/City
```

```text
include('fontawesome-5/Solid/City')
```



| Illustration | City |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/City.png) | ![illustration for City](../../fontawesome-5/Solid/City.Local.png) |




## City

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element City
include('fontawesome-5/Solid/City')

' renders the element
City('City', 'City', 'an optional tech label')
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

' loads the Item which embeds the element City
include('fontawesome-5/Solid/City')

' renders the element
City('City', 'City', 'an optional tech label')
@enduml
```

