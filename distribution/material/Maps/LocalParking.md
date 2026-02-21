# LocalParking


```text
material/Maps/LocalParking
```

```text
include('material/Maps/LocalParking')
```



| Illustration | LocalParking |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalParking.png) | ![illustration for LocalParking](../../material/Maps/LocalParking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalParkingXs>`
- `<$LocalParkingSm>`
- `<$LocalParkingMd>`
- `<$LocalParkingLg>`





## LocalParking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalParking
include('material/Maps/LocalParking')

' renders the element
LocalParking('LocalParking', 'Local Parking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalParking
include('material/Maps/LocalParking')

' renders the element
LocalParking('LocalParking', 'Local Parking', 'an optional tech label', 'an optional description')
@enduml
```

