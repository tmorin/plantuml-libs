# Expo


```text
simpleicons-5/E/Expo
```

```text
include('simpleicons-5/E/Expo')
```



| Illustration | Expo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Expo.png) | ![illustration for Expo](../../simpleicons-5/E/Expo.Local.png) |




## Expo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Expo
include('simpleicons-5/E/Expo')

' renders the element
Expo('Expo', 'Expo', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Expo
include('simpleicons-5/E/Expo')

' renders the element
Expo('Expo', 'Expo', 'an optional tech label')
@enduml
```

