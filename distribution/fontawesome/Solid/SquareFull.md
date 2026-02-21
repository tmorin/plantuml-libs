# SquareFull


```text
fontawesome/Solid/SquareFull
```

```text
include('fontawesome/Solid/SquareFull')
```



| Illustration | SquareFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareFull.png) | ![illustration for SquareFull](../../fontawesome/Solid/SquareFull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareFullXs>`
- `<$SquareFullSm>`
- `<$SquareFullMd>`
- `<$SquareFullLg>`





## SquareFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareFull
include('fontawesome/Solid/SquareFull')

' renders the element
SquareFull('SquareFull', 'Square Full', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareFull
include('fontawesome/Solid/SquareFull')

' renders the element
SquareFull('SquareFull', 'Square Full', 'an optional tech label', 'an optional description')
@enduml
```

