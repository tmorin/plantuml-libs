# WebAsset


```text
material-4/Av/WebAsset
```

```text
include('material-4/Av/WebAsset')
```



| Illustration | WebAsset |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/WebAsset.png) | ![illustration for WebAsset](../../material-4/Av/WebAsset.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebAssetXs>`
- `<$WebAssetSm>`
- `<$WebAssetMd>`
- `<$WebAssetLg>`





## WebAsset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WebAsset
include('material-4/Av/WebAsset')

' renders the element
WebAsset('WebAsset', 'Web Asset', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WebAsset
include('material-4/Av/WebAsset')

' renders the element
WebAsset('WebAsset', 'Web Asset', 'an optional tech label', 'an optional description')
@enduml
```

