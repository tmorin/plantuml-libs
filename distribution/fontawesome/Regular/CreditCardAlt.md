# CreditCardAlt


```text
fontawesome/Regular/CreditCardAlt
```

```text
include('fontawesome/Regular/CreditCardAlt')
```



| Illustration | CreditCardAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CreditCardAlt.png) | ![illustration for CreditCardAlt](../../fontawesome/Regular/CreditCardAlt.Local.png) |



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
include('fontawesome/Regular/CreditCardAlt')

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
include('fontawesome/Regular/CreditCardAlt')

' renders the element
CreditCardAlt('CreditCardAlt', 'Credit Card Alt', 'an optional tech label', 'an optional description')
@enduml
```

