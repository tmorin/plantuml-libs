# Pagespeedinsights


```text
simpleicons-14/P/Pagespeedinsights
```

```text
include('simpleicons-14/P/Pagespeedinsights')
```



| Illustration | Pagespeedinsights |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pagespeedinsights.png) | ![illustration for Pagespeedinsights](../../simpleicons-14/P/Pagespeedinsights.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagespeedinsightsXs>`
- `<$PagespeedinsightsSm>`
- `<$PagespeedinsightsMd>`
- `<$PagespeedinsightsLg>`





## Pagespeedinsights

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pagespeedinsights
include('simpleicons-14/P/Pagespeedinsights')

' renders the element
Pagespeedinsights('Pagespeedinsights', 'Pagespeedinsights', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pagespeedinsights
include('simpleicons-14/P/Pagespeedinsights')

' renders the element
Pagespeedinsights('Pagespeedinsights', 'Pagespeedinsights', 'an optional tech label', 'an optional description')
@enduml
```

