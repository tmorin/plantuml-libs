# Pageview


```text
material-4/Action/Pageview
```

```text
include('material-4/Action/Pageview')
```



| Illustration | Pageview |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Pageview.png) | ![illustration for Pageview](../../material-4/Action/Pageview.Local.png) |




## Pageview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Pageview
include('material-4/Action/Pageview')

' renders the element
Pageview('Pageview', 'Pageview', 'an optional tech label')
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

' loads the Item which embeds the element Pageview
include('material-4/Action/Pageview')

' renders the element
Pageview('Pageview', 'Pageview', 'an optional tech label')
@enduml
```

