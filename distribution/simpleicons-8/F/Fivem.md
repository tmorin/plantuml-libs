# Fivem


```text
simpleicons-8/F/Fivem
```

```text
include('simpleicons-8/F/Fivem')
```



| Illustration | Fivem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fivem.png) | ![illustration for Fivem](../../simpleicons-8/F/Fivem.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fivem
include('simpleicons-8/F/Fivem')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fivem
include('simpleicons-8/F/Fivem')

' renders the element
Fivem('Fivem', 'Fivem', 'an optional tech label', 'an optional description')
@enduml
```

