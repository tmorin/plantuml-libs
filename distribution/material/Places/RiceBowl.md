# RiceBowl


```text
material/Places/RiceBowl
```

```text
include('material/Places/RiceBowl')
```



| Illustration | RiceBowl |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/RiceBowl.png) | ![illustration for RiceBowl](../../material/Places/RiceBowl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RiceBowlXs>`
- `<$RiceBowlSm>`
- `<$RiceBowlMd>`
- `<$RiceBowlLg>`





## RiceBowl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RiceBowl
include('material/Places/RiceBowl')

' renders the element
RiceBowl('RiceBowl', 'Rice Bowl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RiceBowl
include('material/Places/RiceBowl')

' renders the element
RiceBowl('RiceBowl', 'Rice Bowl', 'an optional tech label', 'an optional description')
@enduml
```

