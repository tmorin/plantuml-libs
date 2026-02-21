# Envato


```text
simpleicons/E/Envato
```

```text
include('simpleicons/E/Envato')
```



| Illustration | Envato |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Envato.png) | ![illustration for Envato](../../simpleicons/E/Envato.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnvatoXs>`
- `<$EnvatoSm>`
- `<$EnvatoMd>`
- `<$EnvatoLg>`





## Envato

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Envato
include('simpleicons/E/Envato')

' renders the element
Envato('Envato', 'Envato', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Envato
include('simpleicons/E/Envato')

' renders the element
Envato('Envato', 'Envato', 'an optional tech label', 'an optional description')
@enduml
```

