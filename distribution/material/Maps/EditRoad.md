# EditRoad


```text
material/Maps/EditRoad
```

```text
include('material/Maps/EditRoad')
```



| Illustration | EditRoad |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/EditRoad.png) | ![illustration for EditRoad](../../material/Maps/EditRoad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EditRoadXs>`
- `<$EditRoadSm>`
- `<$EditRoadMd>`
- `<$EditRoadLg>`





## EditRoad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EditRoad
include('material/Maps/EditRoad')

' renders the element
EditRoad('EditRoad', 'Edit Road', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EditRoad
include('material/Maps/EditRoad')

' renders the element
EditRoad('EditRoad', 'Edit Road', 'an optional tech label', 'an optional description')
@enduml
```

