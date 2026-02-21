# BrandingWatermark


```text
material/Av/BrandingWatermark
```

```text
include('material/Av/BrandingWatermark')
```



| Illustration | BrandingWatermark |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/BrandingWatermark.png) | ![illustration for BrandingWatermark](../../material/Av/BrandingWatermark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrandingWatermarkXs>`
- `<$BrandingWatermarkSm>`
- `<$BrandingWatermarkMd>`
- `<$BrandingWatermarkLg>`





## BrandingWatermark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BrandingWatermark
include('material/Av/BrandingWatermark')

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
include('material/bootstrap')

' loads the Item which embeds the element BrandingWatermark
include('material/Av/BrandingWatermark')

' renders the element
BrandingWatermark('BrandingWatermark', 'Branding Watermark', 'an optional tech label', 'an optional description')
@enduml
```

