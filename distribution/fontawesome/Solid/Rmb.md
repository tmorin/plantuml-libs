# Rmb


```text
fontawesome/Solid/Rmb
```

```text
include('fontawesome/Solid/Rmb')
```



| Illustration | Rmb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Rmb.png) | ![illustration for Rmb](../../fontawesome/Solid/Rmb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RmbXs>`
- `<$RmbSm>`
- `<$RmbMd>`
- `<$RmbLg>`





## Rmb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rmb
include('fontawesome/Solid/Rmb')

' renders the element
Rmb('Rmb', 'Rmb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rmb
include('fontawesome/Solid/Rmb')

' renders the element
Rmb('Rmb', 'Rmb', 'an optional tech label', 'an optional description')
@enduml
```

