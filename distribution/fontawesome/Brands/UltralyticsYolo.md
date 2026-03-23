# UltralyticsYolo


```text
fontawesome/Brands/UltralyticsYolo
```

```text
include('fontawesome/Brands/UltralyticsYolo')
```



| Illustration | UltralyticsYolo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/UltralyticsYolo.png) | ![illustration for UltralyticsYolo](../../fontawesome/Brands/UltralyticsYolo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UltralyticsYoloXs>`
- `<$UltralyticsYoloSm>`
- `<$UltralyticsYoloMd>`
- `<$UltralyticsYoloLg>`





## UltralyticsYolo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UltralyticsYolo
include('fontawesome/Brands/UltralyticsYolo')

' renders the element
UltralyticsYolo('UltralyticsYolo', 'Ultralytics Yolo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UltralyticsYolo
include('fontawesome/Brands/UltralyticsYolo')

' renders the element
UltralyticsYolo('UltralyticsYolo', 'Ultralytics Yolo', 'an optional tech label', 'an optional description')
@enduml
```

