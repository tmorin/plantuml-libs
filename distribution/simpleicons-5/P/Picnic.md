# Picnic


```text
simpleicons-5/P/Picnic
```

```text
include('simpleicons-5/P/Picnic')
```



| Illustration | Picnic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Picnic.png) | ![illustration for Picnic](../../simpleicons-5/P/Picnic.Local.png) |




## Picnic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Picnic
include('simpleicons-5/P/Picnic')

' renders the element
Picnic('Picnic', 'Picnic', 'an optional tech label')
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

' loads the Item which embeds the element Picnic
include('simpleicons-5/P/Picnic')

' renders the element
Picnic('Picnic', 'Picnic', 'an optional tech label')
@enduml
```

