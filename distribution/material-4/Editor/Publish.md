# Publish


```text
material-4/Editor/Publish
```

```text
include('material-4/Editor/Publish')
```



| Illustration | Publish |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Publish.png) | ![illustration for Publish](../../material-4/Editor/Publish.Local.png) |




## Publish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Publish
include('material-4/Editor/Publish')

' renders the element
Publish('Publish', 'Publish', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Publish
include('material-4/Editor/Publish')

' renders the element
Publish('Publish', 'Publish', 'an optional tech label', 'an optional description')
@enduml
```

