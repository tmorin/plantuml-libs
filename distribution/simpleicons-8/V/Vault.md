# Vault


```text
simpleicons-8/V/Vault
```

```text
include('simpleicons-8/V/Vault')
```



| Illustration | Vault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vault.png) | ![illustration for Vault](../../simpleicons-8/V/Vault.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vault
include('simpleicons-8/V/Vault')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vault
include('simpleicons-8/V/Vault')

' renders the element
Vault('Vault', 'Vault', 'an optional tech label', 'an optional description')
@enduml
```

