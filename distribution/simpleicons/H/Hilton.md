# Hilton


```text
simpleicons/H/Hilton
```

```text
include('simpleicons/H/Hilton')
```



| Illustration | Hilton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hilton.png) | ![illustration for Hilton](../../simpleicons/H/Hilton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HiltonXs>`
- `<$HiltonSm>`
- `<$HiltonMd>`
- `<$HiltonLg>`





## Hilton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hilton
include('simpleicons/H/Hilton')

' renders the element
Hilton('Hilton', 'Hilton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hilton
include('simpleicons/H/Hilton')

' renders the element
Hilton('Hilton', 'Hilton', 'an optional tech label', 'an optional description')
@enduml
```

