# Segment


```text
material-4/Action/Segment
```

```text
include('material-4/Action/Segment')
```



| Illustration | Segment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Segment.png) | ![illustration for Segment](../../material-4/Action/Segment.Local.png) |




## Segment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Segment
include('material-4/Action/Segment')

' renders the element
Segment('Segment', 'Segment', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Segment
include('material-4/Action/Segment')

' renders the element
Segment('Segment', 'Segment', 'an optional tech label')
@enduml
```

