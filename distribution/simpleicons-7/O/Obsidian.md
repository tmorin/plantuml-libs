# Obsidian


```text
simpleicons-7/O/Obsidian
```

```text
include('simpleicons-7/O/Obsidian')
```



| Illustration | Obsidian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Obsidian.png) | ![illustration for Obsidian](../../simpleicons-7/O/Obsidian.Local.png) |




## Obsidian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Obsidian
include('simpleicons-7/O/Obsidian')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Obsidian
include('simpleicons-7/O/Obsidian')

' renders the element
Obsidian('Obsidian', 'Obsidian', 'an optional tech label')
@enduml
```

