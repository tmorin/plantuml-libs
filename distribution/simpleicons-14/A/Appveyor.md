# Appveyor


```text
simpleicons-14/A/Appveyor
```

```text
include('simpleicons-14/A/Appveyor')
```



| Illustration | Appveyor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Appveyor.png) | ![illustration for Appveyor](../../simpleicons-14/A/Appveyor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppveyorXs>`
- `<$AppveyorSm>`
- `<$AppveyorMd>`
- `<$AppveyorLg>`





## Appveyor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Appveyor
include('simpleicons-14/A/Appveyor')

' renders the element
Appveyor('Appveyor', 'Appveyor', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Appveyor
include('simpleicons-14/A/Appveyor')

' renders the element
Appveyor('Appveyor', 'Appveyor', 'an optional tech label', 'an optional description')
@enduml
```

