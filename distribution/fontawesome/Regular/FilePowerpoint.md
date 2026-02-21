# FilePowerpoint


```text
fontawesome/Regular/FilePowerpoint
```

```text
include('fontawesome/Regular/FilePowerpoint')
```



| Illustration | FilePowerpoint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FilePowerpoint.png) | ![illustration for FilePowerpoint](../../fontawesome/Regular/FilePowerpoint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilePowerpointXs>`
- `<$FilePowerpointSm>`
- `<$FilePowerpointMd>`
- `<$FilePowerpointLg>`





## FilePowerpoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FilePowerpoint
include('fontawesome/Regular/FilePowerpoint')

' renders the element
FilePowerpoint('FilePowerpoint', 'File Powerpoint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilePowerpoint
include('fontawesome/Regular/FilePowerpoint')

' renders the element
FilePowerpoint('FilePowerpoint', 'File Powerpoint', 'an optional tech label', 'an optional description')
@enduml
```

