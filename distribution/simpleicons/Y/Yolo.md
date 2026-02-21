# Yolo


```text
simpleicons/Y/Yolo
```

```text
include('simpleicons/Y/Yolo')
```



| Illustration | Yolo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Yolo.png) | ![illustration for Yolo](../../simpleicons/Y/Yolo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoloXs>`
- `<$YoloSm>`
- `<$YoloMd>`
- `<$YoloLg>`





## Yolo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yolo
include('simpleicons/Y/Yolo')

' renders the element
Yolo('Yolo', 'Yolo', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yolo
include('simpleicons/Y/Yolo')

' renders the element
Yolo('Yolo', 'Yolo', 'an optional tech label', 'an optional description')
@enduml
```

