# Bose


```text
simpleicons-5/B/Bose
```

```text
include('simpleicons-5/B/Bose')
```



| Illustration | Bose |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bose.png) | ![illustration for Bose](../../simpleicons-5/B/Bose.Local.png) |




## Bose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bose
include('simpleicons-5/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label')
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

' loads the Item which embeds the element Bose
include('simpleicons-5/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label')
@enduml
```

