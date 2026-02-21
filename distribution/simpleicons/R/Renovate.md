# Renovate


```text
simpleicons/R/Renovate
```

```text
include('simpleicons/R/Renovate')
```



| Illustration | Renovate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Renovate.png) | ![illustration for Renovate](../../simpleicons/R/Renovate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RenovateXs>`
- `<$RenovateSm>`
- `<$RenovateMd>`
- `<$RenovateLg>`





## Renovate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Renovate
include('simpleicons/R/Renovate')

' renders the element
Renovate('Renovate', 'Renovate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Renovate
include('simpleicons/R/Renovate')

' renders the element
Renovate('Renovate', 'Renovate', 'an optional tech label', 'an optional description')
@enduml
```

