# Delphi


```text
simpleicons-14/D/Delphi
```

```text
include('simpleicons-14/D/Delphi')
```



| Illustration | Delphi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Delphi.png) | ![illustration for Delphi](../../simpleicons-14/D/Delphi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DelphiXs>`
- `<$DelphiSm>`
- `<$DelphiMd>`
- `<$DelphiLg>`





## Delphi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Delphi
include('simpleicons-14/D/Delphi')

' renders the element
Delphi('Delphi', 'Delphi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Delphi
include('simpleicons-14/D/Delphi')

' renders the element
Delphi('Delphi', 'Delphi', 'an optional tech label', 'an optional description')
@enduml
```

