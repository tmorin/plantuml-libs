# Readme


```text
simpleicons-14/R/Readme
```

```text
include('simpleicons-14/R/Readme')
```



| Illustration | Readme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Readme.png) | ![illustration for Readme](../../simpleicons-14/R/Readme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReadmeXs>`
- `<$ReadmeSm>`
- `<$ReadmeMd>`
- `<$ReadmeLg>`





## Readme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Readme
include('simpleicons-14/R/Readme')

' renders the element
Readme('Readme', 'Readme', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Readme
include('simpleicons-14/R/Readme')

' renders the element
Readme('Readme', 'Readme', 'an optional tech label', 'an optional description')
@enduml
```

