# Infracost


```text
simpleicons-14/I/Infracost
```

```text
include('simpleicons-14/I/Infracost')
```



| Illustration | Infracost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Infracost.png) | ![illustration for Infracost](../../simpleicons-14/I/Infracost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfracostXs>`
- `<$InfracostSm>`
- `<$InfracostMd>`
- `<$InfracostLg>`





## Infracost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Infracost
include('simpleicons-14/I/Infracost')

' renders the element
Infracost('Infracost', 'Infracost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Infracost
include('simpleicons-14/I/Infracost')

' renders the element
Infracost('Infracost', 'Infracost', 'an optional tech label', 'an optional description')
@enduml
```

