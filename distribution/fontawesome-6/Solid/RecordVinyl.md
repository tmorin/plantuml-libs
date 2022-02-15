# RecordVinyl


```text
fontawesome-6/Solid/RecordVinyl
```

```text
include('fontawesome-6/Solid/RecordVinyl')
```



| Illustration | RecordVinyl |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RecordVinyl.png) | ![illustration for RecordVinyl](../../fontawesome-6/Solid/RecordVinyl.Local.png) |




## RecordVinyl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RecordVinyl
include('fontawesome-6/Solid/RecordVinyl')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RecordVinyl
include('fontawesome-6/Solid/RecordVinyl')

' renders the element
RecordVinyl('RecordVinyl', 'Record Vinyl', 'an optional tech label')
@enduml
```

