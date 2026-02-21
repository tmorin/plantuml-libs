# Simpleanalytics


```text
simpleicons/S/Simpleanalytics
```

```text
include('simpleicons/S/Simpleanalytics')
```



| Illustration | Simpleanalytics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Simpleanalytics.png) | ![illustration for Simpleanalytics](../../simpleicons/S/Simpleanalytics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimpleanalyticsXs>`
- `<$SimpleanalyticsSm>`
- `<$SimpleanalyticsMd>`
- `<$SimpleanalyticsLg>`





## Simpleanalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Simpleanalytics
include('simpleicons/S/Simpleanalytics')

' renders the element
Simpleanalytics('Simpleanalytics', 'Simpleanalytics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simpleanalytics
include('simpleicons/S/Simpleanalytics')

' renders the element
Simpleanalytics('Simpleanalytics', 'Simpleanalytics', 'an optional tech label', 'an optional description')
@enduml
```

