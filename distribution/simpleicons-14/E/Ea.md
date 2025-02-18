# Ea


```text
simpleicons-14/E/Ea
```

```text
include('simpleicons-14/E/Ea')
```



| Illustration | Ea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ea.png) | ![illustration for Ea](../../simpleicons-14/E/Ea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EaXs>`
- `<$EaSm>`
- `<$EaMd>`
- `<$EaLg>`





## Ea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ea
include('simpleicons-14/E/Ea')

' renders the element
Ea('Ea', 'Ea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ea
include('simpleicons-14/E/Ea')

' renders the element
Ea('Ea', 'Ea', 'an optional tech label', 'an optional description')
@enduml
```

