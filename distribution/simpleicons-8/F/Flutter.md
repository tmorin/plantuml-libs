# Flutter


```text
simpleicons-8/F/Flutter
```

```text
include('simpleicons-8/F/Flutter')
```



| Illustration | Flutter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Flutter.png) | ![illustration for Flutter](../../simpleicons-8/F/Flutter.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Flutter
include('simpleicons-8/F/Flutter')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Flutter
include('simpleicons-8/F/Flutter')

' renders the element
Flutter('Flutter', 'Flutter', 'an optional tech label', 'an optional description')
@enduml
```

