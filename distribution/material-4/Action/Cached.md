# Cached


```text
material-4/Action/Cached
```

```text
include('material-4/Action/Cached')
```



| Illustration | Cached |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Cached.png) | ![illustration for Cached](../../material-4/Action/Cached.Local.png) |




## Cached

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Cached
include('material-4/Action/Cached')

' renders the element
Cached('Cached', 'Cached', 'an optional tech label')
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

' loads the Item which embeds the element Cached
include('material-4/Action/Cached')

' renders the element
Cached('Cached', 'Cached', 'an optional tech label')
@enduml
```

