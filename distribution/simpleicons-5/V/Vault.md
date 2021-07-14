# Vault


```text
simpleicons-5/V/Vault
```

```text
include('simpleicons-5/V/Vault')
```



| Illustration | Vault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vault.png) | ![illustration for Vault](../../simpleicons-5/V/Vault.Local.png) |




## Vault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vault
include('simpleicons-5/V/Vault')

' renders the element
Vault('Vault', 'Vault', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vault
include('simpleicons-5/V/Vault')

' renders the element
Vault('Vault', 'Vault', 'an optional tech label')
@enduml
```

