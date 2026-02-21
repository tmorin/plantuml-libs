# FaceAngry


```text
fontawesome/Regular/FaceAngry
```

```text
include('fontawesome/Regular/FaceAngry')
```



| Illustration | FaceAngry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FaceAngry.png) | ![illustration for FaceAngry](../../fontawesome/Regular/FaceAngry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceAngryXs>`
- `<$FaceAngrySm>`
- `<$FaceAngryMd>`
- `<$FaceAngryLg>`





## FaceAngry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceAngry
include('fontawesome/Regular/FaceAngry')

' renders the element
FaceAngry('FaceAngry', 'Face Angry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceAngry
include('fontawesome/Regular/FaceAngry')

' renders the element
FaceAngry('FaceAngry', 'Face Angry', 'an optional tech label', 'an optional description')
@enduml
```

