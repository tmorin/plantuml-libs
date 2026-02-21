# Fivem


```text
simpleicons/F/Fivem
```

```text
include('simpleicons/F/Fivem')
```



| Illustration | Fivem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fivem.png) | ![illustration for Fivem](../../simpleicons/F/Fivem.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FivemXs>`
- `<$FivemSm>`
- `<$FivemMd>`
- `<$FivemLg>`





## Fivem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fivem
include('simpleicons/F/Fivem')

' renders the element
Fivem('Fivem', 'Fivem', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fivem
include('simpleicons/F/Fivem')

' renders the element
Fivem('Fivem', 'Fivem', 'an optional tech label', 'an optional description')
@enduml
```

