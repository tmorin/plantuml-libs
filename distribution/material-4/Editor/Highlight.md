# Highlight


```text
material-4/Editor/Highlight
```

```text
include('material-4/Editor/Highlight')
```



| Illustration | Highlight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Highlight.png) | ![illustration for Highlight](../../material-4/Editor/Highlight.Local.png) |




## Highlight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Highlight
include('material-4/Editor/Highlight')

' renders the element
Highlight('Highlight', 'Highlight', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Highlight
include('material-4/Editor/Highlight')

' renders the element
Highlight('Highlight', 'Highlight', 'an optional tech label', 'an optional description')
@enduml
```

