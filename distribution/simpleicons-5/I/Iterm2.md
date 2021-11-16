# Iterm2


```text
simpleicons-5/I/Iterm2
```

```text
include('simpleicons-5/I/Iterm2')
```



| Illustration | Iterm2 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Iterm2.png) | ![illustration for Iterm2](../../simpleicons-5/I/Iterm2.Local.png) |




## Iterm2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Iterm2
include('simpleicons-5/I/Iterm2')

' renders the element
Iterm2('Iterm2', 'Iterm2', 'an optional tech label')
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

' loads the Item which embeds the element Iterm2
include('simpleicons-5/I/Iterm2')

' renders the element
Iterm2('Iterm2', 'Iterm2', 'an optional tech label')
@enduml
```

