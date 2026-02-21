# AddToDrive


```text
material/Action/AddToDrive
```

```text
include('material/Action/AddToDrive')
```



| Illustration | AddToDrive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AddToDrive.png) | ![illustration for AddToDrive](../../material/Action/AddToDrive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddToDriveXs>`
- `<$AddToDriveSm>`
- `<$AddToDriveMd>`
- `<$AddToDriveLg>`





## AddToDrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddToDrive
include('material/Action/AddToDrive')

' renders the element
AddToDrive('AddToDrive', 'Add To Drive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddToDrive
include('material/Action/AddToDrive')

' renders the element
AddToDrive('AddToDrive', 'Add To Drive', 'an optional tech label', 'an optional description')
@enduml
```

