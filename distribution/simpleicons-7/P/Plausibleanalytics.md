# Plausibleanalytics


```text
simpleicons-7/P/Plausibleanalytics
```

```text
include('simpleicons-7/P/Plausibleanalytics')
```



| Illustration | Plausibleanalytics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Plausibleanalytics.png) | ![illustration for Plausibleanalytics](../../simpleicons-7/P/Plausibleanalytics.Local.png) |




## Plausibleanalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Plausibleanalytics
include('simpleicons-7/P/Plausibleanalytics')

' renders the element
Plausibleanalytics('Plausibleanalytics', 'Plausibleanalytics', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Plausibleanalytics
include('simpleicons-7/P/Plausibleanalytics')

' renders the element
Plausibleanalytics('Plausibleanalytics', 'Plausibleanalytics', 'an optional tech label')
@enduml
```

