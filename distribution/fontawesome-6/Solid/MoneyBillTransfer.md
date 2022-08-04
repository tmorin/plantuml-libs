# MoneyBillTransfer


```text
fontawesome-6/Solid/MoneyBillTransfer
```

```text
include('fontawesome-6/Solid/MoneyBillTransfer')
```



| Illustration | MoneyBillTransfer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyBillTransfer.png) | ![illustration for MoneyBillTransfer](../../fontawesome-6/Solid/MoneyBillTransfer.Local.png) |




## MoneyBillTransfer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBillTransfer
include('fontawesome-6/Solid/MoneyBillTransfer')

' renders the element
MoneyBillTransfer('MoneyBillTransfer', 'Money Bill Transfer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyBillTransfer
include('fontawesome-6/Solid/MoneyBillTransfer')

' renders the element
MoneyBillTransfer('MoneyBillTransfer', 'Money Bill Transfer', 'an optional tech label', 'an optional description')
@enduml
```

