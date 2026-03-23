# FilesPinwheel


```text
fontawesome/Brands/FilesPinwheel
```

```text
include('fontawesome/Brands/FilesPinwheel')
```



| Illustration | FilesPinwheel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/FilesPinwheel.png) | ![illustration for FilesPinwheel](../../fontawesome/Brands/FilesPinwheel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilesPinwheelXs>`
- `<$FilesPinwheelSm>`
- `<$FilesPinwheelMd>`
- `<$FilesPinwheelLg>`





## FilesPinwheel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FilesPinwheel
include('fontawesome/Brands/FilesPinwheel')

' renders the element
FilesPinwheel('FilesPinwheel', 'Files Pinwheel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilesPinwheel
include('fontawesome/Brands/FilesPinwheel')

' renders the element
FilesPinwheel('FilesPinwheel', 'Files Pinwheel', 'an optional tech label', 'an optional description')
@enduml
```

