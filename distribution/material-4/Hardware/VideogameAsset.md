# VideogameAsset


```text
material-4/Hardware/VideogameAsset
```

```text
include('material-4/Hardware/VideogameAsset')
```



| Illustration | VideogameAsset |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/VideogameAsset.png) | ![illustration for VideogameAsset](../../material-4/Hardware/VideogameAsset.Local.png) |




## VideogameAsset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VideogameAsset
include('material-4/Hardware/VideogameAsset')

' renders the element
VideogameAsset('VideogameAsset', 'Videogame Asset', 'an optional tech label')
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

' loads the Item which embeds the element VideogameAsset
include('material-4/Hardware/VideogameAsset')

' renders the element
VideogameAsset('VideogameAsset', 'Videogame Asset', 'an optional tech label')
@enduml
```

