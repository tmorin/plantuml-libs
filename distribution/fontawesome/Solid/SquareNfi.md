# SquareNfi


```text
fontawesome/Solid/SquareNfi
```

```text
include('fontawesome/Solid/SquareNfi')
```



| Illustration | SquareNfi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareNfi.png) | ![illustration for SquareNfi](../../fontawesome/Solid/SquareNfi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareNfiXs>`
- `<$SquareNfiSm>`
- `<$SquareNfiMd>`
- `<$SquareNfiLg>`





## SquareNfi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareNfi
include('fontawesome/Solid/SquareNfi')

' renders the element
SquareNfi('SquareNfi', 'Square Nfi', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareNfi
include('fontawesome/Solid/SquareNfi')

' renders the element
SquareNfi('SquareNfi', 'Square Nfi', 'an optional tech label', 'an optional description')
@enduml
```

