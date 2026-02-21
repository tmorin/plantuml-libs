# Humhub


```text
simpleicons/H/Humhub
```

```text
include('simpleicons/H/Humhub')
```



| Illustration | Humhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Humhub.png) | ![illustration for Humhub](../../simpleicons/H/Humhub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HumhubXs>`
- `<$HumhubSm>`
- `<$HumhubMd>`
- `<$HumhubLg>`





## Humhub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Humhub
include('simpleicons/H/Humhub')

' renders the element
Humhub('Humhub', 'Humhub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Humhub
include('simpleicons/H/Humhub')

' renders the element
Humhub('Humhub', 'Humhub', 'an optional tech label', 'an optional description')
@enduml
```

