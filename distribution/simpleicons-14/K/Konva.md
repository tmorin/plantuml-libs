# Konva


```text
simpleicons-14/K/Konva
```

```text
include('simpleicons-14/K/Konva')
```



| Illustration | Konva |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Konva.png) | ![illustration for Konva](../../simpleicons-14/K/Konva.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KonvaXs>`
- `<$KonvaSm>`
- `<$KonvaMd>`
- `<$KonvaLg>`





## Konva

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Konva
include('simpleicons-14/K/Konva')

' renders the element
Konva('Konva', 'Konva', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Konva
include('simpleicons-14/K/Konva')

' renders the element
Konva('Konva', 'Konva', 'an optional tech label', 'an optional description')
@enduml
```

