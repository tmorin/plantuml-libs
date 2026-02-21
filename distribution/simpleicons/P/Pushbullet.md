# Pushbullet


```text
simpleicons/P/Pushbullet
```

```text
include('simpleicons/P/Pushbullet')
```



| Illustration | Pushbullet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pushbullet.png) | ![illustration for Pushbullet](../../simpleicons/P/Pushbullet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PushbulletXs>`
- `<$PushbulletSm>`
- `<$PushbulletMd>`
- `<$PushbulletLg>`





## Pushbullet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pushbullet
include('simpleicons/P/Pushbullet')

' renders the element
Pushbullet('Pushbullet', 'Pushbullet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pushbullet
include('simpleicons/P/Pushbullet')

' renders the element
Pushbullet('Pushbullet', 'Pushbullet', 'an optional tech label', 'an optional description')
@enduml
```

