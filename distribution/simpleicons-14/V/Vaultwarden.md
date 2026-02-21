# Vaultwarden


```text
simpleicons-14/V/Vaultwarden
```

```text
include('simpleicons-14/V/Vaultwarden')
```



| Illustration | Vaultwarden |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vaultwarden.png) | ![illustration for Vaultwarden](../../simpleicons-14/V/Vaultwarden.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VaultwardenXs>`
- `<$VaultwardenSm>`
- `<$VaultwardenMd>`
- `<$VaultwardenLg>`





## Vaultwarden

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vaultwarden
include('simpleicons-14/V/Vaultwarden')

' renders the element
Vaultwarden('Vaultwarden', 'Vaultwarden', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vaultwarden
include('simpleicons-14/V/Vaultwarden')

' renders the element
Vaultwarden('Vaultwarden', 'Vaultwarden', 'an optional tech label', 'an optional description')
@enduml
```

