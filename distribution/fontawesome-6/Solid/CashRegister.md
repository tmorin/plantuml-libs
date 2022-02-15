# CashRegister


```text
fontawesome-6/Solid/CashRegister
```

```text
include('fontawesome-6/Solid/CashRegister')
```



| Illustration | CashRegister |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CashRegister.png) | ![illustration for CashRegister](../../fontawesome-6/Solid/CashRegister.Local.png) |




## CashRegister

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CashRegister
include('fontawesome-6/Solid/CashRegister')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CashRegister
include('fontawesome-6/Solid/CashRegister')

' renders the element
CashRegister('CashRegister', 'Cash Register', 'an optional tech label')
@enduml
```

