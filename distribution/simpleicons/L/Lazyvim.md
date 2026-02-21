# Lazyvim


```text
simpleicons/L/Lazyvim
```

```text
include('simpleicons/L/Lazyvim')
```



| Illustration | Lazyvim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lazyvim.png) | ![illustration for Lazyvim](../../simpleicons/L/Lazyvim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LazyvimXs>`
- `<$LazyvimSm>`
- `<$LazyvimMd>`
- `<$LazyvimLg>`





## Lazyvim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lazyvim
include('simpleicons/L/Lazyvim')

' renders the element
Lazyvim('Lazyvim', 'Lazyvim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lazyvim
include('simpleicons/L/Lazyvim')

' renders the element
Lazyvim('Lazyvim', 'Lazyvim', 'an optional tech label', 'an optional description')
@enduml
```

