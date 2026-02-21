# Streetview


```text
material/Maps/Streetview
```

```text
include('material/Maps/Streetview')
```



| Illustration | Streetview |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Streetview.png) | ![illustration for Streetview](../../material/Maps/Streetview.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StreetviewXs>`
- `<$StreetviewSm>`
- `<$StreetviewMd>`
- `<$StreetviewLg>`





## Streetview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Streetview
include('material/Maps/Streetview')

' renders the element
Streetview('Streetview', 'Streetview', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Streetview
include('material/Maps/Streetview')

' renders the element
Streetview('Streetview', 'Streetview', 'an optional tech label', 'an optional description')
@enduml
```

