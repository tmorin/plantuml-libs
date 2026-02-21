# FaceKiss


```text
fontawesome/Regular/FaceKiss
```

```text
include('fontawesome/Regular/FaceKiss')
```



| Illustration | FaceKiss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceKiss.png) | ![illustration for FaceKiss](../../fontawesome/Regular/FaceKiss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceKissXs>`
- `<$FaceKissSm>`
- `<$FaceKissMd>`
- `<$FaceKissLg>`





## FaceKiss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceKiss
include('fontawesome/Regular/FaceKiss')

' renders the element
FaceKiss('FaceKiss', 'Face Kiss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceKiss
include('fontawesome/Regular/FaceKiss')

' renders the element
FaceKiss('FaceKiss', 'Face Kiss', 'an optional tech label', 'an optional description')
@enduml
```

