# Ubuntu


```text
simpleicons-14/U/Ubuntu
```

```text
include('simpleicons-14/U/Ubuntu')
```



| Illustration | Ubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Ubuntu.png) | ![illustration for Ubuntu](../../simpleicons-14/U/Ubuntu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UbuntuXs>`
- `<$UbuntuSm>`
- `<$UbuntuMd>`
- `<$UbuntuLg>`





## Ubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ubuntu
include('simpleicons-14/U/Ubuntu')

' renders the element
Ubuntu('Ubuntu', 'Ubuntu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ubuntu
include('simpleicons-14/U/Ubuntu')

' renders the element
Ubuntu('Ubuntu', 'Ubuntu', 'an optional tech label', 'an optional description')
@enduml
```

