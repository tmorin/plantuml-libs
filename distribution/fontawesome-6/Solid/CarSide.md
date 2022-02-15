# CarSide


```text
fontawesome-6/Solid/CarSide
```

```text
include('fontawesome-6/Solid/CarSide')
```



| Illustration | CarSide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CarSide.png) | ![illustration for CarSide](../../fontawesome-6/Solid/CarSide.Local.png) |




## CarSide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CarSide
include('fontawesome-6/Solid/CarSide')

' renders the element
CarSide('CarSide', 'Car Side', 'an optional tech label')
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

' loads the Item which embeds the element CarSide
include('fontawesome-6/Solid/CarSide')

' renders the element
CarSide('CarSide', 'Car Side', 'an optional tech label')
@enduml
```

