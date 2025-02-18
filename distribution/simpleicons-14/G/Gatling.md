# Gatling


```text
simpleicons-14/G/Gatling
```

```text
include('simpleicons-14/G/Gatling')
```



| Illustration | Gatling |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gatling.png) | ![illustration for Gatling](../../simpleicons-14/G/Gatling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GatlingXs>`
- `<$GatlingSm>`
- `<$GatlingMd>`
- `<$GatlingLg>`





## Gatling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gatling
include('simpleicons-14/G/Gatling')

' renders the element
Gatling('Gatling', 'Gatling', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gatling
include('simpleicons-14/G/Gatling')

' renders the element
Gatling('Gatling', 'Gatling', 'an optional tech label', 'an optional description')
@enduml
```

