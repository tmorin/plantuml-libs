# Macys


```text
simpleicons-8/M/Macys
```

```text
include('simpleicons-8/M/Macys')
```



| Illustration | Macys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Macys.png) | ![illustration for Macys](../../simpleicons-8/M/Macys.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MacysXs>`
- `<$MacysSm>`
- `<$MacysMd>`
- `<$MacysLg>`





## Macys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Macys
include('simpleicons-8/M/Macys')

' renders the element
Macys('Macys', 'Macys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Macys
include('simpleicons-8/M/Macys')

' renders the element
Macys('Macys', 'Macys', 'an optional tech label', 'an optional description')
@enduml
```

