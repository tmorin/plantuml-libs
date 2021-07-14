# Motorola


```text
simpleicons-5/M/Motorola
```

```text
include('simpleicons-5/M/Motorola')
```



| Illustration | Motorola |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Motorola.png) | ![illustration for Motorola](../../simpleicons-5/M/Motorola.Local.png) |




## Motorola

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Motorola
include('simpleicons-5/M/Motorola')

' renders the element
Motorola('Motorola', 'Motorola', 'an optional tech label')
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

' loads the Item which embeds the element Motorola
include('simpleicons-5/M/Motorola')

' renders the element
Motorola('Motorola', 'Motorola', 'an optional tech label')
@enduml
```

