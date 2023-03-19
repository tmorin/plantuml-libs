# Ktm


```text
simpleicons-8/K/Ktm
```

```text
include('simpleicons-8/K/Ktm')
```



| Illustration | Ktm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Ktm.png) | ![illustration for Ktm](../../simpleicons-8/K/Ktm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KtmXs>`
- `<$KtmSm>`
- `<$KtmMd>`
- `<$KtmLg>`





## Ktm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ktm
include('simpleicons-8/K/Ktm')

' renders the element
Ktm('Ktm', 'Ktm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ktm
include('simpleicons-8/K/Ktm')

' renders the element
Ktm('Ktm', 'Ktm', 'an optional tech label', 'an optional description')
@enduml
```

