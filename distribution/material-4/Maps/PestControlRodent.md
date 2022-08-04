# PestControlRodent


```text
material-4/Maps/PestControlRodent
```

```text
include('material-4/Maps/PestControlRodent')
```



| Illustration | PestControlRodent |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/PestControlRodent.png) | ![illustration for PestControlRodent](../../material-4/Maps/PestControlRodent.Local.png) |




## PestControlRodent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PestControlRodent
include('material-4/Maps/PestControlRodent')

' renders the element
PestControlRodent('PestControlRodent', 'Pest Control Rodent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PestControlRodent
include('material-4/Maps/PestControlRodent')

' renders the element
PestControlRodent('PestControlRodent', 'Pest Control Rodent', 'an optional tech label', 'an optional description')
@enduml
```

