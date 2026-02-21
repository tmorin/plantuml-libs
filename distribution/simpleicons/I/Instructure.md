# Instructure


```text
simpleicons/I/Instructure
```

```text
include('simpleicons/I/Instructure')
```



| Illustration | Instructure |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Instructure.png) | ![illustration for Instructure](../../simpleicons/I/Instructure.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InstructureXs>`
- `<$InstructureSm>`
- `<$InstructureMd>`
- `<$InstructureLg>`





## Instructure

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Instructure
include('simpleicons/I/Instructure')

' renders the element
Instructure('Instructure', 'Instructure', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Instructure
include('simpleicons/I/Instructure')

' renders the element
Instructure('Instructure', 'Instructure', 'an optional tech label', 'an optional description')
@enduml
```

