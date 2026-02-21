# Elavon


```text
simpleicons-14/E/Elavon
```

```text
include('simpleicons-14/E/Elavon')
```



| Illustration | Elavon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Elavon.png) | ![illustration for Elavon](../../simpleicons-14/E/Elavon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElavonXs>`
- `<$ElavonSm>`
- `<$ElavonMd>`
- `<$ElavonLg>`





## Elavon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Elavon
include('simpleicons-14/E/Elavon')

' renders the element
Elavon('Elavon', 'Elavon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elavon
include('simpleicons-14/E/Elavon')

' renders the element
Elavon('Elavon', 'Elavon', 'an optional tech label', 'an optional description')
@enduml
```

