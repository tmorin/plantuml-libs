# Refine


```text
simpleicons-14/R/Refine
```

```text
include('simpleicons-14/R/Refine')
```



| Illustration | Refine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Refine.png) | ![illustration for Refine](../../simpleicons-14/R/Refine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RefineXs>`
- `<$RefineSm>`
- `<$RefineMd>`
- `<$RefineLg>`





## Refine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Refine
include('simpleicons-14/R/Refine')

' renders the element
Refine('Refine', 'Refine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Refine
include('simpleicons-14/R/Refine')

' renders the element
Refine('Refine', 'Refine', 'an optional tech label', 'an optional description')
@enduml
```

