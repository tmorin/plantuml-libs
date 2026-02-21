# Rapid


```text
simpleicons-14/R/Rapid
```

```text
include('simpleicons-14/R/Rapid')
```



| Illustration | Rapid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rapid.png) | ![illustration for Rapid](../../simpleicons-14/R/Rapid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RapidXs>`
- `<$RapidSm>`
- `<$RapidMd>`
- `<$RapidLg>`





## Rapid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rapid
include('simpleicons-14/R/Rapid')

' renders the element
Rapid('Rapid', 'Rapid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rapid
include('simpleicons-14/R/Rapid')

' renders the element
Rapid('Rapid', 'Rapid', 'an optional tech label', 'an optional description')
@enduml
```

