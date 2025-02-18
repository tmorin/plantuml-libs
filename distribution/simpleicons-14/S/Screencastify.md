# Screencastify


```text
simpleicons-14/S/Screencastify
```

```text
include('simpleicons-14/S/Screencastify')
```



| Illustration | Screencastify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Screencastify.png) | ![illustration for Screencastify](../../simpleicons-14/S/Screencastify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScreencastifyXs>`
- `<$ScreencastifySm>`
- `<$ScreencastifyMd>`
- `<$ScreencastifyLg>`





## Screencastify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Screencastify
include('simpleicons-14/S/Screencastify')

' renders the element
Screencastify('Screencastify', 'Screencastify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Screencastify
include('simpleicons-14/S/Screencastify')

' renders the element
Screencastify('Screencastify', 'Screencastify', 'an optional tech label', 'an optional description')
@enduml
```

