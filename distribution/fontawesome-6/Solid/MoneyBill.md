# MoneyBill


```text
fontawesome-6/Solid/MoneyBill
```

```text
include('fontawesome-6/Solid/MoneyBill')
```



| Illustration | MoneyBill |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyBill.png) | ![illustration for MoneyBill](../../fontawesome-6/Solid/MoneyBill.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBill
include('fontawesome-6/Solid/MoneyBill')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBill
include('fontawesome-6/Solid/MoneyBill')

' renders the element
MoneyBill('MoneyBill', 'Money Bill', 'an optional tech label', 'an optional description')
@enduml
```

