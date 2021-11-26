# CarRental


```text
material-4/Maps/CarRental
```

```text
include('material-4/Maps/CarRental')
```



| Illustration | CarRental |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/CarRental.png) | ![illustration for CarRental](../../material-4/Maps/CarRental.Local.png) |




## CarRental

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CarRental
include('material-4/Maps/CarRental')

' renders the element
CarRental('CarRental', 'Car Rental', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element CarRental
include('material-4/Maps/CarRental')

' renders the element
CarRental('CarRental', 'Car Rental', 'an optional tech label')
@enduml
```

