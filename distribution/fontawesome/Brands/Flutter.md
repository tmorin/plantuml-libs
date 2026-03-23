# Flutter


```text
fontawesome/Brands/Flutter
```

```text
include('fontawesome/Brands/Flutter')
```



| Illustration | Flutter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Flutter.png) | ![illustration for Flutter](../../fontawesome/Brands/Flutter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlutterXs>`
- `<$FlutterSm>`
- `<$FlutterMd>`
- `<$FlutterLg>`





## Flutter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Flutter
include('fontawesome/Brands/Flutter')

' renders the element
Flutter('Flutter', 'Flutter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flutter
include('fontawesome/Brands/Flutter')

' renders the element
Flutter('Flutter', 'Flutter', 'an optional tech label', 'an optional description')
@enduml
```

