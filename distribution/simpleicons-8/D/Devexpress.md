# Devexpress


```text
simpleicons-8/D/Devexpress
```

```text
include('simpleicons-8/D/Devexpress')
```



| Illustration | Devexpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Devexpress.png) | ![illustration for Devexpress](../../simpleicons-8/D/Devexpress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevexpressXs>`
- `<$DevexpressSm>`
- `<$DevexpressMd>`
- `<$DevexpressLg>`





## Devexpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Devexpress
include('simpleicons-8/D/Devexpress')

' renders the element
Devexpress('Devexpress', 'Devexpress', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Devexpress
include('simpleicons-8/D/Devexpress')

' renders the element
Devexpress('Devexpress', 'Devexpress', 'an optional tech label', 'an optional description')
@enduml
```

