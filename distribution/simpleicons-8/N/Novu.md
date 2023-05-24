# Novu


```text
simpleicons-8/N/Novu
```

```text
include('simpleicons-8/N/Novu')
```



| Illustration | Novu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Novu.png) | ![illustration for Novu](../../simpleicons-8/N/Novu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NovuXs>`
- `<$NovuSm>`
- `<$NovuMd>`
- `<$NovuLg>`





## Novu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Novu
include('simpleicons-8/N/Novu')

' renders the element
Novu('Novu', 'Novu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Novu
include('simpleicons-8/N/Novu')

' renders the element
Novu('Novu', 'Novu', 'an optional tech label', 'an optional description')
@enduml
```

