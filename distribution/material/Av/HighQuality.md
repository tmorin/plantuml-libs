# HighQuality


```text
material/Av/HighQuality
```

```text
include('material/Av/HighQuality')
```



| Illustration | HighQuality |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/HighQuality.png) | ![illustration for HighQuality](../../material/Av/HighQuality.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HighQualityXs>`
- `<$HighQualitySm>`
- `<$HighQualityMd>`
- `<$HighQualityLg>`





## HighQuality

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HighQuality
include('material/Av/HighQuality')

' renders the element
HighQuality('HighQuality', 'High Quality', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HighQuality
include('material/Av/HighQuality')

' renders the element
HighQuality('HighQuality', 'High Quality', 'an optional tech label', 'an optional description')
@enduml
```

