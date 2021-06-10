# RecordVinyl


```text
fontawesome-5/Solid/RecordVinyl
```

```text
include('fontawesome-5/Solid/RecordVinyl')
```



| Illustration | RecordVinyl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/RecordVinyl.png) | ![illustration for RecordVinyl](../../fontawesome-5/Solid/RecordVinyl.Local.png) |




## RecordVinyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RecordVinyl
include('fontawesome-5/Solid/RecordVinyl')

' renders the element
RecordVinyl('RecordVinyl', 'Record Vinyl', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RecordVinyl
include('fontawesome-5/Solid/RecordVinyl')

' renders the element
RecordVinyl('RecordVinyl', 'Record Vinyl', 'an optional tech label')
@enduml
```

