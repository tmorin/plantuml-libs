# Xero


```text
simpleicons-8/X/Xero
```

```text
include('simpleicons-8/X/Xero')
```



| Illustration | Xero |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/X/Xero.png) | ![illustration for Xero](../../simpleicons-8/X/Xero.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XeroXs>`
- `<$XeroSm>`
- `<$XeroMd>`
- `<$XeroLg>`





## Xero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Xero
include('simpleicons-8/X/Xero')

' renders the element
Xero('Xero', 'Xero', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xero
include('simpleicons-8/X/Xero')

' renders the element
Xero('Xero', 'Xero', 'an optional tech label', 'an optional description')
@enduml
```

