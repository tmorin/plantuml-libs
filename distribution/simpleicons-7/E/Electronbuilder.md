# Electronbuilder


```text
simpleicons-7/E/Electronbuilder
```

```text
include('simpleicons-7/E/Electronbuilder')
```



| Illustration | Electronbuilder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Electronbuilder.png) | ![illustration for Electronbuilder](../../simpleicons-7/E/Electronbuilder.Local.png) |




## Electronbuilder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Electronbuilder
include('simpleicons-7/E/Electronbuilder')

' renders the element
Electronbuilder('Electronbuilder', 'Electronbuilder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Electronbuilder
include('simpleicons-7/E/Electronbuilder')

' renders the element
Electronbuilder('Electronbuilder', 'Electronbuilder', 'an optional tech label', 'an optional description')
@enduml
```

