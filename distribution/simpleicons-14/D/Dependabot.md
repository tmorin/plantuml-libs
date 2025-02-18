# Dependabot


```text
simpleicons-14/D/Dependabot
```

```text
include('simpleicons-14/D/Dependabot')
```



| Illustration | Dependabot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dependabot.png) | ![illustration for Dependabot](../../simpleicons-14/D/Dependabot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DependabotXs>`
- `<$DependabotSm>`
- `<$DependabotMd>`
- `<$DependabotLg>`





## Dependabot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dependabot
include('simpleicons-14/D/Dependabot')

' renders the element
Dependabot('Dependabot', 'Dependabot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dependabot
include('simpleicons-14/D/Dependabot')

' renders the element
Dependabot('Dependabot', 'Dependabot', 'an optional tech label', 'an optional description')
@enduml
```

