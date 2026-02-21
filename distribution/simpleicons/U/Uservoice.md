# Uservoice


```text
simpleicons/U/Uservoice
```

```text
include('simpleicons/U/Uservoice')
```



| Illustration | Uservoice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uservoice.png) | ![illustration for Uservoice](../../simpleicons/U/Uservoice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UservoiceXs>`
- `<$UservoiceSm>`
- `<$UservoiceMd>`
- `<$UservoiceLg>`





## Uservoice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uservoice
include('simpleicons/U/Uservoice')

' renders the element
Uservoice('Uservoice', 'Uservoice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uservoice
include('simpleicons/U/Uservoice')

' renders the element
Uservoice('Uservoice', 'Uservoice', 'an optional tech label', 'an optional description')
@enduml
```

