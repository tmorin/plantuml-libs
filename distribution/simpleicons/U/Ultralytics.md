# Ultralytics


```text
simpleicons/U/Ultralytics
```

```text
include('simpleicons/U/Ultralytics')
```



| Illustration | Ultralytics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Ultralytics.png) | ![illustration for Ultralytics](../../simpleicons/U/Ultralytics.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ultralytics
include('simpleicons/U/Ultralytics')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ultralytics
include('simpleicons/U/Ultralytics')

' renders the element
Ultralytics('Ultralytics', 'Ultralytics', 'an optional tech label', 'an optional description')
@enduml
```

