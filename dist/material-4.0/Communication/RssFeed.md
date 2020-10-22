# Rss Feed

```text
material-4.0/Communication/RssFeed
```

```text
include('material-4.0/Communication/RssFeed')
```

|icon|element|
|---|---|
|![](RssFeed.png)|![](RssFeed.element.png)|



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
' loads the RssFeed element
include('material-4.0/Communication/RssFeed')
RssFeed('rss_feed', 'Rss Feed', 'an optional tech field')
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
' loads the RssFeed element
include('material-4.0/Communication/RssFeed')
RssFeed('rss_feed', 'Rss Feed', 'an optional tech field')
@enduml
```

