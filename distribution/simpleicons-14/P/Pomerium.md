# Pomerium


```text
simpleicons-14/P/Pomerium
```

```text
include('simpleicons-14/P/Pomerium')
```



| Illustration | Pomerium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pomerium.png) | ![illustration for Pomerium](../../simpleicons-14/P/Pomerium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PomeriumXs>`
- `<$PomeriumSm>`
- `<$PomeriumMd>`
- `<$PomeriumLg>`





## Pomerium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pomerium
include('simpleicons-14/P/Pomerium')

' renders the element
Pomerium('Pomerium', 'Pomerium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pomerium
include('simpleicons-14/P/Pomerium')

' renders the element
Pomerium('Pomerium', 'Pomerium', 'an optional tech label', 'an optional description')
@enduml
```

