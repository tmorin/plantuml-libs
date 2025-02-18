# Nbb


```text
simpleicons-14/N/Nbb
```

```text
include('simpleicons-14/N/Nbb')
```



| Illustration | Nbb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nbb.png) | ![illustration for Nbb](../../simpleicons-14/N/Nbb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NbbXs>`
- `<$NbbSm>`
- `<$NbbMd>`
- `<$NbbLg>`





## Nbb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nbb
include('simpleicons-14/N/Nbb')

' renders the element
Nbb('Nbb', 'Nbb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nbb
include('simpleicons-14/N/Nbb')

' renders the element
Nbb('Nbb', 'Nbb', 'an optional tech label', 'an optional description')
@enduml
```

