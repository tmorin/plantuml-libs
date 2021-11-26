# BurstMode


```text
material-4/Image/BurstMode
```

```text
include('material-4/Image/BurstMode')
```



| Illustration | BurstMode |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/BurstMode.png) | ![illustration for BurstMode](../../material-4/Image/BurstMode.Local.png) |




## BurstMode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BurstMode
include('material-4/Image/BurstMode')

' renders the element
BurstMode('BurstMode', 'Burst Mode', 'an optional tech label')
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

' loads the Item which embeds the element BurstMode
include('material-4/Image/BurstMode')

' renders the element
BurstMode('BurstMode', 'Burst Mode', 'an optional tech label')
@enduml
```

