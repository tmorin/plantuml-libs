# FloppyDisk


```text
fontawesome-6/Regular/FloppyDisk
```

```text
include('fontawesome-6/Regular/FloppyDisk')
```



| Illustration | FloppyDisk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FloppyDisk.png) | ![illustration for FloppyDisk](../../fontawesome-6/Regular/FloppyDisk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FloppyDiskXs>`
- `<$FloppyDiskSm>`
- `<$FloppyDiskMd>`
- `<$FloppyDiskLg>`





## FloppyDisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FloppyDisk
include('fontawesome-6/Regular/FloppyDisk')

' renders the element
FloppyDisk('FloppyDisk', 'Floppy Disk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FloppyDisk
include('fontawesome-6/Regular/FloppyDisk')

' renders the element
FloppyDisk('FloppyDisk', 'Floppy Disk', 'an optional tech label', 'an optional description')
@enduml
```

