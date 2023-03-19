# Payments


```text
material-4/Navigation/Payments
```

```text
include('material-4/Navigation/Payments')
```



| Illustration | Payments |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/Payments.png) | ![illustration for Payments](../../material-4/Navigation/Payments.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaymentsXs>`
- `<$PaymentsSm>`
- `<$PaymentsMd>`
- `<$PaymentsLg>`





## Payments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Payments
include('material-4/Navigation/Payments')

' renders the element
Payments('Payments', 'Payments', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Payments
include('material-4/Navigation/Payments')

' renders the element
Payments('Payments', 'Payments', 'an optional tech label', 'an optional description')
@enduml
```

