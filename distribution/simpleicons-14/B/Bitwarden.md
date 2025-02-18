# Bitwarden


```text
simpleicons-14/B/Bitwarden
```

```text
include('simpleicons-14/B/Bitwarden')
```



| Illustration | Bitwarden |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bitwarden.png) | ![illustration for Bitwarden](../../simpleicons-14/B/Bitwarden.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitwardenXs>`
- `<$BitwardenSm>`
- `<$BitwardenMd>`
- `<$BitwardenLg>`





## Bitwarden

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bitwarden
include('simpleicons-14/B/Bitwarden')

' renders the element
Bitwarden('Bitwarden', 'Bitwarden', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitwarden
include('simpleicons-14/B/Bitwarden')

' renders the element
Bitwarden('Bitwarden', 'Bitwarden', 'an optional tech label', 'an optional description')
@enduml
```

