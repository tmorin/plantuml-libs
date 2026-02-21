# CaretLeft


```text
fontawesome/Solid/CaretLeft
```

```text
include('fontawesome/Solid/CaretLeft')
```



| Illustration | CaretLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CaretLeft.png) | ![illustration for CaretLeft](../../fontawesome/Solid/CaretLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CaretLeftXs>`
- `<$CaretLeftSm>`
- `<$CaretLeftMd>`
- `<$CaretLeftLg>`





## CaretLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CaretLeft
include('fontawesome/Solid/CaretLeft')

' renders the element
CaretLeft('CaretLeft', 'Caret Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CaretLeft
include('fontawesome/Solid/CaretLeft')

' renders the element
CaretLeft('CaretLeft', 'Caret Left', 'an optional tech label', 'an optional description')
@enduml
```

