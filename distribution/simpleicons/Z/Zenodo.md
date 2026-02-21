# Zenodo


```text
simpleicons/Z/Zenodo
```

```text
include('simpleicons/Z/Zenodo')
```



| Illustration | Zenodo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zenodo.png) | ![illustration for Zenodo](../../simpleicons/Z/Zenodo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZenodoXs>`
- `<$ZenodoSm>`
- `<$ZenodoMd>`
- `<$ZenodoLg>`





## Zenodo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zenodo
include('simpleicons/Z/Zenodo')

' renders the element
Zenodo('Zenodo', 'Zenodo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zenodo
include('simpleicons/Z/Zenodo')

' renders the element
Zenodo('Zenodo', 'Zenodo', 'an optional tech label', 'an optional description')
@enduml
```

