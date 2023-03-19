# Windicss


```text
simpleicons-8/W/Windicss
```

```text
include('simpleicons-8/W/Windicss')
```



| Illustration | Windicss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Windicss.png) | ![illustration for Windicss](../../simpleicons-8/W/Windicss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindicssXs>`
- `<$WindicssSm>`
- `<$WindicssMd>`
- `<$WindicssLg>`





## Windicss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Windicss
include('simpleicons-8/W/Windicss')

' renders the element
Windicss('Windicss', 'Windicss', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Windicss
include('simpleicons-8/W/Windicss')

' renders the element
Windicss('Windicss', 'Windicss', 'an optional tech label', 'an optional description')
@enduml
```

