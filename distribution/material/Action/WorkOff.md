# WorkOff


```text
material/Action/WorkOff
```

```text
include('material/Action/WorkOff')
```



| Illustration | WorkOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/WorkOff.png) | ![illustration for WorkOff](../../material/Action/WorkOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WorkOffXs>`
- `<$WorkOffSm>`
- `<$WorkOffMd>`
- `<$WorkOffLg>`





## WorkOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element WorkOff
include('material/Action/WorkOff')

' renders the element
WorkOff('WorkOff', 'Work Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WorkOff
include('material/Action/WorkOff')

' renders the element
WorkOff('WorkOff', 'Work Off', 'an optional tech label', 'an optional description')
@enduml
```

