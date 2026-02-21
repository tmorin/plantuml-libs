# Porsche


```text
simpleicons/P/Porsche
```

```text
include('simpleicons/P/Porsche')
```



| Illustration | Porsche |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Porsche.png) | ![illustration for Porsche](../../simpleicons/P/Porsche.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PorscheXs>`
- `<$PorscheSm>`
- `<$PorscheMd>`
- `<$PorscheLg>`





## Porsche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Porsche
include('simpleicons/P/Porsche')

' renders the element
Porsche('Porsche', 'Porsche', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Porsche
include('simpleicons/P/Porsche')

' renders the element
Porsche('Porsche', 'Porsche', 'an optional tech label', 'an optional description')
@enduml
```

