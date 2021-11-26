# MortarPestle


```text
fontawesome-5/Solid/MortarPestle
```

```text
include('fontawesome-5/Solid/MortarPestle')
```



| Illustration | MortarPestle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MortarPestle.png) | ![illustration for MortarPestle](../../fontawesome-5/Solid/MortarPestle.Local.png) |




## MortarPestle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MortarPestle
include('fontawesome-5/Solid/MortarPestle')

' renders the element
MortarPestle('MortarPestle', 'Mortar Pestle', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MortarPestle
include('fontawesome-5/Solid/MortarPestle')

' renders the element
MortarPestle('MortarPestle', 'Mortar Pestle', 'an optional tech label')
@enduml
```

