# WbCloudy


```text
material/Image/WbCloudy
```

```text
include('material/Image/WbCloudy')
```



| Illustration | WbCloudy |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/WbCloudy.png) | ![illustration for WbCloudy](../../material/Image/WbCloudy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WbCloudyXs>`
- `<$WbCloudySm>`
- `<$WbCloudyMd>`
- `<$WbCloudyLg>`





## WbCloudy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WbCloudy
include('material/Image/WbCloudy')

' renders the element
WbCloudy('WbCloudy', 'Wb Cloudy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WbCloudy
include('material/Image/WbCloudy')

' renders the element
WbCloudy('WbCloudy', 'Wb Cloudy', 'an optional tech label', 'an optional description')
@enduml
```

