# Branding Watermark

```text
material-4.0/Av/BrandingWatermark
```

```text
include('material-4.0/Av/BrandingWatermark')
```

|icon|element|
|---|---|
|![](BrandingWatermark.png)|![](BrandingWatermark.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the BrandingWatermark element
include('material-4.0/Av/BrandingWatermark')
BrandingWatermark('branding_watermark', 'Branding Watermark', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the BrandingWatermark element
include('material-4.0/Av/BrandingWatermark')
BrandingWatermark('branding_watermark', 'Branding Watermark', 'an optional tech field')
@enduml
```

