# Analytics


```text
material/Action/Analytics
```

```text
include('material/Action/Analytics')
```



| Illustration | Analytics |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Analytics.png) | ![illustration for Analytics](../../material/Action/Analytics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnalyticsXs>`
- `<$AnalyticsSm>`
- `<$AnalyticsMd>`
- `<$AnalyticsLg>`





## Analytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Analytics
include('material/Action/Analytics')

' renders the element
Analytics('Analytics', 'Analytics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Analytics
include('material/Action/Analytics')

' renders the element
Analytics('Analytics', 'Analytics', 'an optional tech label', 'an optional description')
@enduml
```

