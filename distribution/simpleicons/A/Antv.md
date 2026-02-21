# Antv


```text
simpleicons/A/Antv
```

```text
include('simpleicons/A/Antv')
```



| Illustration | Antv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Antv.png) | ![illustration for Antv](../../simpleicons/A/Antv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AntvXs>`
- `<$AntvSm>`
- `<$AntvMd>`
- `<$AntvLg>`





## Antv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Antv
include('simpleicons/A/Antv')

' renders the element
Antv('Antv', 'Antv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Antv
include('simpleicons/A/Antv')

' renders the element
Antv('Antv', 'Antv', 'an optional tech label', 'an optional description')
@enduml
```

