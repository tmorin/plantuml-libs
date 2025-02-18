# Roundcube


```text
simpleicons-14/R/Roundcube
```

```text
include('simpleicons-14/R/Roundcube')
```



| Illustration | Roundcube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Roundcube.png) | ![illustration for Roundcube](../../simpleicons-14/R/Roundcube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoundcubeXs>`
- `<$RoundcubeSm>`
- `<$RoundcubeMd>`
- `<$RoundcubeLg>`





## Roundcube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Roundcube
include('simpleicons-14/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roundcube
include('simpleicons-14/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label', 'an optional description')
@enduml
```

