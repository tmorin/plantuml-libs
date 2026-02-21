# Slint


```text
simpleicons-14/S/Slint
```

```text
include('simpleicons-14/S/Slint')
```



| Illustration | Slint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Slint.png) | ![illustration for Slint](../../simpleicons-14/S/Slint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlintXs>`
- `<$SlintSm>`
- `<$SlintMd>`
- `<$SlintLg>`





## Slint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Slint
include('simpleicons-14/S/Slint')

' renders the element
Slint('Slint', 'Slint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Slint
include('simpleicons-14/S/Slint')

' renders the element
Slint('Slint', 'Slint', 'an optional tech label', 'an optional description')
@enduml
```

