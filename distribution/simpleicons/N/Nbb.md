# Nbb


```text
simpleicons/N/Nbb
```

```text
include('simpleicons/N/Nbb')
```



| Illustration | Nbb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nbb.png) | ![illustration for Nbb](../../simpleicons/N/Nbb.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nbb
include('simpleicons/N/Nbb')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nbb
include('simpleicons/N/Nbb')

' renders the element
Nbb('Nbb', 'Nbb', 'an optional tech label', 'an optional description')
@enduml
```

