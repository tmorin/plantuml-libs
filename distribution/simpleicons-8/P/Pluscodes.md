# Pluscodes


```text
simpleicons-8/P/Pluscodes
```

```text
include('simpleicons-8/P/Pluscodes')
```



| Illustration | Pluscodes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pluscodes.png) | ![illustration for Pluscodes](../../simpleicons-8/P/Pluscodes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PluscodesXs>`
- `<$PluscodesSm>`
- `<$PluscodesMd>`
- `<$PluscodesLg>`





## Pluscodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pluscodes
include('simpleicons-8/P/Pluscodes')

' renders the element
Pluscodes('Pluscodes', 'Pluscodes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pluscodes
include('simpleicons-8/P/Pluscodes')

' renders the element
Pluscodes('Pluscodes', 'Pluscodes', 'an optional tech label', 'an optional description')
@enduml
```

