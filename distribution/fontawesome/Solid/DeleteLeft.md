# DeleteLeft


```text
fontawesome/Solid/DeleteLeft
```

```text
include('fontawesome/Solid/DeleteLeft')
```



| Illustration | DeleteLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DeleteLeft.png) | ![illustration for DeleteLeft](../../fontawesome/Solid/DeleteLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeleteLeftXs>`
- `<$DeleteLeftSm>`
- `<$DeleteLeftMd>`
- `<$DeleteLeftLg>`





## DeleteLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DeleteLeft
include('fontawesome/Solid/DeleteLeft')

' renders the element
DeleteLeft('DeleteLeft', 'Delete Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DeleteLeft
include('fontawesome/Solid/DeleteLeft')

' renders the element
DeleteLeft('DeleteLeft', 'Delete Left', 'an optional tech label', 'an optional description')
@enduml
```

