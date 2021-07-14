# Pagespeedinsights


```text
simpleicons-5/P/Pagespeedinsights
```

```text
include('simpleicons-5/P/Pagespeedinsights')
```



| Illustration | Pagespeedinsights |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pagespeedinsights.png) | ![illustration for Pagespeedinsights](../../simpleicons-5/P/Pagespeedinsights.Local.png) |




## Pagespeedinsights

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pagespeedinsights
include('simpleicons-5/P/Pagespeedinsights')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pagespeedinsights
include('simpleicons-5/P/Pagespeedinsights')

' renders the element
Pagespeedinsights('Pagespeedinsights', 'Pagespeedinsights', 'an optional tech label')
@enduml
```

