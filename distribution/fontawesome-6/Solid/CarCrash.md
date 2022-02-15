# CarCrash


```text
fontawesome-6/Solid/CarCrash
```

```text
include('fontawesome-6/Solid/CarCrash')
```



| Illustration | CarCrash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CarCrash.png) | ![illustration for CarCrash](../../fontawesome-6/Solid/CarCrash.Local.png) |




## CarCrash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CarCrash
include('fontawesome-6/Solid/CarCrash')

' renders the element
CarCrash('CarCrash', 'Car Crash', 'an optional tech label')
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

' loads the Item which embeds the element CarCrash
include('fontawesome-6/Solid/CarCrash')

' renders the element
CarCrash('CarCrash', 'Car Crash', 'an optional tech label')
@enduml
```

