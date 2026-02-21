# Staffbase


```text
simpleicons/S/Staffbase
```

```text
include('simpleicons/S/Staffbase')
```



| Illustration | Staffbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Staffbase.png) | ![illustration for Staffbase](../../simpleicons/S/Staffbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StaffbaseXs>`
- `<$StaffbaseSm>`
- `<$StaffbaseMd>`
- `<$StaffbaseLg>`





## Staffbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Staffbase
include('simpleicons/S/Staffbase')

' renders the element
Staffbase('Staffbase', 'Staffbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Staffbase
include('simpleicons/S/Staffbase')

' renders the element
Staffbase('Staffbase', 'Staffbase', 'an optional tech label', 'an optional description')
@enduml
```

