# City


```text
fontawesome-6/Solid/City
```

```text
include('fontawesome-6/Solid/City')
```



| Illustration | City |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/City.png) | ![illustration for City](../../fontawesome-6/Solid/City.Local.png) |




## City

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element City
include('fontawesome-6/Solid/City')

' renders the element
City('City', 'City', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element City
include('fontawesome-6/Solid/City')

' renders the element
City('City', 'City', 'an optional tech label', 'an optional description')
@enduml
```

