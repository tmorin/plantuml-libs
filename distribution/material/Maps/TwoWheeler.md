# TwoWheeler


```text
material/Maps/TwoWheeler
```

```text
include('material/Maps/TwoWheeler')
```



| Illustration | TwoWheeler |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/TwoWheeler.png) | ![illustration for TwoWheeler](../../material/Maps/TwoWheeler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwoWheelerXs>`
- `<$TwoWheelerSm>`
- `<$TwoWheelerMd>`
- `<$TwoWheelerLg>`





## TwoWheeler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TwoWheeler
include('material/Maps/TwoWheeler')

' renders the element
TwoWheeler('TwoWheeler', 'Two Wheeler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TwoWheeler
include('material/Maps/TwoWheeler')

' renders the element
TwoWheeler('TwoWheeler', 'Two Wheeler', 'an optional tech label', 'an optional description')
@enduml
```

