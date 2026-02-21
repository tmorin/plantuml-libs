# LocalTaxi


```text
material/Maps/LocalTaxi
```

```text
include('material/Maps/LocalTaxi')
```



| Illustration | LocalTaxi |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalTaxi.png) | ![illustration for LocalTaxi](../../material/Maps/LocalTaxi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalTaxiXs>`
- `<$LocalTaxiSm>`
- `<$LocalTaxiMd>`
- `<$LocalTaxiLg>`





## LocalTaxi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalTaxi
include('material/Maps/LocalTaxi')

' renders the element
LocalTaxi('LocalTaxi', 'Local Taxi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalTaxi
include('material/Maps/LocalTaxi')

' renders the element
LocalTaxi('LocalTaxi', 'Local Taxi', 'an optional tech label', 'an optional description')
@enduml
```

