# SquareParking


```text
fontawesome/Solid/SquareParking
```

```text
include('fontawesome/Solid/SquareParking')
```



| Illustration | SquareParking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareParking.png) | ![illustration for SquareParking](../../fontawesome/Solid/SquareParking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareParkingXs>`
- `<$SquareParkingSm>`
- `<$SquareParkingMd>`
- `<$SquareParkingLg>`





## SquareParking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareParking
include('fontawesome/Solid/SquareParking')

' renders the element
SquareParking('SquareParking', 'Square Parking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareParking
include('fontawesome/Solid/SquareParking')

' renders the element
SquareParking('SquareParking', 'Square Parking', 'an optional tech label', 'an optional description')
@enduml
```

