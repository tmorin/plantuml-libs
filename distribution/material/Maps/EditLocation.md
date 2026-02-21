# EditLocation


```text
material/Maps/EditLocation
```

```text
include('material/Maps/EditLocation')
```



| Illustration | EditLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/EditLocation.png) | ![illustration for EditLocation](../../material/Maps/EditLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EditLocationXs>`
- `<$EditLocationSm>`
- `<$EditLocationMd>`
- `<$EditLocationLg>`





## EditLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EditLocation
include('material/Maps/EditLocation')

' renders the element
EditLocation('EditLocation', 'Edit Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EditLocation
include('material/Maps/EditLocation')

' renders the element
EditLocation('EditLocation', 'Edit Location', 'an optional tech label', 'an optional description')
@enduml
```

