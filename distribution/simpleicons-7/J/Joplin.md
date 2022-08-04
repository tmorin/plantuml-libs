# Joplin


```text
simpleicons-7/J/Joplin
```

```text
include('simpleicons-7/J/Joplin')
```



| Illustration | Joplin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Joplin.png) | ![illustration for Joplin](../../simpleicons-7/J/Joplin.Local.png) |




## Joplin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Joplin
include('simpleicons-7/J/Joplin')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Joplin
include('simpleicons-7/J/Joplin')

' renders the element
Joplin('Joplin', 'Joplin', 'an optional tech label', 'an optional description')
@enduml
```

