# Discourse


```text
simpleicons-8/D/Discourse
```

```text
include('simpleicons-8/D/Discourse')
```



| Illustration | Discourse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Discourse.png) | ![illustration for Discourse](../../simpleicons-8/D/Discourse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiscourseXs>`
- `<$DiscourseSm>`
- `<$DiscourseMd>`
- `<$DiscourseLg>`





## Discourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Discourse
include('simpleicons-8/D/Discourse')

' renders the element
Discourse('Discourse', 'Discourse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Discourse
include('simpleicons-8/D/Discourse')

' renders the element
Discourse('Discourse', 'Discourse', 'an optional tech label', 'an optional description')
@enduml
```

