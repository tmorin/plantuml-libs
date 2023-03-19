# Paypal


```text
simpleicons-8/P/Paypal
```

```text
include('simpleicons-8/P/Paypal')
```



| Illustration | Paypal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Paypal.png) | ![illustration for Paypal](../../simpleicons-8/P/Paypal.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Paypal
include('simpleicons-8/P/Paypal')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Paypal
include('simpleicons-8/P/Paypal')

' renders the element
Paypal('Paypal', 'Paypal', 'an optional tech label', 'an optional description')
@enduml
```

