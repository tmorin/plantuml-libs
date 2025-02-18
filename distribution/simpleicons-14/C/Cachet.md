# Cachet


```text
simpleicons-14/C/Cachet
```

```text
include('simpleicons-14/C/Cachet')
```



| Illustration | Cachet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cachet.png) | ![illustration for Cachet](../../simpleicons-14/C/Cachet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CachetXs>`
- `<$CachetSm>`
- `<$CachetMd>`
- `<$CachetLg>`





## Cachet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cachet
include('simpleicons-14/C/Cachet')

' renders the element
Cachet('Cachet', 'Cachet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cachet
include('simpleicons-14/C/Cachet')

' renders the element
Cachet('Cachet', 'Cachet', 'an optional tech label', 'an optional description')
@enduml
```

