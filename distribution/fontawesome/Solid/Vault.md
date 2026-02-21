# Vault


```text
fontawesome/Solid/Vault
```

```text
include('fontawesome/Solid/Vault')
```



| Illustration | Vault |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Vault.png) | ![illustration for Vault](../../fontawesome/Solid/Vault.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VaultXs>`
- `<$VaultSm>`
- `<$VaultMd>`
- `<$VaultLg>`





## Vault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Vault
include('fontawesome/Solid/Vault')

' renders the element
Vault('Vault', 'Vault', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vault
include('fontawesome/Solid/Vault')

' renders the element
Vault('Vault', 'Vault', 'an optional tech label', 'an optional description')
@enduml
```

