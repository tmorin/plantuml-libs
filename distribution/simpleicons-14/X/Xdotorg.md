# Xdotorg


```text
simpleicons-14/X/Xdotorg
```

```text
include('simpleicons-14/X/Xdotorg')
```



| Illustration | Xdotorg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/X/Xdotorg.png) | ![illustration for Xdotorg](../../simpleicons-14/X/Xdotorg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XdotorgXs>`
- `<$XdotorgSm>`
- `<$XdotorgMd>`
- `<$XdotorgLg>`





## Xdotorg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Xdotorg
include('simpleicons-14/X/Xdotorg')

' renders the element
Xdotorg('Xdotorg', 'Xdotorg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xdotorg
include('simpleicons-14/X/Xdotorg')

' renders the element
Xdotorg('Xdotorg', 'Xdotorg', 'an optional tech label', 'an optional description')
@enduml
```

