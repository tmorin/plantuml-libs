# MoneyBillWheat


```text
fontawesome/Solid/MoneyBillWheat
```

```text
include('fontawesome/Solid/MoneyBillWheat')
```



| Illustration | MoneyBillWheat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyBillWheat.png) | ![illustration for MoneyBillWheat](../../fontawesome/Solid/MoneyBillWheat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyBillWheatXs>`
- `<$MoneyBillWheatSm>`
- `<$MoneyBillWheatMd>`
- `<$MoneyBillWheatLg>`





## MoneyBillWheat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBillWheat
include('fontawesome/Solid/MoneyBillWheat')

' renders the element
MoneyBillWheat('MoneyBillWheat', 'Money Bill Wheat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyBillWheat
include('fontawesome/Solid/MoneyBillWheat')

' renders the element
MoneyBillWheat('MoneyBillWheat', 'Money Bill Wheat', 'an optional tech label', 'an optional description')
@enduml
```

