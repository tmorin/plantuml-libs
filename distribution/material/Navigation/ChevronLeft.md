# ChevronLeft


```text
material/Navigation/ChevronLeft
```

```text
include('material/Navigation/ChevronLeft')
```



| Illustration | ChevronLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ChevronLeft.png) | ![illustration for ChevronLeft](../../material/Navigation/ChevronLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChevronLeftXs>`
- `<$ChevronLeftSm>`
- `<$ChevronLeftMd>`
- `<$ChevronLeftLg>`





## ChevronLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ChevronLeft
include('material/Navigation/ChevronLeft')

' renders the element
ChevronLeft('ChevronLeft', 'Chevron Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChevronLeft
include('material/Navigation/ChevronLeft')

' renders the element
ChevronLeft('ChevronLeft', 'Chevron Left', 'an optional tech label', 'an optional description')
@enduml
```

