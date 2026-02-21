# LocationCity


```text
material/Social/LocationCity
```

```text
include('material/Social/LocationCity')
```



| Illustration | LocationCity |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/LocationCity.png) | ![illustration for LocationCity](../../material/Social/LocationCity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationCityXs>`
- `<$LocationCitySm>`
- `<$LocationCityMd>`
- `<$LocationCityLg>`





## LocationCity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocationCity
include('material/Social/LocationCity')

' renders the element
LocationCity('LocationCity', 'Location City', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationCity
include('material/Social/LocationCity')

' renders the element
LocationCity('LocationCity', 'Location City', 'an optional tech label', 'an optional description')
@enduml
```

