# MoneyBill


```text
fontawesome/Solid/MoneyBill
```

```text
include('fontawesome/Solid/MoneyBill')
```



| Illustration | MoneyBill |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyBill.png) | ![illustration for MoneyBill](../../fontawesome/Solid/MoneyBill.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyBillXs>`
- `<$MoneyBillSm>`
- `<$MoneyBillMd>`
- `<$MoneyBillLg>`





## MoneyBill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBill
include('fontawesome/Solid/MoneyBill')

' renders the element
MoneyBill('MoneyBill', 'Money Bill', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyBill
include('fontawesome/Solid/MoneyBill')

' renders the element
MoneyBill('MoneyBill', 'Money Bill', 'an optional tech label', 'an optional description')
@enduml
```

