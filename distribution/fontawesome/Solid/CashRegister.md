# CashRegister


```text
fontawesome/Solid/CashRegister
```

```text
include('fontawesome/Solid/CashRegister')
```



| Illustration | CashRegister |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CashRegister.png) | ![illustration for CashRegister](../../fontawesome/Solid/CashRegister.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CashRegisterXs>`
- `<$CashRegisterSm>`
- `<$CashRegisterMd>`
- `<$CashRegisterLg>`





## CashRegister

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CashRegister
include('fontawesome/Solid/CashRegister')

' renders the element
CashRegister('CashRegister', 'Cash Register', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CashRegister
include('fontawesome/Solid/CashRegister')

' renders the element
CashRegister('CashRegister', 'Cash Register', 'an optional tech label', 'an optional description')
@enduml
```

