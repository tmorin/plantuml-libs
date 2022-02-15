# Scratch


```text
simpleicons-6/S/Scratch
```

```text
include('simpleicons-6/S/Scratch')
```



| Illustration | Scratch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Scratch.png) | ![illustration for Scratch](../../simpleicons-6/S/Scratch.Local.png) |




## Scratch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Scratch
include('simpleicons-6/S/Scratch')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Scratch
include('simpleicons-6/S/Scratch')

' renders the element
Scratch('Scratch', 'Scratch', 'an optional tech label')
@enduml
```

