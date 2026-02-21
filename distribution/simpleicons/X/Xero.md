# Xero


```text
simpleicons/X/Xero
```

```text
include('simpleicons/X/Xero')
```



| Illustration | Xero |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xero.png) | ![illustration for Xero](../../simpleicons/X/Xero.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xero
include('simpleicons/X/Xero')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xero
include('simpleicons/X/Xero')

' renders the element
Xero('Xero', 'Xero', 'an optional tech label', 'an optional description')
@enduml
```

