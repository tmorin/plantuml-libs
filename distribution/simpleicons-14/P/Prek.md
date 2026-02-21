# Prek


```text
simpleicons-14/P/Prek
```

```text
include('simpleicons-14/P/Prek')
```



| Illustration | Prek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Prek.png) | ![illustration for Prek](../../simpleicons-14/P/Prek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrekXs>`
- `<$PrekSm>`
- `<$PrekMd>`
- `<$PrekLg>`





## Prek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Prek
include('simpleicons-14/P/Prek')

' renders the element
Prek('Prek', 'Prek', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prek
include('simpleicons-14/P/Prek')

' renders the element
Prek('Prek', 'Prek', 'an optional tech label', 'an optional description')
@enduml
```

