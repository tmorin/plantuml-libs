# Adobelightroom


```text
simpleicons-8/A/Adobelightroom
```

```text
include('simpleicons-8/A/Adobelightroom')
```



| Illustration | Adobelightroom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adobelightroom.png) | ![illustration for Adobelightroom](../../simpleicons-8/A/Adobelightroom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdobelightroomXs>`
- `<$AdobelightroomSm>`
- `<$AdobelightroomMd>`
- `<$AdobelightroomLg>`





## Adobelightroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adobelightroom
include('simpleicons-8/A/Adobelightroom')

' renders the element
Adobelightroom('Adobelightroom', 'Adobelightroom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adobelightroom
include('simpleicons-8/A/Adobelightroom')

' renders the element
Adobelightroom('Adobelightroom', 'Adobelightroom', 'an optional tech label', 'an optional description')
@enduml
```

