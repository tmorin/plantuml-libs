# Lucide


```text
simpleicons/L/Lucide
```

```text
include('simpleicons/L/Lucide')
```



| Illustration | Lucide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lucide.png) | ![illustration for Lucide](../../simpleicons/L/Lucide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LucideXs>`
- `<$LucideSm>`
- `<$LucideMd>`
- `<$LucideLg>`





## Lucide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lucide
include('simpleicons/L/Lucide')

' renders the element
Lucide('Lucide', 'Lucide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lucide
include('simpleicons/L/Lucide')

' renders the element
Lucide('Lucide', 'Lucide', 'an optional tech label', 'an optional description')
@enduml
```

