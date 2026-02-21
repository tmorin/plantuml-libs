# FaceGrinTongue


```text
fontawesome/Regular/FaceGrinTongue
```

```text
include('fontawesome/Regular/FaceGrinTongue')
```



| Illustration | FaceGrinTongue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceGrinTongue.png) | ![illustration for FaceGrinTongue](../../fontawesome/Regular/FaceGrinTongue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceGrinTongueXs>`
- `<$FaceGrinTongueSm>`
- `<$FaceGrinTongueMd>`
- `<$FaceGrinTongueLg>`





## FaceGrinTongue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceGrinTongue
include('fontawesome/Regular/FaceGrinTongue')

' renders the element
FaceGrinTongue('FaceGrinTongue', 'Face Grin Tongue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceGrinTongue
include('fontawesome/Regular/FaceGrinTongue')

' renders the element
FaceGrinTongue('FaceGrinTongue', 'Face Grin Tongue', 'an optional tech label', 'an optional description')
@enduml
```

