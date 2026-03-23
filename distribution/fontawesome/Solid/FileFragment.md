# FileFragment


```text
fontawesome/Solid/FileFragment
```

```text
include('fontawesome/Solid/FileFragment')
```



| Illustration | FileFragment |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileFragment.png) | ![illustration for FileFragment](../../fontawesome/Solid/FileFragment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileFragmentXs>`
- `<$FileFragmentSm>`
- `<$FileFragmentMd>`
- `<$FileFragmentLg>`





## FileFragment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileFragment
include('fontawesome/Solid/FileFragment')

' renders the element
FileFragment('FileFragment', 'File Fragment', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileFragment
include('fontawesome/Solid/FileFragment')

' renders the element
FileFragment('FileFragment', 'File Fragment', 'an optional tech label', 'an optional description')
@enduml
```

