# UltralyticsHub


```text
fontawesome/Brands/UltralyticsHub
```

```text
include('fontawesome/Brands/UltralyticsHub')
```



| Illustration | UltralyticsHub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/UltralyticsHub.png) | ![illustration for UltralyticsHub](../../fontawesome/Brands/UltralyticsHub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UltralyticsHubXs>`
- `<$UltralyticsHubSm>`
- `<$UltralyticsHubMd>`
- `<$UltralyticsHubLg>`





## UltralyticsHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UltralyticsHub
include('fontawesome/Brands/UltralyticsHub')

' renders the element
UltralyticsHub('UltralyticsHub', 'Ultralytics Hub', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element UltralyticsHub
include('fontawesome/Brands/UltralyticsHub')

' renders the element
UltralyticsHub('UltralyticsHub', 'Ultralytics Hub', 'an optional tech label', 'an optional description')
@enduml
```

