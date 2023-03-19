# Expo


```text
simpleicons-8/E/Expo
```

```text
include('simpleicons-8/E/Expo')
```



| Illustration | Expo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Expo.png) | ![illustration for Expo](../../simpleicons-8/E/Expo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExpoXs>`
- `<$ExpoSm>`
- `<$ExpoMd>`
- `<$ExpoLg>`





## Expo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Expo
include('simpleicons-8/E/Expo')

' renders the element
Expo('Expo', 'Expo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Expo
include('simpleicons-8/E/Expo')

' renders the element
Expo('Expo', 'Expo', 'an optional tech label', 'an optional description')
@enduml
```

