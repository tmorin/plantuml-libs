# HospitalSymbol


```text
fontawesome-5/Solid/HospitalSymbol
```

```text
include('fontawesome-5/Solid/HospitalSymbol')
```



| Illustration | HospitalSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HospitalSymbol.png) | ![illustration for HospitalSymbol](../../fontawesome-5/Solid/HospitalSymbol.Local.png) |




## HospitalSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HospitalSymbol
include('fontawesome-5/Solid/HospitalSymbol')

' renders the element
HospitalSymbol('HospitalSymbol', 'Hospital Symbol', 'an optional tech label')
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

' loads the Item which embeds the element HospitalSymbol
include('fontawesome-5/Solid/HospitalSymbol')

' renders the element
HospitalSymbol('HospitalSymbol', 'Hospital Symbol', 'an optional tech label')
@enduml
```

