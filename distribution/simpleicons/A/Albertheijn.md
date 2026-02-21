# Albertheijn


```text
simpleicons/A/Albertheijn
```

```text
include('simpleicons/A/Albertheijn')
```



| Illustration | Albertheijn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Albertheijn.png) | ![illustration for Albertheijn](../../simpleicons/A/Albertheijn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlbertheijnXs>`
- `<$AlbertheijnSm>`
- `<$AlbertheijnMd>`
- `<$AlbertheijnLg>`





## Albertheijn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Albertheijn
include('simpleicons/A/Albertheijn')

' renders the element
Albertheijn('Albertheijn', 'Albertheijn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Albertheijn
include('simpleicons/A/Albertheijn')

' renders the element
Albertheijn('Albertheijn', 'Albertheijn', 'an optional tech label', 'an optional description')
@enduml
```

