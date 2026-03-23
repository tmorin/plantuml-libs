# MoneyBillAlt


```text
fontawesome/Solid/MoneyBillAlt
```

```text
include('fontawesome/Solid/MoneyBillAlt')
```



| Illustration | MoneyBillAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyBillAlt.png) | ![illustration for MoneyBillAlt](../../fontawesome/Solid/MoneyBillAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyBillAltXs>`
- `<$MoneyBillAltSm>`
- `<$MoneyBillAltMd>`
- `<$MoneyBillAltLg>`





## MoneyBillAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBillAlt
include('fontawesome/Solid/MoneyBillAlt')

' renders the element
MoneyBillAlt('MoneyBillAlt', 'Money Bill Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyBillAlt
include('fontawesome/Solid/MoneyBillAlt')

' renders the element
MoneyBillAlt('MoneyBillAlt', 'Money Bill Alt', 'an optional tech label', 'an optional description')
@enduml
```

