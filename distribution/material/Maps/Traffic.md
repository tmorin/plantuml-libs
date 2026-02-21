# Traffic


```text
material/Maps/Traffic
```

```text
include('material/Maps/Traffic')
```



| Illustration | Traffic |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Traffic.png) | ![illustration for Traffic](../../material/Maps/Traffic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrafficXs>`
- `<$TrafficSm>`
- `<$TrafficMd>`
- `<$TrafficLg>`





## Traffic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Traffic
include('material/Maps/Traffic')

' renders the element
Traffic('Traffic', 'Traffic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Traffic
include('material/Maps/Traffic')

' renders the element
Traffic('Traffic', 'Traffic', 'an optional tech label', 'an optional description')
@enduml
```

