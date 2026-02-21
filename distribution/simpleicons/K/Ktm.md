# Ktm


```text
simpleicons/K/Ktm
```

```text
include('simpleicons/K/Ktm')
```



| Illustration | Ktm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Ktm.png) | ![illustration for Ktm](../../simpleicons/K/Ktm.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ktm
include('simpleicons/K/Ktm')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ktm
include('simpleicons/K/Ktm')

' renders the element
Ktm('Ktm', 'Ktm', 'an optional tech label', 'an optional description')
@enduml
```

