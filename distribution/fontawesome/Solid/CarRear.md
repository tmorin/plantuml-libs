# CarRear


```text
fontawesome/Solid/CarRear
```

```text
include('fontawesome/Solid/CarRear')
```



| Illustration | CarRear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CarRear.png) | ![illustration for CarRear](../../fontawesome/Solid/CarRear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarRearXs>`
- `<$CarRearSm>`
- `<$CarRearMd>`
- `<$CarRearLg>`





## CarRear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarRear
include('fontawesome/Solid/CarRear')

' renders the element
CarRear('CarRear', 'Car Rear', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarRear
include('fontawesome/Solid/CarRear')

' renders the element
CarRear('CarRear', 'Car Rear', 'an optional tech label', 'an optional description')
@enduml
```

