# FaceKiss


```text
fontawesome-6/Solid/FaceKiss
```

```text
include('fontawesome-6/Solid/FaceKiss')
```



| Illustration | FaceKiss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceKiss.png) | ![illustration for FaceKiss](../../fontawesome-6/Solid/FaceKiss.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceKiss
include('fontawesome-6/Solid/FaceKiss')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceKiss
include('fontawesome-6/Solid/FaceKiss')

' renders the element
FaceKiss('FaceKiss', 'Face Kiss', 'an optional tech label', 'an optional description')
@enduml
```

