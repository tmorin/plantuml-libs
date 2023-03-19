# Kaufland


```text
simpleicons-8/K/Kaufland
```

```text
include('simpleicons-8/K/Kaufland')
```



| Illustration | Kaufland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kaufland.png) | ![illustration for Kaufland](../../simpleicons-8/K/Kaufland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KauflandXs>`
- `<$KauflandSm>`
- `<$KauflandMd>`
- `<$KauflandLg>`





## Kaufland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kaufland
include('simpleicons-8/K/Kaufland')

' renders the element
Kaufland('Kaufland', 'Kaufland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kaufland
include('simpleicons-8/K/Kaufland')

' renders the element
Kaufland('Kaufland', 'Kaufland', 'an optional tech label', 'an optional description')
@enduml
```

