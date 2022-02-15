# Pagespeedinsights


```text
simpleicons-6/P/Pagespeedinsights
```

```text
include('simpleicons-6/P/Pagespeedinsights')
```



| Illustration | Pagespeedinsights |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pagespeedinsights.png) | ![illustration for Pagespeedinsights](../../simpleicons-6/P/Pagespeedinsights.Local.png) |




## Pagespeedinsights

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pagespeedinsights
include('simpleicons-6/P/Pagespeedinsights')

' renders the element
Pagespeedinsights('Pagespeedinsights', 'Pagespeedinsights', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pagespeedinsights
include('simpleicons-6/P/Pagespeedinsights')

' renders the element
Pagespeedinsights('Pagespeedinsights', 'Pagespeedinsights', 'an optional tech label')
@enduml
```

