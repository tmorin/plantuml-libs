# Muo


```text
simpleicons/M/Muo
```

```text
include('simpleicons/M/Muo')
```



| Illustration | Muo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Muo.png) | ![illustration for Muo](../../simpleicons/M/Muo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MuoXs>`
- `<$MuoSm>`
- `<$MuoMd>`
- `<$MuoLg>`





## Muo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Muo
include('simpleicons/M/Muo')

' renders the element
Muo('Muo', 'Muo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Muo
include('simpleicons/M/Muo')

' renders the element
Muo('Muo', 'Muo', 'an optional tech label', 'an optional description')
@enduml
```

