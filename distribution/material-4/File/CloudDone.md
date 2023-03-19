# CloudDone


```text
material-4/File/CloudDone
```

```text
include('material-4/File/CloudDone')
```



| Illustration | CloudDone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/CloudDone.png) | ![illustration for CloudDone](../../material-4/File/CloudDone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudDoneXs>`
- `<$CloudDoneSm>`
- `<$CloudDoneMd>`
- `<$CloudDoneLg>`





## CloudDone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CloudDone
include('material-4/File/CloudDone')

' renders the element
CloudDone('CloudDone', 'Cloud Done', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element CloudDone
include('material-4/File/CloudDone')

' renders the element
CloudDone('CloudDone', 'Cloud Done', 'an optional tech label', 'an optional description')
@enduml
```

