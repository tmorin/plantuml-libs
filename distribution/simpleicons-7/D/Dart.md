# Dart


```text
simpleicons-7/D/Dart
```

```text
include('simpleicons-7/D/Dart')
```



| Illustration | Dart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dart.png) | ![illustration for Dart](../../simpleicons-7/D/Dart.Local.png) |




## Dart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dart
include('simpleicons-7/D/Dart')

' renders the element
Dart('Dart', 'Dart', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dart
include('simpleicons-7/D/Dart')

' renders the element
Dart('Dart', 'Dart', 'an optional tech label', 'an optional description')
@enduml
```

