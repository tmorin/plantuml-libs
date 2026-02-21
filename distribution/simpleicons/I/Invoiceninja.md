# Invoiceninja


```text
simpleicons/I/Invoiceninja
```

```text
include('simpleicons/I/Invoiceninja')
```



| Illustration | Invoiceninja |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Invoiceninja.png) | ![illustration for Invoiceninja](../../simpleicons/I/Invoiceninja.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Invoiceninja
include('simpleicons/I/Invoiceninja')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Invoiceninja
include('simpleicons/I/Invoiceninja')

' renders the element
Invoiceninja('Invoiceninja', 'Invoiceninja', 'an optional tech label', 'an optional description')
@enduml
```

