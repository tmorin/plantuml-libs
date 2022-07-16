# Plotly


```text
simpleicons-7/P/Plotly
```

```text
include('simpleicons-7/P/Plotly')
```



| Illustration | Plotly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Plotly.png) | ![illustration for Plotly](../../simpleicons-7/P/Plotly.Local.png) |




## Plotly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Plotly
include('simpleicons-7/P/Plotly')

' renders the element
Plotly('Plotly', 'Plotly', 'an optional tech label')
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

' loads the Item which embeds the element Plotly
include('simpleicons-7/P/Plotly')

' renders the element
Plotly('Plotly', 'Plotly', 'an optional tech label')
@enduml
```

