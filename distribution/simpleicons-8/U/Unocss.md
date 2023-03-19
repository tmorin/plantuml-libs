# Unocss


```text
simpleicons-8/U/Unocss
```

```text
include('simpleicons-8/U/Unocss')
```



| Illustration | Unocss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Unocss.png) | ![illustration for Unocss](../../simpleicons-8/U/Unocss.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Unocss
include('simpleicons-8/U/Unocss')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Unocss
include('simpleicons-8/U/Unocss')

' renders the element
Unocss('Unocss', 'Unocss', 'an optional tech label', 'an optional description')
@enduml
```

