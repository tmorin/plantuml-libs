# Albertheijn


```text
simpleicons-6/A/Albertheijn
```

```text
include('simpleicons-6/A/Albertheijn')
```



| Illustration | Albertheijn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Albertheijn.png) | ![illustration for Albertheijn](../../simpleicons-6/A/Albertheijn.Local.png) |




## Albertheijn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Albertheijn
include('simpleicons-6/A/Albertheijn')

' renders the element
Albertheijn('Albertheijn', 'Albertheijn', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Albertheijn
include('simpleicons-6/A/Albertheijn')

' renders the element
Albertheijn('Albertheijn', 'Albertheijn', 'an optional tech label')
@enduml
```

