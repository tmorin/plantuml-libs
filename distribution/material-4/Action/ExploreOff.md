# ExploreOff


```text
material-4/Action/ExploreOff
```

```text
include('material-4/Action/ExploreOff')
```



| Illustration | ExploreOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ExploreOff.png) | ![illustration for ExploreOff](../../material-4/Action/ExploreOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExploreOffXs>`
- `<$ExploreOffSm>`
- `<$ExploreOffMd>`
- `<$ExploreOffLg>`





## ExploreOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExploreOff
include('material-4/Action/ExploreOff')

' renders the element
ExploreOff('ExploreOff', 'Explore Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExploreOff
include('material-4/Action/ExploreOff')

' renders the element
ExploreOff('ExploreOff', 'Explore Off', 'an optional tech label', 'an optional description')
@enduml
```

