# Car


```text
fontawesome/Solid/Car
```

```text
include('fontawesome/Solid/Car')
```



| Illustration | Car |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Car.png) | ![illustration for Car](../../fontawesome/Solid/Car.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarXs>`
- `<$CarSm>`
- `<$CarMd>`
- `<$CarLg>`





## Car

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Car
include('fontawesome/Solid/Car')

' renders the element
Car('Car', 'Car', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Car
include('fontawesome/Solid/Car')

' renders the element
Car('Car', 'Car', 'an optional tech label', 'an optional description')
@enduml
```

