# Kaios


```text
simpleicons/K/Kaios
```

```text
include('simpleicons/K/Kaios')
```



| Illustration | Kaios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kaios.png) | ![illustration for Kaios](../../simpleicons/K/Kaios.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KaiosXs>`
- `<$KaiosSm>`
- `<$KaiosMd>`
- `<$KaiosLg>`





## Kaios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kaios
include('simpleicons/K/Kaios')

' renders the element
Kaios('Kaios', 'Kaios', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kaios
include('simpleicons/K/Kaios')

' renders the element
Kaios('Kaios', 'Kaios', 'an optional tech label', 'an optional description')
@enduml
```

