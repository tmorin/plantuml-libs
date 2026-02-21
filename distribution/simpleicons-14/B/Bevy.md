# Bevy


```text
simpleicons-14/B/Bevy
```

```text
include('simpleicons-14/B/Bevy')
```



| Illustration | Bevy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bevy.png) | ![illustration for Bevy](../../simpleicons-14/B/Bevy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BevyXs>`
- `<$BevySm>`
- `<$BevyMd>`
- `<$BevyLg>`





## Bevy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bevy
include('simpleicons-14/B/Bevy')

' renders the element
Bevy('Bevy', 'Bevy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bevy
include('simpleicons-14/B/Bevy')

' renders the element
Bevy('Bevy', 'Bevy', 'an optional tech label', 'an optional description')
@enduml
```

