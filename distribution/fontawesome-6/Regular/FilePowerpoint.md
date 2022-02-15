# FilePowerpoint


```text
fontawesome-6/Regular/FilePowerpoint
```

```text
include('fontawesome-6/Regular/FilePowerpoint')
```



| Illustration | FilePowerpoint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FilePowerpoint.png) | ![illustration for FilePowerpoint](../../fontawesome-6/Regular/FilePowerpoint.Local.png) |




## FilePowerpoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FilePowerpoint
include('fontawesome-6/Regular/FilePowerpoint')

' renders the element
FilePowerpoint('FilePowerpoint', 'File Powerpoint', 'an optional tech label')
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

' loads the Item which embeds the element FilePowerpoint
include('fontawesome-6/Regular/FilePowerpoint')

' renders the element
FilePowerpoint('FilePowerpoint', 'File Powerpoint', 'an optional tech label')
@enduml
```

