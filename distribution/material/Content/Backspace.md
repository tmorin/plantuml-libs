# Backspace


```text
material/Content/Backspace
```

```text
include('material/Content/Backspace')
```



| Illustration | Backspace |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Backspace.png) | ![illustration for Backspace](../../material/Content/Backspace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackspaceXs>`
- `<$BackspaceSm>`
- `<$BackspaceMd>`
- `<$BackspaceLg>`





## Backspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Backspace
include('material/Content/Backspace')

' renders the element
Backspace('Backspace', 'Backspace', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Backspace
include('material/Content/Backspace')

' renders the element
Backspace('Backspace', 'Backspace', 'an optional tech label', 'an optional description')
@enduml
```

