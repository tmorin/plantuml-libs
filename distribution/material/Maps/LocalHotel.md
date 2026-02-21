# LocalHotel


```text
material/Maps/LocalHotel
```

```text
include('material/Maps/LocalHotel')
```



| Illustration | LocalHotel |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalHotel.png) | ![illustration for LocalHotel](../../material/Maps/LocalHotel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalHotelXs>`
- `<$LocalHotelSm>`
- `<$LocalHotelMd>`
- `<$LocalHotelLg>`





## LocalHotel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalHotel
include('material/Maps/LocalHotel')

' renders the element
LocalHotel('LocalHotel', 'Local Hotel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalHotel
include('material/Maps/LocalHotel')

' renders the element
LocalHotel('LocalHotel', 'Local Hotel', 'an optional tech label', 'an optional description')
@enduml
```

