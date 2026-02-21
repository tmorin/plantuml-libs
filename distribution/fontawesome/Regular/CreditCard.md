# CreditCard


```text
fontawesome/Regular/CreditCard
```

```text
include('fontawesome/Regular/CreditCard')
```



| Illustration | CreditCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CreditCard.png) | ![illustration for CreditCard](../../fontawesome/Regular/CreditCard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreditCardXs>`
- `<$CreditCardSm>`
- `<$CreditCardMd>`
- `<$CreditCardLg>`





## CreditCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreditCard
include('fontawesome/Regular/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreditCard
include('fontawesome/Regular/CreditCard')

' renders the element
CreditCard('CreditCard', 'Credit Card', 'an optional tech label', 'an optional description')
@enduml
```

