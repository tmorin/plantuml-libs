# Unocss


```text
simpleicons/U/Unocss
```

```text
include('simpleicons/U/Unocss')
```



| Illustration | Unocss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unocss.png) | ![illustration for Unocss](../../simpleicons/U/Unocss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnocssXs>`
- `<$UnocssSm>`
- `<$UnocssMd>`
- `<$UnocssLg>`





## Unocss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unocss
include('simpleicons/U/Unocss')

' renders the element
Unocss('Unocss', 'Unocss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unocss
include('simpleicons/U/Unocss')

' renders the element
Unocss('Unocss', 'Unocss', 'an optional tech label', 'an optional description')
@enduml
```

