# Morrisons


```text
simpleicons-6/M/Morrisons
```

```text
include('simpleicons-6/M/Morrisons')
```



| Illustration | Morrisons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Morrisons.png) | ![illustration for Morrisons](../../simpleicons-6/M/Morrisons.Local.png) |




## Morrisons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Morrisons
include('simpleicons-6/M/Morrisons')

' renders the element
Morrisons('Morrisons', 'Morrisons', 'an optional tech label')
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

' loads the Item which embeds the element Morrisons
include('simpleicons-6/M/Morrisons')

' renders the element
Morrisons('Morrisons', 'Morrisons', 'an optional tech label')
@enduml
```

