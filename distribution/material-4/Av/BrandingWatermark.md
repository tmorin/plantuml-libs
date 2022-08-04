# BrandingWatermark


```text
material-4/Av/BrandingWatermark
```

```text
include('material-4/Av/BrandingWatermark')
```



| Illustration | BrandingWatermark |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/BrandingWatermark.png) | ![illustration for BrandingWatermark](../../material-4/Av/BrandingWatermark.Local.png) |




## BrandingWatermark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BrandingWatermark
include('material-4/Av/BrandingWatermark')

' renders the element
BrandingWatermark('BrandingWatermark', 'Branding Watermark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BrandingWatermark
include('material-4/Av/BrandingWatermark')

' renders the element
BrandingWatermark('BrandingWatermark', 'Branding Watermark', 'an optional tech label', 'an optional description')
@enduml
```

