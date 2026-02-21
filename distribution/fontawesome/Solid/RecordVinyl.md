# RecordVinyl


```text
fontawesome/Solid/RecordVinyl
```

```text
include('fontawesome/Solid/RecordVinyl')
```



| Illustration | RecordVinyl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RecordVinyl.png) | ![illustration for RecordVinyl](../../fontawesome/Solid/RecordVinyl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RecordVinylXs>`
- `<$RecordVinylSm>`
- `<$RecordVinylMd>`
- `<$RecordVinylLg>`





## RecordVinyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RecordVinyl
include('fontawesome/Solid/RecordVinyl')

' renders the element
RecordVinyl('RecordVinyl', 'Record Vinyl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RecordVinyl
include('fontawesome/Solid/RecordVinyl')

' renders the element
RecordVinyl('RecordVinyl', 'Record Vinyl', 'an optional tech label', 'an optional description')
@enduml
```

