# Humhub


```text
simpleicons-14/H/Humhub
```

```text
include('simpleicons-14/H/Humhub')
```



| Illustration | Humhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Humhub.png) | ![illustration for Humhub](../../simpleicons-14/H/Humhub.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Humhub
include('simpleicons-14/H/Humhub')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Humhub
include('simpleicons-14/H/Humhub')

' renders the element
Humhub('Humhub', 'Humhub', 'an optional tech label', 'an optional description')
@enduml
```

