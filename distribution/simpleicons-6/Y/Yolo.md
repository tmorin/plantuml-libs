# Yolo


```text
simpleicons-6/Y/Yolo
```

```text
include('simpleicons-6/Y/Yolo')
```



| Illustration | Yolo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Y/Yolo.png) | ![illustration for Yolo](../../simpleicons-6/Y/Yolo.Local.png) |




## Yolo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Yolo
include('simpleicons-6/Y/Yolo')

' renders the element
Yolo('Yolo', 'Yolo', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Yolo
include('simpleicons-6/Y/Yolo')

' renders the element
Yolo('Yolo', 'Yolo', 'an optional tech label')
@enduml
```

