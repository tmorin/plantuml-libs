# Openbao


```text
simpleicons/O/Openbao
```

```text
include('simpleicons/O/Openbao')
```



| Illustration | Openbao |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openbao.png) | ![illustration for Openbao](../../simpleicons/O/Openbao.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenbaoXs>`
- `<$OpenbaoSm>`
- `<$OpenbaoMd>`
- `<$OpenbaoLg>`





## Openbao

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openbao
include('simpleicons/O/Openbao')

' renders the element
Openbao('Openbao', 'Openbao', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openbao
include('simpleicons/O/Openbao')

' renders the element
Openbao('Openbao', 'Openbao', 'an optional tech label', 'an optional description')
@enduml
```

