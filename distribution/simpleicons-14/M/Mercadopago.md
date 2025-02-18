# Mercadopago


```text
simpleicons-14/M/Mercadopago
```

```text
include('simpleicons-14/M/Mercadopago')
```



| Illustration | Mercadopago |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mercadopago.png) | ![illustration for Mercadopago](../../simpleicons-14/M/Mercadopago.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MercadopagoXs>`
- `<$MercadopagoSm>`
- `<$MercadopagoMd>`
- `<$MercadopagoLg>`





## Mercadopago

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mercadopago
include('simpleicons-14/M/Mercadopago')

' renders the element
Mercadopago('Mercadopago', 'Mercadopago', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mercadopago
include('simpleicons-14/M/Mercadopago')

' renders the element
Mercadopago('Mercadopago', 'Mercadopago', 'an optional tech label', 'an optional description')
@enduml
```

