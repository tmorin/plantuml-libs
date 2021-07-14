# Verified


```text
material-4/Action/Verified
```

```text
include('material-4/Action/Verified')
```



| Illustration | Verified |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Verified.png) | ![illustration for Verified](../../material-4/Action/Verified.Local.png) |




## Verified

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Verified
include('material-4/Action/Verified')

' renders the element
Verified('Verified', 'Verified', 'an optional tech label')
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

' loads the Item which embeds the element Verified
include('material-4/Action/Verified')

' renders the element
Verified('Verified', 'Verified', 'an optional tech label')
@enduml
```

