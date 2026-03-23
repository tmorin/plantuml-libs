# CreditCardAlt


```text
fontawesome/Solid/CreditCardAlt
```

```text
include('fontawesome/Solid/CreditCardAlt')
```



| Illustration | CreditCardAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CreditCardAlt.png) | ![illustration for CreditCardAlt](../../fontawesome/Solid/CreditCardAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreditCardAltXs>`
- `<$CreditCardAltSm>`
- `<$CreditCardAltMd>`
- `<$CreditCardAltLg>`





## CreditCardAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreditCardAlt
include('fontawesome/Solid/CreditCardAlt')

' renders the element
CreditCardAlt('CreditCardAlt', 'Credit Card Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreditCardAlt
include('fontawesome/Solid/CreditCardAlt')

' renders the element
CreditCardAlt('CreditCardAlt', 'Credit Card Alt', 'an optional tech label', 'an optional description')
@enduml
```

