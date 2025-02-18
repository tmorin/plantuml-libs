# Joplin


```text
simpleicons-14/J/Joplin
```

```text
include('simpleicons-14/J/Joplin')
```



| Illustration | Joplin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Joplin.png) | ![illustration for Joplin](../../simpleicons-14/J/Joplin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JoplinXs>`
- `<$JoplinSm>`
- `<$JoplinMd>`
- `<$JoplinLg>`





## Joplin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Joplin
include('simpleicons-14/J/Joplin')

' renders the element
Joplin('Joplin', 'Joplin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Joplin
include('simpleicons-14/J/Joplin')

' renders the element
Joplin('Joplin', 'Joplin', 'an optional tech label', 'an optional description')
@enduml
```

