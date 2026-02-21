# Vivawallet


```text
simpleicons-14/V/Vivawallet
```

```text
include('simpleicons-14/V/Vivawallet')
```



| Illustration | Vivawallet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vivawallet.png) | ![illustration for Vivawallet](../../simpleicons-14/V/Vivawallet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VivawalletXs>`
- `<$VivawalletSm>`
- `<$VivawalletMd>`
- `<$VivawalletLg>`





## Vivawallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vivawallet
include('simpleicons-14/V/Vivawallet')

' renders the element
Vivawallet('Vivawallet', 'Vivawallet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vivawallet
include('simpleicons-14/V/Vivawallet')

' renders the element
Vivawallet('Vivawallet', 'Vivawallet', 'an optional tech label', 'an optional description')
@enduml
```

