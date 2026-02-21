# Fossilscm


```text
simpleicons/F/Fossilscm
```

```text
include('simpleicons/F/Fossilscm')
```



| Illustration | Fossilscm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fossilscm.png) | ![illustration for Fossilscm](../../simpleicons/F/Fossilscm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FossilscmXs>`
- `<$FossilscmSm>`
- `<$FossilscmMd>`
- `<$FossilscmLg>`





## Fossilscm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fossilscm
include('simpleicons/F/Fossilscm')

' renders the element
Fossilscm('Fossilscm', 'Fossilscm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fossilscm
include('simpleicons/F/Fossilscm')

' renders the element
Fossilscm('Fossilscm', 'Fossilscm', 'an optional tech label', 'an optional description')
@enduml
```

