# Zenbrowser


```text
simpleicons-14/Z/Zenbrowser
```

```text
include('simpleicons-14/Z/Zenbrowser')
```



| Illustration | Zenbrowser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zenbrowser.png) | ![illustration for Zenbrowser](../../simpleicons-14/Z/Zenbrowser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZenbrowserXs>`
- `<$ZenbrowserSm>`
- `<$ZenbrowserMd>`
- `<$ZenbrowserLg>`





## Zenbrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zenbrowser
include('simpleicons-14/Z/Zenbrowser')

' renders the element
Zenbrowser('Zenbrowser', 'Zenbrowser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zenbrowser
include('simpleicons-14/Z/Zenbrowser')

' renders the element
Zenbrowser('Zenbrowser', 'Zenbrowser', 'an optional tech label', 'an optional description')
@enduml
```

