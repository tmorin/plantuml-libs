# Vault


```text
simpleicons-6/V/Vault
```

```text
include('simpleicons-6/V/Vault')
```



| Illustration | Vault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vault.png) | ![illustration for Vault](../../simpleicons-6/V/Vault.Local.png) |




## Vault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vault
include('simpleicons-6/V/Vault')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vault
include('simpleicons-6/V/Vault')

' renders the element
Vault('Vault', 'Vault', 'an optional tech label')
@enduml
```

