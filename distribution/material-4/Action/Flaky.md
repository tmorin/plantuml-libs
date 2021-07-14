# Flaky


```text
material-4/Action/Flaky
```

```text
include('material-4/Action/Flaky')
```



| Illustration | Flaky |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Flaky.png) | ![illustration for Flaky](../../material-4/Action/Flaky.Local.png) |




## Flaky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Flaky
include('material-4/Action/Flaky')

' renders the element
Flaky('Flaky', 'Flaky', 'an optional tech label')
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

' loads the Item which embeds the element Flaky
include('material-4/Action/Flaky')

' renders the element
Flaky('Flaky', 'Flaky', 'an optional tech label')
@enduml
```

