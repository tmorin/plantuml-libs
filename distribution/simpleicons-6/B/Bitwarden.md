# Bitwarden


```text
simpleicons-6/B/Bitwarden
```

```text
include('simpleicons-6/B/Bitwarden')
```



| Illustration | Bitwarden |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bitwarden.png) | ![illustration for Bitwarden](../../simpleicons-6/B/Bitwarden.Local.png) |




## Bitwarden

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bitwarden
include('simpleicons-6/B/Bitwarden')

' renders the element
Bitwarden('Bitwarden', 'Bitwarden', 'an optional tech label')
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

' loads the Item which embeds the element Bitwarden
include('simpleicons-6/B/Bitwarden')

' renders the element
Bitwarden('Bitwarden', 'Bitwarden', 'an optional tech label')
@enduml
```

