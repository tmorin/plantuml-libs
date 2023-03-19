# Manjaro


```text
simpleicons-8/M/Manjaro
```

```text
include('simpleicons-8/M/Manjaro')
```



| Illustration | Manjaro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Manjaro.png) | ![illustration for Manjaro](../../simpleicons-8/M/Manjaro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ManjaroXs>`
- `<$ManjaroSm>`
- `<$ManjaroMd>`
- `<$ManjaroLg>`





## Manjaro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Manjaro
include('simpleicons-8/M/Manjaro')

' renders the element
Manjaro('Manjaro', 'Manjaro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Manjaro
include('simpleicons-8/M/Manjaro')

' renders the element
Manjaro('Manjaro', 'Manjaro', 'an optional tech label', 'an optional description')
@enduml
```

