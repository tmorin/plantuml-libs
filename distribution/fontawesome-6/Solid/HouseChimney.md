# HouseChimney


```text
fontawesome-6/Solid/HouseChimney
```

```text
include('fontawesome-6/Solid/HouseChimney')
```



| Illustration | HouseChimney |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseChimney.png) | ![illustration for HouseChimney](../../fontawesome-6/Solid/HouseChimney.Local.png) |




## HouseChimney

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseChimney
include('fontawesome-6/Solid/HouseChimney')

' renders the element
HouseChimney('HouseChimney', 'House Chimney', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseChimney
include('fontawesome-6/Solid/HouseChimney')

' renders the element
HouseChimney('HouseChimney', 'House Chimney', 'an optional tech label', 'an optional description')
@enduml
```

