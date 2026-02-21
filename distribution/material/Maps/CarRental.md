# CarRental


```text
material/Maps/CarRental
```

```text
include('material/Maps/CarRental')
```



| Illustration | CarRental |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/CarRental.png) | ![illustration for CarRental](../../material/Maps/CarRental.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarRentalXs>`
- `<$CarRentalSm>`
- `<$CarRentalMd>`
- `<$CarRentalLg>`





## CarRental

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CarRental
include('material/Maps/CarRental')

' renders the element
CarRental('CarRental', 'Car Rental', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element CarRental
include('material/Maps/CarRental')

' renders the element
CarRental('CarRental', 'Car Rental', 'an optional tech label', 'an optional description')
@enduml
```

