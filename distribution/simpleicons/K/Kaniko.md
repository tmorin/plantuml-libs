# Kaniko


```text
simpleicons/K/Kaniko
```

```text
include('simpleicons/K/Kaniko')
```



| Illustration | Kaniko |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kaniko.png) | ![illustration for Kaniko](../../simpleicons/K/Kaniko.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KanikoXs>`
- `<$KanikoSm>`
- `<$KanikoMd>`
- `<$KanikoLg>`





## Kaniko

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kaniko
include('simpleicons/K/Kaniko')

' renders the element
Kaniko('Kaniko', 'Kaniko', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kaniko
include('simpleicons/K/Kaniko')

' renders the element
Kaniko('Kaniko', 'Kaniko', 'an optional tech label', 'an optional description')
@enduml
```

