# Ultralytics


```text
fontawesome/Brands/Ultralytics
```

```text
include('fontawesome/Brands/Ultralytics')
```



| Illustration | Ultralytics |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ultralytics.png) | ![illustration for Ultralytics](../../fontawesome/Brands/Ultralytics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UltralyticsXs>`
- `<$UltralyticsSm>`
- `<$UltralyticsMd>`
- `<$UltralyticsLg>`





## Ultralytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ultralytics
include('fontawesome/Brands/Ultralytics')

' renders the element
Ultralytics('Ultralytics', 'Ultralytics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ultralytics
include('fontawesome/Brands/Ultralytics')

' renders the element
Ultralytics('Ultralytics', 'Ultralytics', 'an optional tech label', 'an optional description')
@enduml
```

