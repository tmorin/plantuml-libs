# Pallet


```text
fontawesome/Solid/Pallet
```

```text
include('fontawesome/Solid/Pallet')
```



| Illustration | Pallet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pallet.png) | ![illustration for Pallet](../../fontawesome/Solid/Pallet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PalletXs>`
- `<$PalletSm>`
- `<$PalletMd>`
- `<$PalletLg>`





## Pallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pallet
include('fontawesome/Solid/Pallet')

' renders the element
Pallet('Pallet', 'Pallet', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pallet
include('fontawesome/Solid/Pallet')

' renders the element
Pallet('Pallet', 'Pallet', 'an optional tech label', 'an optional description')
@enduml
```

