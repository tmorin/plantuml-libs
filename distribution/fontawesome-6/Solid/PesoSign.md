# PesoSign


```text
fontawesome-6/Solid/PesoSign
```

```text
include('fontawesome-6/Solid/PesoSign')
```



| Illustration | PesoSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PesoSign.png) | ![illustration for PesoSign](../../fontawesome-6/Solid/PesoSign.Local.png) |




## PesoSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PesoSign
include('fontawesome-6/Solid/PesoSign')

' renders the element
PesoSign('PesoSign', 'Peso Sign', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PesoSign
include('fontawesome-6/Solid/PesoSign')

' renders the element
PesoSign('PesoSign', 'Peso Sign', 'an optional tech label', 'an optional description')
@enduml
```

