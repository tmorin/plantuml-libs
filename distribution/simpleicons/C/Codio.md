# Codio


```text
simpleicons/C/Codio
```

```text
include('simpleicons/C/Codio')
```



| Illustration | Codio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codio.png) | ![illustration for Codio](../../simpleicons/C/Codio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodioXs>`
- `<$CodioSm>`
- `<$CodioMd>`
- `<$CodioLg>`





## Codio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codio
include('simpleicons/C/Codio')

' renders the element
Codio('Codio', 'Codio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codio
include('simpleicons/C/Codio')

' renders the element
Codio('Codio', 'Codio', 'an optional tech label', 'an optional description')
@enduml
```

