# SquareFull


```text
fontawesome/Regular/SquareFull
```

```text
include('fontawesome/Regular/SquareFull')
```



| Illustration | SquareFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/SquareFull.png) | ![illustration for SquareFull](../../fontawesome/Regular/SquareFull.Local.png) |



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
include('fontawesome/Regular/SquareFull')

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
include('fontawesome/Regular/SquareFull')

' renders the element
SquareFull('SquareFull', 'Square Full', 'an optional tech label', 'an optional description')
@enduml
```

