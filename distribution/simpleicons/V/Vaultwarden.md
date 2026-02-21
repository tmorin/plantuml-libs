# Vaultwarden


```text
simpleicons/V/Vaultwarden
```

```text
include('simpleicons/V/Vaultwarden')
```



| Illustration | Vaultwarden |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vaultwarden.png) | ![illustration for Vaultwarden](../../simpleicons/V/Vaultwarden.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vaultwarden
include('simpleicons/V/Vaultwarden')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vaultwarden
include('simpleicons/V/Vaultwarden')

' renders the element
Vaultwarden('Vaultwarden', 'Vaultwarden', 'an optional tech label', 'an optional description')
@enduml
```

