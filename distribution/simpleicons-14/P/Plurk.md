# Plurk


```text
simpleicons-14/P/Plurk
```

```text
include('simpleicons-14/P/Plurk')
```



| Illustration | Plurk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Plurk.png) | ![illustration for Plurk](../../simpleicons-14/P/Plurk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlurkXs>`
- `<$PlurkSm>`
- `<$PlurkMd>`
- `<$PlurkLg>`





## Plurk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Plurk
include('simpleicons-14/P/Plurk')

' renders the element
Plurk('Plurk', 'Plurk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plurk
include('simpleicons-14/P/Plurk')

' renders the element
Plurk('Plurk', 'Plurk', 'an optional tech label', 'an optional description')
@enduml
```

