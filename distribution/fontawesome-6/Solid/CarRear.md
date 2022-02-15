# CarRear


```text
fontawesome-6/Solid/CarRear
```

```text
include('fontawesome-6/Solid/CarRear')
```



| Illustration | CarRear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CarRear.png) | ![illustration for CarRear](../../fontawesome-6/Solid/CarRear.Local.png) |




## CarRear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CarRear
include('fontawesome-6/Solid/CarRear')

' renders the element
CarRear('CarRear', 'Car Rear', 'an optional tech label')
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

' loads the Item which embeds the element CarRear
include('fontawesome-6/Solid/CarRear')

' renders the element
CarRear('CarRear', 'Car Rear', 'an optional tech label')
@enduml
```

