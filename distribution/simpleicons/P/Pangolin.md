# Pangolin


```text
simpleicons/P/Pangolin
```

```text
include('simpleicons/P/Pangolin')
```



| Illustration | Pangolin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pangolin.png) | ![illustration for Pangolin](../../simpleicons/P/Pangolin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PangolinXs>`
- `<$PangolinSm>`
- `<$PangolinMd>`
- `<$PangolinLg>`





## Pangolin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pangolin
include('simpleicons/P/Pangolin')

' renders the element
Pangolin('Pangolin', 'Pangolin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pangolin
include('simpleicons/P/Pangolin')

' renders the element
Pangolin('Pangolin', 'Pangolin', 'an optional tech label', 'an optional description')
@enduml
```

