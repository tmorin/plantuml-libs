# Natsdotio


```text
simpleicons/N/Natsdotio
```

```text
include('simpleicons/N/Natsdotio')
```



| Illustration | Natsdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Natsdotio.png) | ![illustration for Natsdotio](../../simpleicons/N/Natsdotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NatsdotioXs>`
- `<$NatsdotioSm>`
- `<$NatsdotioMd>`
- `<$NatsdotioLg>`





## Natsdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Natsdotio
include('simpleicons/N/Natsdotio')

' renders the element
Natsdotio('Natsdotio', 'Natsdotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Natsdotio
include('simpleicons/N/Natsdotio')

' renders the element
Natsdotio('Natsdotio', 'Natsdotio', 'an optional tech label', 'an optional description')
@enduml
```

