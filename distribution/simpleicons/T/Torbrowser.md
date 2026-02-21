# Torbrowser


```text
simpleicons/T/Torbrowser
```

```text
include('simpleicons/T/Torbrowser')
```



| Illustration | Torbrowser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Torbrowser.png) | ![illustration for Torbrowser](../../simpleicons/T/Torbrowser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TorbrowserXs>`
- `<$TorbrowserSm>`
- `<$TorbrowserMd>`
- `<$TorbrowserLg>`





## Torbrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Torbrowser
include('simpleicons/T/Torbrowser')

' renders the element
Torbrowser('Torbrowser', 'Torbrowser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Torbrowser
include('simpleicons/T/Torbrowser')

' renders the element
Torbrowser('Torbrowser', 'Torbrowser', 'an optional tech label', 'an optional description')
@enduml
```

