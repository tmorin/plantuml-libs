# NotStarted


```text
material/Action/NotStarted
```

```text
include('material/Action/NotStarted')
```



| Illustration | NotStarted |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/NotStarted.png) | ![illustration for NotStarted](../../material/Action/NotStarted.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotStartedXs>`
- `<$NotStartedSm>`
- `<$NotStartedMd>`
- `<$NotStartedLg>`





## NotStarted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NotStarted
include('material/Action/NotStarted')

' renders the element
NotStarted('NotStarted', 'Not Started', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotStarted
include('material/Action/NotStarted')

' renders the element
NotStarted('NotStarted', 'Not Started', 'an optional tech label', 'an optional description')
@enduml
```

