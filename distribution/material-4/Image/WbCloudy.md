# WbCloudy


```text
material-4/Image/WbCloudy
```

```text
include('material-4/Image/WbCloudy')
```



| Illustration | WbCloudy |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/WbCloudy.png) | ![illustration for WbCloudy](../../material-4/Image/WbCloudy.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element WbCloudy
include('material-4/Image/WbCloudy')

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
include('material-4/bootstrap')

' loads the Item which embeds the element WbCloudy
include('material-4/Image/WbCloudy')

' renders the element
WbCloudy('WbCloudy', 'Wb Cloudy', 'an optional tech label', 'an optional description')
@enduml
```

