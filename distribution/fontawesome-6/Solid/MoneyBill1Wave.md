# MoneyBill1Wave


```text
fontawesome-6/Solid/MoneyBill1Wave
```

```text
include('fontawesome-6/Solid/MoneyBill1Wave')
```



| Illustration | MoneyBill1Wave |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyBill1Wave.png) | ![illustration for MoneyBill1Wave](../../fontawesome-6/Solid/MoneyBill1Wave.Local.png) |




## MoneyBill1Wave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBill1Wave
include('fontawesome-6/Solid/MoneyBill1Wave')

' renders the element
MoneyBill1Wave('MoneyBill1Wave', 'Money Bill1 Wave', 'an optional tech label')
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

' loads the Item which embeds the element MoneyBill1Wave
include('fontawesome-6/Solid/MoneyBill1Wave')

' renders the element
MoneyBill1Wave('MoneyBill1Wave', 'Money Bill1 Wave', 'an optional tech label')
@enduml
```

