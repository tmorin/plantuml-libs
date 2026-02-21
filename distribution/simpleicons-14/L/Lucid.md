# Lucid


```text
simpleicons-14/L/Lucid
```

```text
include('simpleicons-14/L/Lucid')
```



| Illustration | Lucid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lucid.png) | ![illustration for Lucid](../../simpleicons-14/L/Lucid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LucidXs>`
- `<$LucidSm>`
- `<$LucidMd>`
- `<$LucidLg>`





## Lucid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lucid
include('simpleicons-14/L/Lucid')

' renders the element
Lucid('Lucid', 'Lucid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lucid
include('simpleicons-14/L/Lucid')

' renders the element
Lucid('Lucid', 'Lucid', 'an optional tech label', 'an optional description')
@enduml
```

