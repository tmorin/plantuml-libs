# Gitignoredotio


```text
simpleicons-8/G/Gitignoredotio
```

```text
include('simpleicons-8/G/Gitignoredotio')
```



| Illustration | Gitignoredotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitignoredotio.png) | ![illustration for Gitignoredotio](../../simpleicons-8/G/Gitignoredotio.Local.png) |




## Gitignoredotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitignoredotio
include('simpleicons-8/G/Gitignoredotio')

' renders the element
Gitignoredotio('Gitignoredotio', 'Gitignoredotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitignoredotio
include('simpleicons-8/G/Gitignoredotio')

' renders the element
Gitignoredotio('Gitignoredotio', 'Gitignoredotio', 'an optional tech label', 'an optional description')
@enduml
```

