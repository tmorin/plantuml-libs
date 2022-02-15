# Bitwig


```text
simpleicons-6/B/Bitwig
```

```text
include('simpleicons-6/B/Bitwig')
```



| Illustration | Bitwig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bitwig.png) | ![illustration for Bitwig](../../simpleicons-6/B/Bitwig.Local.png) |




## Bitwig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bitwig
include('simpleicons-6/B/Bitwig')

' renders the element
Bitwig('Bitwig', 'Bitwig', 'an optional tech label')
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

' loads the Item which embeds the element Bitwig
include('simpleicons-6/B/Bitwig')

' renders the element
Bitwig('Bitwig', 'Bitwig', 'an optional tech label')
@enduml
```

