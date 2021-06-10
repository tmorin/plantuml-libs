# CashRegister


```text
fontawesome-5/Solid/CashRegister
```

```text
include('fontawesome-5/Solid/CashRegister')
```



| Illustration | CashRegister |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CashRegister.png) | ![illustration for CashRegister](../../fontawesome-5/Solid/CashRegister.Local.png) |




## CashRegister

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CashRegister
include('fontawesome-5/Solid/CashRegister')

' renders the element
CashRegister('CashRegister', 'Cash Register', 'an optional tech label')
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

' loads the Item which embeds the element CashRegister
include('fontawesome-5/Solid/CashRegister')

' renders the element
CashRegister('CashRegister', 'Cash Register', 'an optional tech label')
@enduml
```

