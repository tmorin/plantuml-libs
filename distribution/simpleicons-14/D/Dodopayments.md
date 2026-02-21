# Dodopayments


```text
simpleicons-14/D/Dodopayments
```

```text
include('simpleicons-14/D/Dodopayments')
```



| Illustration | Dodopayments |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dodopayments.png) | ![illustration for Dodopayments](../../simpleicons-14/D/Dodopayments.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DodopaymentsXs>`
- `<$DodopaymentsSm>`
- `<$DodopaymentsMd>`
- `<$DodopaymentsLg>`





## Dodopayments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dodopayments
include('simpleicons-14/D/Dodopayments')

' renders the element
Dodopayments('Dodopayments', 'Dodopayments', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dodopayments
include('simpleicons-14/D/Dodopayments')

' renders the element
Dodopayments('Dodopayments', 'Dodopayments', 'an optional tech label', 'an optional description')
@enduml
```

