# VideogameAsset


```text
material/Hardware/VideogameAsset
```

```text
include('material/Hardware/VideogameAsset')
```



| Illustration | VideogameAsset |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/VideogameAsset.png) | ![illustration for VideogameAsset](../../material/Hardware/VideogameAsset.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideogameAssetXs>`
- `<$VideogameAssetSm>`
- `<$VideogameAssetMd>`
- `<$VideogameAssetLg>`





## VideogameAsset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VideogameAsset
include('material/Hardware/VideogameAsset')

' renders the element
VideogameAsset('VideogameAsset', 'Videogame Asset', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VideogameAsset
include('material/Hardware/VideogameAsset')

' renders the element
VideogameAsset('VideogameAsset', 'Videogame Asset', 'an optional tech label', 'an optional description')
@enduml
```

