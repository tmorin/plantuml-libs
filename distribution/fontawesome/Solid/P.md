# P


```text
fontawesome/Solid/P
```

```text
include('fontawesome/Solid/P')
```



| Illustration | P |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/P.png) | ![illustration for P](../../fontawesome/Solid/P.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PXs>`
- `<$PSm>`
- `<$PMd>`
- `<$PLg>`





## P

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element P
include('fontawesome/Solid/P')

' renders the element
P('P', 'P', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element P
include('fontawesome/Solid/P')

' renders the element
P('P', 'P', 'an optional tech label', 'an optional description')
@enduml
```

