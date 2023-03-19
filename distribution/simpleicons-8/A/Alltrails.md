# Alltrails


```text
simpleicons-8/A/Alltrails
```

```text
include('simpleicons-8/A/Alltrails')
```



| Illustration | Alltrails |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Alltrails.png) | ![illustration for Alltrails](../../simpleicons-8/A/Alltrails.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlltrailsXs>`
- `<$AlltrailsSm>`
- `<$AlltrailsMd>`
- `<$AlltrailsLg>`





## Alltrails

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alltrails
include('simpleicons-8/A/Alltrails')

' renders the element
Alltrails('Alltrails', 'Alltrails', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alltrails
include('simpleicons-8/A/Alltrails')

' renders the element
Alltrails('Alltrails', 'Alltrails', 'an optional tech label', 'an optional description')
@enduml
```

