# Processon


```text
simpleicons-14/P/Processon
```

```text
include('simpleicons-14/P/Processon')
```



| Illustration | Processon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Processon.png) | ![illustration for Processon](../../simpleicons-14/P/Processon.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Processon
include('simpleicons-14/P/Processon')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Processon
include('simpleicons-14/P/Processon')

' renders the element
Processon('Processon', 'Processon', 'an optional tech label', 'an optional description')
@enduml
```

