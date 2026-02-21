# Redragon


```text
simpleicons/R/Redragon
```

```text
include('simpleicons/R/Redragon')
```



| Illustration | Redragon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redragon.png) | ![illustration for Redragon](../../simpleicons/R/Redragon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedragonXs>`
- `<$RedragonSm>`
- `<$RedragonMd>`
- `<$RedragonLg>`





## Redragon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redragon
include('simpleicons/R/Redragon')

' renders the element
Redragon('Redragon', 'Redragon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redragon
include('simpleicons/R/Redragon')

' renders the element
Redragon('Redragon', 'Redragon', 'an optional tech label', 'an optional description')
@enduml
```

