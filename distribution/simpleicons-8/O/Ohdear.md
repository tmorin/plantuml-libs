# Ohdear


```text
simpleicons-8/O/Ohdear
```

```text
include('simpleicons-8/O/Ohdear')
```



| Illustration | Ohdear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Ohdear.png) | ![illustration for Ohdear](../../simpleicons-8/O/Ohdear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OhdearXs>`
- `<$OhdearSm>`
- `<$OhdearMd>`
- `<$OhdearLg>`





## Ohdear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ohdear
include('simpleicons-8/O/Ohdear')

' renders the element
Ohdear('Ohdear', 'Ohdear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ohdear
include('simpleicons-8/O/Ohdear')

' renders the element
Ohdear('Ohdear', 'Ohdear', 'an optional tech label', 'an optional description')
@enduml
```

