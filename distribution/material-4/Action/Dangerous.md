# Dangerous


```text
material-4/Action/Dangerous
```

```text
include('material-4/Action/Dangerous')
```



| Illustration | Dangerous |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Dangerous.png) | ![illustration for Dangerous](../../material-4/Action/Dangerous.Local.png) |




## Dangerous

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dangerous
include('material-4/Action/Dangerous')

' renders the element
Dangerous('Dangerous', 'Dangerous', 'an optional tech label')
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

' loads the Item which embeds the element Dangerous
include('material-4/Action/Dangerous')

' renders the element
Dangerous('Dangerous', 'Dangerous', 'an optional tech label')
@enduml
```

