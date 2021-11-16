# Obsidian


```text
simpleicons-5/O/Obsidian
```

```text
include('simpleicons-5/O/Obsidian')
```



| Illustration | Obsidian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Obsidian.png) | ![illustration for Obsidian](../../simpleicons-5/O/Obsidian.Local.png) |




## Obsidian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Obsidian
include('simpleicons-5/O/Obsidian')

' renders the element
Obsidian('Obsidian', 'Obsidian', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Obsidian
include('simpleicons-5/O/Obsidian')

' renders the element
Obsidian('Obsidian', 'Obsidian', 'an optional tech label')
@enduml
```

