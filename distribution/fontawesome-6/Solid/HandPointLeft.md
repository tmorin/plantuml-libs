# HandPointLeft


```text
fontawesome-6/Solid/HandPointLeft
```

```text
include('fontawesome-6/Solid/HandPointLeft')
```



| Illustration | HandPointLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandPointLeft.png) | ![illustration for HandPointLeft](../../fontawesome-6/Solid/HandPointLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPointLeftXs>`
- `<$HandPointLeftSm>`
- `<$HandPointLeftMd>`
- `<$HandPointLeftLg>`





## HandPointLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandPointLeft
include('fontawesome-6/Solid/HandPointLeft')

' renders the element
HandPointLeft('HandPointLeft', 'Hand Point Left', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandPointLeft
include('fontawesome-6/Solid/HandPointLeft')

' renders the element
HandPointLeft('HandPointLeft', 'Hand Point Left', 'an optional tech label', 'an optional description')
@enduml
```

