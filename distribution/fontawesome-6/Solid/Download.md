# Download


```text
fontawesome-6/Solid/Download
```

```text
include('fontawesome-6/Solid/Download')
```



| Illustration | Download |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Download.png) | ![illustration for Download](../../fontawesome-6/Solid/Download.Local.png) |




## Download

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Download
include('fontawesome-6/Solid/Download')

' renders the element
Download('Download', 'Download', 'an optional tech label')
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

' loads the Item which embeds the element Download
include('fontawesome-6/Solid/Download')

' renders the element
Download('Download', 'Download', 'an optional tech label')
@enduml
```

