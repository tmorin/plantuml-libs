# Paypal


```text
simpleicons/P/Paypal
```

```text
include('simpleicons/P/Paypal')
```



| Illustration | Paypal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paypal.png) | ![illustration for Paypal](../../simpleicons/P/Paypal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaypalXs>`
- `<$PaypalSm>`
- `<$PaypalMd>`
- `<$PaypalLg>`





## Paypal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paypal
include('simpleicons/P/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paypal
include('simpleicons/P/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label', 'an optional description')
@enduml
```

