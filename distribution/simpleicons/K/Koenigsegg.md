# Koenigsegg


```text
simpleicons/K/Koenigsegg
```

```text
include('simpleicons/K/Koenigsegg')
```



| Illustration | Koenigsegg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Koenigsegg.png) | ![illustration for Koenigsegg](../../simpleicons/K/Koenigsegg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KoenigseggXs>`
- `<$KoenigseggSm>`
- `<$KoenigseggMd>`
- `<$KoenigseggLg>`





## Koenigsegg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Koenigsegg
include('simpleicons/K/Koenigsegg')

' renders the element
Koenigsegg('Koenigsegg', 'Koenigsegg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Koenigsegg
include('simpleicons/K/Koenigsegg')

' renders the element
Koenigsegg('Koenigsegg', 'Koenigsegg', 'an optional tech label', 'an optional description')
@enduml
```

