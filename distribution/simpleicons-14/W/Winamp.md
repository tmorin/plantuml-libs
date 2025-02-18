# Winamp


```text
simpleicons-14/W/Winamp
```

```text
include('simpleicons-14/W/Winamp')
```



| Illustration | Winamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Winamp.png) | ![illustration for Winamp](../../simpleicons-14/W/Winamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WinampXs>`
- `<$WinampSm>`
- `<$WinampMd>`
- `<$WinampLg>`





## Winamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Winamp
include('simpleicons-14/W/Winamp')

' renders the element
Winamp('Winamp', 'Winamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Winamp
include('simpleicons-14/W/Winamp')

' renders the element
Winamp('Winamp', 'Winamp', 'an optional tech label', 'an optional description')
@enduml
```

