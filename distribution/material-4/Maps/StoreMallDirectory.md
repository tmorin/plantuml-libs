# StoreMallDirectory


```text
material-4/Maps/StoreMallDirectory
```

```text
include('material-4/Maps/StoreMallDirectory')
```



| Illustration | StoreMallDirectory |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/StoreMallDirectory.png) | ![illustration for StoreMallDirectory](../../material-4/Maps/StoreMallDirectory.Local.png) |




## StoreMallDirectory

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StoreMallDirectory
include('material-4/Maps/StoreMallDirectory')

' renders the element
StoreMallDirectory('StoreMallDirectory', 'Store Mall Directory', 'an optional tech label')
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

' loads the Item which embeds the element StoreMallDirectory
include('material-4/Maps/StoreMallDirectory')

' renders the element
StoreMallDirectory('StoreMallDirectory', 'Store Mall Directory', 'an optional tech label')
@enduml
```

