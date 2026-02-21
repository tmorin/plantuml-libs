# Gridsome


```text
simpleicons/G/Gridsome
```

```text
include('simpleicons/G/Gridsome')
```



| Illustration | Gridsome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gridsome.png) | ![illustration for Gridsome](../../simpleicons/G/Gridsome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GridsomeXs>`
- `<$GridsomeSm>`
- `<$GridsomeMd>`
- `<$GridsomeLg>`





## Gridsome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gridsome
include('simpleicons/G/Gridsome')

' renders the element
Gridsome('Gridsome', 'Gridsome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gridsome
include('simpleicons/G/Gridsome')

' renders the element
Gridsome('Gridsome', 'Gridsome', 'an optional tech label', 'an optional description')
@enduml
```

