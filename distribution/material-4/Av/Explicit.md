# Explicit


```text
material-4/Av/Explicit
```

```text
include('material-4/Av/Explicit')
```



| Illustration | Explicit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Explicit.png) | ![illustration for Explicit](../../material-4/Av/Explicit.Local.png) |




## Explicit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Explicit
include('material-4/Av/Explicit')

' renders the element
Explicit('Explicit', 'Explicit', 'an optional tech label')
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

' loads the Item which embeds the element Explicit
include('material-4/Av/Explicit')

' renders the element
Explicit('Explicit', 'Explicit', 'an optional tech label')
@enduml
```

