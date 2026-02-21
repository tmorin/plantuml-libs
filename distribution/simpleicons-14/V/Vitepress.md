# Vitepress


```text
simpleicons-14/V/Vitepress
```

```text
include('simpleicons-14/V/Vitepress')
```



| Illustration | Vitepress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vitepress.png) | ![illustration for Vitepress](../../simpleicons-14/V/Vitepress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VitepressXs>`
- `<$VitepressSm>`
- `<$VitepressMd>`
- `<$VitepressLg>`





## Vitepress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vitepress
include('simpleicons-14/V/Vitepress')

' renders the element
Vitepress('Vitepress', 'Vitepress', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vitepress
include('simpleicons-14/V/Vitepress')

' renders the element
Vitepress('Vitepress', 'Vitepress', 'an optional tech label', 'an optional description')
@enduml
```

