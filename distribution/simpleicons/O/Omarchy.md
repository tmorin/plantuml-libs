# Omarchy


```text
simpleicons/O/Omarchy
```

```text
include('simpleicons/O/Omarchy')
```



| Illustration | Omarchy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Omarchy.png) | ![illustration for Omarchy](../../simpleicons/O/Omarchy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OmarchyXs>`
- `<$OmarchySm>`
- `<$OmarchyMd>`
- `<$OmarchyLg>`





## Omarchy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Omarchy
include('simpleicons/O/Omarchy')

' renders the element
Omarchy('Omarchy', 'Omarchy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Omarchy
include('simpleicons/O/Omarchy')

' renders the element
Omarchy('Omarchy', 'Omarchy', 'an optional tech label', 'an optional description')
@enduml
```

