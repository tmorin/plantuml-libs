# Scratch


```text
simpleicons-5/S/Scratch
```

```text
include('simpleicons-5/S/Scratch')
```



| Illustration | Scratch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scratch.png) | ![illustration for Scratch](../../simpleicons-5/S/Scratch.Local.png) |




## Scratch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scratch
include('simpleicons-5/S/Scratch')

' renders the element
Scratch('Scratch', 'Scratch', 'an optional tech label')
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

' loads the Item which embeds the element Scratch
include('simpleicons-5/S/Scratch')

' renders the element
Scratch('Scratch', 'Scratch', 'an optional tech label')
@enduml
```

