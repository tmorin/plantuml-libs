# Processon


```text
simpleicons/P/Processon
```

```text
include('simpleicons/P/Processon')
```



| Illustration | Processon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Processon.png) | ![illustration for Processon](../../simpleicons/P/Processon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProcessonXs>`
- `<$ProcessonSm>`
- `<$ProcessonMd>`
- `<$ProcessonLg>`





## Processon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Processon
include('simpleicons/P/Processon')

' renders the element
Processon('Processon', 'Processon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Processon
include('simpleicons/P/Processon')

' renders the element
Processon('Processon', 'Processon', 'an optional tech label', 'an optional description')
@enduml
```

