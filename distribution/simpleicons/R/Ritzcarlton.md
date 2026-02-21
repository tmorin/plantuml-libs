# Ritzcarlton


```text
simpleicons/R/Ritzcarlton
```

```text
include('simpleicons/R/Ritzcarlton')
```



| Illustration | Ritzcarlton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Ritzcarlton.png) | ![illustration for Ritzcarlton](../../simpleicons/R/Ritzcarlton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RitzcarltonXs>`
- `<$RitzcarltonSm>`
- `<$RitzcarltonMd>`
- `<$RitzcarltonLg>`





## Ritzcarlton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ritzcarlton
include('simpleicons/R/Ritzcarlton')

' renders the element
Ritzcarlton('Ritzcarlton', 'Ritzcarlton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ritzcarlton
include('simpleicons/R/Ritzcarlton')

' renders the element
Ritzcarlton('Ritzcarlton', 'Ritzcarlton', 'an optional tech label', 'an optional description')
@enduml
```

