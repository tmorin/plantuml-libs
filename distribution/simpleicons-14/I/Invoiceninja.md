# Invoiceninja


```text
simpleicons-14/I/Invoiceninja
```

```text
include('simpleicons-14/I/Invoiceninja')
```



| Illustration | Invoiceninja |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Invoiceninja.png) | ![illustration for Invoiceninja](../../simpleicons-14/I/Invoiceninja.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InvoiceninjaXs>`
- `<$InvoiceninjaSm>`
- `<$InvoiceninjaMd>`
- `<$InvoiceninjaLg>`





## Invoiceninja

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Invoiceninja
include('simpleicons-14/I/Invoiceninja')

' renders the element
Invoiceninja('Invoiceninja', 'Invoiceninja', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Invoiceninja
include('simpleicons-14/I/Invoiceninja')

' renders the element
Invoiceninja('Invoiceninja', 'Invoiceninja', 'an optional tech label', 'an optional description')
@enduml
```

